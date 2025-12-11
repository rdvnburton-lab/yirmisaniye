import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsService, Avatar, Badge } from '../../services/collections.service';
import { AuthService } from '../auth/auth.service';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ProgressSpinnerModule,
    TooltipModule,
    ToastModule,
    RippleModule
  ],
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  providers: [MessageService]
})
export class CollectionsComponent implements OnInit {
  avatars: Avatar[] = [];
  badges: Badge[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private collectionsService: CollectionsService,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadMyItems();
  }

  loadMyItems(): void {
    this.loading = true;
    this.collectionsService.getMyItems().subscribe({
      next: (data) => {
        this.avatars = data.avatars;
        this.badges = data.badges;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Koleksiyonlar yüklenirken bir hata oluştu.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  selectAvatar(avatar: Avatar): void {
    if (this.authService.userProfileImage() === avatar.image_path) {
      return; // Zaten seçili olan avatara tekrar tıklanırsa işlem yapma
    }

    this.collectionsService.selectAvatar(avatar.id).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: res.message });
        // AuthService ve localStorage'daki profil resmini güncelle
        this.authService.updateUserProfileImage(res.image_path);
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Hata', detail: err.error.message || 'Avatar seçilemedi.' });
      }
    });
  }

  isAvatarSelected(avatar: Avatar): boolean {
    return this.authService.userProfileImage() === avatar.image_path;
  }
}