import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';
import { CustomLoginComponent } from './app/pages/auth/custom-login.component';
import { RegisterComponent } from './app/pages/auth/register.component';
import { authGuard } from './app/pages/auth/auth.guard';
import { ProfileComponent } from './app/pages/profile/profile.component';


export const appRoutes: Routes = [
    // 1. Herkese açık, layout kullanmayan sayfalar.
    { path: 'login', component: CustomLoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'notfound', component: Notfound },

    // 2. Korumalı ve ana layout'u kullanan sayfalar.
    //    Bu rota artık boş yola değil, 'app' gibi özel bir yola bağlanacak.
    {
        path: 'app',
        component: AppLayout,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', loadComponent: () => import('./app/pages/dashboard/dashboard').then(m => m.Dashboard) },
            { path: 'profile', component: ProfileComponent },
            { 
                path: 'quiz', 
                loadComponent: () => import('./app/pages/quiz/quiz.component').then(m => m.QuizComponent) 
            }, 
            { path: 'quiz-stats', loadComponent: () => import('./app/pages/quiz-stats/quiz-stats.component').then(m => m.QuizStatsComponent) }, 
            { path: 'history', loadComponent: () => import('./app/pages/quiz-history/quiz-history.component').then(m => m.QuizHistoryComponent) }, 
            { path: 'history/:quizId', loadComponent: () => import('./app/pages/quiz-detail/quiz-detail.component').then(m => m.QuizDetailComponent) },
           { path: 'leaderboard', loadComponent: () => import('./app/pages/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent) },
           { path: 'friends', loadComponent: () => import('./app/pages/friends/friends.component').then(m => m.FriendsComponent) }, // Bu satır zaten doğru, sorun başka yerde olabilir.
           { path: 'collections', loadComponent: () => import('./app/pages/collections/collections.component').then(m => m.CollectionsComponent) },
           { path: 'store', loadComponent: () => import('./app/pages/store/store.component').then(m => m.StoreComponent) },
           { path: 'user/:username', loadComponent: () => import('./app/pages/user-profile/user-profile.component').then(m => m.UserProfileComponent) },
            // /app yoluna gelindiğinde varsayılan olarak dashboard'a yönlendir.
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
            
        ]
    },

    // 3. Uygulama ilk açıldığında ('') /login'e yönlendir.
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // 4. Hiçbir rotayla eşleşmezse notfound sayfasına yönlendir.
    { path: '**', redirectTo: '/notfound' }
];
