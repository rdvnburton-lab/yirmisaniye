import {
  Router,
  RouterModule
} from "./chunk-DFW2EA2F.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-P2UDISTN.js";
import {
  Ripple,
  RippleModule
} from "./chunk-RSNC3YL5.js";
import {
  CardModule,
  CommonModule,
  NgForOf
} from "./chunk-5QUT4BWV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IXE337CY.js";

// src/app/pages/dashboard/dashboard.ts
function Dashboard_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275listener("click", function Dashboard_div_14_Template_div_click_1_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startCategoryQuiz(category_r2));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", category_r2.color);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", category_r2.icon, " category-icon"));
    \u0275\u0275styleProp("color", category_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r2.name);
  }
}
var Dashboard = class _Dashboard {
  router;
  categories = [
    { id: 1, name: "Matematik", icon: "pi-calculator", color: "#FF6B6B", slug: "math" },
    { id: 3, name: "Hayat Bilgisi", icon: "pi-compass", color: "#4ECDC4", slug: "life-science" },
    { id: 4, name: "Fen Bilimleri", icon: "pi-bolt", color: "#45B7D1", slug: "science" },
    { id: 2, name: "T\xFCrk\xE7e", icon: "pi-book", color: "#b762f0ff", slug: "turkish" }
  ];
  constructor(router) {
    this.router = router;
  }
  startQuiz() {
    this.router.navigate(["/app/quiz"]);
  }
  startCategoryQuiz(category) {
    this.router.navigate(["/app/quiz"], {
      state: {
        preselectedSubject: {
          subject_id: category.id,
          subject_name: category.name,
          icon: category.icon
        }
      }
    });
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 17, vars: 1, consts: [[1, "dashboard-container"], [1, "floating-shapes"], [1, "shape"], [1, "header-section"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "grid", "category-section", "justify-content-center"], ["class", "col-6 md:col-3", 4, "ngFor", "ngForOf"], [1, "start-section"], ["pButton", "", "pRipple", "", "type", "button", "label", "Hemen Ba\u015Fla!", 1, "p-button-xl", "start-button", 3, "click"], [1, "col-6", "md:col-3"], [1, "category-card", "h-full", 3, "click"], [1, "category-name"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 2)(4, "div", 2)(5, "div", 2)(6, "div", 2)(7, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 3)(9, "h1", 4);
      \u0275\u0275text(10, "Hadi \xD6\u011Frenelim ve E\u011Flenelim!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 5);
      \u0275\u0275text(12, "Hangi konuda kendini denemek istersin?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 6);
      \u0275\u0275template(14, Dashboard_div_14_Template, 5, 8, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8)(16, "button", 9);
      \u0275\u0275listener("click", function Dashboard_Template_button_click_16_listener() {
        return ctx.startQuiz();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.categories);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    RouterModule,
    CardModule,
    ButtonModule,
    ButtonDirective,
    RippleModule,
    Ripple
  ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2rem;\n  text-align: center;\n  background: transparent;\n  height: calc(100vh - 9rem);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: "Nunito", sans-serif;\n}\n.header-section[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDownFadeIn 1s ease-out forwards;\n  background: rgba(var(--surface-a-rgb), 0.7);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  padding: 2rem;\n  border-radius: 12px;\n  margin-bottom: 3rem;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 900;\n  color: var(--primary-color);\n  margin: 0;\n  font-family: "Nunito", sans-serif;\n}\n.welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--text-color-secondary);\n  margin-top: 0.5rem;\n}\n@keyframes _ngcontent-%COMP%_slideDownFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.category-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  gap: 2rem;\n}\n.category-card[_ngcontent-%COMP%] {\n  background: rgba(var(--surface-a-rgb), 0.7);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  padding: 1.5rem;\n  border-radius: 12px;\n  border-bottom: 5px solid;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px) perspective(1000px) rotateX(5deg);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n}\n.category-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 0.75rem;\n}\n.category-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-color);\n  font-family: "Nunito", sans-serif;\n}\n.start-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.start-button[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n  padding: 1rem 2.5rem !important;\n  border-radius: 50px !important;\n  background:\n    linear-gradient(\n      45deg,\n      #ff5f6d,\n      #ffc371);\n  border: none;\n  box-shadow: 0 4px 20px rgba(255, 95, 109, 0.6);\n  animation: _ngcontent-%COMP%_glowing-button 2.5s infinite ease-in-out;\n  transition: all 0.3s ease;\n}\n.start-button[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      45deg,\n      #ff5f6d,\n      #ffc371);\n  transform: scale(1.05);\n  box-shadow: 0 6px 25px rgba(255, 95, 109, 0.8);\n}\n@media screen and (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: calc(100vh - 9rem);\n    overflow-y: auto;\n    justify-content: flex-start;\n    padding-top: 4rem;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .category-section[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  .start-section[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_glowing-button {\n  0% {\n    box-shadow: 0 0 5px var(--primary-400);\n  }\n  50% {\n    box-shadow: 0 0 25px rgba(255, 195, 113, 0.8);\n  }\n  100% {\n    box-shadow: 0 0 5px var(--primary-400);\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [
      CommonModule,
      RouterModule,
      CardModule,
      ButtonModule,
      RippleModule
    ], template: '<div class="dashboard-container">\r\n    <!-- Arka Planda S\xFCz\xFClen \u015Eekiller -->\r\n    <div class="floating-shapes">\r\n        <div class="shape"></div>\r\n        <div class="shape"></div>\r\n        <div class="shape"></div>\r\n        <div class="shape"></div>\r\n        <div class="shape"></div>\r\n        <div class="shape"></div>\r\n    </div>\r\n\r\n    <!-- Ba\u015Fl\u0131k -->\r\n    <div class="header-section">\r\n        <h1 class="welcome-title">Hadi \xD6\u011Frenelim ve E\u011Flenelim!</h1>\r\n        <p class="welcome-subtitle">Hangi konuda kendini denemek istersin?</p>\r\n    </div>\r\n\r\n    <!-- Kategori Kartlar\u0131 -->\r\n    <div class="grid category-section justify-content-center">\r\n        <div *ngFor="let category of categories" class="col-6 md:col-3">\r\n            <div class="category-card h-full" (click)="startCategoryQuiz(category)"\r\n                [style.border-color]="category.color">\r\n                <i class="pi {{ category.icon }} category-icon" [style.color]="category.color"></i>\r\n                <span class="category-name">{{ category.name }}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Ana Ba\u015Flat Butonu -->\r\n    <div class="start-section">\r\n        <button pButton pRipple type="button" label="Hemen Ba\u015Fla!" class="p-button-xl start-button"\r\n            (click)="startQuiz()"></button>\r\n    </div>\r\n</div>', styles: ['@charset "UTF-8";\n\n/* src/app/pages/dashboard/dashboard.scss */\n:host {\n  display: block;\n}\n.dashboard-container {\n  position: relative;\n  padding: 2rem;\n  text-align: center;\n  background: transparent;\n  height: calc(100vh - 9rem);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: "Nunito", sans-serif;\n}\n.header-section {\n  animation: slideDownFadeIn 1s ease-out forwards;\n  background: rgba(var(--surface-a-rgb), 0.7);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  padding: 2rem;\n  border-radius: 12px;\n  margin-bottom: 3rem;\n}\n.welcome-title {\n  font-size: 3.5rem;\n  font-weight: 900;\n  color: var(--primary-color);\n  margin: 0;\n  font-family: "Nunito", sans-serif;\n}\n.welcome-subtitle {\n  font-size: 1.25rem;\n  color: var(--text-color-secondary);\n  margin-top: 0.5rem;\n}\n@keyframes slideDownFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.category-section {\n  margin-bottom: 3rem;\n  gap: 2rem;\n}\n.category-card {\n  background: rgba(var(--surface-a-rgb), 0.7);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  padding: 1.5rem;\n  border-radius: 12px;\n  border-bottom: 5px solid;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.category-card:hover {\n  transform: translateY(-10px) perspective(1000px) rotateX(5deg);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n}\n.category-icon {\n  font-size: 3rem;\n  margin-bottom: 0.75rem;\n}\n.category-name {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-color);\n  font-family: "Nunito", sans-serif;\n}\n.start-section {\n  margin-top: 1rem;\n}\n.start-button {\n  font-size: 1.5rem !important;\n  padding: 1rem 2.5rem !important;\n  border-radius: 50px !important;\n  background:\n    linear-gradient(\n      45deg,\n      #ff5f6d,\n      #ffc371);\n  border: none;\n  box-shadow: 0 4px 20px rgba(255, 95, 109, 0.6);\n  animation: glowing-button 2.5s infinite ease-in-out;\n  transition: all 0.3s ease;\n}\n.start-button:hover {\n  background:\n    linear-gradient(\n      45deg,\n      #ff5f6d,\n      #ffc371);\n  transform: scale(1.05);\n  box-shadow: 0 6px 25px rgba(255, 95, 109, 0.8);\n}\n@media screen and (max-width: 768px) {\n  .dashboard-container {\n    height: auto;\n    min-height: calc(100vh - 9rem);\n    overflow-y: auto;\n    justify-content: flex-start;\n    padding-top: 4rem;\n  }\n  .welcome-title {\n    font-size: 2.5rem;\n  }\n  .category-section {\n    margin-bottom: 2rem;\n  }\n  .start-section {\n    margin-bottom: 2rem;\n  }\n}\n@keyframes glowing-button {\n  0% {\n    box-shadow: 0 0 5px var(--primary-400);\n  }\n  50% {\n    box-shadow: 0 0 25px rgba(255, 195, 113, 0.8);\n  }\n  100% {\n    box-shadow: 0 0 5px var(--primary-400);\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/pages/dashboard/dashboard.ts", lineNumber: 21 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-62H5M7FP.js.map
