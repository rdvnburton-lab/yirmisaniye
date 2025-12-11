import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizService, QuizHistory } from '../../services/quiz.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressBarModule } from 'primeng/progressbar';
import { FilterService } from 'primeng/api';

@Component({
  selector: 'app-quiz-history',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, TagModule, CardModule, SkeletonModule, ProgressBarModule],
  templateUrl: './quiz-history.component.html',
  providers: [FilterService]
})
export class QuizHistoryComponent implements OnInit {
  history: QuizHistory[] = [];
  loading = true;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.getQuizHistory().subscribe(data => {
      this.history = data;
      this.loading = false;
    });
  }

  viewDetails(quizId: number): void {
    this.router.navigate(['/app/history', quizId]);
  }

  getSeverity(difficulty: string): any {
    switch (difficulty) {
      case 'easy': return 'success';
      case 'medium': return 'warning';
      case 'hard': return 'danger';
      default: return 'info';
    }
  }

  calculatePercentage(score: number, total: number): number {
    if (total === 0) {
      return 0;
    }
    return Math.round((score / total) * 100);
  }
}
