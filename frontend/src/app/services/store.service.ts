import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StoreAvatar {
  id: number;
  name: string;
  image_path: string;
  cost: number;
}

export interface CartItem extends StoreAvatar {}

export interface Order {
  id: number;
  user_id: number;
  total_cost: number;
  status: 'preparing' | 'ready_for_delivery' | 'delivered';
  order_date: string;
  delivery_date: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private storeApiUrl = '/api/store';

  constructor(private http: HttpClient) { }

  getAvatars(): Observable<StoreAvatar[]> {
    return this.http.get<StoreAvatar[]>(`${this.storeApiUrl}/avatars`);
  }

  getCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.storeApiUrl}/cart`);
  }

  addToCart(itemId: number, itemType: 'avatar'): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.storeApiUrl}/cart`, { itemId, itemType });
  }

  removeFromCart(itemId: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.storeApiUrl}/cart/${itemId}`);
  }

  checkout(): Observable<{ message: string, newPoints: number }> {
    return this.http.post<{ message: string, newPoints: number }>(`${this.storeApiUrl}/checkout`, {});
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.storeApiUrl}/orders`);
  }
}