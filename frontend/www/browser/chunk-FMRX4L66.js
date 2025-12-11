import {
  Avatar,
  AvatarModule
} from "./chunk-ZRP7PDR6.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-7KNBXFI3.js";
import {
  TableModule
} from "./chunk-NL67LZYP.js";
import "./chunk-GMZNRBVV.js";
import "./chunk-AJ4EVOAF.js";
import "./chunk-SI3KMQDW.js";
import "./chunk-MQYBVSL2.js";
import "./chunk-UFKIQL7H.js";
import "./chunk-MF2TYEEY.js";
import "./chunk-MGMRA34M.js";
import "./chunk-G2NB3UHO.js";
import "./chunk-P2UDISTN.js";
import "./chunk-RSNC3YL5.js";
import {
  QuizService
} from "./chunk-5C5N5YGI.js";
import {
  Card,
  CardModule,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  PrimeTemplate
} from "./chunk-5QUT4BWV.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IXE337CY.js";

// src/app/pages/leaderboard/leaderboard.component.ts
function LeaderboardComponent_ng_template_2_Template(rf, ctx) {
}
function LeaderboardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "p-progressSpinner");
    \u0275\u0275elementEnd();
  }
}
function LeaderboardComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-avatar", 10);
    \u0275\u0275elementStart(4, "div", 11)(5, "div", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 14)(10, "div", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "i", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.getRankIconClass(i_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("image", user_r1.profile_picture || "assets/images/avatars/avatar-placeholder.png");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r1.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", user_r1.quizzes_completed, " quiz tamamlad\u0131");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", user_r1.total_score, " Puan");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getRankIcon(i_r2));
  }
}
function LeaderboardComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 6);
    \u0275\u0275template(2, LeaderboardComponent_div_4_div_2_Template, 13, 7, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.leaderboard);
  }
}
var LeaderboardComponent = class _LeaderboardComponent {
  quizService;
  leaderboard = [];
  loading = true;
  constructor(quizService) {
    this.quizService = quizService;
  }
  ngOnInit() {
    this.quizService.getLeaderboard().subscribe((data) => {
      this.leaderboard = data;
      this.loading = false;
    });
  }
  getRankIcon(index) {
    if (index === 0)
      return "pi pi-crown text-yellow-500";
    if (index === 1)
      return "pi pi-star-fill text-gray-400";
    if (index === 2)
      return "pi pi-star text-orange-400";
    return "";
  }
  getRankIconClass(index) {
    if (index === 0)
      return "rank-gold";
    if (index === 1)
      return "rank-silver";
    if (index === 2)
      return "rank-bronze";
    return "rank-default";
  }
  static \u0275fac = function LeaderboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaderboardComponent)(\u0275\u0275directiveInject(QuizService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaderboardComponent, selectors: [["app-leaderboard"]], decls: 5, vars: 2, consts: [[1, "card"], ["header", "Liderlik Tablosu"], ["pTemplate", "subheader"], ["class", "text-center", 4, "ngIf"], [4, "ngIf"], [1, "text-center"], [1, "leaderboard-list"], ["class", "leaderboard-item flex align-items-center p-3 mb-3 border-round-lg", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "leaderboard-item", "flex", "align-items-center", "p-3", "mb-3", "border-round-lg", 3, "ngClass"], [1, "rank-number", "text-2xl", "font-bold", "mr-4"], ["shape", "circle", "size", "xlarge", 1, "mr-3", 3, "image"], [1, "flex-1"], [1, "font-bold", "text-lg"], [1, "text-sm", "text-color-secondary"], [1, "flex", "flex-column", "align-items-end"], [1, "score", "font-bold", "text-xl"], [1, "mt-1", 2, "font-size", "1.5rem", 3, "ngClass"]], template: function LeaderboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-card", 1);
      \u0275\u0275template(2, LeaderboardComponent_ng_template_2_Template, 0, 0, "ng-template", 2)(3, LeaderboardComponent_div_3_Template, 2, 0, "div", 3)(4, LeaderboardComponent_div_4_Template, 3, 1, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.leaderboard.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, CardModule, Card, PrimeTemplate, TableModule, ProgressSpinnerModule, ProgressSpinner, AvatarModule, Avatar], styles: ["\n\n[_nghost-%COMP%]     .leaderboard-list {\n  max-width: 600px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]     .leaderboard-item {\n  background-color: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n[_nghost-%COMP%]     .leaderboard-item:hover {\n  transform: scale(1.02);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]     .rank-gold {\n  background:\n    linear-gradient(\n      45deg,\n      #FFD700,\n      #FFA500);\n  border-left: 5px solid #FFC107 !important;\n  color: #fff;\n}\n[_nghost-%COMP%]     .rank-gold .score {\n  color: #fff;\n}\n[_nghost-%COMP%]     .rank-silver {\n  background:\n    linear-gradient(\n      45deg,\n      #E0E0E0,\n      #BDBDBD);\n  border-left: 5px solid #9E9E9E !important;\n  color: var(--text-color);\n}\n[_nghost-%COMP%]     .rank-silver .score {\n  color: var(--text-color);\n}\n[_nghost-%COMP%]     .rank-bronze {\n  background:\n    linear-gradient(\n      45deg,\n      #CD7F32,\n      #A0522D);\n  border-left: 5px solid #8D6E63 !important;\n  color: #fff;\n}\n[_nghost-%COMP%]     .rank-bronze .score {\n  color: #fff;\n}\n/*# sourceMappingURL=leaderboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaderboardComponent, [{
    type: Component,
    args: [{ selector: "app-leaderboard", standalone: true, imports: [CommonModule, CardModule, TableModule, ProgressSpinnerModule, AvatarModule], template: `<div class="card">\r
    <p-card header="Liderlik Tablosu">\r
        <ng-template pTemplate="subheader">\r
\r
        </ng-template>\r
\r
        <div *ngIf="loading" class="text-center">\r
            <p-progressSpinner></p-progressSpinner>\r
        </div>\r
\r
        <div *ngIf="!loading && leaderboard.length > 0">\r
            <div class="leaderboard-list">\r
                <div *ngFor="let user of leaderboard; let i = index"\r
                    class="leaderboard-item flex align-items-center p-3 mb-3 border-round-lg"\r
                    [ngClass]="getRankIconClass(i)">\r
                    <!-- S\u0131ralama Numaras\u0131 -->\r
                    <div class="rank-number text-2xl font-bold mr-4">{{ i + 1 }}</div>\r
\r
                    <!-- Kullan\u0131c\u0131 Bilgisi -->\r
                    <p-avatar [image]="user.profile_picture || 'assets/images/avatars/avatar-placeholder.png'"\r
                        shape="circle" size="xlarge" class="mr-3"></p-avatar>\r
                    <div class="flex-1">\r
                        <div class="font-bold text-lg">{{ user.username }}</div>\r
                        <div class="text-sm text-color-secondary">{{ user.quizzes_completed }} quiz tamamlad\u0131</div>\r
                    </div>\r
\r
                    <!-- Puan ve \u0130kon -->\r
                    <div class="flex flex-column align-items-end">\r
                        <div class="score font-bold text-xl">{{ user.total_score }} Puan</div>\r
                        <i [ngClass]="getRankIcon(i)" class="mt-1" style="font-size: 1.5rem;"></i>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </p-card>\r
</div>`, styles: ["/* src/app/pages/leaderboard/leaderboard.component.scss */\n:host ::ng-deep .leaderboard-list {\n  max-width: 600px;\n  margin: 0 auto;\n}\n:host ::ng-deep .leaderboard-item {\n  background-color: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n:host ::ng-deep .leaderboard-item:hover {\n  transform: scale(1.02);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n:host ::ng-deep .rank-gold {\n  background:\n    linear-gradient(\n      45deg,\n      #FFD700,\n      #FFA500);\n  border-left: 5px solid #FFC107 !important;\n  color: #fff;\n}\n:host ::ng-deep .rank-gold .score {\n  color: #fff;\n}\n:host ::ng-deep .rank-silver {\n  background:\n    linear-gradient(\n      45deg,\n      #E0E0E0,\n      #BDBDBD);\n  border-left: 5px solid #9E9E9E !important;\n  color: var(--text-color);\n}\n:host ::ng-deep .rank-silver .score {\n  color: var(--text-color);\n}\n:host ::ng-deep .rank-bronze {\n  background:\n    linear-gradient(\n      45deg,\n      #CD7F32,\n      #A0522D);\n  border-left: 5px solid #8D6E63 !important;\n  color: #fff;\n}\n:host ::ng-deep .rank-bronze .score {\n  color: #fff;\n}\n/*# sourceMappingURL=leaderboard.component.css.map */\n"] }]
  }], () => [{ type: QuizService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaderboardComponent, { className: "LeaderboardComponent", filePath: "src/app/pages/leaderboard/leaderboard.component.ts", lineNumber: 16 });
})();
export {
  LeaderboardComponent
};
//# sourceMappingURL=chunk-FMRX4L66.js.map
