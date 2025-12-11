import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from './auth.service';
import { ToastModule } from 'primeng/toast'; // Import ToastModule
import { MessageService } from 'primeng/api';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? { passwordMismatch: true } : null;
};

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        IconFieldModule,
        InputIconModule,
        ReactiveFormsModule,
        RouterModule,
        ToastModule
    ],
     
})
export class RegisterComponent {

    registerForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {
        this.registerForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    register() {
        if (this.registerForm.invalid) {
            return;
        }

        const { confirmPassword, ...userData } = this.registerForm.value;

        this.authService.register(userData).subscribe({
            next: (response) => {
                this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: response.message + ' Giriş sayfasına yönlendiriliyorsunuz...' });
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 2000); // 2 saniye sonra yönlendir
            },
            error: (err) => {
                if (err.status === 400 && err.error?.message.includes('kullanılıyor')) {
                    if (err.error.message.includes('email')) {
                        this.registerForm.get('email')?.setErrors({ 'alreadyExists': true });
                    }
                    if (err.error.message.includes('kullanıcı adı')) {
                        this.registerForm.get('username')?.setErrors({ 'alreadyExists': true });
                    }
                }
                const detail = err.error?.message || 'Kayıt işlemi başarısız oldu. Lütfen tekrar deneyin.';
                this.messageService.add({ severity: 'error', summary: 'Hata', detail: detail });
            }
        });
    }
}