import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../service/layout.service';
import { AuthService } from '../../pages/auth/auth.service';
import { RippleModule } from 'primeng/ripple';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-topbar',
    standalone: true,
     styleUrls: ['./app.topbar.scss'],
    imports: [RouterModule, CommonModule, StyleClassModule, RippleModule, NgOptimizedImage], // BadgeModule eklendi
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" [routerLink]="isAuthenticated() ? '/app/dashboard' : '/'">
                <img ngSrc="assets/images/tigin_logo_min.png" alt="logo" class="h-8" width="50" height="32">
            </a>
        </div>

        <div class="layout-topbar-actions">
            <!-- Puan Göstergesi -->
            <div class="topbar-item points-display">
                <i class="pi pi-star-fill text-yellow-500"></i>
                <span class="font-bold ml-2">{{ userPoints$ | async }}</span>
            </div>

            <!-- Profil ve Çıkış Butonları -->
            <button type="button" class="layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <div class="flex items-center gap-2"> 
                    <img [src]="authService.userProfileImage()" alt="profile" class="w-8 h-8 rounded-full" width="32" height="32">
                    <div class="flex-col items-start hidden md:flex">
                        <span class="font-bold text-sm">{{ username }}</span>
                        <span class="text-sm text-surface-500 dark:text-surface-400">User</span>
                    </div>
                </div>
            </button>
            <div class="flex-col p-4 hidden absolute right-0 top-13 bg-surface-0 dark:bg-surface-900 w-60 origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)] rounded-border">
                <button type="button" routerLink="/app/profile" (click)="onProfileClick()" class="flex items-center p-2 w-full rounded-border text-left hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-200">
                    <i class="pi pi-user mr-2"></i> 
                    <span class="font-semibold">Profile</span>
                </button>
                <hr class="my-2 border-surface-200 dark:border-surface-700" />
                <button (click)="requestLogout($event)" type="button" class="flex items-center p-2 w-full rounded-border text-left hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-200">
                    <i class="pi pi-power-off mr-2"></i>
                    <span class="font-semibold">Sign Out</span>
                </button>
            </div>
        </div>
    </div>`
})
export class AppTopbar {
    layoutService = inject(LayoutService);
    authService = inject(AuthService);
    username: string | null = null;
    userPoints$: Observable<number>;

    constructor() {
        this.userPoints$ = this.authService.userPoints$;
        this.username = this.authService.getUsername();
    }


    logout() {
        this.authService.logout();
    }

    requestLogout(event: Event) {
        this.layoutService.requestLogout({ event });
    }

    onProfileClick() {
        this.layoutService.hideMenu();
    }

    isAuthenticated(): boolean {
        return this.authService.isAuthenticated();
    }
}
