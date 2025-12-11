import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    layoutService = inject(LayoutService);

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Anasayfa', icon: 'pi pi-fw pi-home', routerLink: ['/app/dashboard'] },
                    { label: 'Yeni Quiz Başlat', icon: 'pi pi-fw pi-play', routerLink: ['/app/quiz'] },
                    { label: 'Quiz Geçmişim', icon: 'pi pi-fw pi-history', routerLink: ['/app/history'] },
                    // YENİ EKLENEN SATIRLAR
                    { 
                        label: 'İstatistiklerim', 
                        icon: 'pi pi-fw pi-chart-bar', 
                        routerLink: ['/app/quiz-stats'] 
                    },
                    { 
                        label: 'Liderlik Tablosu', 
                        icon: 'pi pi-fw pi-trophy', 
                        routerLink: ['/app/leaderboard'] 
                    }
                ]
            },
             {
                label: 'Sosyal',
                items: [
                    { label: 'Arkadaşlarım', icon: 'pi pi-fw pi-users', routerLink: ['/app/friends'] },
                    { label: 'Mağaza', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['/app/store'] }
                ]
            },
            {
                label: 'Kullanıcı',
                items: [
                    { label: 'Profilim', icon: 'pi pi-fw pi-user', routerLink: ['/app/profile'] },
                    { label: 'Koleksiyonum', icon: 'pi pi-fw pi-box', routerLink: ['/app/collections'] },
                    { label: 'Çıkış Yap', icon: 'pi pi-fw pi-sign-out', command: (event) => this.layoutService.requestLogout({ event: event.originalEvent as Event }) }
                ]
            }
        ];
    }
}
