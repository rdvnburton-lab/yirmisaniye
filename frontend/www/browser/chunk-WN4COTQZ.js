import {
  AuthService
} from "./chunk-SWEFD2KZ.js";
import {
  Toast,
  ToastModule
} from "./chunk-3VAMBC6T.js";
import {
  Divider,
  DividerModule
} from "./chunk-HKSNGYNW.js";
import "./chunk-DFW2EA2F.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-7KNBXFI3.js";
import "./chunk-UFKIQL7H.js";
import "./chunk-MF2TYEEY.js";
import {
  TooltipModule
} from "./chunk-MGMRA34M.js";
import "./chunk-G2NB3UHO.js";
import {
  Button,
  ButtonModule
} from "./chunk-P2UDISTN.js";
import {
  RippleModule
} from "./chunk-RSNC3YL5.js";
import {
  Card,
  CardModule,
  CommonModule,
  HttpClient,
  MessageService,
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
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IXE337CY.js";

// src/app/services/store.service.ts
var StoreService = class _StoreService {
  http;
  storeApiUrl = "/api/store";
  constructor(http) {
    this.http = http;
  }
  getAvatars() {
    return this.http.get(`${this.storeApiUrl}/avatars`);
  }
  getCart() {
    return this.http.get(`${this.storeApiUrl}/cart`);
  }
  addToCart(itemId, itemType) {
    return this.http.post(`${this.storeApiUrl}/cart`, { itemId, itemType });
  }
  removeFromCart(itemId) {
    return this.http.delete(`${this.storeApiUrl}/cart/${itemId}`);
  }
  checkout() {
    return this.http.post(`${this.storeApiUrl}/checkout`, {});
  }
  getOrders() {
    return this.http.get(`${this.storeApiUrl}/orders`);
  }
  static \u0275fac = function StoreService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoreService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StoreService, factory: _StoreService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/store/store.component.ts
function StoreComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 6);
    \u0275\u0275text(1, " Avatar Ma\u011Fazas\u0131 ");
  }
}
function StoreComponent_p_progressSpinner_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner");
  }
}
function StoreComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275element(2, "img", 11);
    \u0275\u0275elementStart(3, "div", 12)(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275element(7, "i", 15);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p-button", 16);
    \u0275\u0275listener("click", function StoreComponent_div_6_div_1_Template_p_button_click_10_listener() {
      const avatar_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart(avatar_r2));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const avatar_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", avatar_r2.image_path, \u0275\u0275sanitizeUrl)("alt", avatar_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(avatar_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", avatar_r2.cost, " Puan");
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r2.isItemInCart(avatar_r2.id) ? "Sepette" : "Sepete Ekle")("icon", ctx_r2.isItemInCart(avatar_r2.id) ? "pi pi-check" : "pi pi-cart-plus")("disabled", ctx_r2.isItemInCart(avatar_r2.id));
  }
}
function StoreComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, StoreComponent_div_6_div_1_Template, 11, 7, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.storeAvatars);
  }
}
function StoreComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 17);
    \u0275\u0275text(1, " Sepetim ");
  }
}
function StoreComponent_p_progressSpinner_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner");
  }
}
function StoreComponent_div_11_div_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 25)(1, "div", 26);
    \u0275\u0275element(2, "img", 27);
    \u0275\u0275elementStart(3, "div")(4, "div", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "p-button", 30);
    \u0275\u0275listener("click", function StoreComponent_div_11_div_1_li_2_Template_p_button_click_8_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeFromCart(item_r6.id));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r6.image_path, \u0275\u0275sanitizeUrl)("alt", item_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r6.cost, " Puan");
  }
}
function StoreComponent_div_11_div_1_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 31);
    \u0275\u0275text(1, "Sat\u0131n almak i\xE7in yeterli puan\u0131n yok.");
    \u0275\u0275elementEnd();
  }
}
function StoreComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "ul", 19);
    \u0275\u0275template(2, StoreComponent_div_11_div_1_li_2_Template, 9, 4, "li", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-divider");
    \u0275\u0275elementStart(4, "div", 21)(5, "span");
    \u0275\u0275text(6, "Toplam:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 23);
    \u0275\u0275listener("click", function StoreComponent_div_11_div_1_Template_p_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.checkout());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, StoreComponent_div_11_div_1_small_12_Template, 2, 0, "small", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.cartItems);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.cartTotal, " Puan");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Mevcut Puan\u0131n: ", ctx_r2.userPoints, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.cartTotal > ctx_r2.userPoints || ctx_r2.cartItems.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.cartTotal > ctx_r2.userPoints);
  }
}
function StoreComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementStart(2, "p", 34);
    \u0275\u0275text(3, "Sepetin bo\u015F.");
    \u0275\u0275elementEnd()();
  }
}
function StoreComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, StoreComponent_div_11_div_1_Template, 13, 5, "div", 3)(2, StoreComponent_div_11_div_2_Template, 4, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.cartItems.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.cartItems.length === 0);
  }
}
var StoreComponent = class _StoreComponent {
  storeService;
  authService;
  messageService;
  storeAvatars = [];
  cartItems = [];
  loadingStore = true;
  loadingCart = true;
  userPoints = 0;
  pointsSubscription;
  constructor(storeService, authService, messageService) {
    this.storeService = storeService;
    this.authService = authService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.pointsSubscription = this.authService.userPoints$.subscribe((points) => {
      this.userPoints = points;
    });
    this.loadStoreAvatars();
    this.loadCart();
  }
  loadStoreAvatars() {
    this.loadingStore = true;
    this.storeService.getAvatars().subscribe((data) => {
      this.storeAvatars = data;
      this.loadingStore = false;
    });
  }
  ngOnDestroy() {
    if (this.pointsSubscription) {
      this.pointsSubscription.unsubscribe();
    }
  }
  loadCart() {
    this.loadingCart = true;
    this.storeService.getCart().subscribe((data) => {
      this.cartItems = data;
      this.loadingCart = false;
    });
  }
  addToCart(avatar) {
    this.storeService.addToCart(avatar.id, "avatar").subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Ba\u015Far\u0131l\u0131", detail: res.message });
        this.loadCart();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Hata", detail: err.error.message || "\xDCr\xFCn eklenemedi." })
    });
  }
  removeFromCart(itemId) {
    this.storeService.removeFromCart(itemId).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "info", summary: "Kald\u0131r\u0131ld\u0131", detail: res.message });
        this.loadCart();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Hata", detail: err.error.message || "\xDCr\xFCn kald\u0131r\u0131lamad\u0131." })
    });
  }
  get cartTotal() {
    return this.cartItems.reduce((total, item) => total + item.cost, 0);
  }
  checkout() {
    this.storeService.checkout().subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Sipari\u015F Al\u0131nd\u0131!", detail: res.message, life: 5e3 });
        this.userPoints = res.newPoints;
        this.authService.updateUserPoints(res.newPoints);
        this.cartItems = [];
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Hata", detail: err.error.message || "Sipari\u015F verilemedi." })
    });
  }
  isItemInCart(itemId) {
    return this.cartItems.some((item) => item.id === itemId);
  }
  static \u0275fac = function StoreComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoreComponent)(\u0275\u0275directiveInject(StoreService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoreComponent, selectors: [["app-store"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 12, vars: 4, consts: [[1, "store-page", "grid"], [1, "col-12", "lg:col-8"], ["pTemplate", "title"], [4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "col-12", "lg:col-4"], [1, "pi", "pi-shopping-bag", "mr-2"], [1, "grid"], ["class", "col-6 md:col-4 lg:col-3", 4, "ngFor", "ngForOf"], [1, "col-6", "md:col-4", "lg:col-3"], [1, "store-item"], [1, "store-item-image", 3, "src", "alt"], [1, "store-item-details"], [1, "item-name"], [1, "item-cost"], [1, "pi", "pi-star-fill", "text-yellow-500", "mr-1"], ["styleClass", "p-button-sm mt-2", 3, "click", "label", "icon", "disabled"], [1, "pi", "pi-shopping-cart", "mr-2"], ["class", "text-center p-4", 4, "ngIf"], [1, "list-none", "p-0", "m-0"], ["class", "flex align-items-center justify-content-between mb-3", 4, "ngFor", "ngForOf"], [1, "flex", "justify-content-between", "font-bold", "text-lg", "mb-3"], [1, "text-center", "text-sm", "text-color-secondary", "mb-3"], ["label", "Sat\u0131n Al", "icon", "pi pi-check", "styleClass", "w-full", 3, "click", "disabled"], ["class", "p-error block text-center mt-2", 4, "ngIf"], [1, "flex", "align-items-center", "justify-content-between", "mb-3"], [1, "flex", "align-items-center"], [1, "cart-item-image", "mr-2", 3, "src", "alt"], [1, "font-semibold"], [1, "text-sm", "text-color-secondary"], ["icon", "pi pi-trash", "styleClass", "p-button-danger p-button-text p-button-rounded", 3, "click"], [1, "p-error", "block", "text-center", "mt-2"], [1, "text-center", "p-4"], [1, "pi", "pi-cart-plus", "text-4xl", "text-color-secondary", "mb-3"], [1, "text-color-secondary"]], template: function StoreComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "p-card");
      \u0275\u0275template(4, StoreComponent_ng_template_4_Template, 2, 0, "ng-template", 2)(5, StoreComponent_p_progressSpinner_5_Template, 1, 0, "p-progressSpinner", 3)(6, StoreComponent_div_6_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "p-card");
      \u0275\u0275template(9, StoreComponent_ng_template_9_Template, 2, 0, "ng-template", 2)(10, StoreComponent_p_progressSpinner_10_Template, 1, 0, "p-progressSpinner", 3)(11, StoreComponent_div_11_Template, 3, 2, "div", 3);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loadingStore);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingStore);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loadingCart);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingCart);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    CardModule,
    Card,
    PrimeTemplate,
    ButtonModule,
    Button,
    ProgressSpinnerModule,
    ProgressSpinner,
    TooltipModule,
    ToastModule,
    Toast,
    RippleModule,
    DividerModule,
    Divider
  ], styles: ["\n\n.store-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius);\n  text-align: center;\n  transition: all 0.2s ease-in-out;\n  background: var(--surface-card);\n}\n.store-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.store-item-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-top-left-radius: var(--border-radius);\n  border-top-right-radius: var(--border-radius);\n}\n.store-item-details[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.item-cost[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  color: var(--text-color-secondary);\n}\n.cart-item-image[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=store.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreComponent, [{
    type: Component,
    args: [{ selector: "app-store", standalone: true, imports: [
      CommonModule,
      CardModule,
      ButtonModule,
      ProgressSpinnerModule,
      TooltipModule,
      ToastModule,
      RippleModule,
      DividerModule
    ], providers: [MessageService], template: `<p-toast></p-toast>\r
<div class="store-page grid">\r
    <!-- Ma\u011Faza \xDCr\xFCnleri -->\r
    <div class="col-12 lg:col-8">\r
        <p-card>\r
            <ng-template pTemplate="title">\r
                <i class="pi pi-shopping-bag mr-2"></i> Avatar Ma\u011Fazas\u0131\r
            </ng-template>\r
            <p-progressSpinner *ngIf="loadingStore"></p-progressSpinner>\r
            <div *ngIf="!loadingStore" class="grid">\r
                <div *ngFor="let avatar of storeAvatars" class="col-6 md:col-4 lg:col-3">\r
                    <div class="store-item">\r
                        <img [src]="avatar.image_path" [alt]="avatar.name" class="store-item-image">\r
                        <div class="store-item-details">\r
                            <span class="item-name">{{ avatar.name }}</span>\r
                            <div class="item-cost">\r
                                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>\r
                                <span>{{ avatar.cost }} Puan</span>\r
                            </div>\r
                            <p-button [label]="isItemInCart(avatar.id) ? 'Sepette' : 'Sepete Ekle'"\r
                                [icon]="isItemInCart(avatar.id) ? 'pi pi-check' : 'pi pi-cart-plus'"\r
                                [disabled]="isItemInCart(avatar.id)" (click)="addToCart(avatar)"\r
                                styleClass="p-button-sm mt-2">\r
                            </p-button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </p-card>\r
    </div>\r
\r
    <!-- Al\u0131\u015Fveri\u015F Sepeti -->\r
    <div class="col-12 lg:col-4">\r
        <p-card>\r
            <ng-template pTemplate="title">\r
                <i class="pi pi-shopping-cart mr-2"></i> Sepetim\r
            </ng-template>\r
            <p-progressSpinner *ngIf="loadingCart"></p-progressSpinner>\r
            <div *ngIf="!loadingCart">\r
                <div *ngIf="cartItems.length > 0">\r
                    <ul class="list-none p-0 m-0">\r
                        <li *ngFor="let item of cartItems" class="flex align-items-center justify-content-between mb-3">\r
                            <div class="flex align-items-center">\r
                                <img [src]="item.image_path" [alt]="item.name" class="cart-item-image mr-2">\r
                                <div>\r
                                    <div class="font-semibold">{{ item.name }}</div>\r
                                    <div class="text-sm text-color-secondary">{{ item.cost }} Puan</div>\r
                                </div>\r
                            </div>\r
                            <p-button icon="pi pi-trash" styleClass="p-button-danger p-button-text p-button-rounded"\r
                                (click)="removeFromCart(item.id)"></p-button>\r
                        </li>\r
                    </ul>\r
                    <p-divider></p-divider>\r
                    <div class="flex justify-content-between font-bold text-lg mb-3">\r
                        <span>Toplam:</span>\r
                        <span>{{ cartTotal }} Puan</span>\r
                    </div>\r
                    <div class="text-center text-sm text-color-secondary mb-3">\r
                        Mevcut Puan\u0131n: {{ userPoints }}\r
                    </div>\r
                    <p-button label="Sat\u0131n Al" icon="pi pi-check" styleClass="w-full"\r
                        [disabled]="cartTotal > userPoints || cartItems.length === 0" (click)="checkout()">\r
                    </p-button>\r
                    <small *ngIf="cartTotal > userPoints" class="p-error block text-center mt-2">Sat\u0131n almak i\xE7in\r
                        yeterli puan\u0131n yok.</small>\r
                </div>\r
                <div *ngIf="cartItems.length === 0" class="text-center p-4">\r
                    <i class="pi pi-cart-plus text-4xl text-color-secondary mb-3"></i>\r
                    <p class="text-color-secondary">Sepetin bo\u015F.</p>\r
                </div>\r
            </div>\r
        </p-card>\r
    </div>\r
</div>`, styles: ["/* src/app/pages/store/store.component.scss */\n.store-item {\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius);\n  text-align: center;\n  transition: all 0.2s ease-in-out;\n  background: var(--surface-card);\n}\n.store-item:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.store-item-image {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-top-left-radius: var(--border-radius);\n  border-top-right-radius: var(--border-radius);\n}\n.store-item-details {\n  padding: 1rem;\n}\n.item-name {\n  font-weight: 600;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.item-cost {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  color: var(--text-color-secondary);\n}\n.cart-item-image {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=store.component.css.map */\n"] }]
  }], () => [{ type: StoreService }, { type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoreComponent, { className: "StoreComponent", filePath: "src/app/pages/store/store.component.ts", lineNumber: 32 });
})();
export {
  StoreComponent
};
//# sourceMappingURL=chunk-WN4COTQZ.js.map
