import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { QuizQuestionsResponse } from '../models/quiz.model';

export interface Subject {
  subject_id: number;
  subject_name: string;
  icon?: string;
}

export interface Topic {
  topic_id: number;
  topic_name: string;
  icon?: string;
}

export interface SubmitResponse {
  score: number;
  total: number;
  detailedResults: any[];
  comboBonuses: number[];
  new_total_points: number;
}

export interface QuizHistory {
  quiz_id: number;
  difficulty: string;
  created_at: string;
  score: number;
  total_questions: number;
  subject_name: string;
  topic_name: string;
}

export interface QuizDetail {
  log_id: number;
  question_text: string;
  user_answer: string;
  correct_answer: string;
  is_correct: boolean;
  time_taken: number;
}

export interface PreviousPerformanceEntry {
  quiz_id: number;
  created_at: string;
  correct_count: number;
  wrong_count: number;
  topic_names: string;
  topic_icons: string[]; // Yeni alan
}

export interface PerformanceByDifficulty {
  difficulty: 'easy' | 'medium' | 'hard';
  total_answered: number;
  correct_count: number;
  total_points: number;
}

export interface BestTopic {
  topic_name: string;
  subject_name: string;
  subject_icon: string;
  success_rate: number;
}

export interface ProfileStats {
  quizzes_completed: number;
  total_score: number;
  total_questions_answered: number;
  total_correct_answers: number;
  total_wrong_answers: number; // Eksik alan eklendi
  average_score_per_quiz: number; // Eksik alan eklendi
  overall_success_rate: number;
  performance_over_time: { quiz_date: string; daily_score: number }[];
  performance_by_difficulty: PerformanceByDifficulty[];
  best_topics: BestTopic[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // Nginx bu isteği backend'e yönlendirecek
  private apiUrl = '/api/quiz';

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiUrl}/subjects`);
  }

  getTopics(subjectId: number): Observable<Topic[]> {
    const params = new HttpParams().set('subjectId', subjectId.toString());
    return this.http.get<Topic[]>(`${this.apiUrl}/topics`, { params });
  }

  /**
   * Backend'den quiz sorularını getirir.
   * Token, AuthInterceptor tarafından otomatik olarak eklenecektir.
   */
  getQuestions(subjectId: number, topicIds: number[], isTimed: boolean, difficulty: string): Observable<QuizQuestionsResponse> {
    let params = new HttpParams()
      .set('subjectId', subjectId.toString())
      .set('isTimed', isTimed.toString())
      .set('difficulty', difficulty)
      .set('topicIds', topicIds.join(',')); // Diziyi virgülle ayrılmış string'e çevir
    return this.http.get<QuizQuestionsResponse>(`${this.apiUrl}/questions`, { params });
  }

  /**
   * Kullanıcının cevaplarını backend'e gönderir ve skoru alır.
   * @param answers Kullanıcının cevapları
   */
  submitAnswers(quizId: number, answers: { questionId: number, optionId: number | null, timeTaken: number, attempts: number }[]): Observable<SubmitResponse> {
    return this.http.post<SubmitResponse>(`${this.apiUrl}/submit`, { quizId, answers });
  }

  getQuizHistory(): Observable<QuizHistory[]> {
    return this.http.get<QuizHistory[]>(`${this.apiUrl}/history`);
  }

  getQuizDetails(quizId: number): Observable<QuizDetail[]> {
    return this.http.get<QuizDetail[]>(`${this.apiUrl}/history/${quizId}`);
  }
  getWrongTopicStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats/wrong-topics`);
}

  getLeaderboard(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/leaderboard`);
  }

  getProfileStats(): Observable<ProfileStats> {
    return this.http.get<ProfileStats>(`${this.apiUrl}/profile-stats`);
  }

  getDailyChallenge(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/daily-challenge`);
  }

  getPreviousPerformance(subjectId: number, currentQuizId: number): Observable<PreviousPerformanceEntry[]> {
    const params = new HttpParams()
      .set('subjectId', subjectId.toString())
      .set('currentQuizId', currentQuizId.toString());
    return this.http.get<PreviousPerformanceEntry[]>(`${this.apiUrl}/previous-performance`, { params });
  }
}
