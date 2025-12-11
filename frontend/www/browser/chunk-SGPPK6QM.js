import {
  FriendsService
} from "./chunk-DTI62WQR.js";
import {
  Toast,
  ToastModule
} from "./chunk-3VAMBC6T.js";
import {
  Divider,
  DividerModule
} from "./chunk-HKSNGYNW.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-DFW2EA2F.js";
import {
  Avatar,
  AvatarModule
} from "./chunk-ZRP7PDR6.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-7KNBXFI3.js";
import "./chunk-UFKIQL7H.js";
import "./chunk-MF2TYEEY.js";
import "./chunk-G2NB3UHO.js";
import {
  Button,
  ButtonDirective,
  ButtonModule
} from "./chunk-P2UDISTN.js";
import "./chunk-RSNC3YL5.js";
import {
  Card,
  CardModule,
  CommonModule,
  DatePipe,
  MessageService,
  NgIf
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IXE337CY.js";

// src/app/pages/user-profile/user-profile.component.ts
function UserProfileComponent_p_progressSpinner_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner");
  }
}
function UserProfileComponent_p_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-card", 4)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function UserProfileComponent_p_card_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/app/friends"]));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function UserProfileComponent_div_4_div_10_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 25);
    \u0275\u0275listener("click", function UserProfileComponent_div_4_div_10_p_button_1_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendRequest());
    });
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_div_4_div_10_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 26);
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function UserProfileComponent_div_4_div_10_p_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 27);
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function UserProfileComponent_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, UserProfileComponent_div_4_div_10_p_button_1_Template, 1, 0, "p-button", 22)(2, UserProfileComponent_div_4_div_10_p_button_2_Template, 1, 1, "p-button", 23)(3, UserProfileComponent_div_4_div_10_p_button_3_Template, 1, 1, "p-button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.profile.friendshipStatus === "none");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.profile.friendshipStatus === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.profile.friendshipStatus === "accepted");
  }
}
function UserProfileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "p-card")(3, "div", 8);
    \u0275\u0275element(4, "p-avatar", 9);
    \u0275\u0275elementStart(5, "h2", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, UserProfileComponent_div_4_div_10_Template, 4, 3, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-divider", 13)(12, "b");
    \u0275\u0275text(13, "\u0130statistikler");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 14)(15, "div", 15)(16, "div", 16);
    \u0275\u0275element(17, "i", 17);
    \u0275\u0275elementStart(18, "div", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 19);
    \u0275\u0275text(21, "Toplam Puan");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 15)(23, "div", 16);
    \u0275\u0275element(24, "i", 20);
    \u0275\u0275elementStart(25, "div", 18);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 19);
    \u0275\u0275text(28, "Tamamlanan Quiz");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("image", ctx_r1.profile.user.profile_picture || "assets/images/avatar-placeholder.png");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profile.user.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xDCyelik Tarihi: ", \u0275\u0275pipeBind2(9, 6, ctx_r1.profile.user.created_at, "dd.MM.yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.profile.friendshipStatus !== "self");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.profile.stats.total_score);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.profile.stats.quizzes_completed);
  }
}
var UserProfileComponent = class _UserProfileComponent {
  route;
  router;
  friendsService;
  messageService;
  profile = null;
  loading = true;
  error = null;
  constructor(route, router, friendsService, messageService) {
    this.route = route;
    this.router = router;
    this.friendsService = friendsService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const username = params.get("username");
      if (username) {
        this.loadUserProfile(username);
      } else {
        this.router.navigate(["/app/dashboard"]);
      }
    });
  }
  loadUserProfile(username) {
    this.loading = true;
    this.error = null;
    this.friendsService.getUserProfile(username).subscribe({
      next: (data) => {
        this.profile = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error.message || "Profil y\xFCklenirken bir hata olu\u015Ftu.";
        this.loading = false;
      }
    });
  }
  sendRequest() {
    if (!this.profile?.user.username)
      return;
    this.friendsService.sendFriendRequest(this.profile.user.username).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Ba\u015Far\u0131l\u0131", detail: res.message });
        if (this.profile)
          this.profile.friendshipStatus = "pending";
      },
      error: (err) => {
        this.messageService.add({ severity: "error", summary: "Hata", detail: err.error.message || "\u0130stek g\xF6nderilemedi." });
      }
    });
  }
  static \u0275fac = function UserProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfileComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FriendsService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 5, vars: 3, consts: [[1, "user-profile-page"], [4, "ngIf"], ["header", "Hata", 4, "ngIf"], ["class", "grid justify-content-center", 4, "ngIf"], ["header", "Hata"], ["pButton", "", "type", "button", "label", "Geri D\xF6n", "icon", "pi pi-arrow-left", 3, "click"], [1, "grid", "justify-content-center"], [1, "col-12", "md:col-8", "lg:col-6"], [1, "text-center"], ["styleClass", "w-9rem h-9rem mb-3", "shape", "circle", 3, "image"], [1, "text-3xl", "font-bold", "mb-1"], [1, "text-color-secondary"], ["class", "mt-4", 4, "ngIf"], ["layout", "horizontal", "align", "center", "styleClass", "my-5"], [1, "grid", "text-center"], [1, "col-6"], [1, "p-3"], [1, "pi", "pi-star-fill", "text-yellow-500", "text-4xl", "mb-2"], [1, "text-2xl", "font-bold"], [1, "text-sm", "text-color-secondary"], [1, "pi", "pi-book", "text-blue-500", "text-4xl", "mb-2"], [1, "mt-4"], ["label", "Arkada\u015F Ekle", "icon", "pi pi-user-plus", 3, "click", 4, "ngIf"], ["label", "\u0130stek G\xF6nderildi", "icon", "pi pi-clock", "styleClass", "p-button-secondary", 3, "disabled", 4, "ngIf"], ["label", "Arkada\u015Fs\u0131n\u0131z", "icon", "pi pi-users", "styleClass", "p-button-success", 3, "disabled", 4, "ngIf"], ["label", "Arkada\u015F Ekle", "icon", "pi pi-user-plus", 3, "click"], ["label", "\u0130stek G\xF6nderildi", "icon", "pi pi-clock", "styleClass", "p-button-secondary", 3, "disabled"], ["label", "Arkada\u015Fs\u0131n\u0131z", "icon", "pi pi-users", "styleClass", "p-button-success", 3, "disabled"]], template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0);
      \u0275\u0275template(2, UserProfileComponent_p_progressSpinner_2_Template, 1, 0, "p-progressSpinner", 1)(3, UserProfileComponent_p_card_3_Template, 4, 1, "p-card", 2)(4, UserProfileComponent_div_4_Template, 29, 9, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.profile);
    }
  }, dependencies: [CommonModule, NgIf, CardModule, Card, AvatarModule, Avatar, ButtonModule, ButtonDirective, Button, ProgressSpinnerModule, ProgressSpinner, ToastModule, Toast, DividerModule, Divider, DatePipe], styles: ["\n\n.user-profile-page[_ngcontent-%COMP%]   .p-avatar[_ngcontent-%COMP%] {\n  border: 4px solid var(--surface-border);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=user-profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponent, [{
    type: Component,
    args: [{ selector: "app-user-profile", standalone: true, imports: [
      CommonModule,
      CardModule,
      AvatarModule,
      ButtonModule,
      ProgressSpinnerModule,
      ToastModule,
      DividerModule
    ], providers: [MessageService], template: `<p-toast></p-toast>\r
<div class="user-profile-page">\r
    <p-progressSpinner *ngIf="loading"></p-progressSpinner>\r
\r
    <p-card *ngIf="error" header="Hata">\r
        <p>{{ error }}</p>\r
        <button pButton type="button" label="Geri D\xF6n" icon="pi pi-arrow-left"\r
            (click)="router.navigate(['/app/friends'])"></button>\r
    </p-card>\r
\r
    <div *ngIf="!loading && profile" class="grid justify-content-center">\r
        <div class="col-12 md:col-8 lg:col-6">\r
            <p-card>\r
                <div class="text-center">\r
                    <p-avatar [image]="profile.user.profile_picture || 'assets/images/avatar-placeholder.png'"\r
                        styleClass="w-9rem h-9rem mb-3" shape="circle"></p-avatar>\r
                    <h2 class="text-3xl font-bold mb-1">{{ profile.user.username }}</h2>\r
                    <p class="text-color-secondary">\xDCyelik Tarihi: {{ profile.user.created_at | date:'dd.MM.yyyy' }}</p>\r
\r
                    <div *ngIf="profile.friendshipStatus !== 'self'" class="mt-4">\r
                        <p-button *ngIf="profile.friendshipStatus === 'none'" label="Arkada\u015F Ekle"\r
                            icon="pi pi-user-plus" (click)="sendRequest()"></p-button>\r
                        <p-button *ngIf="profile.friendshipStatus === 'pending'" label="\u0130stek G\xF6nderildi"\r
                            icon="pi pi-clock" [disabled]="true" styleClass="p-button-secondary"></p-button>\r
                        <p-button *ngIf="profile.friendshipStatus === 'accepted'" label="Arkada\u015Fs\u0131n\u0131z"\r
                            icon="pi pi-users" [disabled]="true" styleClass="p-button-success"></p-button>\r
                    </div>\r
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
                            <div class="text-2xl font-bold">{{ profile.stats.total_score }}</div>\r
                            <div class="text-sm text-color-secondary">Toplam Puan</div>\r
                        </div>\r
                    </div>\r
                    <div class="col-6">\r
                        <div class="p-3">\r
                            <i class="pi pi-book text-blue-500 text-4xl mb-2"></i>\r
                            <div class="text-2xl font-bold">{{ profile.stats.quizzes_completed }}</div>\r
                            <div class="text-sm text-color-secondary">Tamamlanan Quiz</div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </p-card>\r
        </div>\r
    </div>\r
</div>`, styles: ["/* src/app/pages/user-profile/user-profile.component.scss */\n.user-profile-page .p-avatar {\n  border: 4px solid var(--surface-border);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=user-profile.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FriendsService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent", filePath: "src/app/pages/user-profile/user-profile.component.ts", lineNumber: 29 });
})();
export {
  UserProfileComponent
};
//# sourceMappingURL=chunk-SGPPK6QM.js.map
