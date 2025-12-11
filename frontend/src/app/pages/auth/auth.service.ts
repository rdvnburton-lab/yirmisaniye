import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = '/api/auth'; // Proxy sayesinde tam adres yazmamıza gerek yok

  // Puanı anlık olarak tutmak ve yayınlamak için BehaviorSubject
  private userPointsSubject = new BehaviorSubject<number>(0);
  public userPoints$ = this.userPointsSubject.asObservable();

  // Profil resmini anlık olarak tutmak ve yayınlamak için signal
  public userProfileImage = signal<string>('assets/images/avatar-placeholder.png');

  constructor(private http: HttpClient, private router: Router) {
    // Servis ilk yüklendiğinde localStorage'dan puanı alıp yayınla
    const pointsStr = localStorage.getItem('points');
    const initialPoints = pointsStr ? parseInt(pointsStr, 10) : 0;
    this.userPointsSubject.next(initialPoints);
    this.userProfileImage.set(localStorage.getItem('profile_picture') || 'assets/images/avatar-placeholder.png');
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // Gelen token'ı localStorage'a kaydet
        if (response && response.token) {
          // Önce tüm eski verileri temizle
          this.clearUserData();
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('username', response.username); // Kullanıcı adını kaydet
          localStorage.setItem('email', credentials.email); // Email'i kaydet
          localStorage.setItem('points', response.points?.toString() || '0'); // Puanları kaydet
          localStorage.setItem('profile_picture', response.profile_picture || ''); // Profil resmini kaydet
          // Puan değişikliğini yayınla
          this.userPointsSubject.next(response.points || 0);
          this.userProfileImage.set(response.profile_picture || 'assets/images/avatar-placeholder.png');
        }
      })
    );
  }

  register(userData: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  changePassword(passwords: { currentPassword: string, newPassword: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password`, passwords);
  }

  private clearUserData(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('points');
    localStorage.removeItem('profile_picture');
  }

  logout() {
    this.userPointsSubject.next(0); // Çıkış yapıldığında puanı sıfırla
    this.userProfileImage.set('assets/images/avatar-placeholder.png'); // Profil resmini sıfırla
    this.clearUserData();
    this.router.navigate(['/login'], { state: { logoutSuccess: true } });
  }

  isAuthenticated(): boolean {
    // localStorage'da token olup olmadığını kontrol et
    const token = localStorage.getItem('authToken');
    // Token varsa true, yoksa false döndür.
    // Daha gelişmiş bir yapıda token'ın geçerlilik süresi de kontrol edilebilir.
    return !!token;
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  getEmail(): string | null {
    return localStorage.getItem('email');
  }

  getUserPoints(): number {
    const pointsStr = localStorage.getItem('points');
    return pointsStr ? parseInt(pointsStr, 10) : 0;
  }

  getUserProfileImage(): string {
    return localStorage.getItem('profile_picture') || 'assets/images/avatar-placeholder.png';
  }
   updateUserProfileImage(imagePath: string): void {
    localStorage.setItem('profile_picture', imagePath);
    // Optional: Notify other components of the change using a BehaviorSubject if needed.
    // For now, a page refresh will show the new avatar in the topbar.
  }

  updateUserPoints(newPoints: number): void {
    localStorage.setItem('points', newPoints.toString());
    this.userPointsSubject.next(newPoints);
  }
}
