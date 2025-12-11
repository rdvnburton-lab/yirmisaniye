import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Friend {
  id: number;
  username: string;
  profile_picture: string | null;
}

export interface FriendRequest {
  id: number; // Bu, friendship tablosundaki ID'dir
  username: string;
  profile_picture: string | null;
}

export interface PublicProfile {
  user: {
    id: number;
    username: string;
    profile_picture: string | null;
    created_at: string;
  };
  stats: {
    quizzes_completed: number;
    total_score: number;
  };
  friendshipStatus: 'pending' | 'accepted' | 'rejected' | 'blocked' | 'none' | 'self';
}

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  private friendsApiUrl = '/api/friends';
  private usersApiUrl = '/api/users';

  constructor(private http: HttpClient) { }

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(`${this.friendsApiUrl}/`);
  }

  getFriendRequests(): Observable<FriendRequest[]> {
    return this.http.get<FriendRequest[]>(`${this.friendsApiUrl}/requests`);
  }

  sendFriendRequest(username: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.friendsApiUrl}/request`, { username });
  }

  respondToRequest(requestId: number, action: 'accept' | 'reject'): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.friendsApiUrl}/request/${requestId}`, { action });
  }

  removeFriend(friendId: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.friendsApiUrl}/${friendId}`);
  }

  getUserProfile(username: string): Observable<PublicProfile> {
    return this.http.get<PublicProfile>(`${this.usersApiUrl}/profile/${username}`);
  }
}