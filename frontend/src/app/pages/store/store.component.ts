import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService, StoreAvatar, CartItem } from '../../services/store.service';
import { AuthService } from '../auth/auth.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
    TooltipModule,
    ToastModule,
    RippleModule,
    DividerModule
  ],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [MessageService]
})
export class StoreComponent implements OnInit {
  storeAvatars: StoreAvatar[] = [];
  cartItems: CartItem[] = [];
  loadingStore = true;
  loadingCart = true;
  userPoints: number = 0;
  private pointsSubscription: Subscription | undefined;

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.pointsSubscription = this.authService.userPoints$.subscribe(points => {
      this.userPoints = points;
    });
    this.loadStoreAvatars();
    this.loadCart();
  }

  loadStoreAvatars(): void {
    this.loadingStore = true;
    this.storeService.getAvatars().subscribe(data => {
      this.storeAvatars = data;
      this.loadingStore = false;
    });
  }

  ngOnDestroy(): void {
    if (this.pointsSubscription) {
      this.pointsSubscription.unsubscribe();
    }
  }

  loadCart(): void {
    this.loadingCart = true;
    this.storeService.getCart().subscribe(data => {
      this.cartItems = data;
      this.loadingCart = false;
    });
  }

  addToCart(avatar: StoreAvatar): void {
    this.storeService.addToCart(avatar.id, 'avatar').subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: res.message });
        this.loadCart(); // Refresh cart
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Hata', detail: err.error.message || 'Ürün eklenemedi.' })
    });
  }

  removeFromCart(itemId: number): void {
    this.storeService.removeFromCart(itemId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'info', summary: 'Kaldırıldı', detail: res.message });
        this.loadCart(); // Refresh cart
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Hata', detail: err.error.message || 'Ürün kaldırılamadı.' })
    });
  }

  get cartTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.cost, 0);
  }

  checkout(): void {
    this.storeService.checkout().subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Sipariş Alındı!', detail: res.message, life: 5000 });
        this.userPoints = res.newPoints;
        this.authService.updateUserPoints(res.newPoints); // AuthService üzerinden puanı güncelle
        this.cartItems = []; // Clear cart on frontend
      },
      error: (err) => this.messageService.add({ severity: 'error', summary: 'Hata', detail: err.error.message || 'Sipariş verilemedi.' })
    });
  }

  isItemInCart(itemId: number): boolean {
    return this.cartItems.some(item => item.id === itemId);
  }
}