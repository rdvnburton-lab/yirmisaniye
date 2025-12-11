import { Component, OnInit, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { QuizService, ProfileStats } from '../../services/quiz.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectButtonModule } from 'primeng/selectbutton';
import { LayoutService } from '../../layout/service/layout.service';
import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { $t, updatePreset, updateSurfacePalette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';

const presets = {
    Aura,
    Lara,
    Nora
} as const;

declare type KeyOfType<T> = keyof T extends infer U ? U : never;

declare type SurfacesType = {
    name?: string;
    palette?: {
        [key: string]: string;
    };
};

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const newPassword = control.get('newPassword');
    const confirmNewPassword = control.get('confirmNewPassword');
    return newPassword && confirmNewPassword && newPassword.value !== confirmNewPassword.value ? { passwordMismatch: true } : null;
};

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule, CardModule, ButtonModule, AvatarModule, ReactiveFormsModule, PasswordModule,
    DialogModule, InputTextModule, IconFieldModule, InputIconModule, SelectButtonModule,
    FormsModule, ChartModule, ProgressSpinnerModule, ProgressBarModule, TagModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string | null = '';
  email: string | null = '';
  profileImage: string = '';
  passwordForm: FormGroup;
  editProfileForm: FormGroup;
  displayEditDialog = false;
  stats: ProfileStats | null = null;
  chartData: any;
  chartOptions: any;
  loading = true;
  userPoints: number = 0;
  userTotalScore: number = 0;
  spentPoints: number = 0;

  // Tema Ayarları için eklenenler
  layoutService: LayoutService = inject(LayoutService);
  presets = Object.keys(presets);

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private quizService: QuizService
  ) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });

    this.editProfileForm = this.fb.group({
        username: ['', Validators.required],
        email: [{ value: '', disabled: true }, [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.profileImage = this.authService.getUserProfileImage();
    this.email = this.authService.getEmail();
    // Başlangıçta localStorage'dan al, sonra API'den gelenle güncelle
    this.userPoints = this.authService.getUserPoints();
    // total_score ve spentPoints başlangıçta 0 olabilir, API'den sonra güncellenecek.


    if (typeof document !== 'undefined') {
        this.onPresetChange(this.layoutService.layoutConfig().preset);
    }

    this.quizService.getProfileStats().subscribe({
      next: (data: ProfileStats) => {
        this.stats = data;
        // API'den gelen güncel puanları ata
        this.userTotalScore = data.total_score;
        this.userPoints = this.authService.getUserPoints(); // Harcanabilir puanı AuthService'den al
        this.spentPoints = this.userTotalScore - this.userPoints;
        this.setupPerformanceChart(data);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
      }
    });
    // Profil bilgileri yüklendiğinde loading'i false yap
    this.loading = false;
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
    if (!data.performance_over_time || data.performance_over_time.length === 0) {
      this.chartData = {};
      this.chartOptions = {};
      return;
    }

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: data.performance_over_time.map(d => new Date(d.quiz_date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })),
      datasets: [
        {
          label: 'Günlük Puan',
          data: data.performance_over_time.map(d => d.daily_score),
          fill: false,
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          tension: 0.4,
          backgroundColor: documentStyle.getPropertyValue('--primary-500') + '20'
        }
      ]
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.9,
      plugins: {
        legend: {
          display: false
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

  showEditDialog() {
    this.editProfileForm.patchValue({
        username: this.username,
        email: this.email
    });
    this.displayEditDialog = true;
  }

  changePassword() {
    if (this.passwordForm.invalid) {
      return;
    }

    const passwords = {
      currentPassword: this.passwordForm.value.currentPassword,
      newPassword: this.passwordForm.value.newPassword
    };

    this.authService.changePassword(passwords).subscribe({
      next: (response) => {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: response.message });
        this.passwordForm.reset();
      },
      error: (err) => {
        const detail = err.error?.message || 'Şifre değiştirilemedi.';
        this.messageService.add({ severity: 'error', summary: 'Hata', detail: detail });
      }
    });
  }

  updateProfile() {
    if (this.editProfileForm.invalid) {
        return;
    }

    // This is where you would call a new service method, e.g., this.authService.updateProfile(...)
    console.log('Updating profile with:', this.editProfileForm.value);

    // For demonstration, we'll just update the local values and localStorage
    const { username, email } = this.editProfileForm.value;
    this.username = username;
    this.email = email;
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Profiliniz güncellendi.' });
    this.displayEditDialog = false;

    // We should also update the topbar
    // A more robust solution would use a shared state management service (like NgRx or a simple BehaviorSubject)
    // For now, a page reload will show the new name in the topbar.
  }

  // --- Tema Ayarları Metotları ---

  surfaces: SurfacesType[] = [
    { name: 'slate', palette: { '0': '#ffffff', '50': '#f8fafc', '100': '#f1f5f9', '200': '#e2e8f0', '300': '#cbd5e1', '400': '#94a3b8', '500': '#64748b', '600': '#475569', '700': '#334155', '800': '#1e293b', '900': '#0f172a', '950': '#020617' } },
    { name: 'gray', palette: { '0': '#ffffff', '50': '#f9fafb', '100': '#f3f4f6', '200': '#e5e7eb', '300': '#d1d5db', '400': '#9ca3af', '500': '#6b7280', '600': '#4b5563', '700': '#374151', '800': '#1f2937', '900': '#111827', '950': '#030712' } },
    { name: 'zinc', palette: { '0': '#ffffff', '50': '#fafafa', '100': '#f4f4f5', '200': '#e4e4e7', '300': '#d4d4d8', '400': '#a1a1aa', '500': '#71717a', '600': '#52525b', '700': '#3f3f46', '800': '#27272a', '900': '#18181b', '950': '#09090b' } },
    { name: 'neutral', palette: { '0': '#ffffff', '50': '#fafafa', '100': '#f5f5f5', '200': '#e5e5e5', '300': '#d4d4d4', '400': '#a3a3a3', '500': '#737373', '600': '#525252', '700': '#404040', '800': '#262626', '900': '#171717', '950': '#0a0a0a' } },
    { name: 'stone', palette: { '0': '#ffffff', '50': '#fafaf9', '100': '#f5f5f4', '200': '#e7e5e4', '300': '#d6d3d1', '400': '#a8a29e', '500': '#78716c', '600': '#57534e', '700': '#44403c', '800': '#292524', '900': '#1c1917', '950': '#0c0a09' } },
  ];

  selectedPrimaryColor = computed(() => this.layoutService.layoutConfig().primary);
  selectedSurfaceColor = computed(() => this.layoutService.layoutConfig().surface);
  selectedPreset = computed(() => this.layoutService.layoutConfig().preset);

  primaryColors = computed<SurfacesType[]>(() => {
    const presetPalette = presets[this.layoutService.layoutConfig().preset as KeyOfType<typeof presets>].primitive;
    const colors = ['emerald', 'green', 'lime', 'orange', 'amber', 'yellow', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
    const palettes: SurfacesType[] = [{ name: 'noir', palette: {} }];
    colors.forEach((color) => {
        palettes.push({
            name: color,
            palette: presetPalette?.[color as KeyOfType<typeof presetPalette>] as SurfacesType['palette']
        });
    });
    return palettes;
  });

  getPresetExt() {
    const color: SurfacesType = this.primaryColors().find((c) => c.name === this.selectedPrimaryColor()) || {};
    const preset = this.layoutService.layoutConfig().preset;
    if (color.name === 'noir') {
        return { semantic: { primary: { 50: '{surface.50}', 100: '{surface.100}', 200: '{surface.200}', 300: '{surface.300}', 400: '{surface.400}', 500: '{surface.500}', 600: '{surface.600}', 700: '{surface.700}', 800: '{surface.800}', 900: '{surface.900}', 950: '{surface.950}' }, colorScheme: { light: { primary: { color: '{primary.950}', contrastColor: '#ffffff', hoverColor: '{primary.800}', activeColor: '{primary.700}' }, highlight: { background: '{primary.950}', focusBackground: '{primary.700}', color: '#ffffff', focusColor: '#ffffff' } }, dark: { primary: { color: '{primary.50}', contrastColor: '{primary.950}', hoverColor: '{primary.200}', activeColor: '{primary.300}' }, highlight: { background: '{primary.50}', focusBackground: '{primary.300}', color: '{primary.950}', focusColor: '{primary.950}' } } } } };
    } else {
        if (preset === 'Nora') {
            return { semantic: { primary: color.palette, colorScheme: { light: { primary: { color: '{primary.600}', contrastColor: '#ffffff', hoverColor: '{primary.700}', activeColor: '{primary.800}' }, highlight: { background: '{primary.600}', focusBackground: '{primary.700}', color: '#ffffff', focusColor: '#ffffff' } }, dark: { primary: { color: '{primary.500}', contrastColor: '{surface.900}', hoverColor: '{primary.400}', activeColor: '{primary.300}' }, highlight: { background: '{primary.500}', focusBackground: '{primary.400}', color: '{surface.900}', focusColor: '{surface.900}' } } } } };
        } else {
            return { semantic: { primary: color.palette, colorScheme: { light: { primary: { color: '{primary.500}', contrastColor: '#ffffff', hoverColor: '{primary.600}', activeColor: '{primary.700}' }, highlight: { background: '{primary.50}', focusBackground: '{primary.100}', color: '{primary.700}', focusColor: '{primary.800}' } }, dark: { primary: { color: '{primary.400}', contrastColor: '{surface.900}', hoverColor: '{primary.300}', activeColor: '{primary.200}' }, highlight: { background: 'color-mix(in srgb, {primary.400}, transparent 84%)', focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)', color: 'rgba(255,255,255,.87)', focusColor: 'rgba(255,255,255,.87)' } } } } };
        }
    }
  }

  updateColors(event: any, type: string, color: any) {
    if (type === 'primary') {
        this.layoutService.layoutConfig.update((state) => ({ ...state, primary: color.name }));
    } else if (type === 'surface') {
        this.layoutService.layoutConfig.update((state) => ({ ...state, surface: color.name }));
    }
    this.applyTheme(type, color);
    event.stopPropagation();
  }

  applyTheme(type: string, color: any) {
    if (type === 'primary') {
        updatePreset(this.getPresetExt());
    } else if (type === 'surface') {
        updateSurfacePalette(color.palette);
    }
  }

  onPresetChange(event: any) {
    this.layoutService.layoutConfig.update((state) => ({ ...state, preset: event }));
    const preset = presets[event as KeyOfType<typeof presets>];
    const surfacePalette = this.surfaces.find((s) => s.name === this.selectedSurfaceColor())?.palette;
    $t().preset(preset).preset(this.getPresetExt()).surfacePalette(surfacePalette).use({ useDefaultOptions: true });
  }
}