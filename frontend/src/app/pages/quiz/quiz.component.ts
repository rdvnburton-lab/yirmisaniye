import { Component, OnDestroy, OnInit, Renderer2, ElementRef, QueryList, ViewChildren, RendererStyleFlags2 } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http'; // HttpErrorResponse buraya taşındı
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService, Subject, Topic, PreviousPerformanceEntry } from '../../services/quiz.service'; // PreviousPerformanceEntry import yolu düzeltildi
import { Question, Option } from '../../models/quiz.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
// import { ToggleSwitch } from 'primeng/toggleswitch'; // Kullanılmadığı için kaldırıldı
import { KnobModule } from 'primeng/knob';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider'; // p-divider için gerekli modül
import { MenuItem, MessageService, FilterService } from 'primeng/api';
import confetti from 'canvas-confetti';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    SelectButtonModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    NgIf, // NgIf'i import etmeyi unutmuşuz
    StepsModule,
    ToastModule,
    KnobModule,
    ProgressBarModule,
    TooltipModule,
    DividerModule // Buraya ekledik
],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [FilterService],
})
export class QuizComponent implements OnInit, OnDestroy {
  // DOM elementlerine erişim için
  @ViewChildren('optionCard') optionCards!: QueryList<ElementRef>;

  private readonly QUIZ_STATE_KEY = 'activeQuizState';

  // State to be saved
  private get quizState(): object {
    return {
      quizId: this.quizId,
      questions: this.questions,
      currentQuestionIndex: this.currentQuestionIndex,
      isTimedQuiz: this.isTimedQuiz,
      userAnswers: this.userAnswers,
    };
  }
  // Görünüm yönetimi
  currentView: 'subject' | 'topic' | 'settings' | 'confirm' | 'quiz' | 'results' = 'subject';
  subjects: Subject[] = [];
  topics: Topic[] = [];
  selectedSubject: Subject | null = null;
  selectedTopics: Topic[] = [];
  difficulties = [
    { name: 'Kolay', value: 'easy', icon: 'pi pi-face-smile', color: 'var(--local-green-500)' },
    { name: 'Orta', value: 'medium', icon: 'pi pi-sun', color: 'var(--local-yellow-500)' },
    { name: 'Zor', value: 'hard', icon: 'pi pi-bolt', color: 'var(--local-red-500)' }
  ];
  selectedDifficulty: { name: string; value: string; icon: string; color: string; } | null = null; // Başlangıçta seçim yok
  isTimedQuiz: boolean = false;
  quizStarted = false;

  // Quiz phase
  questions: Question[] = [];
  currentQuestionIndex = 0;
  selectedOptionId: number | null = null;
  quizId: number | null = null;
  userAnswers: { questionId: number, optionId: number | null, timeTaken: number, attempts: number }[] = [];
  currentQuizTopicIds: number[] = []; // Mevcut quiz'in konu ID'lerini tutar
  quizFinished = false;
  score = 0;
  correctAnswersCount = 0;
  wrongAnswersCount = 0;
  successPercentage = 0;
  showReview = false;
  loading = true;
  error: string | null = null;

  // Timer properties
  private timer: any;
  readonly questionTime: number = 20; // Her soru için 20 saniye
  timeLeft: number = this.questionTime;
  timeUp = false; // Sürenin dolup dolmadığını tutar
  answerSubmitted = false; // Cevabın gönderilip gönderilmediğini tutar
  previouslySelectedWrongOptions: Set<number> = new Set(); // Yanlış seçilen seçeneklerin ID'lerini tutar
  wrongAttempts = 0; // Yanlış cevap deneme sayısını tutar

  // Anlık Puanlama için
  currentScore = 0;
  correctStreak = 0;
  showComboAnimation = false;
  
  // Önceki performans için (PreviousPerformanceEntry tipini kullan)
  previousPerformance: PreviousPerformanceEntry[] = [];
  previousCorrectCount = 0;
  previousWrongCount = 0;

  constructor(
    private quizService: QuizService,
    private messageService: MessageService,
    private route: ActivatedRoute, // ActivatedRoute eklendi
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router
  , private authService: AuthService) {}

  get selectedTopicsText(): string {
    if (!this.selectedTopics || this.selectedTopics.length === 0) {
      return '';
    }
    return this.selectedTopics.map(t => t.topic_name).join(', ');
  }

  ngOnInit(): void {
    // Eğer dashboard'dan bir yönlendirme yoksa, yarım kalan bir quiz var mı diye kontrol et
    this.loadState();
    if (!this.quizStarted) { // Yarım kalan quiz yoksa, normal akışa devam et
      this.loading = true;
      this.quizService.getSubjects().subscribe(data => {
        this.subjects = this.enrichSubjectsWithIcons(data);
        this.loading = false;

        // Dersler yüklendikten sonra Dashboard'dan gelen yönlendirmeyi işle
        const navigation = this.router.getCurrentNavigation();
        const state = navigation?.extras.state as { preselectedSubject?: Subject };
        if (state?.preselectedSubject) {
          // Gelen dersin tam objesini subjects listesinden bul
          const subjectToSelect = this.subjects.find(s => s.subject_id === state.preselectedSubject?.subject_id);
          if (subjectToSelect) {
            this.selectSubject(subjectToSelect);
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    // Component'ten ayrılırken (ama quiz bitmediyse) durumu kaydet
    if (this.quizStarted && !this.quizFinished) {
      this.saveState();
    }
  }

  private enrichSubjectsWithIcons(subjects: Subject[]): Subject[] {
    return subjects.map(subject => {
      // Veritabanından gelen ikonu kullanmadan önce boşluk karakterlerinden arındır
      const dbIcon = subject.icon ? subject.icon.trim() : '';
      if (!dbIcon) { // Eğer arındırıldıktan sonra boşsa, varsayılan ikonu kullan
        subject.icon = this.getIconForSubject(subject.subject_name);
      } else {
        subject.icon = dbIcon; // Veritabanından gelen ikonu kullan
      }
      return subject;
    });
  }

  public getIconForSubject(subjectName: string, returnColor: boolean = false): string {
    const name = subjectName.toLocaleLowerCase('tr-TR');
    if (name.includes('matematik')) {
      return returnColor ? '#FF6B6B' : 'pi pi-calculator';
    }
    if (name.includes('türkçe')) {
      return returnColor ? '#b762f0ff' : 'pi pi-book';
    }
    if (name.includes('fen bilimleri')) {
      return returnColor ? '#45B7D1' : 'pi pi-globe';
    }
    if (name.includes('hayat bilgisi')) {
      return returnColor ? '#4ECDC4' : 'pi pi-compass';
    }
    // Varsayılan değerler
    return returnColor ? 'var(--primary-color)' : 'pi pi-question-circle';
  }

  private saveState(): void {
    sessionStorage.setItem(this.QUIZ_STATE_KEY, JSON.stringify(this.quizState));
  }

  private loadState(): void {
    const savedState = sessionStorage.getItem(this.QUIZ_STATE_KEY);
    if (savedState) {
      const state = JSON.parse(savedState);
      this.quizId = state.quizId;
      this.questions = state.questions;
      this.currentQuestionIndex = state.currentQuestionIndex;
      this.userAnswers = state.userAnswers;
      this.isTimedQuiz = state.isTimedQuiz;
      this.quizStarted = true;
      this.loading = false;
      // Yarım kalan quiz yüklendiğinde de mevcut sorunun şıklarını karıştır
      if (this.questions.length > 0) {
        this.shuffleCurrentQuestionOptions();
      }
      if (this.isTimedQuiz) {
        this.startTimer();
      }
    }
  }

  onSubjectChange(): void {
    this.topics = [];
    this.selectedTopics = [];
    if (this.selectedSubject) {
      this.quizService.getTopics(this.selectedSubject.subject_id).subscribe(data => {
        this.topics = data; 
      });
    }
  }

  startQuiz(): void {
    if (!this.selectedSubject || this.selectedTopics.length === 0 || !this.selectedDifficulty) return;

    this.loading = true;
    this.quizStarted = true;
    const topicIds = this.selectedTopics.map(t => t.topic_id);
    this.currentQuizTopicIds = topicIds; // Konu ID'lerini kaydet
    this.quizService.getQuestions(this.selectedSubject.subject_id, topicIds, this.isTimedQuiz, this.selectedDifficulty.value).subscribe({
      next: (response) => {
        this.quizId = response.quizId; // Quiz ID'yi sakla
        this.questions = response.questions; // Sadece soruları ata
        this.saveState(); // Quiz başladığında durumu hemen kaydet
        if (this.isTimedQuiz) {
          this.startTimer();
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Sorular yüklenirken hata oluştu:', err);
        this.error = err.error?.message || 'Sorular yüklenemedi. Lütfen tekrar deneyin.';
        this.quizStarted = false; // Quiz'in başlamadığını belirt
        sessionStorage.removeItem(this.QUIZ_STATE_KEY); // Hata durumunda kaydedilmiş durumu temizle
        this.loading = false;
      }
    });
  }

  initiateQuiz(): void {
    this.startQuiz();
  }

  selectSubject(subject: Subject): void {
    this.selectedSubject = subject;
    this.onSubjectChange();
    this.currentView = 'topic';
  }

  resetQuizSelection(): void {
    this.selectedSubject = null;
    this.selectedTopics = [];
    this.topics = [];
    this.selectedDifficulty = null; // Zorluk seçimini de sıfırla
    this.currentView = 'subject';
  }

  toggleTopicSelection(topic: Topic): void {
    const index = this.selectedTopics.findIndex(t => t.topic_id === topic.topic_id);
    if (index > -1) {
      // Konu zaten seçili, listeden çıkar
      this.selectedTopics.splice(index, 1);
    } else {
      // Konu seçili değil, listeye ekle
      this.selectedTopics.push(topic);
    }
  }

  isTopicSelected(topic: Topic): boolean {
    return this.selectedTopics.some(t => t.topic_id === topic.topic_id);
  }

  getTopicIcon(topic: Topic): string {
    const isPrimeIcon = topic.icon && topic.icon.startsWith('pi ');
    // Return a string of classes, which ngClass can handle directly.
    return isPrimeIcon ? `pi ${topic.icon}` : 'pi pi-tag';
  }

  selectOption(optionId: number): void {
    // Eğer cevap zaten kilitlendiyse veya süre dolduysa hiçbir şey yapma
    if (this.answerSubmitted) return;

    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.selectedOptionId = optionId;

    // Cevap doğruysa
    const isCorrect = optionId === currentQuestion.correctOptionId;
    if (isCorrect) {
      this.previouslySelectedWrongOptions.clear(); // Doğru cevap bulunduğunda önceki yanlışları temizle
      this.answerSubmitted = true;
      this.stopTimer();
      this.updateOptionStyles(); // Stilleri uygula
      this.fireConfetti(); // Doğru cevapta konfeti ateşle
      // Otomatik geçiş kaldırıldı. Kullanıcı "Sonraki Soru" butonuna basacak.
      this.playSound('click.mp3');

      // Puanlama Mantığı
      this.correctStreak++;
      let pointsEarned = 0;
      if (this.wrongAttempts === 0) { // İlk deneme
        pointsEarned = 10;
      } else { // İkinci deneme
        pointsEarned = 5;
      }
      this.currentScore += pointsEarned;

      // Kombo bonusu
      if (this.correctStreak > 0 && this.correctStreak % 3 === 0) {
        this.currentScore += 5;
        // Animasyonu tetikle
        this.showComboAnimation = true;
        setTimeout(() => {
          this.showComboAnimation = false;
        }, 2000); // Animasyon süresiyle aynı olmalı
      }
    } else {
      // Cevap yanlışsa
      this.wrongAttempts++;
      this.previouslySelectedWrongOptions.add(optionId); // Yanlış seçimi sete ekle
      this.playSound('wrong.mp3');
      if (this.wrongAttempts >= 2) { // İkinci yanlış denemeden sonra kilitle
        this.answerSubmitted = true;
        this.stopTimer();
      }
      this.updateOptionStyles(); // Stilleri uygula (her yanlışta)

      // Puanlama Mantığı
      this.correctStreak = 0; // Seri bozuldu
    }
  }

  private updateOptionStyles(): void {
    const correctOptionId = this.questions[this.currentQuestionIndex].correctOptionId;

    this.optionCards.forEach((card: ElementRef, index: number) => {
      const cardElement = card.nativeElement;
      const optionId = this.questions[this.currentQuestionIndex].options[index].id;

      // Önce animasyon sınıflarını temizle
      this.renderer.removeClass(cardElement, 'correct-answer');
      this.renderer.removeClass(cardElement, 'wrong-answer');

      // Varsayılan renklere dön
      this.renderer.removeStyle(cardElement, 'background-color');
      this.renderer.removeStyle(cardElement, 'border-color');

      if (this.answerSubmitted) { // Cevap kilitliyse
        if (optionId === correctOptionId) {
          this.renderer.setStyle(cardElement, 'background-color', 'var(--local-green-100)', RendererStyleFlags2.Important);
          this.renderer.setStyle(cardElement, 'border-color', 'var(--local-green-500)', RendererStyleFlags2.Important);
          this.renderer.addClass(cardElement, 'correct-answer');
        } else if (this.previouslySelectedWrongOptions.has(optionId)) {
          this.renderer.setStyle(cardElement, 'background-color', 'var(--local-red-100)', RendererStyleFlags2.Important);
          this.renderer.setStyle(cardElement, 'border-color', 'var(--local-red-500)', RendererStyleFlags2.Important);
          this.renderer.addClass(cardElement, 'wrong-answer');
        }
      } else { // Cevap kilitli değilse (ikinci şans)
        if (this.previouslySelectedWrongOptions.has(optionId)) {
          this.renderer.setStyle(cardElement, 'background-color', 'var(--local-red-100)', RendererStyleFlags2.Important);
          this.renderer.setStyle(cardElement, 'border-color', 'var(--local-red-500)', RendererStyleFlags2.Important);
          this.renderer.addClass(cardElement, 'wrong-answer');
        }
      }
    });
  }

  nextQuestion(): void {
    const timeTaken = this.isTimedQuiz ? this.questionTime - this.timeLeft : 0;

    this.stopTimer();

    const attempts = this.wrongAttempts + (this.selectedOptionId !== null && this.questions[this.currentQuestionIndex].correctOptionId === this.selectedOptionId ? 1 : 0);
    // Kullanıcının cevabını kaydet
    this.userAnswers.push({
      questionId: this.questions[this.currentQuestionIndex].id,
      optionId: this.selectedOptionId, // Süre dolduysa null olacak
      timeTaken: timeTaken,
      attempts: attempts > 0 ? attempts : 1 // En az 1 deneme yapılmıştır
    });

    // Bir sonraki soruya geç
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.shuffleCurrentQuestionOptions(); // Yeni sorunun şıklarını karıştır
      this.saveState(); // Her sorudan sonra durumu kaydet
      this.answerSubmitted = false; // Yeni soru için cevap durumunu sıfırla
      this.timeUp = false; // Yeni soru için süreyi sıfırla
      this.wrongAttempts = 0; // Yanlış deneme sayısını sıfırla
      this.previouslySelectedWrongOptions.clear(); // Önceki yanlışları temizle
      this.selectedOptionId = null; // Seçimi sıfırla
      if (this.isTimedQuiz) {
        // Yeni soruya geçmeden önce stilleri temizle
        this.optionCards.forEach((card: ElementRef) => {
          const cardElement = card.nativeElement;
          // Renkleri ve sınıfları temizle
          this.renderer.removeStyle(cardElement, 'background-color');
          this.renderer.removeStyle(cardElement, 'border-color');
          this.renderer.removeClass(cardElement, 'correct-answer');
          this.renderer.removeClass(cardElement, 'wrong-answer');
        });
        this.resetTimer();
        this.startTimer();
      }
    } else {
      // Quiz bitti
      this.finishQuiz();
    }
  }
  
  private shuffleCurrentQuestionOptions(): void {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion && currentQuestion.options) {
      // Fisher-Yates shuffle algoritması
      for (let i = currentQuestion.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentQuestion.options[i], currentQuestion.options[j]] = [currentQuestion.options[j], currentQuestion.options[i]];
      }
    }
  }

  private finishQuiz(): void {
    // quizId'nin null olmadığından emin ol
    if (this.quizId === null) {
      this.error = 'Quiz ID bulunamadı. Lütfen tekrar deneyin.';
      this.loading = false;
      return;
    }
    this.loading = true; // Skor hesaplanırken yükleniyor göster
    sessionStorage.removeItem(this.QUIZ_STATE_KEY); // Quiz bittiği için kaydedilmiş durumu temizle
    this.quizService.submitAnswers(this.quizId, this.userAnswers).subscribe({
      next: (result) => {
        // Puanı AuthService üzerinden güncelle
        this.authService.updateUserPoints(result.new_total_points);

        this.score = result.score;

        // Doğru ve yanlış cevap sayılarını hesapla
        this.correctAnswersCount = this.userAnswers.filter(answer => {
          const question = this.questions.find(q => q.id === answer.questionId);
          return question && answer.optionId === question.correctOptionId;
        }).length;
        this.wrongAnswersCount = this.questions.length - this.correctAnswersCount;

        // Başarı yüzdesini, doğru cevap sayısına göre hesapla
        const numQuestions = this.questions.length;
        const finalPercentage = numQuestions > 0 ? Math.ceil((this.correctAnswersCount / numQuestions) * 100) : 0;

        // Yüzde gösterimini kaldıracağımız için bu animasyonu da kaldırabiliriz.
        this.quizFinished = true;
        this.successPercentage = Math.min(finalPercentage, 100); // Oranın 100'ü geçmediğinden emin ol

        // Yüzde değerini animasyonlu bir şekilde artır
        let currentPercentage = 0;
        const interval = setInterval(() => {
          if (currentPercentage < finalPercentage) {
            currentPercentage++;
            this.successPercentage = currentPercentage;
          } else {
            clearInterval(interval);
          }
        }, 15); // Animasyon hızı

        this.loading = false;

        // Önceki performans verilerini getir
        this.getPreviousPerformance();
      },
      error: (err) => {
        console.error('Skor hesaplanırken hata:', err);
        this.error = 'Skorunuz hesaplanamadı. Lütfen tekrar deneyin.';
        this.loading = false;
      }
    });
  }

  private getPreviousPerformance(): void {
    if (!this.selectedSubject || !this.quizId) return;

    this.quizService.getPreviousPerformance(this.selectedSubject.subject_id, this.quizId).subscribe({
      next: (data: PreviousPerformanceEntry[]) => { // data'ya tip atandı
        this.previousPerformance = data;
        this.previousCorrectCount = data.reduce((sum, entry) => sum + entry.correct_count, 0); // correct_count'ları topla
        this.previousWrongCount = data.reduce((sum, entry) => sum + entry.wrong_count, 0); // wrong_count'ları topla
      },
      error: (err: HttpErrorResponse) => { // err'ye tip atandı
        console.error('Önceki performans verileri getirilirken hata:', err.error?.message || err.message);
        // Hata durumunda boş bırakabiliriz veya kullanıcıya bilgi verebiliriz.
        this.previousPerformance = [];
      }
    });
  }

  shareOn(platform: string): void {
    const shareText = `Yirmisaniye quizinde ${this.score} puan aldım! Sen de bu heyecana katıl!`;
    const appUrl = window.location.origin; // Gets the base URL like 'http://localhost:4200'
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(appUrl)}`;
        break;
      case 'facebook':
        // Facebook'un 'quote' parametresi mobil cihazlarda her zaman çalışmayabilir.
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + appUrl)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  }


  getAnswerForQuestion(questionId: number): { userAnswerText: string, isCorrect: boolean } {
    const question = this.questions.find(q => q.id === questionId);
    const userAnswer = this.userAnswers.find(a => a.questionId === questionId);
    if (!question || !userAnswer || userAnswer.optionId === null) return { userAnswerText: 'Cevaplanmadı', isCorrect: false };
    return { userAnswerText: question.options[userAnswer.optionId].option_text, isCorrect: userAnswer.optionId === question.correctOptionId };
  }
  showHint(): void {
    const hint = this.questions[this.currentQuestionIndex].hint;
    if (hint) {
      this.messageService.add({ severity: 'info', summary: 'İpucu', detail: hint, life: 5000 });
    }
  }

  resetQuiz(): void {
    // Eğer quiz bitmediyse ve resetleniyorsa, durumu temizle
    if (this.quizStarted && !this.quizFinished) {
      // Burada backend'e haber verip yarım kalan quiz'i iptal etme mantığı eklenebilir.
      // Şimdilik sadece sessionStorage'ı temizliyoruz.
    }

    sessionStorage.removeItem(this.QUIZ_STATE_KEY); // Tekrar oynamadan önce durumu temizle
    // Quiz durumunu sıfırla
    this.quizStarted = false;
    this.quizFinished = false;
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.score = 0;
    this.correctAnswersCount = 0;
    this.wrongAnswersCount = 0;
    this.successPercentage = 0;
    this.showReview = false;
    this.error = null;
    this.timeUp = false;
    this.answerSubmitted = false;
    this.wrongAttempts = 0;
    this.previouslySelectedWrongOptions.clear(); // Önceki yanlışları temizle
    this.stopTimer();
    this.loading = false;
    this.currentScore = 0;
    this.correctStreak = 0;
    this.showComboAnimation = false;
    this.previousPerformance = [];
    this.previousCorrectCount = 0;
    this.previousWrongCount = 0;

    // Seçim durumunu sıfırla
    this.loading = true; // Set loading to true to show spinner while subjects are fetched
    this.quizService.getSubjects().subscribe(data => {
      this.subjects = this.enrichSubjectsWithIcons(data);
      this.loading = false;
    });
    this.selectedSubject = null;
    this.selectedTopics = [];
    this.selectedDifficulty = null; // Zorluk seçimini sıfırla
    this.currentView = 'subject';
    this.topics = [];

    // `ngOnInit` zaten dersleri yüklü tuttuğu için tekrar çağırmaya gerek yok.
  }

  private playSound(fileName: string): void {
    try {
      const audio = new Audio(`assets/audio/${fileName}`); // Ses dosyasının yolu
      audio.play();
    } catch (error) {
      console.error(`Ses dosyası (${fileName}) çalınırken hata oluştu:`, error);
    }
  }

  private fireConfetti(): void {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 1051, // p-toast'un z-index'i genellikle 1050'dir, konfetinin üstte görünmesi için.
    });
  }

  private startTimer(): void {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
        this.timeUp = true;
        this.answerSubmitted = true; // Süre dolduğunda da cevap gönderilmiş sayılır
        // Artık doğru cevap ID'si backend'den geliyor.
        // this.selectedOptionId = this.questions[currentQuestionIndex].correctOptionId; // Bu satır kaldırıldı
        // this.selectedOptionId = this.questions[currentQuestionIndex].correctOptionId; // Bu satır kaldırıldı
        // Kullanıcının sonraki soruya geçmesi için butonu aktif hale getiriyoruz.
      }
    }, 1000);
  }

  private stopTimer(): void {
    clearInterval(this.timer);
  }

  private resetTimer(): void {
    this.timeLeft = this.questionTime;
  }
}
