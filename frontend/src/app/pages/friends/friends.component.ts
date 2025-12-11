import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FriendsService, Friend, FriendRequest, PublicProfile } from '../../services/friends.service';
import { RouterModule } from '@angular/router'; // RouterModule import edildi
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, // RouterModule eklendi
    CardModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    ProgressSpinnerModule,
    ToastModule,
    BadgeModule,
    TooltipModule,
    ConfirmDialogModule,
    DividerModule,
    DialogModule
],
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class FriendsComponent implements OnInit {
  friends: Friend[] = [];
  requests: FriendRequest[] = [];
  usernameToAdd: string = '';
  loadingFriends = true;
  loadingRequests = true;

  displayProfileDialog = false;
  selectedProfile: PublicProfile | null = null;
  loadingProfile = false;

  constructor(
    private friendsService: FriendsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadFriends();
    this.loadRequests();
  }

  loadFriends(): void {
    this.loadingFriends = true;
    this.friendsService.getFriends().subscribe({
      next: (data) => {
        this.friends = data;
        this.loadingFriends = false;
      },
      error: () => {
        this.loadingFriends = false;
        this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'Arkadaşlar yüklenemedi.' });
      }
    });
  }

  loadRequests(): void {
    this.loadingRequests = true;
    this.friendsService.getFriendRequests().subscribe({
      next: (data) => {
        this.requests = data;
        this.loadingRequests = false;
      },
      error: () => {
        this.loadingRequests = false;
        this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'İstekler yüklenemedi.' });
      }
    });
  }

  sendRequest(): void {
    if (!this.usernameToAdd.trim()) return;

    this.friendsService.sendFriendRequest(this.usernameToAdd).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: res.message });
        this.usernameToAdd = '';
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Hata', detail: err.error.message || 'İstek gönderilemedi.' });
      }
    });
  }

  respondToRequest(requestId: number, action: 'accept' | 'reject'): void {
    this.friendsService.respondToRequest(requestId, action).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: res.message });
        // Listeleri yenile
        this.loadRequests();
        if (action === 'accept') {
          this.loadFriends();
        }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Hata', detail: err.error.message || 'İşlem gerçekleştirilemedi.' });
      }
    });
  }

  confirmSendRequest(event: Event): void {
    if (!this.usernameToAdd.trim()) return;

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `"${this.usernameToAdd}" adlı kullanıcıya arkadaşlık isteği göndermek istediğine emin misin?`,
      header: 'İsteği Onayla',
      icon: 'pi pi-send',
      acceptLabel: 'Evet, Gönder',
      rejectLabel: 'Hayır',
      accept: () => this.sendRequest()
    });
  }

  confirmRemoveFriend(event: Event, friend: Friend): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `"${friend.username}" artık arkadaşın olmayacak ve bu onu üzebilir. Yine de arkadaşlıktan çıkarmak istediğine emin misin?`,
      header: 'Emin misin?',
      icon: 'pi pi-heart-broken',
      acceptLabel: 'Evet, Çıkar',
      rejectLabel: 'Hayır',
      accept: () => {
        this.removeFriend(friend.id);
      }
    });
  }

  private removeFriend(friendId: number): void {
    this.friendsService.removeFriend(friendId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: res.message });
        this.loadFriends(); // Arkadaş listesini yenile
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Hata', detail: err.error.message || 'Arkadaş silinemedi.' })
    });
  }

  showUserProfile(username: string): void {
    this.loadingProfile = true;
    this.displayProfileDialog = true;
    this.selectedProfile = null; // Önceki profili temizle

    this.friendsService.getUserProfile(username).subscribe({
      next: (data) => {
        this.selectedProfile = data;
        this.loadingProfile = false;
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Hata', detail: err.error.message || 'Profil yüklenemedi.' });
        this.loadingProfile = false;
        this.displayProfileDialog = false;
      }
    });
  }

  sendRequestFromModal(): void {
    if (!this.selectedProfile?.user.username) return;

    this.friendsService.sendFriendRequest(this.selectedProfile.user.username).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: res.message });
        if (this.selectedProfile) this.selectedProfile.friendshipStatus = 'pending';
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Hata', detail: err.error.message || 'İstek gönderilemedi.' });
      }
    });
  }
}