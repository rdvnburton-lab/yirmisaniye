import {
  Router
} from "./chunk-DFW2EA2F.js";
import {
  HttpClient
} from "./chunk-5QUT4BWV.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IXE337CY.js";

// src/app/pages/auth/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  apiUrl = "/api/auth";
  // Proxy sayesinde tam adres yazmamıza gerek yok
  // Puanı anlık olarak tutmak ve yayınlamak için BehaviorSubject
  userPointsSubject = new BehaviorSubject(0);
  userPoints$ = this.userPointsSubject.asObservable();
  // Profil resmini anlık olarak tutmak ve yayınlamak için signal
  userProfileImage = signal("assets/images/avatar-placeholder.png", ...ngDevMode ? [{ debugName: "userProfileImage" }] : []);
  constructor(http, router) {
    this.http = http;
    this.router = router;
    const pointsStr = localStorage.getItem("points");
    const initialPoints = pointsStr ? parseInt(pointsStr, 10) : 0;
    this.userPointsSubject.next(initialPoints);
    this.userProfileImage.set(localStorage.getItem("profile_picture") || "assets/images/avatar-placeholder.png");
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(tap((response) => {
      if (response && response.token) {
        this.clearUserData();
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("username", response.username);
        localStorage.setItem("email", credentials.email);
        localStorage.setItem("points", response.points?.toString() || "0");
        localStorage.setItem("profile_picture", response.profile_picture || "");
        this.userPointsSubject.next(response.points || 0);
        this.userProfileImage.set(response.profile_picture || "assets/images/avatar-placeholder.png");
      }
    }));
  }
  register(userData) {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  changePassword(passwords) {
    return this.http.post(`${this.apiUrl}/change-password`, passwords);
  }
  clearUserData() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("points");
    localStorage.removeItem("profile_picture");
  }
  logout() {
    this.userPointsSubject.next(0);
    this.userProfileImage.set("assets/images/avatar-placeholder.png");
    this.clearUserData();
    this.router.navigate(["/login"], { state: { logoutSuccess: true } });
  }
  isAuthenticated() {
    const token = localStorage.getItem("authToken");
    return !!token;
  }
  getUsername() {
    return localStorage.getItem("username");
  }
  getEmail() {
    return localStorage.getItem("email");
  }
  getUserPoints() {
    const pointsStr = localStorage.getItem("points");
    return pointsStr ? parseInt(pointsStr, 10) : 0;
  }
  getUserProfileImage() {
    return localStorage.getItem("profile_picture") || "assets/images/avatar-placeholder.png";
  }
  updateUserProfileImage(imagePath) {
    localStorage.setItem("profile_picture", imagePath);
  }
  updateUserPoints(newPoints) {
    localStorage.setItem("points", newPoints.toString());
    this.userPointsSubject.next(newPoints);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-SWEFD2KZ.js.map
