import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel'; // Kayan etiket için eklendi
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AuthService } from './auth.service';
import { ToastModule } from 'primeng/toast'; // Import ToastModule
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-custom-login',
    templateUrl: './custom-login.component.html',
    styleUrls: ['./custom-login.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        PasswordModule,
        FloatLabelModule, // Import edildi
        InputIconModule,
        IconFieldModule,
        ReactiveFormsModule,
        RouterModule, // routerLink direktifinin çalışması için eklendi
        ToastModule
    ],

})
export class CustomLoginComponent implements OnInit {

    loginForm: FormGroup;
    loginError = false; // Hata durumunu takip etmek için eklendi

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            rememberMe: [false]
        });

        // Kullanıcı input alanlarına tekrar yazmaya başladığında hata durumunu sıfırla
        this.loginForm.valueChanges.subscribe(() => {
            if (this.loginError) this.loginError = false;
        });
    }
    ngOnInit(): void {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            this.loginForm.patchValue({
                email: rememberedEmail,
                rememberMe: true
            });
        }

        const state = history.state as { logoutSuccess?: boolean };
        if (state?.logoutSuccess) {
            this.messageService.add({ severity: 'info', summary: 'Bilgi', detail: 'Başarıyla çıkış yaptınız.' });
            // Tarayıcı geçmişindeki state'i temizleyerek mesajın tekrar görünmesini engelle
            history.replaceState({ ...history.state, logoutSuccess: false }, '');
        }
    }


    login() {
        if (this.loginForm.invalid) {
            this.loginError = true; // Form geçersizse de hata durumunu aktif et
            return;
        }

        this.authService.login(this.loginForm.value).subscribe({
            next: (response) => {
                if (this.loginForm.value.rememberMe) {
                    localStorage.setItem('rememberedEmail', this.loginForm.value.email);
                } else {
                    localStorage.removeItem('rememberedEmail');
                }
                this.router.navigate(['/app/dashboard'], { state: { loginSuccess: true, username: response.username } });
            },
            error: (err) => {
                this.loginError = true; // Giriş başarısız olduğunda hata durumunu aktif et
                const detail = err.error?.message || 'Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.';
                this.messageService.add({ severity: 'error', summary: 'Hata', detail: detail });
            }
        });
    }
}
