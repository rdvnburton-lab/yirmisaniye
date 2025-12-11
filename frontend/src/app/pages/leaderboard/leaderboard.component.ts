import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, CardModule, TableModule, ProgressSpinnerModule, AvatarModule],
  templateUrl: './leaderboard.component.html',
styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  leaderboard: any[] = [];
  loading = true;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getLeaderboard().subscribe(data => {
      this.leaderboard = data;
      this.loading = false;
    });
  }

  getRankIcon(index: number): string {
    if (index === 0) return 'pi pi-crown text-yellow-500';
    if (index === 1) return 'pi pi-star-fill text-gray-400';
    if (index === 2) return 'pi pi-star text-orange-400';
    return '';
  }

  getRankIconClass(index: number): string {
    if (index === 0) return 'rank-gold';
    if (index === 1) return 'rank-silver';
    if (index === 2) return 'rank-bronze';
    return 'rank-default';
  }
}
