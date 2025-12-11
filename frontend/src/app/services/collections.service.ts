import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Avatar {
  id: number;
  name: string;
  image_path: string;
}

export interface Badge {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface MyItemsResponse {
  avatars: Avatar[];
  badges: Badge[];
}

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  private collectionsApiUrl = '/api/collections';

  constructor(private http: HttpClient) { }

  getMyItems(): Observable<MyItemsResponse> {
    return this.http.get<MyItemsResponse>(`${this.collectionsApiUrl}/my-items`);
  }

  selectAvatar(avatarId: number): Observable<{ message: string, image_path: string }> {
    return this.http.put<{ message: string, image_path: string }>(`${this.collectionsApiUrl}/select-avatar`, { avatarId });
  }
}