import {
  ActivatedRoute,
  RouterLink
} from "./chunk-DFW2EA2F.js";
import {
  TagModule
} from "./chunk-TO7Y2NHW.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-P2UDISTN.js";
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
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IXE337CY.js";

// src/app/pages/quiz-detail/quiz-detail.component.ts
var _c0 = (a0, a1) => ({ "bg-green-50": a0, "bg-red-50": a1 });
var _c1 = (a0, a1, a2, a3) => ({ "pi-check": a0, "text-green-500": a1, "pi-times": a2, "text-red-500": a3 });
var _c2 = (a0, a1) => ({ "text-green-600": a0, "text-red-600": a1 });
function QuizDetailComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "a", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Quiz #", ctx_r0.quizId, " Detaylar\u0131");
  }
}
function QuizDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Y\xFCkleniyor...");
    \u0275\u0275elementEnd();
  }
}
function QuizDetailComponent_div_4_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Do\u011Fru Cevap: ");
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detail_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(detail_r2.correct_answer);
  }
}
function QuizDetailComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12)(6, "div");
    \u0275\u0275text(7, "Kullan\u0131c\u0131n\u0131n Cevab\u0131: ");
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, QuizDetailComponent_div_4_div_1_div_10_Template, 4, 1, "div", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const detail_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c0, detail_r2.is_correct, !detail_r2.is_correct));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(10, _c1, detail_r2.is_correct, detail_r2.is_correct, !detail_r2.is_correct, !detail_r2.is_correct));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Soru ", i_r3 + 1, ": ", detail_r2.question_text);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(15, _c2, detail_r2.is_correct, !detail_r2.is_correct));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", detail_r2.user_answer, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !detail_r2.is_correct);
  }
}
function QuizDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, QuizDetailComponent_div_4_div_1_Template, 11, 18, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.details);
  }
}
function QuizDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Bu quiz i\xE7in detay bulunamad\u0131. ");
    \u0275\u0275elementEnd();
  }
}
var QuizDetailComponent = class _QuizDetailComponent {
  route;
  quizService;
  details = [];
  loading = true;
  quizId = null;
  constructor(route, quizService) {
    this.route = route;
    this.quizService = quizService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("quizId");
    if (id) {
      this.quizId = +id;
      this.quizService.getQuizDetails(this.quizId).subscribe((data) => {
        this.details = data;
        this.loading = false;
      });
    }
  }
  static \u0275fac = function QuizDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(QuizService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizDetailComponent, selectors: [["app-quiz-detail"]], decls: 6, vars: 3, consts: [[1, "card"], ["pTemplate", "title"], [4, "ngIf"], ["class", "flex flex-column gap-3", 4, "ngIf"], [1, "flex", "justify-content-between", "align-items-center"], ["routerLink", "/app/history", "pButton", "", "label", "Geri D\xF6n", "icon", "pi pi-arrow-left"], [1, "flex", "flex-column", "gap-3"], ["class", "question-card p-3 border-1 surface-border border-round", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "question-card", "p-3", "border-1", "surface-border", "border-round", 3, "ngClass"], [1, "watermark-icon", "pi", 3, "ngClass"], [1, "relative", "z-1"], [1, "font-bold", "mb-2"], [1, "flex", "flex-column", "gap-2"], [1, "font-semibold", 3, "ngClass"], [1, "font-semibold"]], template: function QuizDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-card");
      \u0275\u0275template(2, QuizDetailComponent_ng_template_2_Template, 4, 1, "ng-template", 1)(3, QuizDetailComponent_div_3_Template, 2, 0, "div", 2)(4, QuizDetailComponent_div_4_Template, 2, 1, "div", 3)(5, QuizDetailComponent_div_5_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.details.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.details.length === 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, CardModule, Card, PrimeTemplate, TagModule, ButtonModule, ButtonDirective, RouterLink], styles: ["\n\n.question-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.question-card[_ngcontent-%COMP%]   .watermark-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 16rem;\n  opacity: 0.08;\n  right: 0.5rem;\n  transform: rotate(-15deg);\n  pointer-events: none;\n}\n/*# sourceMappingURL=quiz-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizDetailComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-detail", standalone: true, imports: [CommonModule, CardModule, TagModule, ButtonModule, RouterLink], template: `<div class="card">\r
    <p-card>\r
        <ng-template pTemplate="title">\r
            <div class="flex justify-content-between align-items-center">\r
                <span>Quiz #{{ quizId }} Detaylar\u0131</span>\r
                <a routerLink="/app/history" pButton label="Geri D\xF6n" icon="pi pi-arrow-left"></a>\r
            </div>\r
        </ng-template>\r
\r
        <div *ngIf="loading">Y\xFCkleniyor...</div>\r
\r
        <div *ngIf="!loading && details.length > 0" class="flex flex-column gap-3">\r
            <div *ngFor="let detail of details; let i = index"\r
                class="question-card p-3 border-1 surface-border border-round"\r
                [ngClass]="{'bg-green-50': detail.is_correct, 'bg-red-50': !detail.is_correct}">\r
\r
                <!-- Watermark \u0130konu -->\r
                <i class="watermark-icon pi" [ngClass]="{\r
                        'pi-check': detail.is_correct, 'text-green-500': detail.is_correct,\r
                        'pi-times': !detail.is_correct, 'text-red-500': !detail.is_correct\r
                   }"></i>\r
\r
                <!-- \u0130\xE7erik -->\r
                <div class="relative z-1">\r
                    <div class="font-bold mb-2">Soru {{ i + 1 }}: {{ detail.question_text }}</div>\r
                    <div class="flex flex-column gap-2">\r
                        <div>Kullan\u0131c\u0131n\u0131n Cevab\u0131:\r
                            <span [ngClass]="{'text-green-600': detail.is_correct, 'text-red-600': !detail.is_correct}"\r
                                class="font-semibold">\r
                                {{ detail.user_answer }}\r
                            </span>\r
                        </div>\r
                        <div *ngIf="!detail.is_correct">Do\u011Fru Cevap: <span class="font-semibold">{{\r
                                detail.correct_answer }}</span></div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div *ngIf="!loading && details.length === 0">\r
            Bu quiz i\xE7in detay bulunamad\u0131.\r
        </div>\r
    </p-card>\r
</div>`, styles: ["/* src/app/pages/quiz-detail/quiz-detail.component.scss */\n.question-card {\n  position: relative;\n  overflow: hidden;\n}\n.question-card .watermark-icon {\n  position: absolute;\n  font-size: 16rem;\n  opacity: 0.08;\n  right: 0.5rem;\n  transform: rotate(-15deg);\n  pointer-events: none;\n}\n/*# sourceMappingURL=quiz-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: QuizService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizDetailComponent, { className: "QuizDetailComponent", filePath: "src/app/pages/quiz-detail/quiz-detail.component.ts", lineNumber: 16 });
})();
export {
  QuizDetailComponent
};
//# sourceMappingURL=chunk-MSPX46Q4.js.map
