import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService, ProfileStats } from '../../services/quiz.service';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { DividerModule } from "primeng/divider";

@Component({
  selector: 'app-quiz-stats',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ChartModule,
    ProgressBarModule,
    TooltipModule,
    ProgressSpinnerModule,
    TagModule,
    DividerModule
],
  templateUrl: './quiz-stats.component.html',
  styleUrls: ['./quiz-stats.component.scss'] // Yeni SCSS dosyası eklendi
})
export class QuizStatsComponent implements OnInit {
  loading = true;
  error: string | null = null;
  stats: ProfileStats | null = null;

  performanceChartData: any;
  performanceChartOptions: any;

  difficultyChartData: any;
  difficultyChartOptions: any;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getProfileStats().subscribe({
      next: (data: ProfileStats) => {
        this.stats = data;
        // CSS değişkenlerinin yüklenmesi için kısa bir gecikme ekliyoruz.
        setTimeout(() => {
          this.setupPerformanceChart(data);
          this.setupDifficultyChart(data);
          this.loading = false;
        });
      },
      error: (err) => {
        this.error = 'İstatistikler yüklenirken bir hata oluştu.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  getDifficultyTagSeverity(difficulty: string): 'success' | 'warn' | 'danger' | 'info' {
    switch (difficulty) {
      case 'easy': return 'success';
      case 'medium': return 'warn';
      case 'hard': return 'danger';
      default: return 'info';
    }
  }

  private setupPerformanceChart(data: ProfileStats): void {
    // Eğer performance_over_time boşsa, grafiği göstermemek için boş bir dizi döndür
    if (!data.performance_over_time || data.performance_over_time.length === 0) {
      this.performanceChartData = {};
      this.performanceChartOptions = {};
      return;
    }

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    let surfaceBorder = documentStyle.getPropertyValue('--surface-border').trim();
    let primaryColor = documentStyle.getPropertyValue('--primary-500').trim(); // Boşlukları temizle

    // Fallback in case the CSS variable is not ready
    if (!primaryColor) {
        primaryColor = '#3B82F6'; // Default to a blue color
    }
    if (!surfaceBorder) {
        surfaceBorder = '#dee2e6'; // Default to a light gray
    }


    // Create a gradient for the line chart background
    const ctx = document.createElement('canvas').getContext('2d');
    let gradient = null;
    if (ctx) {
        gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, primaryColor + '4D'); // 30% opacity
        gradient.addColorStop(1, primaryColor + '00'); // 0% opacity (transparent)
    }

    this.performanceChartData = {
      labels: data.performance_over_time.map(p => new Date(p.quiz_date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })),
      datasets: [
        {
          label: 'Günlük Puan',
          data: data.performance_over_time.map(p => p.daily_score),
          fill: true,
          borderColor: primaryColor,
          tension: 0.4,
          backgroundColor: gradient || (primaryColor + '20')
        }
      ]
    };

    this.performanceChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.9,
      plugins: {
        legend: {
          display: false,
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }

  private setupDifficultyChart(data: ProfileStats): void {
    if (!data.performance_by_difficulty || data.performance_by_difficulty.length === 0) {
      this.difficultyChartData = null;
      return;
    }

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    let greenColor = documentStyle.getPropertyValue('--green-500').trim();
    let yellowColor = documentStyle.getPropertyValue('--yellow-500').trim();
    let redColor = documentStyle.getPropertyValue('--red-500').trim();

    if (!greenColor) greenColor = '#4CAF50';
    if (!yellowColor) yellowColor = '#FFC107';
    if (!redColor) redColor = '#F44336';


    this.difficultyChartData = {
      labels: data.performance_by_difficulty.map(d => d.difficulty.charAt(0).toUpperCase() + d.difficulty.slice(1)),
      datasets: [
        {
          data: data.performance_by_difficulty.map(d => d.correct_count),
          backgroundColor: [
            greenColor,
            yellowColor,
            redColor
          ]
        }
      ]
    };

    this.difficultyChartOptions = {
        cutout: '60%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: textColor }
            }
        }
    };
  }
}
