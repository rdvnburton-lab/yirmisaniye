import {
  AuthService
} from "./chunk-SWEFD2KZ.js";
import {
  Toast,
  ToastModule
} from "./chunk-3VAMBC6T.js";
import "./chunk-DFW2EA2F.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-7KNBXFI3.js";
import "./chunk-UFKIQL7H.js";
import "./chunk-MF2TYEEY.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-MGMRA34M.js";
import "./chunk-G2NB3UHO.js";
import {
  RippleModule
} from "./chunk-RSNC3YL5.js";
import {
  Card,
  CardModule,
  CommonModule,
  HttpClient,
  MessageService,
  NgClass,
  NgForOf,
  NgIf,
  PrimeTemplate
} from "./chunk-5QUT4BWV.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IXE337CY.js";

// src/app/services/collections.service.ts
var CollectionsService = class _CollectionsService {
  http;
  collectionsApiUrl = "/api/collections";
  constructor(http) {
    this.http = http;
  }
  getMyItems() {
    return this.http.get(`${this.collectionsApiUrl}/my-items`);
  }
  selectAvatar(avatarId) {
    return this.http.put(`${this.collectionsApiUrl}/select-avatar`, { avatarId });
  }
  static \u0275fac = function CollectionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollectionsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CollectionsService, factory: _CollectionsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/collections/collections.component.ts
var _c0 = (a0) => ({ "selected": a0 });
function CollectionsComponent_p_progressSpinner_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner");
  }
}
function CollectionsComponent_p_card_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card", 3)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function CollectionsComponent_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
    \u0275\u0275text(1, " Avatarlar\u0131m ");
  }
}
function CollectionsComponent_div_4_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementEnd();
  }
}
function CollectionsComponent_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275listener("click", function CollectionsComponent_div_4_div_4_Template_div_click_1_listener() {
      const avatar_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectAvatar(avatar_r3));
    });
    \u0275\u0275element(2, "img", 13);
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CollectionsComponent_div_4_div_4_div_5_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const avatar_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx_r0.isAvatarSelected(avatar_r3)));
    \u0275\u0275advance();
    \u0275\u0275property("src", avatar_r3.image_path, \u0275\u0275sanitizeUrl)("alt", avatar_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(avatar_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isAvatarSelected(avatar_r3));
  }
}
function CollectionsComponent_div_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
    \u0275\u0275text(1, " Kazand\u0131\u011F\u0131m Rozetler ");
  }
}
function CollectionsComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const badge_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("pTooltip", badge_r4.description);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge-icon pi ", badge_r4.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r4.name);
  }
}
function CollectionsComponent_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "p", 22);
    \u0275\u0275text(2, "Hen\xFCz hi\xE7 rozet kazanmad\u0131n. Quizleri \xE7\xF6zmeye devam et!");
    \u0275\u0275elementEnd()();
  }
}
function CollectionsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p-card", 4);
    \u0275\u0275template(2, CollectionsComponent_div_4_ng_template_2_Template, 2, 0, "ng-template", 5);
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275template(4, CollectionsComponent_div_4_div_4_Template, 6, 7, "div", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-card");
    \u0275\u0275template(6, CollectionsComponent_div_4_ng_template_6_Template, 2, 0, "ng-template", 5);
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, CollectionsComponent_div_4_div_8_Template, 5, 5, "div", 8)(9, CollectionsComponent_div_4_div_9_Template, 3, 0, "div", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.avatars);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.badges);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.badges.length === 0);
  }
}
var CollectionsComponent = class _CollectionsComponent {
  collectionsService;
  authService;
  messageService;
  avatars = [];
  badges = [];
  loading = true;
  error = null;
  constructor(collectionsService, authService, messageService) {
    this.collectionsService = collectionsService;
    this.authService = authService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadMyItems();
  }
  loadMyItems() {
    this.loading = true;
    this.collectionsService.getMyItems().subscribe({
      next: (data) => {
        this.avatars = data.avatars;
        this.badges = data.badges;
        this.loading = false;
      },
      error: (err) => {
        this.error = "Koleksiyonlar y\xFCklenirken bir hata olu\u015Ftu.";
        this.loading = false;
        console.error(err);
      }
    });
  }
  selectAvatar(avatar) {
    if (this.authService.userProfileImage() === avatar.image_path) {
      return;
    }
    this.collectionsService.selectAvatar(avatar.id).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Ba\u015Far\u0131l\u0131", detail: res.message });
        this.authService.updateUserProfileImage(res.image_path);
      },
      error: (err) => {
        this.messageService.add({ severity: "error", summary: "Hata", detail: err.error.message || "Avatar se\xE7ilemedi." });
      }
    });
  }
  isAvatarSelected(avatar) {
    return this.authService.userProfileImage() === avatar.image_path;
  }
  static \u0275fac = function CollectionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollectionsComponent)(\u0275\u0275directiveInject(CollectionsService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionsComponent, selectors: [["app-collections"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 5, vars: 3, consts: [[1, "collections-page"], [4, "ngIf"], ["header", "Hata", 4, "ngIf"], ["header", "Hata"], ["styleClass", "mb-4"], ["pTemplate", "title"], [1, "grid"], ["class", "col-6 md:col-3 lg:col-2", 4, "ngFor", "ngForOf"], ["class", "col-6 md:col-4 lg:col-3", 4, "ngFor", "ngForOf"], ["class", "col-12 text-center p-5", 4, "ngIf"], [1, "pi", "pi-user-edit", "mr-2"], [1, "col-6", "md:col-3", "lg:col-2"], [1, "collection-item", "avatar-item", "p-ripple", 3, "click", "ngClass"], [1, "avatar-image", 3, "src", "alt"], [1, "item-name"], ["class", "selected-overlay", 4, "ngIf"], [1, "selected-overlay"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-shield", "mr-2"], [1, "col-6", "md:col-4", "lg:col-3"], ["tooltipPosition", "top", 1, "collection-item", "badge-item", 3, "pTooltip"], [1, "col-12", "text-center", "p-5"], [1, "text-color-secondary"]], template: function CollectionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0);
      \u0275\u0275template(2, CollectionsComponent_p_progressSpinner_2_Template, 1, 0, "p-progressSpinner", 1)(3, CollectionsComponent_p_card_3_Template, 3, 1, "p-card", 2)(4, CollectionsComponent_div_4_Template, 10, 3, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, CardModule, Card, PrimeTemplate, ProgressSpinnerModule, ProgressSpinner, TooltipModule, Tooltip, ToastModule, Toast, RippleModule], styles: ["\n\n.collections-page[_ngcontent-%COMP%]   .collection-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  border-radius: var(--border-radius);\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  text-align: center;\n  transition: all 0.2s ease-in-out;\n  position: relative;\n  overflow: hidden;\n}\n.collections-page[_ngcontent-%COMP%]   .avatar-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.collections-page[_ngcontent-%COMP%]   .avatar-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.collections-page[_ngcontent-%COMP%]   .avatar-item.selected[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 15px var(--primary-300);\n}\n.collections-page[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-bottom: 0.75rem;\n  border: 3px solid var(--surface-border);\n}\n.collections-page[_ngcontent-%COMP%]   .badge-item[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--primary-color);\n  margin-bottom: 0.75rem;\n}\n.collections-page[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.collections-page[_ngcontent-%COMP%]   .selected-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(var(--primary-color-rgb), 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 3rem;\n}\n/*# sourceMappingURL=collections.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionsComponent, [{
    type: Component,
    args: [{ selector: "app-collections", standalone: true, imports: [
      CommonModule,
      CardModule,
      ProgressSpinnerModule,
      TooltipModule,
      ToastModule,
      RippleModule
    ], providers: [MessageService], template: `<p-toast></p-toast>\r
<div class="collections-page">\r
    <p-progressSpinner *ngIf="loading"></p-progressSpinner>\r
\r
    <p-card *ngIf="error" header="Hata">\r
        <p>{{ error }}</p>\r
    </p-card>\r
\r
    <div *ngIf="!loading && !error">\r
        <!-- Avatarlar B\xF6l\xFCm\xFC -->\r
        <p-card styleClass="mb-4">\r
            <ng-template pTemplate="title">\r
                <i class="pi pi-user-edit mr-2"></i> Avatarlar\u0131m\r
            </ng-template>\r
            <div class="grid">\r
                <div *ngFor="let avatar of avatars" class="col-6 md:col-3 lg:col-2">\r
                    <div class="collection-item avatar-item p-ripple" (click)="selectAvatar(avatar)"\r
                        [ngClass]="{'selected': isAvatarSelected(avatar)}">\r
                        <img [src]="avatar.image_path" [alt]="avatar.name" class="avatar-image">\r
                        <span class="item-name">{{ avatar.name }}</span>\r
                        <div *ngIf="isAvatarSelected(avatar)" class="selected-overlay">\r
                            <i class="pi pi-check-circle"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </p-card>\r
\r
        <!-- Rozetler B\xF6l\xFCm\xFC -->\r
        <p-card>\r
            <ng-template pTemplate="title">\r
                <i class="pi pi-shield mr-2"></i> Kazand\u0131\u011F\u0131m Rozetler\r
            </ng-template>\r
            <div class="grid">\r
                <div *ngFor="let badge of badges" class="col-6 md:col-4 lg:col-3">\r
                    <div class="collection-item badge-item" [pTooltip]="badge.description" tooltipPosition="top">\r
                        <i class="badge-icon pi {{ badge.icon }}"></i>\r
                        <span class="item-name">{{ badge.name }}</span>\r
                    </div>\r
                </div>\r
                <div *ngIf="badges.length === 0" class="col-12 text-center p-5">\r
                    <p class="text-color-secondary">Hen\xFCz hi\xE7 rozet kazanmad\u0131n. Quizleri \xE7\xF6zmeye devam et!</p>\r
                </div>\r
            </div>\r
        </p-card>\r
    </div>\r
</div>`, styles: ["/* src/app/pages/collections/collections.component.scss */\n.collections-page .collection-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  border-radius: var(--border-radius);\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  text-align: center;\n  transition: all 0.2s ease-in-out;\n  position: relative;\n  overflow: hidden;\n}\n.collections-page .avatar-item {\n  cursor: pointer;\n}\n.collections-page .avatar-item:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.collections-page .avatar-item.selected {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 15px var(--primary-300);\n}\n.collections-page .avatar-image {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-bottom: 0.75rem;\n  border: 3px solid var(--surface-border);\n}\n.collections-page .badge-item .badge-icon {\n  font-size: 4rem;\n  color: var(--primary-color);\n  margin-bottom: 0.75rem;\n}\n.collections-page .item-name {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.collections-page .selected-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(var(--primary-color-rgb), 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 3rem;\n}\n/*# sourceMappingURL=collections.component.css.map */\n"] }]
  }], () => [{ type: CollectionsService }, { type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionsComponent, { className: "CollectionsComponent", filePath: "src/app/pages/collections/collections.component.ts", lineNumber: 27 });
})();
export {
  CollectionsComponent
};
//# sourceMappingURL=chunk-PLGP7HSG.js.map
