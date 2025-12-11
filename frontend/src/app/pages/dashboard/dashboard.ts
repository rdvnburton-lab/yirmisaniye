import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        CardModule,
        ButtonModule,
        RippleModule
    ],
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.scss']
})
export class Dashboard {

    categories = [
        { id: 1, name: 'Matematik', icon: 'pi-calculator', color: '#FF6B6B', slug: 'math' },
        { id: 3, name: 'Hayat Bilgisi', icon: 'pi-compass', color: '#4ECDC4', slug: 'life-science' },
        { id: 4, name: 'Fen Bilimleri', icon: 'pi-bolt', color: '#45B7D1', slug: 'science' },
        { id: 2, name: 'Türkçe', icon: 'pi-book', color: '#b762f0ff', slug: 'turkish' }
    ];

    constructor(
        private router: Router
    ) {}

    startQuiz() {
        // "Hemen Başla" butonu kullanıcıyı doğrudan quiz başlangıç ekranına yönlendirir.
        this.router.navigate(['/app/quiz']);
    }

    startCategoryQuiz(category: { id: number, name: string, icon: string, slug: string }) {
        // Seçilen ders bilgisini state olarak quiz sayfasına gönderiyoruz.
        this.router.navigate(['/app/quiz'], {
            state: {
                preselectedSubject: {
                    subject_id: category.id,
                    subject_name: category.name,
                    icon: category.icon
                }
            }
        });
    }
}
