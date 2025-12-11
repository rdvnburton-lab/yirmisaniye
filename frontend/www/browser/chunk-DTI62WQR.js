import {
  HttpClient
} from "./chunk-5QUT4BWV.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IXE337CY.js";

// src/app/services/friends.service.ts
var FriendsService = class _FriendsService {
  http;
  friendsApiUrl = "/api/friends";
  usersApiUrl = "/api/users";
  constructor(http) {
    this.http = http;
  }
  getFriends() {
    return this.http.get(`${this.friendsApiUrl}/`);
  }
  getFriendRequests() {
    return this.http.get(`${this.friendsApiUrl}/requests`);
  }
  sendFriendRequest(username) {
    return this.http.post(`${this.friendsApiUrl}/request`, { username });
  }
  respondToRequest(requestId, action) {
    return this.http.put(`${this.friendsApiUrl}/request/${requestId}`, { action });
  }
  removeFriend(friendId) {
    return this.http.delete(`${this.friendsApiUrl}/${friendId}`);
  }
  getUserProfile(username) {
    return this.http.get(`${this.usersApiUrl}/profile/${username}`);
  }
  static \u0275fac = function FriendsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FriendsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FriendsService, factory: _FriendsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FriendsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  FriendsService
};
//# sourceMappingURL=chunk-DTI62WQR.js.map
