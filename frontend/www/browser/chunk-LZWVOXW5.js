import {
  ProgressBar,
  ProgressBarModule
} from "./chunk-ZOYAO6DT.js";
import {
  Router
} from "./chunk-DFW2EA2F.js";
import {
  Tag,
  TagModule
} from "./chunk-TO7Y2NHW.js";
import {
  SortIcon,
  SortableColumn,
  Table,
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
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-P2UDISTN.js";
import "./chunk-RSNC3YL5.js";
import {
  QuizService
} from "./chunk-5C5N5YGI.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  Card,
  CardModule,
  CommonModule,
  DatePipe,
  FilterService,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule
} from "./chunk-5QUT4BWV.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
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
  ɵɵtextInterpolate2
} from "./chunk-IXE337CY.js";

// node_modules/@primeuix/styles/dist/skeleton/index.mjs
var style = "\n    .p-skeleton {\n        display: block;\n        overflow: hidden;\n        background: dt('skeleton.background');\n        border-radius: dt('skeleton.border.radius');\n    }\n\n    .p-skeleton::after {\n        content: '';\n        animation: p-skeleton-animation 1.2s infinite;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        transform: translateX(-100%);\n        z-index: 1;\n        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));\n    }\n\n    [dir='rtl'] .p-skeleton::after {\n        animation-name: p-skeleton-animation-rtl;\n    }\n\n    .p-skeleton-circle {\n        border-radius: 50%;\n    }\n\n    .p-skeleton-animation-none::after {\n        animation: none;\n    }\n\n    @keyframes p-skeleton-animation {\n        from {\n            transform: translateX(-100%);\n        }\n        to {\n            transform: translateX(100%);\n        }\n    }\n\n    @keyframes p-skeleton-animation-rtl {\n        from {\n            transform: translateX(100%);\n        }\n        to {\n            transform: translateX(-100%);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-skeleton.mjs
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: ({
    instance
  }) => ["p-skeleton p-component", {
    "p-skeleton-circle": instance.shape === "circle",
    "p-skeleton-animation-none": instance.animation === "none"
  }]
};
var SkeletonStyle = class _SkeletonStyle extends BaseStyle {
  name = "skeleton";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SkeletonStyle_BaseFactory;
    return function SkeletonStyle_Factory(__ngFactoryType__) {
      return (\u0275SkeletonStyle_BaseFactory || (\u0275SkeletonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_SkeletonStyle)))(__ngFactoryType__ || _SkeletonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SkeletonStyle,
    factory: _SkeletonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonStyle, [{
    type: Injectable
  }], null, null);
})();
var SkeletonClasses;
(function(SkeletonClasses2) {
  SkeletonClasses2["root"] = "p-skeleton";
})(SkeletonClasses || (SkeletonClasses = {}));
var SKELETON_INSTANCE = new InjectionToken("SKELETON_INSTANCE");
var Skeleton = class _Skeleton extends BaseComponent {
  $pcSkeleton = inject(SKELETON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Shape of the element.
   * @group Props
   */
  shape = "rectangle";
  /**
   * Type of the animation.
   * @gruop Props
   */
  animation = "wave";
  /**
   * Border radius of the element, defaults to value from theme.
   * @group Props
   */
  borderRadius;
  /**
   * Size of the skeleton.
   * @group Props
   */
  size;
  /**
   * Width of the element.
   * @group Props
   */
  width = "100%";
  /**
   * Height of the element.
   * @group Props
   */
  height = "1rem";
  _componentStyle = inject(SkeletonStyle);
  get containerStyle() {
    const inlineStyles2 = this._componentStyle?.inlineStyles["root"];
    let style2;
    if (this.size) style2 = __spreadProps(__spreadValues({}, inlineStyles2), {
      width: this.size,
      height: this.size,
      borderRadius: this.borderRadius
    });
    else style2 = __spreadProps(__spreadValues({}, inlineStyles2), {
      width: this.width,
      height: this.height,
      borderRadius: this.borderRadius
    });
    return style2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Skeleton_BaseFactory;
    return function Skeleton_Factory(__ngFactoryType__) {
      return (\u0275Skeleton_BaseFactory || (\u0275Skeleton_BaseFactory = \u0275\u0275getInheritedFactory(_Skeleton)))(__ngFactoryType__ || _Skeleton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Skeleton,
    selectors: [["p-skeleton"]],
    hostVars: 5,
    hostBindings: function Skeleton_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-hidden", true);
        \u0275\u0275styleMap(ctx.containerStyle);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      shape: "shape",
      animation: "animation",
      borderRadius: "borderRadius",
      size: "size",
      width: "width",
      height: "height"
    },
    features: [\u0275\u0275ProvidersFeature([SkeletonStyle, {
      provide: SKELETON_INSTANCE,
      useExisting: _Skeleton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Skeleton
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 0,
    vars: 0,
    template: function Skeleton_Template(rf, ctx) {
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Skeleton, [{
    type: Component,
    args: [{
      selector: "p-skeleton",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ``,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [SkeletonStyle, {
        provide: SKELETON_INSTANCE,
        useExisting: Skeleton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Skeleton
      }],
      host: {
        "[attr.aria-hidden]": "true",
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "containerStyle"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    borderRadius: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
var SkeletonModule = class _SkeletonModule {
  static \u0275fac = function SkeletonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkeletonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SkeletonModule,
    imports: [Skeleton, SharedModule],
    exports: [Skeleton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Skeleton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonModule, [{
    type: NgModule,
    args: [{
      imports: [Skeleton, SharedModule],
      exports: [Skeleton, SharedModule]
    }]
  }], null, null);
})();

// src/app/pages/quiz-history/quiz-history.component.ts
var _c0 = () => ["subject_name", "topic_name"];
function QuizHistoryComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "th", 8);
    \u0275\u0275elementStart(2, "th", 9);
    \u0275\u0275text(3, "Ders ");
    \u0275\u0275element(4, "p-sortIcon", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 11);
    \u0275\u0275text(6, "Konu ");
    \u0275\u0275element(7, "p-sortIcon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 13);
    \u0275\u0275text(9, "Skor ");
    \u0275\u0275element(10, "p-sortIcon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 13);
    \u0275\u0275text(12, "Ba\u015Far\u0131 ");
    \u0275\u0275element(13, "p-sortIcon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 15);
    \u0275\u0275text(15, "Zorluk ");
    \u0275\u0275element(16, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 17);
    \u0275\u0275text(18, "Tarih ");
    \u0275\u0275element(19, "p-sortIcon", 18);
    \u0275\u0275elementEnd()();
  }
}
function QuizHistoryComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "button", 19);
    \u0275\u0275listener("click", function QuizHistoryComponent_ng_template_5_Template_button_click_2_listener() {
      const quiz_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewDetails(quiz_r2.quiz_id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 20);
    \u0275\u0275element(11, "p-progressBar", 21);
    \u0275\u0275elementStart(12, "span", 22);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "p-tag", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const quiz_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(quiz_r2.subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(quiz_r2.topic_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", quiz_r2.score, " / ", quiz_r2.total_questions);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.calculatePercentage(quiz_r2.score, quiz_r2.total_questions))("showValue", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.calculatePercentage(quiz_r2.score, quiz_r2.total_questions), "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("severity", ctx_r2.getSeverity(quiz_r2.difficulty) || "info")("value", quiz_r2.difficulty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 10, quiz_r2.created_at, "dd/MM/yyyy HH:mm"));
  }
}
function QuizHistoryComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-skeleton", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "p-skeleton");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "p-skeleton");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "p-skeleton");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "p-skeleton");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "p-skeleton");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275element(14, "p-skeleton");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275element(16, "p-skeleton");
    \u0275\u0275elementEnd()();
  }
}
function QuizHistoryComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2, "Hen\xFCz tamamlanm\u0131\u015F bir quiz bulunmuyor.");
    \u0275\u0275elementEnd()();
  }
}
var QuizHistoryComponent = class _QuizHistoryComponent {
  quizService;
  router;
  history = [];
  loading = true;
  constructor(quizService, router) {
    this.quizService = quizService;
    this.router = router;
  }
  ngOnInit() {
    this.quizService.getQuizHistory().subscribe((data) => {
      this.history = data;
      this.loading = false;
    });
  }
  viewDetails(quizId) {
    this.router.navigate(["/app/history", quizId]);
  }
  getSeverity(difficulty) {
    switch (difficulty) {
      case "easy":
        return "success";
      case "medium":
        return "warning";
      case "hard":
        return "danger";
      default:
        return "info";
    }
  }
  calculatePercentage(score, total) {
    if (total === 0) {
      return 0;
    }
    return Math.round(score / total * 100);
  }
  static \u0275fac = function QuizHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizHistoryComponent)(\u0275\u0275directiveInject(QuizService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizHistoryComponent, selectors: [["app-quiz-history"]], features: [\u0275\u0275ProvidersFeature([FilterService])], decls: 8, vars: 5, consts: [["dt", ""], [1, "card"], ["header", "Quiz Ge\xE7mi\u015Fim"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-striped", 3, "value", "paginator", "rows", "globalFilterFields"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "loadingbody"], ["pTemplate", "emptymessage"], [1, "w-1"], ["pSortableColumn", "subject_name"], ["field", "subject_name"], ["pSortableColumn", "topic_name"], ["field", "topic_name"], ["pSortableColumn", "score"], ["field", "score"], ["pSortableColumn", "difficulty"], ["field", "difficulty"], ["pSortableColumn", "created_at"], ["field", "created_at"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button-rounded", "p-button-text", 3, "click"], [1, "flex", "align-items-center"], ["styleClass", "h-1rem flex-1", 3, "value", "showValue"], [1, "ml-2", "font-bold"], [3, "severity", "value"], ["shape", "circle", "size", "2rem"], ["colspan", "7"]], template: function QuizHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "p-card", 2)(2, "p-table", 3, 0);
      \u0275\u0275template(4, QuizHistoryComponent_ng_template_4_Template, 20, 0, "ng-template", 4)(5, QuizHistoryComponent_ng_template_5_Template, 19, 13, "ng-template", 5)(6, QuizHistoryComponent_ng_template_6_Template, 17, 0, "ng-template", 6)(7, QuizHistoryComponent_ng_template_7_Template, 3, 0, "ng-template", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.history)("paginator", true)("rows", 10)("globalFilterFields", \u0275\u0275pureFunction0(4, _c0));
    }
  }, dependencies: [CommonModule, TableModule, Table, PrimeTemplate, SortableColumn, SortIcon, ButtonModule, ButtonDirective, TagModule, Tag, CardModule, Card, SkeletonModule, Skeleton, ProgressBarModule, ProgressBar, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-history", standalone: true, imports: [CommonModule, TableModule, ButtonModule, TagModule, CardModule, SkeletonModule, ProgressBarModule], providers: [FilterService], template: `<div class="card">\r
    <p-card header="Quiz Ge\xE7mi\u015Fim">\r
        <p-table #dt [value]="history" [paginator]="true" [rows]="10" responsiveLayout="scroll"\r
            [globalFilterFields]="['subject_name', 'topic_name']" styleClass="p-datatable-striped">\r
            <ng-template pTemplate="header" let-columns>\r
                <tr>\r
                    <!-- Buton her zaman en solda -->\r
                    <th class="w-1"></th>\r
                    <th pSortableColumn="subject_name">Ders <p-sortIcon field="subject_name"></p-sortIcon></th>\r
                    <th pSortableColumn="topic_name">Konu <p-sortIcon field="topic_name"></p-sortIcon></th>\r
                    <th pSortableColumn="score">Skor <p-sortIcon field="score"></p-sortIcon></th>\r
                    <th pSortableColumn="score">Ba\u015Far\u0131 <p-sortIcon field="score"></p-sortIcon></th>\r
                    <th pSortableColumn="difficulty">Zorluk <p-sortIcon field="difficulty"></p-sortIcon></th>\r
                    <th pSortableColumn="created_at">Tarih <p-sortIcon field="created_at"></p-sortIcon></th>\r
                </tr>\r
            </ng-template>\r
            <ng-template pTemplate="body" let-quiz let-rowIndex="rowIndex">\r
                <tr>\r
                    <!-- Buton her zaman en solda -->\r
                    <td>\r
                        <button pButton pRipple type="button" icon="pi pi-search" (click)="viewDetails(quiz.quiz_id)"\r
                            class="p-button-rounded p-button-text"></button>\r
                    </td>\r
                    <td>{{ quiz.subject_name }}</td>\r
                    <td>{{ quiz.topic_name }}</td>\r
                    <td>{{ quiz.score }} / {{ quiz.total_questions }}</td>\r
                    <td>\r
                        <div class="flex align-items-center">\r
                            <p-progressBar [value]="calculatePercentage(quiz.score, quiz.total_questions)"\r
                                [showValue]="false" styleClass="h-1rem flex-1"></p-progressBar>\r
                            <span class="ml-2 font-bold">{{ calculatePercentage(quiz.score, quiz.total_questions)\r
                                }}%</span>\r
                        </div>\r
                    </td>\r
                    <td><p-tag [severity]="getSeverity(quiz.difficulty) || 'info'" [value]="quiz.difficulty"></p-tag>\r
                    </td>\r
                    <td>{{ quiz.created_at | date:'dd/MM/yyyy HH:mm' }}</td>\r
                </tr>\r
            </ng-template>\r
            <ng-template pTemplate="loadingbody">\r
                <tr>\r
                    <td><p-skeleton shape="circle" size="2rem"></p-skeleton></td>\r
                    <td><p-skeleton></p-skeleton></td>\r
                    <td><p-skeleton></p-skeleton></td>\r
                    <td><p-skeleton></p-skeleton></td>\r
                    <td><p-skeleton></p-skeleton></td>\r
                    <td><p-skeleton></p-skeleton></td>\r
                    <td><p-skeleton></p-skeleton></td>\r
                    <td><p-skeleton></p-skeleton></td>\r
                </tr>\r
            </ng-template>\r
            <ng-template pTemplate="emptymessage">\r
                <tr>\r
                    <td colspan="7">Hen\xFCz tamamlanm\u0131\u015F bir quiz bulunmuyor.</td>\r
                </tr>\r
            </ng-template>\r
        </p-table>\r
    </p-card>\r
</div>` }]
  }], () => [{ type: QuizService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizHistoryComponent, { className: "QuizHistoryComponent", filePath: "src/app/pages/quiz-history/quiz-history.component.ts", lineNumber: 20 });
})();
export {
  QuizHistoryComponent
};
//# sourceMappingURL=chunk-LZWVOXW5.js.map
