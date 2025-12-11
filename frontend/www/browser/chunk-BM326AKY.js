import {
  FriendsService
} from "./chunk-DTI62WQR.js";
import {
  ConfirmDialog,
  ConfirmDialogModule,
  Dialog,
  DialogModule
} from "./chunk-23W5QYPP.js";
import {
  Toast,
  ToastModule
} from "./chunk-3VAMBC6T.js";
import {
  Divider,
  DividerModule
} from "./chunk-HKSNGYNW.js";
import {
  RouterModule
} from "./chunk-DFW2EA2F.js";
import {
  Avatar,
  AvatarModule
} from "./chunk-ZRP7PDR6.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-7KNBXFI3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel
} from "./chunk-MQYBVSL2.js";
import "./chunk-UFKIQL7H.js";
import "./chunk-MF2TYEEY.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-MGMRA34M.js";
import "./chunk-G2NB3UHO.js";
import {
  Badge,
  BadgeModule,
  Button,
  ButtonModule
} from "./chunk-P2UDISTN.js";
import "./chunk-RSNC3YL5.js";
import {
  Card,
  CardModule,
  CommonModule,
  ConfirmationService,
  DatePipe,
  MessageService,
  NgForOf,
  NgIf,
  PrimeTemplate
} from "./chunk-5QUT4BWV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IXE337CY.js";

// src/app/pages/friends/friends.component.ts
var _c0 = () => ({ width: "500px" });
function FriendsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Arkada\u015Flar");
  }
}
function FriendsComponent_ng_template_5_p_badge_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.requests.length);
  }
}
function FriendsComponent_ng_template_5_p_progressSpinner_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner");
  }
}
function FriendsComponent_ng_template_5_div_13_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 22)(1, "div", 23);
    \u0275\u0275element(2, "p-avatar", 24);
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 26)(6, "p-button", 27);
    \u0275\u0275listener("click", function FriendsComponent_ng_template_5_div_13_ul_1_li_1_Template_p_button_click_6_listener() {
      const request_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.respondToRequest(request_r4.id, "accept"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 28);
    \u0275\u0275listener("click", function FriendsComponent_ng_template_5_div_13_ul_1_li_1_Template_p_button_click_7_listener() {
      const request_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.respondToRequest(request_r4.id, "reject"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("image", request_r4.profile_picture || "assets/images/avatar-placeholder.png");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r4.username);
  }
}
function FriendsComponent_ng_template_5_div_13_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 20);
    \u0275\u0275template(1, FriendsComponent_ng_template_5_div_13_ul_1_li_1_Template, 8, 2, "li", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.requests);
  }
}
function FriendsComponent_ng_template_5_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275elementStart(2, "p", 31);
    \u0275\u0275text(3, "Yeni arkada\u015Fl\u0131k iste\u011Fin yok.");
    \u0275\u0275elementEnd()();
  }
}
function FriendsComponent_ng_template_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, FriendsComponent_ng_template_5_div_13_ul_1_Template, 2, 1, "ul", 18)(2, FriendsComponent_ng_template_5_div_13_div_2_Template, 4, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.requests.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.requests.length === 0);
  }
}
function FriendsComponent_ng_template_5_p_progressSpinner_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner");
  }
}
function FriendsComponent_ng_template_5_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36);
    \u0275\u0275listener("click", function FriendsComponent_ng_template_5_div_18_div_1_Template_div_click_2_listener() {
      const friend_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showUserProfile(friend_r6.username));
    });
    \u0275\u0275element(3, "p-avatar", 24);
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-button", 37);
    \u0275\u0275listener("click", function FriendsComponent_ng_template_5_div_18_div_1_Template_p_button_click_6_listener($event) {
      const friend_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmRemoveFriend($event, friend_r6));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const friend_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("image", friend_r6.profile_picture || "assets/images/avatar-placeholder.png");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(friend_r6.username);
  }
}
function FriendsComponent_ng_template_5_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "p", 31);
    \u0275\u0275text(3, "Hen\xFCz hi\xE7 arkada\u015F\u0131n yok.");
    \u0275\u0275elementEnd()();
  }
}
function FriendsComponent_ng_template_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, FriendsComponent_ng_template_5_div_18_div_1_Template, 7, 2, "div", 32)(2, FriendsComponent_ng_template_5_div_18_div_2_Template, 4, 0, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.friends);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.friends.length === 0);
  }
}
function FriendsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "label", 11);
    \u0275\u0275text(5, "Kullan\u0131c\u0131 Ad\u0131 ile Arkada\u015F Ekle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function FriendsComponent_ng_template_5_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.usernameToAdd, $event) || (ctx_r1.usernameToAdd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function FriendsComponent_ng_template_5_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendRequest());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p-button", 13);
    \u0275\u0275listener("click", function FriendsComponent_ng_template_5_Template_p_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmSendRequest($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 14)(9, "h5");
    \u0275\u0275text(10, "Arkada\u015Fl\u0131k \u0130stekleri ");
    \u0275\u0275template(11, FriendsComponent_ng_template_5_p_badge_11_Template, 1, 1, "p-badge", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FriendsComponent_ng_template_5_p_progressSpinner_12_Template, 1, 0, "p-progressSpinner", 5)(13, FriendsComponent_ng_template_5_div_13_Template, 3, 2, "div", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "p-divider");
    \u0275\u0275elementStart(15, "h5");
    \u0275\u0275text(16, "Arkada\u015Flar\u0131m");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, FriendsComponent_ng_template_5_p_progressSpinner_17_Template, 1, 0, "p-progressSpinner", 5)(18, FriendsComponent_ng_template_5_div_18_Template, 3, 2, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.usernameToAdd);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.usernameToAdd.trim());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.requests.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingRequests);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingRequests);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loadingFriends);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFriends);
  }
}
function FriendsComponent_p_progressSpinner_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner");
  }
}
function FriendsComponent_div_9_div_7_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 55);
    \u0275\u0275listener("click", function FriendsComponent_div_9_div_7_p_button_1_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendRequestFromModal());
    });
    \u0275\u0275elementEnd();
  }
}
function FriendsComponent_div_9_div_7_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 56);
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function FriendsComponent_div_9_div_7_p_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 57);
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function FriendsComponent_div_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, FriendsComponent_div_9_div_7_p_button_1_Template, 1, 0, "p-button", 52)(2, FriendsComponent_div_9_div_7_p_button_2_Template, 1, 1, "p-button", 53)(3, FriendsComponent_div_9_div_7_p_button_3_Template, 1, 1, "p-button", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedProfile.friendshipStatus === "none");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedProfile.friendshipStatus === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedProfile.friendshipStatus === "accepted");
  }
}
function FriendsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "p-avatar", 40);
    \u0275\u0275elementStart(2, "h2", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FriendsComponent_div_9_div_7_Template, 4, 3, "div", 42);
    \u0275\u0275elementStart(8, "p-divider", 43)(9, "b");
    \u0275\u0275text(10, "\u0130statistikler");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 44)(12, "div", 45)(13, "div", 46);
    \u0275\u0275element(14, "i", 47);
    \u0275\u0275elementStart(15, "div", 48);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 49);
    \u0275\u0275text(18, "Toplam Puan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 45)(20, "div", 46);
    \u0275\u0275element(21, "i", 50);
    \u0275\u0275elementStart(22, "div", 48);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 49);
    \u0275\u0275text(25, "Tamamlanan Quiz");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r1.selectedProfile.user.profile_picture || "assets/images/avatar-placeholder.png");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedProfile.user.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xDCyelik Tarihi: ", \u0275\u0275pipeBind2(6, 6, ctx_r1.selectedProfile.user.created_at, "dd.MM.yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedProfile.friendshipStatus !== "self");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedProfile.stats.total_score);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedProfile.stats.quizzes_completed);
  }
}
function FriendsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 58);
    \u0275\u0275listener("click", function FriendsComponent_ng_template_10_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayProfileDialog = false);
    });
    \u0275\u0275elementEnd();
  }
}
var FriendsComponent = class _FriendsComponent {
  friendsService;
  messageService;
  confirmationService;
  friends = [];
  requests = [];
  usernameToAdd = "";
  loadingFriends = true;
  loadingRequests = true;
  displayProfileDialog = false;
  selectedProfile = null;
  loadingProfile = false;
  constructor(friendsService, messageService, confirmationService) {
    this.friendsService = friendsService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
  }
  ngOnInit() {
    this.loadFriends();
    this.loadRequests();
  }
  loadFriends() {
    this.loadingFriends = true;
    this.friendsService.getFriends().subscribe({
      next: (data) => {
        this.friends = data;
        this.loadingFriends = false;
      },
      error: () => {
        this.loadingFriends = false;
        this.messageService.add({ severity: "error", summary: "Hata", detail: "Arkada\u015Flar y\xFCklenemedi." });
      }
    });
  }
  loadRequests() {
    this.loadingRequests = true;
    this.friendsService.getFriendRequests().subscribe({
      next: (data) => {
        this.requests = data;
        this.loadingRequests = false;
      },
      error: () => {
        this.loadingRequests = false;
        this.messageService.add({ severity: "error", summary: "Hata", detail: "\u0130stekler y\xFCklenemedi." });
      }
    });
  }
  sendRequest() {
    if (!this.usernameToAdd.trim())
      return;
    this.friendsService.sendFriendRequest(this.usernameToAdd).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Ba\u015Far\u0131l\u0131", detail: res.message });
        this.usernameToAdd = "";
      },
      error: (err) => {
        this.messageService.add({ severity: "error", summary: "Hata", detail: err.error.message || "\u0130stek g\xF6nderilemedi." });
      }
    });
  }
  respondToRequest(requestId, action) {
    this.friendsService.respondToRequest(requestId, action).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Ba\u015Far\u0131l\u0131", detail: res.message });
        this.loadRequests();
        if (action === "accept") {
          this.loadFriends();
        }
      },
      error: (err) => {
        this.messageService.add({ severity: "error", summary: "Hata", detail: err.error.message || "\u0130\u015Flem ger\xE7ekle\u015Ftirilemedi." });
      }
    });
  }
  confirmSendRequest(event) {
    if (!this.usernameToAdd.trim())
      return;
    this.confirmationService.confirm({
      target: event.target,
      message: `"${this.usernameToAdd}" adl\u0131 kullan\u0131c\u0131ya arkada\u015Fl\u0131k iste\u011Fi g\xF6ndermek istedi\u011Fine emin misin?`,
      header: "\u0130ste\u011Fi Onayla",
      icon: "pi pi-send",
      acceptLabel: "Evet, G\xF6nder",
      rejectLabel: "Hay\u0131r",
      accept: () => this.sendRequest()
    });
  }
  confirmRemoveFriend(event, friend) {
    this.confirmationService.confirm({
      target: event.target,
      message: `"${friend.username}" art\u0131k arkada\u015F\u0131n olmayacak ve bu onu \xFCzebilir. Yine de arkada\u015Fl\u0131ktan \xE7\u0131karmak istedi\u011Fine emin misin?`,
      header: "Emin misin?",
      icon: "pi pi-heart-broken",
      acceptLabel: "Evet, \xC7\u0131kar",
      rejectLabel: "Hay\u0131r",
      accept: () => {
        this.removeFriend(friend.id);
      }
    });
  }
  removeFriend(friendId) {
    this.friendsService.removeFriend(friendId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Ba\u015Far\u0131l\u0131", detail: res.message });
        this.loadFriends();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Hata", detail: err.error.message || "Arkada\u015F silinemedi." })
    });
  }
  showUserProfile(username) {
    this.loadingProfile = true;
    this.displayProfileDialog = true;
    this.selectedProfile = null;
    this.friendsService.getUserProfile(username).subscribe({
      next: (data) => {
        this.selectedProfile = data;
        this.loadingProfile = false;
      },
      error: (err) => {
        this.messageService.add({ severity: "error", summary: "Hata", detail: err.error.message || "Profil y\xFCklenemedi." });
        this.loadingProfile = false;
        this.displayProfileDialog = false;
      }
    });
  }
  sendRequestFromModal() {
    if (!this.selectedProfile?.user.username)
      return;
    this.friendsService.sendFriendRequest(this.selectedProfile.user.username).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Ba\u015Far\u0131l\u0131", detail: res.message });
        if (this.selectedProfile)
          this.selectedProfile.friendshipStatus = "pending";
      },
      error: (err) => {
        this.messageService.add({ severity: "error", summary: "Hata", detail: err.error.message || "\u0130stek g\xF6nderilemedi." });
      }
    });
  }
  static \u0275fac = function FriendsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FriendsComponent)(\u0275\u0275directiveInject(FriendsService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FriendsComponent, selectors: [["app-friends"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 11, vars: 10, consts: [[1, "friends-page"], ["pTemplate", "title"], ["pTemplate", "content"], [3, "visibleChange", "visible", "modal", "showHeader", "draggable", "resizable"], [1, "user-profile-modal", "text-center", "pt-4"], [4, "ngIf"], ["pTemplate", "footer"], [1, "grid"], [1, "col-12", "md:col-4"], [1, "p-fluid"], [1, "field"], ["for", "username"], ["id", "username", "type", "text", "pInputText", "", "placeholder", "Arkada\u015F\u0131n\u0131n kullan\u0131c\u0131 ad\u0131n\u0131 gir", 3, "ngModelChange", "keyup.enter", "ngModel"], ["label", "\u0130stek G\xF6nder", "icon", "pi pi-send", 3, "click", "disabled"], [1, "col-12", "md:col-8"], ["severity", "danger", 3, "value", 4, "ngIf"], ["class", "grid", 4, "ngIf"], ["severity", "danger", 3, "value"], ["class", "list-none p-0 m-0", 4, "ngIf"], ["class", "text-center p-5", 4, "ngIf"], [1, "list-none", "p-0", "m-0"], ["class", "flex align-items-center justify-content-between p-3 mb-2 surface-100 border-round", 4, "ngFor", "ngForOf"], [1, "flex", "align-items-center", "justify-content-between", "p-3", "mb-2", "surface-100", "border-round"], [1, "flex", "align-items-center"], ["shape", "circle", "size", "large", 1, "mr-3", 3, "image"], [1, "font-bold", "text-lg"], [1, "flex", "gap-2"], ["icon", "pi pi-check", "styleClass", "p-button-success p-button-rounded p-button-sm", 3, "click"], ["icon", "pi pi-times", "styleClass", "p-button-danger p-button-rounded p-button-sm", 3, "click"], [1, "text-center", "p-5"], [1, "pi", "pi-inbox", "text-3xl", "text-color-secondary", "mb-3"], [1, "text-color-secondary"], ["class", "col-12 md:col-6 lg:col-4", 4, "ngFor", "ngForOf"], ["class", "col-12 text-center p-5", 4, "ngIf"], [1, "col-12", "md:col-6", "lg:col-4"], [1, "friend-card", "flex", "align-items-center", "justify-content-between", "p-3", "surface-100", "border-round"], [1, "flex", "align-items-center", "no-underline", "text-color", "w-full", "cursor-pointer", 3, "click"], ["icon", "pi pi-user-minus", "styleClass", "p-button-danger p-button-rounded p-button-text", "pTooltip", "Arkada\u015Fl\u0131ktan \xC7\u0131kar", 3, "click"], [1, "col-12", "text-center", "p-5"], [1, "pi", "pi-users", "text-3xl", "text-color-secondary", "mb-3"], ["styleClass", "w-9rem h-9rem mb-3", "shape", "circle", 3, "image"], [1, "text-3xl", "font-bold", "mb-1"], ["class", "mt-4", 4, "ngIf"], ["layout", "horizontal", "align", "center", "styleClass", "my-5"], [1, "grid", "text-center"], [1, "col-6"], [1, "p-3"], [1, "pi", "pi-star-fill", "text-yellow-500", "text-4xl", "mb-2"], [1, "text-2xl", "font-bold"], [1, "text-sm", "text-color-secondary"], [1, "pi", "pi-book", "text-blue-500", "text-4xl", "mb-2"], [1, "mt-4"], ["label", "Arkada\u015F Ekle", "icon", "pi pi-user-plus", 3, "click", 4, "ngIf"], ["label", "\u0130stek G\xF6nderildi", "icon", "pi pi-clock", "styleClass", "p-button-secondary", 3, "disabled", 4, "ngIf"], ["label", "Arkada\u015Fs\u0131n\u0131z", "icon", "pi pi-users", "styleClass", "p-button-success", 3, "disabled", 4, "ngIf"], ["label", "Arkada\u015F Ekle", "icon", "pi pi-user-plus", 3, "click"], ["label", "\u0130stek G\xF6nderildi", "icon", "pi pi-clock", "styleClass", "p-button-secondary", 3, "disabled"], ["label", "Arkada\u015Fs\u0131n\u0131z", "icon", "pi pi-users", "styleClass", "p-button-success", 3, "disabled"], ["label", "Kapat", "icon", "pi pi-times", "styleClass", "p-button-text", 3, "click"]], template: function FriendsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast")(1, "p-confirmDialog");
      \u0275\u0275elementStart(2, "div", 0)(3, "p-card");
      \u0275\u0275template(4, FriendsComponent_ng_template_4_Template, 1, 0, "ng-template", 1)(5, FriendsComponent_ng_template_5_Template, 19, 7, "ng-template", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p-dialog", 3);
      \u0275\u0275twoWayListener("visibleChange", function FriendsComponent_Template_p_dialog_visibleChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.displayProfileDialog, $event) || (ctx.displayProfileDialog = $event);
        return $event;
      });
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275template(8, FriendsComponent_p_progressSpinner_8_Template, 1, 0, "p-progressSpinner", 5)(9, FriendsComponent_div_9_Template, 26, 9, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, FriendsComponent_ng_template_10_Template, 1, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.displayProfileDialog);
      \u0275\u0275property("modal", true)("showHeader", false)("draggable", false)("resizable", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loadingProfile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingProfile && ctx.selectedProfile);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    RouterModule,
    // RouterModule eklendi
    CardModule,
    Card,
    PrimeTemplate,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    AvatarModule,
    Avatar,
    ProgressSpinnerModule,
    ProgressSpinner,
    ToastModule,
    Toast,
    BadgeModule,
    Badge,
    TooltipModule,
    Tooltip,
    ConfirmDialogModule,
    ConfirmDialog,
    DividerModule,
    Divider,
    DialogModule,
    Dialog,
    DatePipe
  ], styles: ["\n\n[_nghost-%COMP%]     .p-badge.p-badge-danger {\n  animation: pulse 1.5s infinite;\n}\n.friend-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background-color: var(--surface-200);\n  border-radius: var(--border-radius);\n}\n/*# sourceMappingURL=friends.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FriendsComponent, [{
    type: Component,
    args: [{ selector: "app-friends", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      // RouterModule eklendi
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
    ], providers: [MessageService, ConfirmationService], template: `<p-toast></p-toast>\r
<p-confirmDialog></p-confirmDialog>\r
<div class="friends-page">\r
    <p-card>\r
        <ng-template pTemplate="title">Arkada\u015Flar</ng-template>\r
        <ng-template pTemplate="content">\r
            <div class="grid">\r
                <!-- Arkada\u015F Ekle B\xF6l\xFCm\xFC -->\r
                <div class="col-12 md:col-4">\r
                    <div class="p-fluid">\r
                        <div class="field">\r
                            <label for="username">Kullan\u0131c\u0131 Ad\u0131 ile Arkada\u015F Ekle</label>\r
                            <input id="username" type="text" pInputText [(ngModel)]="usernameToAdd"\r
                                (keyup.enter)="sendRequest()" placeholder="Arkada\u015F\u0131n\u0131n kullan\u0131c\u0131 ad\u0131n\u0131 gir">\r
                        </div>\r
                        <p-button label="\u0130stek G\xF6nder" icon="pi pi-send" (click)="confirmSendRequest($event)"\r
                            [disabled]="!usernameToAdd.trim()"></p-button>\r
                    </div>\r
                </div>\r
\r
                <!-- \u0130stekler B\xF6l\xFCm\xFC -->\r
                <div class="col-12 md:col-8">\r
                    <h5>Arkada\u015Fl\u0131k \u0130stekleri <p-badge *ngIf="requests.length > 0" [value]="requests.length"\r
                            severity="danger"></p-badge></h5>\r
                    <p-progressSpinner *ngIf="loadingRequests"></p-progressSpinner>\r
                    <div *ngIf="!loadingRequests">\r
                        <ul *ngIf="requests.length > 0" class="list-none p-0 m-0">\r
                            <li *ngFor="let request of requests"\r
                                class="flex align-items-center justify-content-between p-3 mb-2 surface-100 border-round">\r
                                <div class="flex align-items-center">\r
                                    <p-avatar\r
                                        [image]="request.profile_picture || 'assets/images/avatar-placeholder.png'"\r
                                        shape="circle" size="large" class="mr-3"></p-avatar>\r
                                    <span class="font-bold text-lg">{{ request.username }}</span>\r
                                </div>\r
                                <div class="flex gap-2">\r
                                    <p-button icon="pi pi-check" (click)="respondToRequest(request.id, 'accept')"\r
                                        styleClass="p-button-success p-button-rounded p-button-sm"></p-button>\r
                                    <p-button icon="pi pi-times" (click)="respondToRequest(request.id, 'reject')"\r
                                        styleClass="p-button-danger p-button-rounded p-button-sm"></p-button>\r
                                </div>\r
                            </li>\r
                        </ul>\r
                        <div *ngIf="requests.length === 0" class="text-center p-5">\r
                            <i class="pi pi-inbox text-3xl text-color-secondary mb-3"></i>\r
                            <p class="text-color-secondary">Yeni arkada\u015Fl\u0131k iste\u011Fin yok.</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <p-divider></p-divider>\r
\r
            <!-- Arkada\u015Flar\u0131m Listesi -->\r
            <h5>Arkada\u015Flar\u0131m</h5>\r
            <p-progressSpinner *ngIf="loadingFriends"></p-progressSpinner>\r
            <div *ngIf="!loadingFriends" class="grid">\r
                <div *ngFor="let friend of friends" class="col-12 md:col-6 lg:col-4">\r
                    <div\r
                        class="friend-card flex align-items-center justify-content-between p-3 surface-100 border-round">\r
                        <div (click)="showUserProfile(friend.username)"\r
                            class="flex align-items-center no-underline text-color w-full cursor-pointer">\r
                            <p-avatar [image]="friend.profile_picture || 'assets/images/avatar-placeholder.png'"\r
                                shape="circle" size="large" class="mr-3"></p-avatar>\r
                            <span class="font-bold text-lg">{{ friend.username }}</span>\r
                        </div>\r
                        <p-button icon="pi pi-user-minus" styleClass="p-button-danger p-button-rounded p-button-text"\r
                            (click)="confirmRemoveFriend($event, friend)" pTooltip="Arkada\u015Fl\u0131ktan \xC7\u0131kar"></p-button>\r
                    </div>\r
                </div>\r
                <div *ngIf="friends.length === 0" class="col-12 text-center p-5">\r
                    <i class="pi pi-users text-3xl text-color-secondary mb-3"></i>\r
                    <p class="text-color-secondary">Hen\xFCz hi\xE7 arkada\u015F\u0131n yok.</p>\r
                </div>\r
            </div>\r
        </ng-template>\r
    </p-card>\r
</div>\r
\r
<!-- Arkada\u015F Profili G\xF6r\xFCnt\xFCleme Modal\u0131 -->\r
<p-dialog [(visible)]="displayProfileDialog" [modal]="true" [style]="{width: '500px'}" [showHeader]="false"\r
    [draggable]="false" [resizable]="false">\r
    <div class="user-profile-modal text-center pt-4">\r
        <p-progressSpinner *ngIf="loadingProfile"></p-progressSpinner>\r
\r
        <div *ngIf="!loadingProfile && selectedProfile">\r
            <p-avatar [image]="selectedProfile.user.profile_picture || 'assets/images/avatar-placeholder.png'"\r
                styleClass="w-9rem h-9rem mb-3" shape="circle"></p-avatar>\r
            <h2 class="text-3xl font-bold mb-1">{{ selectedProfile.user.username }}</h2>\r
            <p class="text-color-secondary">\xDCyelik Tarihi: {{ selectedProfile.user.created_at | date:'dd.MM.yyyy' }}</p>\r
\r
            <div *ngIf="selectedProfile.friendshipStatus !== 'self'" class="mt-4">\r
                <p-button *ngIf="selectedProfile.friendshipStatus === 'none'" label="Arkada\u015F Ekle"\r
                    icon="pi pi-user-plus" (click)="sendRequestFromModal()"></p-button>\r
                <p-button *ngIf="selectedProfile.friendshipStatus === 'pending'" label="\u0130stek G\xF6nderildi"\r
                    icon="pi pi-clock" [disabled]="true" styleClass="p-button-secondary"></p-button>\r
                <p-button *ngIf="selectedProfile.friendshipStatus === 'accepted'" label="Arkada\u015Fs\u0131n\u0131z"\r
                    icon="pi pi-users" [disabled]="true" styleClass="p-button-success"></p-button>\r
            </div>\r
\r
            <p-divider layout="horizontal" align="center" styleClass="my-5">\r
                <b>\u0130statistikler</b>\r
            </p-divider>\r
\r
            <div class="grid text-center">\r
                <div class="col-6">\r
                    <div class="p-3">\r
                        <i class="pi pi-star-fill text-yellow-500 text-4xl mb-2"></i>\r
                        <div class="text-2xl font-bold">{{ selectedProfile.stats.total_score }}</div>\r
                        <div class="text-sm text-color-secondary">Toplam Puan</div>\r
                    </div>\r
                </div>\r
                <div class="col-6">\r
                    <div class="p-3">\r
                        <i class="pi pi-book text-blue-500 text-4xl mb-2"></i>\r
                        <div class="text-2xl font-bold">{{ selectedProfile.stats.quizzes_completed }}</div>\r
                        <div class="text-sm text-color-secondary">Tamamlanan Quiz</div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <ng-template pTemplate="footer">\r
        <p-button label="Kapat" icon="pi pi-times" (click)="displayProfileDialog=false"\r
            styleClass="p-button-text"></p-button>\r
    </ng-template>\r
</p-dialog>`, styles: ["/* src/app/pages/friends/friends.component.scss */\n:host ::ng-deep .p-badge.p-badge-danger {\n  animation: pulse 1.5s infinite;\n}\n.friend-card a:hover {\n  text-decoration: none;\n  background-color: var(--surface-200);\n  border-radius: var(--border-radius);\n}\n/*# sourceMappingURL=friends.component.css.map */\n"] }]
  }], () => [{ type: FriendsService }, { type: MessageService }, { type: ConfirmationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FriendsComponent, { className: "FriendsComponent", filePath: "src/app/pages/friends/friends.component.ts", lineNumber: 43 });
})();
export {
  FriendsComponent
};
//# sourceMappingURL=chunk-BM326AKY.js.map
