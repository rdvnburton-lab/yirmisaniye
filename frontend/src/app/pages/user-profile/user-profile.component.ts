import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendsService, PublicProfile } from '../../services/friends.service';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from "primeng/divider";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    AvatarModule,
    ButtonModule,
    ProgressSpinnerModule,
    ToastModule,
    DividerModule
],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [MessageService]
})
export class UserProfileComponent implements OnInit {
  profile: PublicProfile | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private friendsService: FriendsService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const username = params.get('username');
      if (username) {
        this.loadUserProfile(username);
      } else {
        this.router.navigate(['/app/dashboard']);
      }
    });
  }

  loadUserProfile(username: string): void {
    this.loading = true;
    this.error = null;
    this.friendsService.getUserProfile(username).subscribe({
      next: (data) => {
        this.profile = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error.message || 'Profil yüklenirken bir hata oluştu.';
        this.loading = false;
      }
    });
  }

  sendRequest(): void {
    if (!this.profile?.user.username) return;
    this.friendsService.sendFriendRequest(this.profile.user.username).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: res.message });
        if (this.profile) this.profile.friendshipStatus = 'pending';
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Hata', detail: err.error.message || 'İstek gönderilemedi.' });
      }
    });
  }
}