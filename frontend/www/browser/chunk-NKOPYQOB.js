import {
  ChartModule,
  UIChart
} from "./chunk-GW32KEH5.js";
import {
  Divider,
  DividerModule
} from "./chunk-HKSNGYNW.js";
import {
  ProgressBar,
  ProgressBarModule
} from "./chunk-ZOYAO6DT.js";
import {
  Tag,
  TagModule
} from "./chunk-TO7Y2NHW.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-7KNBXFI3.js";
import {
  TooltipModule
} from "./chunk-MGMRA34M.js";
import "./chunk-G2NB3UHO.js";
import {
  QuizService
} from "./chunk-5C5N5YGI.js";
import {
  Card,
  CardModule,
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
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
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IXE337CY.js";

// src/app/pages/quiz-stats/quiz-stats.component.ts
function QuizStatsComponent_p_progressSpinner_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner");
  }
}
function QuizStatsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function QuizStatsComponent_div_3_li_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 32)(1, "div", 33);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "div")(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(8, "p-tag", 35);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const topic_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", topic_r2.subject_icon || "pi-tag", " text-xl mr-3 text-primary"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(topic_r2.topic_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topic_r2.subject_name);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275pipeBind2(9, 7, topic_r2.success_rate, "1.0-0") + "%")("rounded", true);
  }
}
function QuizStatsComponent_div_3_li_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 36)(1, "span", 37);
    \u0275\u0275text(2, "Hen\xFCz yeterli veri yok.");
    \u0275\u0275elementEnd()();
  }
}
function QuizStatsComponent_div_3_p_chart_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-chart", 38);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r0.difficultyChartData)("options", ctx_r0.difficultyChartOptions);
  }
}
function QuizStatsComponent_div_3_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 37);
    \u0275\u0275text(2, "Hen\xFCz yeterli veri yok.");
    \u0275\u0275elementEnd()();
  }
}
function QuizStatsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "p-card", 7)(3, "div", 8)(4, "div", 9);
    \u0275\u0275element(5, "i", 10);
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12);
    \u0275\u0275text(9, "Toplam Puan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275element(11, "i", 13);
    \u0275\u0275elementStart(12, "div", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275text(15, "Quiz Say\u0131s\u0131");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 9);
    \u0275\u0275element(17, "i", 15);
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12);
    \u0275\u0275text(21, "Do\u011Fru Cevap");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 9);
    \u0275\u0275element(23, "i", 16);
    \u0275\u0275elementStart(24, "div", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 12);
    \u0275\u0275text(27, "Yanl\u0131\u015F Cevap");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(28, "p-divider");
    \u0275\u0275elementStart(29, "div", 17)(30, "div", 18);
    \u0275\u0275text(31, "Genel Ba\u015Far\u0131 Oran\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p-progressBar", 19)(33, "span", 20);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(35, "div", 21)(36, "p-card", 22);
    \u0275\u0275element(37, "p-chart", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 24)(39, "p-card", 25)(40, "ul", 26);
    \u0275\u0275template(41, QuizStatsComponent_div_3_li_41_Template, 10, 10, "li", 27)(42, QuizStatsComponent_div_3_li_42_Template, 3, 0, "li", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 24)(44, "p-card", 29)(45, "div", 30);
    \u0275\u0275template(46, QuizStatsComponent_div_3_p_chart_46_Template, 1, 2, "p-chart", 31)(47, QuizStatsComponent_div_3_div_47_Template, 3, 0, "div", 28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats.total_score);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.stats.quizzes_completed);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.stats.total_correct_answers);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.stats.total_wrong_answers);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.stats.overall_success_rate)("showValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.overall_success_rate, "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r0.performanceChartData)("options", ctx_r0.performanceChartOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.stats.best_topics);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.stats.best_topics.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.difficultyChartData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.difficultyChartData);
  }
}
var QuizStatsComponent = class _QuizStatsComponent {
  quizService;
  loading = true;
  error = null;
  stats = null;
  performanceChartData;
  performanceChartOptions;
  difficultyChartData;
  difficultyChartOptions;
  constructor(quizService) {
    this.quizService = quizService;
  }
  ngOnInit() {
    this.quizService.getProfileStats().subscribe({
      next: (data) => {
        this.stats = data;
        setTimeout(() => {
          this.setupPerformanceChart(data);
          this.setupDifficultyChart(data);
          this.loading = false;
        });
      },
      error: (err) => {
        this.error = "\u0130statistikler y\xFCklenirken bir hata olu\u015Ftu.";
        this.loading = false;
        console.error(err);
      }
    });
  }
  getDifficultyTagSeverity(difficulty) {
    switch (difficulty) {
      case "easy":
        return "success";
      case "medium":
        return "warn";
      case "hard":
        return "danger";
      default:
        return "info";
    }
  }
  setupPerformanceChart(data) {
    if (!data.performance_over_time || data.performance_over_time.length === 0) {
      this.performanceChartData = {};
      this.performanceChartOptions = {};
      return;
    }
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
    let surfaceBorder = documentStyle.getPropertyValue("--surface-border").trim();
    let primaryColor = documentStyle.getPropertyValue("--primary-500").trim();
    if (!primaryColor) {
      primaryColor = "#3B82F6";
    }
    if (!surfaceBorder) {
      surfaceBorder = "#dee2e6";
    }
    const ctx = document.createElement("canvas").getContext("2d");
    let gradient = null;
    if (ctx) {
      gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, primaryColor + "4D");
      gradient.addColorStop(1, primaryColor + "00");
    }
    this.performanceChartData = {
      labels: data.performance_over_time.map((p) => new Date(p.quiz_date).toLocaleDateString("tr-TR", { day: "numeric", month: "short" })),
      datasets: [
        {
          label: "G\xFCnl\xFCk Puan",
          data: data.performance_over_time.map((p) => p.daily_score),
          fill: true,
          borderColor: primaryColor,
          tension: 0.4,
          backgroundColor: gradient || primaryColor + "20"
        }
      ]
    };
    this.performanceChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.9,
      plugins: {
        legend: {
          display: false,
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }
  setupDifficultyChart(data) {
    if (!data.performance_by_difficulty || data.performance_by_difficulty.length === 0) {
      this.difficultyChartData = null;
      return;
    }
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    let greenColor = documentStyle.getPropertyValue("--green-500").trim();
    let yellowColor = documentStyle.getPropertyValue("--yellow-500").trim();
    let redColor = documentStyle.getPropertyValue("--red-500").trim();
    if (!greenColor)
      greenColor = "#4CAF50";
    if (!yellowColor)
      yellowColor = "#FFC107";
    if (!redColor)
      redColor = "#F44336";
    this.difficultyChartData = {
      labels: data.performance_by_difficulty.map((d) => d.difficulty.charAt(0).toUpperCase() + d.difficulty.slice(1)),
      datasets: [
        {
          data: data.performance_by_difficulty.map((d) => d.correct_count),
          backgroundColor: [
            greenColor,
            yellowColor,
            redColor
          ]
        }
      ]
    };
    this.difficultyChartOptions = {
      cutout: "60%",
      plugins: {
        legend: {
          position: "bottom",
          labels: { color: textColor }
        }
      }
    };
  }
  static \u0275fac = function QuizStatsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizStatsComponent)(\u0275\u0275directiveInject(QuizService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizStatsComponent, selectors: [["app-quiz-stats"]], decls: 4, vars: 3, consts: [[1, "stats-page", "p-fluid"], [4, "ngIf"], ["class", "p-message p-message-error", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "p-message", "p-message-error"], [1, "grid"], [1, "col-12", "lg:col-4"], ["header", "Genel Bak\u0131\u015F", "styleClass", "h-full"], [1, "grid", "text-center"], [1, "col-6", "stat-box"], [1, "pi", "pi-star-fill", "text-yellow-500", "text-3xl", "mb-2"], [1, "text-2xl", "font-bold", "text-primary"], [1, "text-sm", "text-color-secondary"], [1, "pi", "pi-book", "text-blue-500", "text-3xl", "mb-2"], [1, "text-2xl", "font-bold"], [1, "pi", "pi-check-circle", "text-green-500", "text-3xl", "mb-2"], [1, "pi", "pi-times-circle", "text-red-500", "text-3xl", "mb-2"], [1, "w-full", "px-3"], [1, "font-semibold", "mb-2"], ["styleClass", "h-2rem", 3, "value", "showValue"], [1, "font-bold", "text-lg"], [1, "col-12", "lg:col-8"], ["header", "Son 30 G\xFCnl\xFCk Performans", "styleClass", "h-full"], ["type", "line", 3, "data", "options"], [1, "col-12", "lg:col-6"], ["header", "En Ba\u015Far\u0131l\u0131 Konular\u0131n", "styleClass", "h-full"], [1, "list-none", "p-0", "m-0"], ["class", "flex align-items-center justify-content-between mb-3 p-2 border-round hover:surface-100", 4, "ngFor", "ngForOf"], ["class", "text-center p-3", 4, "ngIf"], ["header", "Zorluk Seviyesi Analizi", "styleClass", "h-full"], [1, "h-full", "flex", "flex-column", "align-items-center", "justify-content-center"], ["type", "doughnut", "height", "250px", 3, "data", "options", 4, "ngIf"], [1, "flex", "align-items-center", "justify-content-between", "mb-3", "p-2", "border-round", "hover:surface-100"], [1, "flex", "align-items-center"], [1, "font-semibold"], ["severity", "success", 3, "value", "rounded"], [1, "text-center", "p-3"], [1, "text-color-secondary"], ["type", "doughnut", "height", "250px", 3, "data", "options"]], template: function QuizStatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, QuizStatsComponent_p_progressSpinner_1_Template, 1, 0, "p-progressSpinner", 1)(2, QuizStatsComponent_div_2_Template, 2, 1, "div", 2)(3, QuizStatsComponent_div_3_Template, 48, 13, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.stats);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    CardModule,
    Card,
    ChartModule,
    UIChart,
    ProgressBarModule,
    ProgressBar,
    TooltipModule,
    ProgressSpinnerModule,
    ProgressSpinner,
    TagModule,
    Tag,
    DividerModule,
    Divider,
    DecimalPipe
  ], styles: ["\n\n.stats-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.stats-page[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--surface-border);\n}\n.stats-page[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.stats-page[_ngcontent-%COMP%]   .p-progressbar[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n.stats-page[_ngcontent-%COMP%]   .p-chart[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 300px;\n}\n.stats-page[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=quiz-stats.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizStatsComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-stats", standalone: true, imports: [
      CommonModule,
      CardModule,
      ChartModule,
      ProgressBarModule,
      TooltipModule,
      ProgressSpinnerModule,
      TagModule,
      DividerModule
    ], template: `<div class="stats-page p-fluid">\r
    <p-progressSpinner *ngIf="loading"></p-progressSpinner>\r
\r
    <div *ngIf="error" class="p-message p-message-error">{{ error }}</div>\r
\r
    <div *ngIf="!loading && stats" class="grid">\r
        <!-- Genel \u0130statistikler -->\r
        <div class="col-12 lg:col-4">\r
            <p-card header="Genel Bak\u0131\u015F" styleClass="h-full">\r
                <div class="grid text-center">\r
                    <div class="col-6 stat-box">\r
                        <i class="pi pi-star-fill text-yellow-500 text-3xl mb-2"></i>\r
                        <div class="text-2xl font-bold text-primary">{{ stats.total_score }}</div>\r
                        <div class="text-sm text-color-secondary">Toplam Puan</div>\r
                    </div>\r
                    <div class="col-6 stat-box">\r
                        <i class="pi pi-book text-blue-500 text-3xl mb-2"></i>\r
                        <div class="text-2xl font-bold">{{ stats.quizzes_completed }}</div>\r
                        <div class="text-sm text-color-secondary">Quiz Say\u0131s\u0131</div>\r
                    </div>\r
                    <div class="col-6 stat-box">\r
                        <i class="pi pi-check-circle text-green-500 text-3xl mb-2"></i>\r
                        <div class="text-2xl font-bold">{{ stats.total_correct_answers }}</div>\r
                        <div class="text-sm text-color-secondary">Do\u011Fru Cevap</div>\r
                    </div>\r
                    <div class="col-6 stat-box">\r
                        <i class="pi pi-times-circle text-red-500 text-3xl mb-2"></i>\r
                        <div class="text-2xl font-bold">{{ stats.total_wrong_answers }}</div>\r
                        <div class="text-sm text-color-secondary">Yanl\u0131\u015F Cevap</div>\r
                    </div>\r
                </div>\r
                <p-divider></p-divider>\r
                <div class="w-full px-3">\r
                    <div class="font-semibold mb-2">Genel Ba\u015Far\u0131 Oran\u0131</div>\r
                    <p-progressBar [value]="stats.overall_success_rate" [showValue]="true" styleClass="h-2rem">\r
                        <span class="font-bold text-lg">{{ stats.overall_success_rate }}%</span>\r
                    </p-progressBar>\r
                </div>\r
            </p-card>\r
        </div>\r
\r
        <!-- Zamanla Performans Grafi\u011Fi -->\r
        <div class="col-12 lg:col-8">\r
            <p-card header="Son 30 G\xFCnl\xFCk Performans" styleClass="h-full">\r
                <p-chart type="line" [data]="performanceChartData" [options]="performanceChartOptions"></p-chart>\r
            </p-card>\r
        </div>\r
\r
        <!-- En \u0130yi Konular -->\r
        <div class="col-12 lg:col-6">\r
            <p-card header="En Ba\u015Far\u0131l\u0131 Konular\u0131n" styleClass="h-full">\r
                <ul class="list-none p-0 m-0">\r
                    <li *ngFor="let topic of stats.best_topics"\r
                        class="flex align-items-center justify-content-between mb-3 p-2 border-round hover:surface-100">\r
                        <div class="flex align-items-center">\r
                            <i class="pi {{ topic.subject_icon || 'pi-tag' }} text-xl mr-3 text-primary"></i>\r
                            <div>\r
                                <span class="font-semibold">{{ topic.topic_name }}</span>\r
                                <div class="text-sm text-color-secondary">{{ topic.subject_name }}</div>\r
                            </div>\r
                        </div>\r
                        <p-tag [value]="(topic.success_rate | number:'1.0-0') + '%'" severity="success"\r
                            [rounded]="true"></p-tag>\r
                    </li>\r
                    <li *ngIf="stats.best_topics.length === 0" class="text-center p-3">\r
                        <span class="text-color-secondary">Hen\xFCz yeterli veri yok.</span>\r
                    </li>\r
                </ul>\r
            </p-card>\r
        </div>\r
\r
        <!-- Zorluk Seviyesine G\xF6re Performans -->\r
        <div class="col-12 lg:col-6">\r
            <p-card header="Zorluk Seviyesi Analizi" styleClass="h-full">\r
                <div class="h-full flex flex-column align-items-center justify-content-center">\r
                    <p-chart *ngIf="difficultyChartData" type="doughnut" [data]="difficultyChartData"\r
                        [options]="difficultyChartOptions" height="250px"></p-chart>\r
                    <div *ngIf="!difficultyChartData" class="text-center p-3">\r
                        <span class="text-color-secondary">Hen\xFCz yeterli veri yok.</span>\r
                    </div>\r
                </div>\r
            </p-card>\r
        </div>\r
    </div>\r
</div>`, styles: ["/* src/app/pages/quiz-stats/quiz-stats.component.scss */\n.stats-page .card {\n  margin-bottom: 1.5rem;\n}\n.stats-page .stat-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--surface-border);\n}\n.stats-page .stat-item:last-child {\n  border-bottom: none;\n}\n.stats-page .p-progressbar {\n  height: 2rem;\n}\n.stats-page .p-chart {\n  height: 100%;\n  min-height: 300px;\n}\n.stats-page .stat-box {\n  padding: 1rem;\n}\n/*# sourceMappingURL=quiz-stats.component.css.map */\n"] }]
  }], () => [{ type: QuizService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizStatsComponent, { className: "QuizStatsComponent", filePath: "src/app/pages/quiz-stats/quiz-stats.component.ts", lineNumber: 28 });
})();
export {
  QuizStatsComponent
};
//# sourceMappingURL=chunk-NKOPYQOB.js.map
