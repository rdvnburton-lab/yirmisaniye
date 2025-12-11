import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuizService, QuizDetail } from '../../services/quiz.service';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-quiz-detail',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, ButtonModule, RouterLink],
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent implements OnInit {
  details: QuizDetail[] = [];
  loading = true;
  quizId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('quizId');
    if (id) {
      this.quizId = +id;
      this.quizService.getQuizDetails(this.quizId).subscribe(data => {
        this.details = data;
        this.loading = false;
      });
    }
  }
}
