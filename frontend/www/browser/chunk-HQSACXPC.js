import {
  AuthService
} from "./chunk-SWEFD2KZ.js";
import {
  TimesCircleIcon,
  Toast,
  ToastModule
} from "./chunk-3VAMBC6T.js";
import {
  Divider,
  DividerModule
} from "./chunk-HKSNGYNW.js";
import {
  ProgressBarModule
} from "./chunk-ZOYAO6DT.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DFW2EA2F.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-7KNBXFI3.js";
import {
  ChevronDownIcon,
  Overlay,
  Scroller,
  SearchIcon
} from "./chunk-AJ4EVOAF.js";
import {
  BaseEditableHolder,
  Checkbox,
  IconField,
  InputIcon,
  SelectButtonModule
} from "./chunk-SI3KMQDW.js";
import {
  FormsModule,
  InputText,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-MQYBVSL2.js";
import {
  CheckIcon,
  TimesIcon
} from "./chunk-UFKIQL7H.js";
import "./chunk-MF2TYEEY.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-MGMRA34M.js";
import {
  ObjectUtils
} from "./chunk-G2NB3UHO.js";
import {
  AutoFocus,
  Button,
  ButtonModule,
  Fluid
} from "./chunk-P2UDISTN.js";
import "./chunk-RSNC3YL5.js";
import {
  QuizService
} from "./chunk-5C5N5YGI.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  C2 as C,
  Card,
  CardModule,
  CommonModule,
  DatePipe,
  DomHandler,
  FilterService,
  Footer,
  Header,
  J,
  Lt,
  M,
  MessageService,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  OverlayService,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  Y,
  b,
  bt,
  k2 as k,
  p2 as p,
  rr,
  s,
  s2,
  unblockBodyScroll,
  vt,
  y,
  z
} from "./chunk-5QUT4BWV.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  RendererStyleFlags2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IXE337CY.js";

// node_modules/@primeuix/styles/dist/chip/index.mjs
var style = "\n    .p-chip {\n        display: inline-flex;\n        align-items: center;\n        background: dt('chip.background');\n        color: dt('chip.color');\n        border-radius: dt('chip.border.radius');\n        padding-block: dt('chip.padding.y');\n        padding-inline: dt('chip.padding.x');\n        gap: dt('chip.gap');\n    }\n\n    .p-chip-icon {\n        color: dt('chip.icon.color');\n        font-size: dt('chip.icon.font.size');\n        width: dt('chip.icon.size');\n        height: dt('chip.icon.size');\n    }\n\n    .p-chip-image {\n        border-radius: 50%;\n        width: dt('chip.image.width');\n        height: dt('chip.image.height');\n        margin-inline-start: calc(-1 * dt('chip.padding.y'));\n    }\n\n    .p-chip:has(.p-chip-remove-icon) {\n        padding-inline-end: dt('chip.padding.y');\n    }\n\n    .p-chip:has(.p-chip-image) {\n        padding-block-start: calc(dt('chip.padding.y') / 2);\n        padding-block-end: calc(dt('chip.padding.y') / 2);\n    }\n\n    .p-chip-remove-icon {\n        cursor: pointer;\n        font-size: dt('chip.remove.icon.size');\n        width: dt('chip.remove.icon.size');\n        height: dt('chip.remove.icon.size');\n        color: dt('chip.remove.icon.color');\n        border-radius: 50%;\n        transition:\n            outline-color dt('chip.transition.duration'),\n            box-shadow dt('chip.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-chip-remove-icon:focus-visible {\n        box-shadow: dt('chip.remove.icon.focus.ring.shadow');\n        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');\n        outline-offset: dt('chip.remove.icon.focus.ring.offset');\n    }\n";

// node_modules/primeng/fesm2022/primeng-chip.mjs
var _c0 = ["removeicon"];
var _c1 = ["*"];
function Chip_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 4);
    \u0275\u0275listener("error", function Chip_img_1_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("image"));
    \u0275\u0275property("pBind", ctx_r1.ptm("image"))("src", ctx_r1.image, \u0275\u0275sanitizeUrl)("alt", ctx_r1.alt);
  }
}
function Chip_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.icon);
    \u0275\u0275property("pBind", ctx_r1.ptm("icon"))("ngClass", ctx_r1.cx("icon"));
  }
}
function Chip_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Chip_ng_template_2_span_0_Template, 1, 4, "span", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.icon);
  }
}
function Chip_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("label"));
    \u0275\u0275property("pBind", ctx_r1.ptm("label"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label);
  }
}
function Chip_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275listener("click", function Chip_ng_container_5_ng_container_1_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_ng_container_1_span_1_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.removeIcon);
    \u0275\u0275property("pBind", ctx_r1.ptm("removeIcon"))("ngClass", ctx_r1.cx("removeIcon"));
    \u0275\u0275attribute("tabindex", ctx_r1.disabled ? -1 : 0)("aria-label", ctx_r1.removeAriaLabel);
  }
}
function Chip_ng_container_5_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 12);
    \u0275\u0275listener("click", function Chip_ng_container_5_ng_container_1__svg_svg_2_Template_svg_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_ng_container_1__svg_svg_2_Template_svg_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("removeIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("removeIcon"));
    \u0275\u0275attribute("tabindex", ctx_r1.disabled ? -1 : 0)("aria-label", ctx_r1.removeAriaLabel);
  }
}
function Chip_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Chip_ng_container_5_ng_container_1_span_1_Template, 1, 6, "span", 9)(2, Chip_ng_container_5_ng_container_1__svg_svg_2_Template, 1, 5, "svg", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.removeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.removeIcon);
  }
}
function Chip_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Chip_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Chip_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chip_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275listener("click", function Chip_ng_container_5_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_span_2_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275template(1, Chip_ng_container_5_span_2_1_Template, 1, 0, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("removeIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("removeIcon"));
    \u0275\u0275attribute("tabindex", ctx_r1.disabled ? -1 : 0)("aria-label", ctx_r1.removeAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.removeIconTemplate || ctx_r1._removeIconTemplate);
  }
}
function Chip_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Chip_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 3)(2, Chip_ng_container_5_span_2_Template, 2, 6, "span", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.removeIconTemplate && !ctx_r1._removeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.removeIconTemplate || ctx_r1._removeIconTemplate);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-chip p-component", {
    "p-disabled": instance.disabled
  }],
  image: "p-chip-image",
  icon: "p-chip-icon",
  label: "p-chip-label",
  removeIcon: "p-chip-remove-icon"
};
var ChipStyle = class _ChipStyle extends BaseStyle {
  name = "chip";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChipStyle_BaseFactory;
    return function ChipStyle_Factory(__ngFactoryType__) {
      return (\u0275ChipStyle_BaseFactory || (\u0275ChipStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ChipStyle)))(__ngFactoryType__ || _ChipStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ChipStyle,
    factory: _ChipStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipStyle, [{
    type: Injectable
  }], null, null);
})();
var ChipClasses;
(function(ChipClasses2) {
  ChipClasses2["root"] = "p-chip";
  ChipClasses2["image"] = "p-chip-image";
  ChipClasses2["icon"] = "p-chip-icon";
  ChipClasses2["label"] = "p-chip-label";
  ChipClasses2["removeIcon"] = "p-chip-remove-icon";
})(ChipClasses || (ChipClasses = {}));
var CHIP_INSTANCE = new InjectionToken("CHIP_INSTANCE");
var Chip = class _Chip extends BaseComponent {
  $pcChip = inject(CHIP_INSTANCE, {
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
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Alt attribute of the image.
   * @group Props
   */
  alt;
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Whether to display a remove icon.
   * @group Props
   */
  removable = false;
  /**
   * Icon of the remove element.
   * @group Props
   */
  removeIcon;
  /**
   * Callback to invoke when a chip is removed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  visible = true;
  get removeAriaLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["removeLabel"];
  }
  /**
   * Used to pass all properties of the chipProps to the Chip component.
   * @group Props
   */
  get chipProps() {
    return this._chipProps;
  }
  set chipProps(val) {
    this._chipProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k2, v]) => this[`_${k2}`] !== v && (this[`_${k2}`] = v));
    }
  }
  _chipProps;
  _componentStyle = inject(ChipStyle);
  removeIconTemplate;
  templates;
  _removeIconTemplate;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "removeicon":
          this._removeIconTemplate = item.template;
          break;
        default:
          this._removeIconTemplate = item.template;
          break;
      }
    });
  }
  onChanges(simpleChanges) {
    if (simpleChanges.chipProps && simpleChanges.chipProps.currentValue) {
      const {
        currentValue
      } = simpleChanges.chipProps;
      if (currentValue.label !== void 0) {
        this.label = currentValue.label;
      }
      if (currentValue.icon !== void 0) {
        this.icon = currentValue.icon;
      }
      if (currentValue.image !== void 0) {
        this.image = currentValue.image;
      }
      if (currentValue.alt !== void 0) {
        this.alt = currentValue.alt;
      }
      if (currentValue.styleClass !== void 0) {
        this.styleClass = currentValue.styleClass;
      }
      if (currentValue.removable !== void 0) {
        this.removable = currentValue.removable;
      }
      if (currentValue.removeIcon !== void 0) {
        this.removeIcon = currentValue.removeIcon;
      }
    }
  }
  close(event) {
    this.visible = false;
    this.onRemove.emit(event);
  }
  onKeydown(event) {
    if (event.key === "Enter" || event.key === "Backspace") {
      this.close(event);
    }
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Chip_BaseFactory;
    return function Chip_Factory(__ngFactoryType__) {
      return (\u0275Chip_BaseFactory || (\u0275Chip_BaseFactory = \u0275\u0275getInheritedFactory(_Chip)))(__ngFactoryType__ || _Chip);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Chip,
    selectors: [["p-chip"]],
    contentQueries: function Chip_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 5,
    hostBindings: function Chip_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.label);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        \u0275\u0275styleProp("display", !ctx.visible && "none");
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      alt: "alt",
      styleClass: "styleClass",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      removable: [2, "removable", "removable", booleanAttribute],
      removeIcon: "removeIcon",
      chipProps: "chipProps"
    },
    outputs: {
      onRemove: "onRemove",
      onImageError: "onImageError"
    },
    features: [\u0275\u0275ProvidersFeature([ChipStyle, {
      provide: CHIP_INSTANCE,
      useExisting: _Chip
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Chip
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 6,
    vars: 4,
    consts: [["iconTemplate", ""], [3, "pBind", "class", "src", "alt", "error", 4, "ngIf", "ngIfElse"], [3, "pBind", "class", 4, "ngIf"], [4, "ngIf"], [3, "error", "pBind", "src", "alt"], [3, "pBind", "class", "ngClass", 4, "ngIf"], [3, "pBind", "ngClass"], [3, "pBind"], ["role", "button", 3, "pBind", "class", "click", "keydown", 4, "ngIf"], ["role", "button", 3, "pBind", "class", "ngClass", "click", "keydown", 4, "ngIf"], ["data-p-icon", "times-circle", "role", "button", 3, "pBind", "class", "click", "keydown", 4, "ngIf"], ["role", "button", 3, "click", "keydown", "pBind", "ngClass"], ["data-p-icon", "times-circle", "role", "button", 3, "click", "keydown", "pBind"], ["role", "button", 3, "click", "keydown", "pBind"], [4, "ngTemplateOutlet"]],
    template: function Chip_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Chip_img_1_Template, 1, 5, "img", 1)(2, Chip_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, Chip_div_4_Template, 2, 4, "div", 2)(5, Chip_ng_container_5_Template, 3, 2, "ng-container", 3);
      }
      if (rf & 2) {
        const iconTemplate_r6 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.image)("ngIfElse", iconTemplate_r6);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.label);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.removable);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, TimesCircleIcon, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Chip, [{
    type: Component,
    args: [{
      selector: "p-chip",
      standalone: true,
      imports: [CommonModule, TimesCircleIcon, SharedModule, Bind],
      template: `
        <ng-content></ng-content>
        <img [pBind]="ptm('image')" [class]="cx('image')" [src]="image" *ngIf="image; else iconTemplate" (error)="imageError($event)" [alt]="alt" />
        <ng-template #iconTemplate><span [pBind]="ptm('icon')" *ngIf="icon" [class]="icon" [ngClass]="cx('icon')"></span></ng-template>
        <div [pBind]="ptm('label')" [class]="cx('label')" *ngIf="label">{{ label }}</div>
        <ng-container *ngIf="removable">
            <ng-container *ngIf="!removeIconTemplate && !_removeIconTemplate">
                <span
                    [pBind]="ptm('removeIcon')"
                    *ngIf="removeIcon"
                    [class]="removeIcon"
                    [ngClass]="cx('removeIcon')"
                    (click)="close($event)"
                    (keydown)="onKeydown($event)"
                    [attr.tabindex]="disabled ? -1 : 0"
                    [attr.aria-label]="removeAriaLabel"
                    role="button"
                ></span>
                <svg
                    [pBind]="ptm('removeIcon')"
                    data-p-icon="times-circle"
                    *ngIf="!removeIcon"
                    [class]="cx('removeIcon')"
                    (click)="close($event)"
                    (keydown)="onKeydown($event)"
                    [attr.tabindex]="disabled ? -1 : 0"
                    [attr.aria-label]="removeAriaLabel"
                    role="button"
                />
            </ng-container>
            <span
                [pBind]="ptm('removeIcon')"
                *ngIf="removeIconTemplate || _removeIconTemplate"
                [attr.tabindex]="disabled ? -1 : 0"
                [class]="cx('removeIcon')"
                (click)="close($event)"
                (keydown)="onKeydown($event)"
                [attr.aria-label]="removeAriaLabel"
                role="button"
            >
                <ng-template *ngTemplateOutlet="removeIconTemplate || _removeIconTemplate"></ng-template>
            </span>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ChipStyle, {
        provide: CHIP_INSTANCE,
        useExisting: Chip
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Chip
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style.display]": '!visible && "none"',
        "[attr.aria-label]": "label"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    alt: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    removable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    removeIcon: [{
      type: Input
    }],
    onRemove: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    chipProps: [{
      type: Input
    }],
    removeIconTemplate: [{
      type: ContentChild,
      args: ["removeicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ChipModule = class _ChipModule {
  static \u0275fac = function ChipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ChipModule,
    imports: [Chip, SharedModule],
    exports: [Chip, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Chip, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipModule, [{
    type: NgModule,
    args: [{
      imports: [Chip, SharedModule],
      exports: [Chip, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/multiselect/index.mjs
var style2 = "\n    .p-multiselect {\n        display: inline-flex;\n        cursor: pointer;\n        position: relative;\n        user-select: none;\n        background: dt('multiselect.background');\n        border: 1px solid dt('multiselect.border.color');\n        transition:\n            background dt('multiselect.transition.duration'),\n            color dt('multiselect.transition.duration'),\n            border-color dt('multiselect.transition.duration'),\n            outline-color dt('multiselect.transition.duration'),\n            box-shadow dt('multiselect.transition.duration');\n        border-radius: dt('multiselect.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('multiselect.shadow');\n    }\n\n    .p-multiselect:not(.p-disabled):hover {\n        border-color: dt('multiselect.hover.border.color');\n    }\n\n    .p-multiselect:not(.p-disabled).p-focus {\n        border-color: dt('multiselect.focus.border.color');\n        box-shadow: dt('multiselect.focus.ring.shadow');\n        outline: dt('multiselect.focus.ring.width') dt('multiselect.focus.ring.style') dt('multiselect.focus.ring.color');\n        outline-offset: dt('multiselect.focus.ring.offset');\n    }\n\n    .p-multiselect.p-variant-filled {\n        background: dt('multiselect.filled.background');\n    }\n\n    .p-multiselect.p-variant-filled:not(.p-disabled):hover {\n        background: dt('multiselect.filled.hover.background');\n    }\n\n    .p-multiselect.p-variant-filled.p-focus {\n        background: dt('multiselect.filled.focus.background');\n    }\n\n    .p-multiselect.p-invalid {\n        border-color: dt('multiselect.invalid.border.color');\n    }\n\n    .p-multiselect.p-disabled {\n        opacity: 1;\n        background: dt('multiselect.disabled.background');\n    }\n\n    .p-multiselect-dropdown {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        background: transparent;\n        color: dt('multiselect.dropdown.color');\n        width: dt('multiselect.dropdown.width');\n        border-start-end-radius: dt('multiselect.border.radius');\n        border-end-end-radius: dt('multiselect.border.radius');\n    }\n\n    .p-multiselect-clear-icon {\n        align-self: center;\n        color: dt('multiselect.clear.icon.color');\n        inset-inline-end: dt('multiselect.dropdown.width');\n    }\n\n    .p-multiselect-label-container {\n        overflow: hidden;\n        flex: 1 1 auto;\n        cursor: pointer;\n    }\n\n    .p-multiselect-label {\n        white-space: nowrap;\n        cursor: pointer;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        padding: dt('multiselect.padding.y') dt('multiselect.padding.x');\n        color: dt('multiselect.color');\n    }\n\n    .p-multiselect-display-chip .p-multiselect-label {\n        display: flex;\n        align-items: center;\n        gap: calc(dt('multiselect.padding.y') / 2);\n    }\n\n    .p-multiselect-label.p-placeholder {\n        color: dt('multiselect.placeholder.color');\n    }\n\n    .p-multiselect.p-invalid .p-multiselect-label.p-placeholder {\n        color: dt('multiselect.invalid.placeholder.color');\n    }\n\n    .p-multiselect.p-disabled .p-multiselect-label {\n        color: dt('multiselect.disabled.color');\n    }\n\n    .p-multiselect-label-empty {\n        overflow: hidden;\n        visibility: hidden;\n    }\n\n    .p-multiselect-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: dt('multiselect.overlay.background');\n        color: dt('multiselect.overlay.color');\n        border: 1px solid dt('multiselect.overlay.border.color');\n        border-radius: dt('multiselect.overlay.border.radius');\n        box-shadow: dt('multiselect.overlay.shadow');\n        min-width: 100%;\n    }\n\n    .p-multiselect-header {\n        display: flex;\n        align-items: center;\n        padding: dt('multiselect.list.header.padding');\n    }\n\n    .p-multiselect-header .p-checkbox {\n        margin-inline-end: dt('multiselect.option.gap');\n    }\n\n    .p-multiselect-filter-container {\n        flex: 1 1 auto;\n    }\n\n    .p-multiselect-filter {\n        width: 100%;\n    }\n\n    .p-multiselect-list-container {\n        overflow: auto;\n    }\n\n    .p-multiselect-list {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        padding: dt('multiselect.list.padding');\n        display: flex;\n        flex-direction: column;\n        gap: dt('multiselect.list.gap');\n    }\n\n    .p-multiselect-option {\n        cursor: pointer;\n        font-weight: normal;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        gap: dt('multiselect.option.gap');\n        padding: dt('multiselect.option.padding');\n        border: 0 none;\n        color: dt('multiselect.option.color');\n        background: transparent;\n        transition:\n            background dt('multiselect.transition.duration'),\n            color dt('multiselect.transition.duration'),\n            border-color dt('multiselect.transition.duration'),\n            box-shadow dt('multiselect.transition.duration'),\n            outline-color dt('multiselect.transition.duration');\n        border-radius: dt('multiselect.option.border.radius');\n    }\n\n    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {\n        background: dt('multiselect.option.focus.background');\n        color: dt('multiselect.option.focus.color');\n    }\n\n    .p-multiselect-option.p-multiselect-option-selected {\n        background: dt('multiselect.option.selected.background');\n        color: dt('multiselect.option.selected.color');\n    }\n\n    .p-multiselect-option.p-multiselect-option-selected.p-focus {\n        background: dt('multiselect.option.selected.focus.background');\n        color: dt('multiselect.option.selected.focus.color');\n    }\n\n    .p-multiselect-option-group {\n        cursor: auto;\n        margin: 0;\n        padding: dt('multiselect.option.group.padding');\n        background: dt('multiselect.option.group.background');\n        color: dt('multiselect.option.group.color');\n        font-weight: dt('multiselect.option.group.font.weight');\n    }\n\n    .p-multiselect-empty-message {\n        padding: dt('multiselect.empty.message.padding');\n    }\n\n    .p-multiselect-label .p-chip {\n        padding-block-start: calc(dt('multiselect.padding.y') / 2);\n        padding-block-end: calc(dt('multiselect.padding.y') / 2);\n        border-radius: dt('multiselect.chip.border.radius');\n    }\n\n    .p-multiselect-label:has(.p-chip) {\n        padding: calc(dt('multiselect.padding.y') / 2) calc(dt('multiselect.padding.x') / 2);\n    }\n\n    .p-multiselect-fluid {\n        display: flex;\n        width: 100%;\n    }\n\n    .p-multiselect-sm .p-multiselect-label {\n        font-size: dt('multiselect.sm.font.size');\n        padding-block: dt('multiselect.sm.padding.y');\n        padding-inline: dt('multiselect.sm.padding.x');\n    }\n\n    .p-multiselect-sm .p-multiselect-dropdown .p-icon {\n        font-size: dt('multiselect.sm.font.size');\n        width: dt('multiselect.sm.font.size');\n        height: dt('multiselect.sm.font.size');\n    }\n\n    .p-multiselect-lg .p-multiselect-label {\n        font-size: dt('multiselect.lg.font.size');\n        padding-block: dt('multiselect.lg.padding.y');\n        padding-inline: dt('multiselect.lg.padding.x');\n    }\n\n    .p-multiselect-lg .p-multiselect-dropdown .p-icon {\n        font-size: dt('multiselect.lg.font.size');\n        width: dt('multiselect.lg.font.size');\n        height: dt('multiselect.lg.font.size');\n    }\n\n    .p-floatlabel-in .p-multiselect-filter {\n        padding-block-start: dt('multiselect.padding.y');\n        padding-block-end: dt('multiselect.padding.y');\n    }\n";

// node_modules/primeng/fesm2022/primeng-multiselect.mjs
var _c02 = ["pMultiSelectItem", ""];
var _c12 = (a0) => ({
  $implicit: a0
});
var _c2 = (a0, a1) => ({
  checked: a0,
  class: a1
});
function MultiSelectItem_ng_container_1_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function MultiSelectItem_ng_container_1_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelectItem_ng_container_1_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelectItem_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelectItem_ng_container_1_ng_template_1_0_Template, 1, 0, null, 3);
  }
  if (rf & 2) {
    const klass_r1 = ctx.class;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, ctx_r1.selected, klass_r1));
  }
}
function MultiSelectItem_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelectItem_ng_container_1_ng_template_1_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelectItem_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label ?? "empty");
  }
}
function MultiSelectItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var _c3 = ["item"];
var _c4 = ["group"];
var _c5 = ["loader"];
var _c6 = ["header"];
var _c7 = ["filter"];
var _c8 = ["footer"];
var _c9 = ["emptyfilter"];
var _c10 = ["empty"];
var _c11 = ["selecteditems"];
var _c122 = ["loadingicon"];
var _c13 = ["filtericon"];
var _c14 = ["removetokenicon"];
var _c15 = ["chipicon"];
var _c16 = ["clearicon"];
var _c17 = ["dropdownicon"];
var _c18 = ["itemcheckboxicon"];
var _c19 = ["headercheckboxicon"];
var _c20 = ["overlay"];
var _c21 = ["filterInput"];
var _c22 = ["focusInput"];
var _c23 = ["items"];
var _c24 = ["scroller"];
var _c25 = ["lastHiddenFocusableEl"];
var _c26 = ["firstHiddenFocusableEl"];
var _c27 = ["headerCheckbox"];
var _c28 = [[["p-header"]], [["p-footer"]]];
var _c29 = ["p-header", "p-footer"];
var _c30 = () => ({
  class: "p-multiselect-chip-icon"
});
var _c31 = (a0, a1) => ({
  $implicit: a0,
  removeChip: a1
});
var _c32 = (a0) => ({
  options: a0
});
var _c33 = (a0, a1, a2) => ({
  checked: a0,
  partialSelected: a1,
  class: a2
});
var _c34 = (a0) => ({
  height: a0
});
var _c35 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c36 = () => ({});
function MultiSelect_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label() || "empty");
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSelectedItemsLabel(), " ");
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275listener("click", function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeOption(item_r4, $event));
    });
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_ng_container_1_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275classMap(ctx_r1.cx("chipIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("chipIcon"));
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(6, _c30));
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_Template, 2, 7, "span", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngIf", !ctx_r1.$disabled() && !ctx_r1.readonly);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19, 4)(2, "p-chip", 25);
    \u0275\u0275listener("onRemove", function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_Template_p_chip_onRemove_2_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeOption(item_r4, $event));
    });
    \u0275\u0275template(3, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_Template, 3, 0, "ng-container", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("chipItem"));
    \u0275\u0275property("pBind", ctx_r1.ptm("chipItem"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("pcChip"));
    \u0275\u0275property("pt", ctx_r1.ptm("pcChip"))("label", ctx_r1.getLabelByValue(item_r4))("removable", !ctx_r1.$disabled() && !ctx_r1.readonly)("removeIcon", ctx_r1.chipIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_Template, 4, 10, "div", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngForOf", ctx_r1.chipSelectedItems());
  }
}
function MultiSelect_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder() || "empty");
  }
}
function MultiSelect_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, MultiSelect_ng_container_5_ng_container_2_Conditional_1_Template, 1, 1)(2, MultiSelect_ng_container_5_ng_container_2_Conditional_2_Template, 1, 1, "div", 23);
    \u0275\u0275template(3, MultiSelect_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.chipSelectedItems() && ctx_r1.chipSelectedItems().length === ctx_r1.maxSelectedLabels ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.modelValue() || ctx_r1.modelValue().length === 0);
  }
}
function MultiSelect_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.display === "comma");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.display === "chip");
  }
}
function MultiSelect_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder() || "empty");
  }
}
function MultiSelect_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 28)(2, MultiSelect_ng_container_6_ng_container_2_Template, 2, 1, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.selectedItemsTemplate || ctx_r1._selectedItemsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c31, ctx_r1.selectedOptions, ctx_r1.removeOption.bind(ctx_r1)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.modelValue() || ctx_r1.modelValue().length === 0);
  }
}
function MultiSelect_ng_container_7__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 31);
    \u0275\u0275listener("click", function MultiSelect_ng_container_7__svg_svg_1_Template_svg_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("clearIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("clearIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelect_ng_container_7_span_2_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_container_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_container_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275listener("click", function MultiSelect_ng_container_7_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275template(1, MultiSelect_ng_container_7_span_2_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("clearIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("clearIcon"));
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function MultiSelect_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_7__svg_svg_1_Template, 1, 4, "svg", 29)(2, MultiSelect_ng_container_7_span_2_Template, 2, 5, "span", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.clearIconTemplate && !ctx_r1._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function MultiSelect_ng_container_9_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingIconTemplate || ctx_r1._loadingIconTemplate);
  }
}
function MultiSelect_ng_container_9_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("loadingIcon"), "pi-spin " + ctx_r1.loadingIcon));
    \u0275\u0275property("pBind", ctx_r1.ptm("loadingIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelect_ng_container_9_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("loadingIcon"), "pi pi-spinner pi-spin"));
    \u0275\u0275property("pBind", ctx_r1.ptm("loadingIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelect_ng_container_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_2_span_1_Template, 1, 4, "span", 33)(2, MultiSelect_ng_container_9_ng_container_2_span_2_Template, 1, 4, "span", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIcon);
  }
}
function MultiSelect_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_9_ng_container_2_Template, 3, 2, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIconTemplate || ctx_r1._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIconTemplate && !ctx_r1._loadingIconTemplate);
  }
}
function MultiSelect_ng_template_10_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("dropdownIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("dropdownIcon"))("ngClass", ctx_r1.dropdownIcon);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelect_ng_template_10_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("dropdownIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("dropdownIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function MultiSelect_ng_template_10_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_10_ng_container_0_span_1_Template, 1, 5, "span", 34)(2, MultiSelect_ng_template_10_ng_container_0__svg_svg_2_Template, 1, 4, "svg", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.dropdownIcon);
  }
}
function MultiSelect_ng_template_10_span_1_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_10_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_10_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275template(1, MultiSelect_ng_template_10_span_1_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("dropdownIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("dropdownIcon"));
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_10_ng_container_0_Template, 3, 2, "ng-container", 20)(1, MultiSelect_ng_template_10_span_1_Template, 2, 5, "span", 33);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r1.dropdownIconTemplate && !ctx_r1._dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_div_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.filterTemplate || ctx_r1._filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c32, ctx_r1.filterOptions));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 45);
  }
  if (rf & 2) {
    const klass_r10 = \u0275\u0275nextContext().class;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(klass_r10);
    \u0275\u0275property("pBind", ctx_r1.getHeaderCheckboxPTOptions("pcHeaderCheckbox.icon"));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2__svg_svg_0_Template, 1, 3, "svg", 44)(1, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_Template, 1, 0, null, 28);
  }
  if (rf & 2) {
    const klass_r10 = ctx.class;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", !ctx_r1.headerCheckboxIconTemplate && !ctx_r1._headerCheckboxIconTemplate && ctx_r1.allSelected());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerCheckboxIconTemplate || ctx_r1._headerCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c33, ctx_r1.allSelected(), ctx_r1.partialSelected(), klass_r10));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-checkbox", 43, 10);
    \u0275\u0275listener("onChange", function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template_p_checkbox_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onToggleAll($event));
    });
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_Template, 2, 7, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("pt", ctx_r1.getHeaderCheckboxPTOptions("pcHeaderCheckbox"))("ngModel", ctx_r1.allSelected())("ariaLabel", ctx_r1.toggleAllAriaLabel)("binary", true)("variant", ctx_r1.$variant())("disabled", ctx_r1.$disabled());
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 50);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pBind", ctx_r1.ptm("filterIcon"));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275template(1, MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pBind", ctx_r1.ptm("filterIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.filterIconTemplate || ctx_r1._filterIconTemplate);
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield", 46)(1, "input", 47, 12);
    \u0275\u0275listener("input", function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterInputChange($event));
    })("keydown", function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterKeyDown($event));
    })("click", function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onInputClick($event));
    })("blur", function MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template_input_blur_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputicon", 46);
    \u0275\u0275template(4, MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1__svg_svg_4_Template, 1, 1, "svg", 48)(5, MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_span_5_Template, 2, 2, "span", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("pcFilterContainer"));
    \u0275\u0275property("pt", ctx_r1.ptm("pcFilterContainer"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("pcFilter"));
    \u0275\u0275property("pt", ctx_r1.ptm("pcFilter"))("variant", ctx_r1.$variant())("value", ctx_r1._filterValue() || "");
    \u0275\u0275attribute("autocomplete", ctx_r1.autocomplete)("aria-owns", ctx_r1.id + "_list")("aria-activedescendant", ctx_r1.focusedOptionId)("disabled", ctx_r1.$disabled() ? "" : void 0)("placeholder", ctx_r1.filterPlaceHolder)("aria-label", ctx_r1.ariaFilterLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("pt", ctx_r1.ptm("pcFilterIconContainer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filterIconTemplate && !ctx_r1._filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filterIconTemplate || ctx_r1._filterIconTemplate);
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template, 4, 6, "p-checkbox", 41)(1, MultiSelect_ng_template_14_div_4_ng_template_3_p_iconfield_1_Template, 6, 17, "p-iconfield", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.showToggleAll && !ctx_r1.selectionLimit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filter);
  }
}
function MultiSelect_ng_template_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_4_ng_container_2_Template, 2, 4, "ng-container", 21)(3, MultiSelect_ng_template_14_div_4_ng_template_3_Template, 2, 2, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r12 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275property("pBind", ctx_r1.ptm("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filterTemplate || ctx_r1._filterTemplate)("ngIfElse", builtInFilterElement_r12);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const items_r14 = ctx.$implicit;
    const scrollerOptions_r15 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r16 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c35, items_r14, scrollerOptions_r15));
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const scrollerOptions_r17 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderTemplate || ctx_r1._loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c32, scrollerOptions_r17));
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 14, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelect_ng_template_14_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 52, 13);
    \u0275\u0275listener("onLazyLoad", function MultiSelect_ng_template_14_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, MultiSelect_ng_template_14_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(4, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_Template, 3, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(9, _c34, ctx_r1.scrollHeight));
    \u0275\u0275property("items", ctx_r1.visibleOptions())("itemSize", ctx_r1.virtualScrollItemSize)("autoSize", true)("tabindex", -1)("lazy", ctx_r1.lazy)("options", ctx_r1.virtualScrollOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loaderTemplate || ctx_r1._loaderTemplate);
  }
}
function MultiSelect_ng_template_14_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r16 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c35, ctx_r1.visibleOptions(), \u0275\u0275pureFunction0(2, _c36)));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getOptionGroupLabel(option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 58);
  }
  if (rf & 2) {
    const option_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c12, option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 56);
    \u0275\u0275template(2, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 20)(3, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 4, "ng-container", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("optionGroup"));
    \u0275\u0275property("pBind", ctx_r1.ptm("optionGroup"))("ngStyle", \u0275\u0275pureFunction1(7, _c34, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.groupTemplate && option_r18.optionGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", option_r18.optionGroup && ctx_r1.groupTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 59);
    \u0275\u0275listener("onClick", function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template_li_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const i_r20 = \u0275\u0275nextContext().index;
      const scrollerOptions_r21 = \u0275\u0275nextContext().options;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionSelect($event, false, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    })("onMouseEnter", function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template_li_onMouseEnter_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const i_r20 = \u0275\u0275nextContext().index;
      const scrollerOptions_r21 = \u0275\u0275nextContext().options;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionMouseEnter($event, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.getPTOptions(option_r18, ctx_r1.getItemOptions, i_r20, "option"))("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("option", option_r18)("selected", ctx_r1.isSelected(option_r18))("label", ctx_r1.getOptionLabel(option_r18))("disabled", ctx_r1.isOptionDisabled(option_r18))("template", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("itemCheckboxIconTemplate", ctx_r1.itemCheckboxIconTemplate || ctx_r1._itemCheckboxIconTemplate)("itemSize", scrollerOptions_r21.itemSize)("focused", ctx_r1.focusedOptionIndex() === ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("ariaPosInset", ctx_r1.getAriaPosInset(ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)))("ariaSetSize", ctx_r1.ariaSetSize)("variant", ctx_r1.$variant())("highlightOnSelect", ctx_r1.highlightOnSelect)("pt", ctx_r1.pt);
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 20)(1, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template, 2, 15, "ng-container", 20);
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.isOptionGroup(option_r18));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isOptionGroup(option_r18));
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyFilterMessageLabel, " ");
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyFilterTemplate || ctx_r1._emptyFilterTemplate || ctx_r1.emptyTemplate || ctx_r1._emptyFilterTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 56);
    \u0275\u0275conditionalCreate(1, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_1_Template, 1, 1)(2, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("emptyMessage"));
    \u0275\u0275property("pBind", ctx_r1.ptm("emptyMessage"))("ngStyle", \u0275\u0275pureFunction1(5, _c34, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.emptyFilterTemplate && !ctx_r1._emptyFilterTemplate && !ctx_r1.emptyTemplate && !ctx_r1._emptyTemplate ? 1 : 2);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyMessageLabel, " ");
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyTemplate || ctx_r1._emptyTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 56);
    \u0275\u0275conditionalCreate(1, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_1_Template, 1, 1)(2, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("emptyMessage"));
    \u0275\u0275property("pBind", ctx_r1.ptm("emptyMessage"))("ngStyle", \u0275\u0275pureFunction1(5, _c34, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.emptyTemplate && !ctx_r1._emptyTemplate ? 1 : 2);
  }
}
function MultiSelect_ng_template_14_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 53, 15);
    \u0275\u0275template(2, MultiSelect_ng_template_14_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 54)(3, MultiSelect_ng_template_14_ng_template_8_li_3_Template, 3, 7, "li", 55)(4, MultiSelect_ng_template_14_ng_template_8_li_4_Template, 3, 7, "li", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r23 = ctx.$implicit;
    const scrollerOptions_r21 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(scrollerOptions_r21.contentStyle);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("list"), scrollerOptions_r21.contentStyleClass));
    \u0275\u0275property("pBind", ctx_r1.ptm("list"));
    \u0275\u0275attribute("aria-label", ctx_r1.listLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r23);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFilter() && ctx_r1.isEmpty());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasFilter() && ctx_r1.isEmpty());
  }
}
function MultiSelect_ng_template_14_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_10_ng_container_2_Template, 1, 0, "ng-container", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function MultiSelect_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 39, 6);
    \u0275\u0275listener("focus", function MultiSelect_ng_template_14_Template_span_focus_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFirstHiddenFocus($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MultiSelect_ng_template_14_ng_container_3_Template, 1, 0, "ng-container", 32)(4, MultiSelect_ng_template_14_div_4_Template, 5, 5, "div", 33);
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275template(6, MultiSelect_ng_template_14_p_scroller_6_Template, 5, 11, "p-scroller", 40)(7, MultiSelect_ng_template_14_ng_container_7_Template, 2, 6, "ng-container", 20)(8, MultiSelect_ng_template_14_ng_template_8_Template, 5, 9, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MultiSelect_ng_template_14_div_10_Template, 3, 1, "div", 20);
    \u0275\u0275elementStart(11, "span", 39, 8);
    \u0275\u0275listener("focus", function MultiSelect_ng_template_14_Template_span_focus_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLastHiddenFocus($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("overlay"), ctx_r1.panelStyleClass));
    \u0275\u0275property("pBind", ctx_r1.ptm("overlay"))("ngStyle", ctx_r1.panelStyle);
    \u0275\u0275attribute("id", ctx_r1.id + "_list");
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("firstHiddenFocusableEl"));
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showHeader);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("listContainer"));
    \u0275\u0275styleProp("max-height", ctx_r1.virtualScroll ? "auto" : ctx_r1.scrollHeight || "auto");
    \u0275\u0275property("pBind", ctx_r1.ptm("listContainer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.virtualScroll);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate || ctx_r1._footerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("lastHiddenFocusableEl"));
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var style3 = (
  /*css*/
  `
    ${style2}

    /* For PrimeNG */
   .p-multiselect.ng-invalid.ng-dirty {
        border-color: dt('multiselect.invalid.border.color');
    }
    p-multiSelect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multi-select.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }
`
);
var inlineStyles = {
  root: ({
    instance
  }) => ({
    position: instance.$appendTo() === "self" ? "relative" : void 0
  })
};
var classes2 = {
  root: ({
    instance
  }) => ["p-multiselect p-component p-inputwrapper", {
    "p-multiselect p-component p-inputwrapper": true,
    "p-multiselect-display-chip": instance.display === "chip",
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-focus": instance.focused,
    "p-inputwrapper-filled": instance.$filled(),
    "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
    "p-multiselect-open": instance.overlayVisible,
    "p-multiselect-fluid": instance.hasFluid,
    "p-multiselect-sm p-inputfield-sm": instance.size() === "small",
    "p-multiselect-lg p-inputfield-lg": instance.size() === "large"
  }],
  labelContainer: "p-multiselect-label-container",
  label: ({
    instance
  }) => ({
    "p-multiselect-label": true,
    "p-placeholder": instance.label() === instance.placeholder(),
    "p-multiselect-label-empty": !instance.placeholder() && !instance.defaultLabel && (!instance.modelValue() || instance.modelValue().length === 0)
  }),
  chipItem: "p-multiselect-chip-item",
  pcChip: "p-multiselect-chip",
  chipIcon: "p-multiselect-chip-icon",
  dropdown: "p-multiselect-dropdown",
  loadingIcon: "p-multiselect-loading-icon",
  dropdownIcon: "p-multiselect-dropdown-icon",
  overlay: "p-multiselect-overlay p-component-overlay p-component",
  header: "p-multiselect-header",
  pcFilterContainer: "p-multiselect-filter-container",
  pcFilter: "p-multiselect-filter",
  listContainer: "p-multiselect-list-container",
  list: "p-multiselect-list",
  optionGroup: "p-multiselect-option-group",
  option: ({
    instance
  }) => ({
    "p-multiselect-option": true,
    "p-multiselect-option-selected": instance.selected && instance.highlightOnSelect,
    "p-disabled": instance.disabled,
    "p-focus": instance.focused
  }),
  emptyMessage: "p-multiselect-empty-message",
  clearIcon: "p-multiselect-clear-icon"
};
var MultiSelectStyle = class _MultiSelectStyle extends BaseStyle {
  name = "multiselect";
  style = style3;
  classes = classes2;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MultiSelectStyle_BaseFactory;
    return function MultiSelectStyle_Factory(__ngFactoryType__) {
      return (\u0275MultiSelectStyle_BaseFactory || (\u0275MultiSelectStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MultiSelectStyle)))(__ngFactoryType__ || _MultiSelectStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MultiSelectStyle,
    factory: _MultiSelectStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectStyle, [{
    type: Injectable
  }], null, null);
})();
var MultiSelectClasses;
(function(MultiSelectClasses2) {
  MultiSelectClasses2["root"] = "p-multiselect";
  MultiSelectClasses2["labelContainer"] = "p-multiselect-label-container";
  MultiSelectClasses2["label"] = "p-multiselect-label";
  MultiSelectClasses2["chipItem"] = "p-multiselect-chip-item";
  MultiSelectClasses2["pcChip"] = "p-multiselect-chip";
  MultiSelectClasses2["chipIcon"] = "p-multiselect-chip-icon";
  MultiSelectClasses2["dropdown"] = "p-multiselect-dropdown";
  MultiSelectClasses2["loadingIcon"] = "p-multiselect-loading-icon";
  MultiSelectClasses2["dropdownIcon"] = "p-multiselect-dropdown-icon";
  MultiSelectClasses2["overlay"] = "p-multiselect-overlay";
  MultiSelectClasses2["header"] = "p-multiselect-header";
  MultiSelectClasses2["pcFilterContainer"] = "p-multiselect-filter-container";
  MultiSelectClasses2["pcFilter"] = "p-multiselect-filter";
  MultiSelectClasses2["listContainer"] = "p-multiselect-list-container";
  MultiSelectClasses2["list"] = "p-multiselect-list";
  MultiSelectClasses2["optionGroup"] = "p-multiselect-option-group";
  MultiSelectClasses2["option"] = "p-multiselect-option";
  MultiSelectClasses2["emptyMessage"] = "p-multiselect-empty-message";
  MultiSelectClasses2["clearIcon"] = "p-autocomplete-clear-icon";
})(MultiSelectClasses || (MultiSelectClasses = {}));
var MULTISELECT_INSTANCE = new InjectionToken("MULTISELECT_INSTANCE");
var MULTISELECT_ITEM_INSTANCE = new InjectionToken("MULTISELECT_ITEM_INSTANCE");
var MULTISELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelect),
  multi: true
};
var MultiSelectItem = class _MultiSelectItem extends BaseComponent {
  $pcMultiSelectItem = inject(MULTISELECT_ITEM_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  hostName = "MultiSelect";
  getPTOptions(key) {
    return this.ptm(key, {
      context: {
        selected: this.selected,
        focused: this.focused,
        disabled: this.disabled
      }
    });
  }
  option;
  selected;
  label;
  disabled;
  itemSize;
  focused;
  ariaPosInset;
  ariaSetSize;
  variant;
  template;
  checkIconTemplate;
  itemCheckboxIconTemplate;
  highlightOnSelect;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  _componentStyle = inject(MultiSelectStyle);
  onOptionClick(event) {
    this.onClick.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
    event.stopPropagation();
    event.preventDefault();
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MultiSelectItem_BaseFactory;
    return function MultiSelectItem_Factory(__ngFactoryType__) {
      return (\u0275MultiSelectItem_BaseFactory || (\u0275MultiSelectItem_BaseFactory = \u0275\u0275getInheritedFactory(_MultiSelectItem)))(__ngFactoryType__ || _MultiSelectItem);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MultiSelectItem,
    selectors: [["li", "pMultiSelectItem", ""]],
    hostAttrs: ["role", "option"],
    hostVars: 12,
    hostBindings: function MultiSelectItem_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MultiSelectItem_click_HostBindingHandler($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function MultiSelectItem_mouseenter_HostBindingHandler($event) {
          return ctx.onOptionMouseEnter($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled)("aria-checked", ctx.selected);
        \u0275\u0275classMap(ctx.cx("option"));
        \u0275\u0275styleProp("height", ctx.itemSize, "px");
      }
    },
    inputs: {
      option: "option",
      selected: [2, "selected", "selected", booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      focused: [2, "focused", "focused", booleanAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      variant: "variant",
      template: "template",
      checkIconTemplate: "checkIconTemplate",
      itemCheckboxIconTemplate: "itemCheckboxIconTemplate",
      highlightOnSelect: [2, "highlightOnSelect", "highlightOnSelect", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    features: [\u0275\u0275ProvidersFeature([MultiSelectStyle]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 4,
    vars: 12,
    consts: [["icon", ""], [3, "ngModel", "binary", "tabindex", "variant", "ariaLabel", "pt"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function MultiSelectItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-checkbox", 1);
        \u0275\u0275template(1, MultiSelectItem_ng_container_1_Template, 3, 0, "ng-container", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, MultiSelectItem_span_2_Template, 2, 1, "span", 2)(3, MultiSelectItem_ng_container_3_Template, 1, 0, "ng-container", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.selected)("binary", true)("tabindex", -1)("variant", ctx.variant)("ariaLabel", ctx.label)("pt", ctx.getPTOptions("pcOptionCheckbox"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.itemCheckboxIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.template);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c12, ctx.option));
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, Checkbox, FormsModule, NgControlStatus, NgModel, SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectItem, [{
    type: Component,
    args: [{
      selector: "li[pMultiSelectItem]",
      standalone: true,
      imports: [CommonModule, Checkbox, FormsModule, SharedModule],
      template: `
        <p-checkbox [ngModel]="selected" [binary]="true" [tabindex]="-1" [variant]="variant" [ariaLabel]="label" [pt]="getPTOptions('pcOptionCheckbox')">
            <ng-container *ngIf="itemCheckboxIconTemplate">
                <ng-template #icon let-klass="class">
                    <ng-template *ngTemplateOutlet="itemCheckboxIconTemplate; context: { checked: selected, class: klass }"></ng-template>
                </ng-template>
            </ng-container>
        </p-checkbox>
        <span *ngIf="!template">{{ label ?? 'empty' }}</span>
        <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
    `,
      encapsulation: ViewEncapsulation.None,
      providers: [MultiSelectStyle],
      host: {
        "[style.height.px]": "itemSize",
        "[attr.aria-label]": "label",
        role: "option",
        "[attr.aria-setsize]": "ariaSetSize",
        "[attr.aria-posinset]": "ariaPosInset",
        "[attr.aria-selected]": "selected",
        "[attr.data-p-focused]": "focused",
        "[attr.data-p-highlight]": "selected",
        "[attr.data-p-disabled]": "disabled",
        "[attr.aria-checked]": "selected",
        "(click)": "onOptionClick($event)",
        "(mouseenter)": "onOptionMouseEnter($event)",
        "[class]": "cx('option')"
      }
    }]
  }], null, {
    option: [{
      type: Input
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focused: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    checkIconTemplate: [{
      type: Input
    }],
    itemCheckboxIconTemplate: [{
      type: Input
    }],
    highlightOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
var MultiSelect = class _MultiSelect extends BaseEditableHolder {
  zone;
  filterService;
  overlayService;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the overlay panel.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter = true;
  /**
   * Defines placeholder of the filter input.
   * @group Props
   */
  filterPlaceHolder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Specifies the visibility of the options panel.
   * @group Props
   */
  overlayVisible = false;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Whether to show labels of selected item labels or use default label.
   * @group Props
   * @defaultValue true
   */
  set displaySelectedLabel(val) {
    this._displaySelectedLabel = val;
  }
  get displaySelectedLabel() {
    return this._displaySelectedLabel;
  }
  /**
   * Decides how many selected item labels to show at most.
   * @group Props
   * @defaultValue 3
   */
  set maxSelectedLabels(val) {
    this._maxSelectedLabels = val || 0;
  }
  get maxSelectedLabels() {
    return this._maxSelectedLabels;
  }
  /**
   * Maximum number of selectable items.
   * @group Props
   */
  selectionLimit;
  /**
   * Label to display after exceeding max selected labels e.g. ({0} items selected), defaults "ellipsis" keyword to indicate a text-overflow.
   * @group Props
   */
  selectedItemsLabel;
  /**
   * Whether to show the checkbox at header to toggle all items at once.
   * @group Props
   */
  showToggleAll = true;
  /**
   * Text to display when filtering does not return any results.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Icon class of the chip icon.
   * @group Props
   */
  chipIcon;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to show the header.
   * @group Props
   */
  showHeader = true;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Whether the multiselect is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = false;
  /**
   * Defines how the selected items are displayed.
   * @group Props
   */
  display = "comma";
  /**
   * Defines the autocomplete is active.
   * @group Props
   */
  autocomplete = "off";
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Label to display when there are no selections.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    return this._options();
  }
  set options(val) {
    if (!y(this._options(), val)) {
      this._options.set(val || []);
    }
  }
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    this._filterValue.set(val);
  }
  /**
   * Whether all data is selected.
   * @group Props
   */
  get selectAll() {
    return this._selectAll;
  }
  set selectAll(value) {
    this._selectAll = value;
  }
  /**
   * Indicates whether to focus on options when hovering over them, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = true;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = false;
  /**
   * Whether the selected option will be add highlight class.
   * @group Props
   */
  highlightOnSelect = true;
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * Callback to invoke when value changes.
   * @param {MultiSelectChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {MultiSelectFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when multiselect receives focus.
   * @param {MultiSelectFocusEvent} event - Custom focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when multiselect loses focus.
   * @param {MultiSelectBlurEvent} event - Custom blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when input field is cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes visible.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onPanelShow = new EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes hidden.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onPanelHide = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectRemoveEvent} event - Remove event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * Callback to invoke when all data is selected.
   * @param {MultiSelectSelectAllChangeEvent} event - Custom select event.
   * @group Emits
   */
  onSelectAllChange = new EventEmitter();
  overlayViewChild;
  filterInputChild;
  focusInputViewChild;
  itemsViewChild;
  scroller;
  lastHiddenFocusableElementOnOverlay;
  firstHiddenFocusableElementOnOverlay;
  headerCheckboxViewChild;
  footerFacet;
  headerFacet;
  _componentStyle = inject(MultiSelectStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  searchValue;
  searchTimeout;
  _selectAll = null;
  _placeholder = signal(void 0, ...ngDevMode ? [{
    debugName: "_placeholder"
  }] : []);
  _disableTooltip = false;
  value;
  _filteredOptions;
  focus;
  filtered;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  selectedItemsTemplate;
  loadingIconTemplate;
  filterIconTemplate;
  removeTokenIconTemplate;
  chipIconTemplate;
  clearIconTemplate;
  dropdownIconTemplate;
  itemCheckboxIconTemplate;
  headerCheckboxIconTemplate;
  templates;
  _itemTemplate;
  _groupTemplate;
  _loaderTemplate;
  _headerTemplate;
  _filterTemplate;
  _footerTemplate;
  _emptyFilterTemplate;
  _emptyTemplate;
  _selectedItemsTemplate;
  _loadingIconTemplate;
  _filterIconTemplate;
  _removeTokenIconTemplate;
  _chipIconTemplate;
  _clearIconTemplate;
  _dropdownIconTemplate;
  _itemCheckboxIconTemplate;
  _headerCheckboxIconTemplate;
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  $pcMultiSelect = inject(MULTISELECT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "group":
          this._groupTemplate = item.template;
          break;
        case "selectedItems":
        case "selecteditems":
          this._selectedItemsTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "filter":
          this._filterTemplate = item.template;
          break;
        case "emptyfilter":
          this._emptyFilterTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "loader":
          this._loaderTemplate = item.template;
          break;
        case "headercheckboxicon":
          this._headerCheckboxIconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        case "removetokenicon":
          this._removeTokenIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        case "itemcheckboxicon":
          this._itemCheckboxIconTemplate = item.template;
          break;
        case "chipicon":
          this._chipIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  headerCheckboxFocus;
  filterOptions;
  preventModelTouched;
  focused = false;
  itemsWrapper;
  _displaySelectedLabel = true;
  _maxSelectedLabels = 3;
  modelValue = signal(null, ...ngDevMode ? [{
    debugName: "modelValue"
  }] : []);
  _filterValue = signal(null, ...ngDevMode ? [{
    debugName: "_filterValue"
  }] : []);
  _options = signal([], ...ngDevMode ? [{
    debugName: "_options"
  }] : []);
  startRangeIndex = signal(-1, ...ngDevMode ? [{
    debugName: "startRangeIndex"
  }] : []);
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : []);
  selectedOptions;
  clickInProgress = false;
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.modelValue() !== "" && s(this.modelValue()) && this.showClear && !this.$disabled() && !this.readonly && this.$filled();
  }
  get toggleAllAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? "selectAll" : "unselectAll"] : void 0;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const isArrayOfObjects = C(options) && ObjectUtils.isObject(options[0]);
    if (this._filterValue()) {
      let filteredOptions;
      if (isArrayOfObjects) {
        filteredOptions = this.filterService.filter(options, this.searchFields(), this._filterValue(), this.filterMatchMode, this.filterLocale);
      } else {
        filteredOptions = options.filter((option) => option.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase()));
      }
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
          if (filteredItems.length > 0) filtered.push(__spreadProps(__spreadValues({}, group), {
            [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
          }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  }, ...ngDevMode ? [{
    debugName: "visibleOptions"
  }] : []);
  label = computed(() => {
    let label;
    const modelValue = this.modelValue();
    if (modelValue && modelValue?.length && this.displaySelectedLabel) {
      if (s(this.maxSelectedLabels) && modelValue?.length > (this.maxSelectedLabels || 0)) {
        return this.getSelectedItemsLabel();
      } else {
        label = "";
        for (let i = 0; i < modelValue.length; i++) {
          if (i !== 0) {
            label += ", ";
          }
          label += this.getLabelByValue(modelValue[i]);
        }
      }
    } else {
      label = this.placeholder() || "";
    }
    return label;
  }, ...ngDevMode ? [{
    debugName: "label"
  }] : []);
  chipSelectedItems = computed(() => {
    return s(this.maxSelectedLabels) && this.modelValue() && this.modelValue()?.length > (this.maxSelectedLabels || 0) ? this.modelValue()?.slice(0, this.maxSelectedLabels) : this.modelValue();
  }, ...ngDevMode ? [{
    debugName: "chipSelectedItems"
  }] : []);
  constructor(zone, filterService, overlayService) {
    super();
    this.zone = zone;
    this.filterService = filterService;
    this.overlayService = overlayService;
    effect(() => {
      const modelValue = this.modelValue();
      const allVisibleAndNonVisibleOptions = this.getAllVisibleAndNonVisibleOptions();
      if (allVisibleAndNonVisibleOptions && s(allVisibleAndNonVisibleOptions)) {
        if (this.optionValue && this.optionLabel && modelValue) {
          this.selectedOptions = allVisibleAndNonVisibleOptions.filter((option) => modelValue.includes(option[this.optionLabel]) || modelValue.includes(option[this.optionValue]));
        } else {
          this.selectedOptions = modelValue;
        }
        this.cd.markForCheck();
      }
    });
  }
  onInit() {
    this.id = this.id || s2("pn_id_");
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  maxSelectionLimitReached() {
    return this.selectionLimit && this.modelValue() && this.modelValue().length === this.selectionLimit;
  }
  onAfterViewInit() {
    if (this.overlayVisible) {
      this.show();
    }
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
    if (this.filtered) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.overlayViewChild?.alignOverlay();
        }, 1);
      });
      this.filtered = false;
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      const value = this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);
      this.onOptionSelect({
        originalEvent: null,
        option: [value]
      });
    }
  }
  /**
   * Updates the model value.
   * @group Method
   */
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.writeValue(value);
  }
  onInputClick(event) {
    event.stopPropagation();
    event.preventDefault();
    this.focusedOptionIndex.set(-1);
  }
  onOptionSelect(event, isFocus = false, index = -1) {
    const {
      originalEvent,
      option
    } = event;
    if (this.$disabled() || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    let value = [];
    if (selected) {
      value = this.modelValue().filter((val) => !k(val, this.getOptionValue(option), this.equalityKey() || ""));
    } else {
      value = [...this.modelValue() || [], this.getOptionValue(option)];
    }
    this.updateModel(value, originalEvent);
    index !== -1 && this.focusedOptionIndex.set(index);
    isFocus && bt(this.focusInputViewChild?.nativeElement);
    this.onChange.emit({
      originalEvent: event,
      value,
      itemValue: option
    });
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  onOptionSelectRange(event, start = -1, end = -1) {
    start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
    end === -1 && (end = this.findNearestSelectedOptionIndex(start));
    if (start !== -1 && end !== -1) {
      const rangeStart = Math.min(start, end);
      const rangeEnd = Math.max(start, end);
      const value = this.visibleOptions().slice(rangeStart, rangeEnd + 1).filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
      this.updateModel(value, event);
    }
  }
  searchFields() {
    return (this.filterBy || this.optionLabel || "label").split(",");
  }
  findNearestSelectedOptionIndex(index, firstCheckUp = false) {
    let matchedOptionIndex = -1;
    if (this.hasSelectedOption()) {
      if (firstCheckUp) {
        matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
      } else {
        matchedOptionIndex = this.findNextSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
      }
    }
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findPrevSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? M(this.visibleOptions().slice(0, index), (option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findFirstSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findFirstSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  hasSelectedOption() {
    return s(this.modelValue());
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isOptionGroup(option) {
    return option && (this.group || this.optionGroupLabel) && option.optionGroup && option.group;
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionDisabled(option) {
    if (this.maxSelectionLimitReached() && !this.isSelected(option)) {
      return true;
    }
    return this.optionDisabled ? p(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
  }
  isSelected(option) {
    const optionValue = this.getOptionValue(option);
    return (this.modelValue() || []).some((value) => k(value, optionValue, this.equalityKey() || ""));
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale));
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  getLabelByValue(value) {
    const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
    const matchedOption = options.find((option) => !this.isOptionGroup(option) && k(this.getOptionValue(option), value, this.equalityKey() || ""));
    return matchedOption ? this.getOptionLabel(matchedOption) : null;
  }
  getSelectedItemsLabel() {
    let pattern = /{(.*?)}/;
    let message = this.selectedItemsLabel ? this.selectedItemsLabel : this.config.getTranslation(TranslationKeys.SELECTION_MESSAGE);
    if (pattern.test(message)) {
      return message.replace(message.match(pattern)[0], this.modelValue().length + "");
    }
    return message;
  }
  getOptionLabel(option) {
    return this.optionLabel ? p(option, this.optionLabel) : option && option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? p(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? p(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return optionGroup ? this.optionGroupChildren ? p(optionGroup, this.optionGroupChildren) : optionGroup.items : [];
  }
  onKeyDown(event) {
    if (this.$disabled()) {
      event.preventDefault();
      return;
    }
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Enter":
      case "Space":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        this.onShiftKey();
        break;
      default:
        if (event.code === "KeyA" && metaKey) {
          const value = this.visibleOptions().filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
          this.updateModel(value, event);
          event.preventDefault();
          break;
        }
        if (!metaKey && J(event.key)) {
          !this.overlayVisible && this.show();
          this.searchOptions(event, event.key);
          event.preventDefault();
        }
        break;
    }
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    if (event.shiftKey) {
      this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
    }
    this.changeFocusedOptionIndex(event, optionIndex);
    !this.overlayVisible && this.show();
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
      if (event.shiftKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    event.stopPropagation();
  }
  onHomeKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findFirstOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findLastFocusedOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.overlayVisible) {
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        if (event.shiftKey) {
          this.onOptionSelectRange(event, this.focusedOptionIndex());
        } else {
          this.onOptionSelect({
            originalEvent: event,
            option: this.visibleOptions()[this.focusedOptionIndex()]
          });
        }
      }
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    if (this.overlayVisible) {
      this.hide(true);
      event.stopPropagation();
      event.preventDefault();
    }
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        bt(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay?.nativeElement : this.firstHiddenFocusableElementOnOverlay?.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          !this.isSelected(option) && this.onOptionSelect({
            originalEvent: event,
            option
          });
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
  }
  onShiftKey() {
    this.startRangeIndex.set(this.focusedOptionIndex());
  }
  onContainerClick(event) {
    if (this.$disabled() || this.loading || this.readonly || event.target?.isSameNode?.(this.focusInputViewChild?.nativeElement)) {
      return;
    }
    if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      if (this.clickInProgress) {
        return;
      }
      this.clickInProgress = true;
      setTimeout(() => {
        this.clickInProgress = false;
      }, 150);
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    this.onClick.emit(event);
    this.cd.detectChanges();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? vt(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    bt(focusableEl);
  }
  onInputFocus(event) {
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit({
      originalEvent: event
    });
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit({
      originalEvent: event
    });
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller?.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild?.alignOverlay();
    });
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? Lt(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    bt(focusableEl);
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onToggleAll(event) {
    if (this.$disabled() || this.readonly) {
      return;
    }
    if (this.selectAll != null) {
      this.onSelectAllChange.emit({
        originalEvent: event,
        checked: !this.allSelected()
      });
    } else {
      const selectedDisabledOptions = this.getAllVisibleAndNonVisibleOptions().filter((option) => this.isSelected(option) && (this.optionDisabled ? p(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false));
      const visibleOptions = this.allSelected() ? this.visibleOptions().filter((option) => !this.isValidOption(option) && this.isSelected(option)) : this.visibleOptions().filter((option) => this.isSelected(option) || this.isValidOption(option));
      const selectedOptionsBeforeSearch = this.filter && !this.allSelected() ? this.getAllVisibleAndNonVisibleOptions().filter((option) => this.isSelected(option) && this.isValidOption(option)) : [];
      const optionValues = [...selectedOptionsBeforeSearch, ...selectedDisabledOptions, ...visibleOptions].map((option) => this.getOptionValue(option));
      const value = [...new Set(optionValues)];
      this.updateModel(value, event);
      if (!value.length || value.length === this.getAllVisibleAndNonVisibleOptions().length) {
        this.onSelectAllChange.emit({
          originalEvent: event,
          checked: !!value.length
        });
      }
    }
    if (this.partialSelected()) {
      this.selectedOptions = [];
      this.cd.markForCheck();
    }
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    DomHandler.focus(this.headerCheckboxViewChild?.inputViewChild?.nativeElement);
    this.headerCheckboxFocus = true;
    event.originalEvent.preventDefault();
    event.originalEvent.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = z(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  allSelected() {
    return this.selectAll !== null ? this.selectAll : s(this.visibleOptions()) && this.visibleOptions().every((option) => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
  }
  partialSelected() {
    return this.selectedOptions && this.selectedOptions.length > 0 && this.selectedOptions.length < (this.options?.length || 0);
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      bt(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (this.overlayOptions?.mode === "modal") {
      unblockBodyScroll();
    }
    isFocus && bt(this.focusInputViewChild?.nativeElement);
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = z(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-multiselect-list-container");
      this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = z(this.itemsWrapper, '[data-p-highlight="true"]');
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      }
      if (this.filterInputChild && this.filterInputChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter) {
          this.filterInputChild.nativeElement.focus();
        }
      }
      this.onPanelShow.emit(event);
    }
    if (event.toState === "void") {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onPanelHide.emit(event);
    }
  }
  resetFilter() {
    if (this.filterInputChild && this.filterInputChild.nativeElement) {
      this.filterInputChild.nativeElement.value = "";
    }
    this._filterValue.set(null);
    this._filteredOptions = null;
  }
  onOverlayHide(event) {
    this.focusedOptionIndex.set(-1);
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
  }
  close(event) {
    this.hide();
    event.preventDefault();
    event.stopPropagation();
  }
  clear(event) {
    this.value = [];
    this.updateModel(null, event);
    this.selectedOptions = [];
    this.onClear.emit();
    this._disableTooltip = true;
    event.stopPropagation();
  }
  labelContainerMouseLeave() {
    if (this._disableTooltip) this._disableTooltip = false;
  }
  removeOption(optionValue, event) {
    let value = this.modelValue().filter((val) => !k(val, optionValue, this.equalityKey() || ""));
    this.updateModel(value, event);
    this.onChange.emit({
      originalEvent: event,
      value,
      itemValue: optionValue
    });
    this.onRemove.emit({
      newValue: value,
      removed: optionValue
    });
    event && event.stopPropagation();
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? M(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastSelectedOptionIndex() {
    return this.hasSelectedOption() ? M(this.visibleOptions(), (option) => this.isValidSelectedOption(option)) : -1;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findLastSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findLastOptionIndex() {
    return M(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    if (this.focusedOptionIndex() !== -1) {
      optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option));
      optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
    } else {
      optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  hasFocusableElements() {
    return b(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  hasFilter() {
    return this._filterValue() && this._filterValue().trim().length > 0;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(value);
    this.cd.markForCheck();
  }
  getHeaderCheckboxPTOptions(key) {
    return this.ptm(key, {
      context: {
        selected: this.allSelected()
      }
    });
  }
  getPTOptions(option, itemOptions, index, key) {
    return this.ptm(key, {
      context: {
        selected: this.isSelected(option),
        focused: this.focusedOptionIndex() === this.getOptionIndex(index, itemOptions),
        disabled: this.isOptionDisabled(option)
      }
    });
  }
  static \u0275fac = function MultiSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelect)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(FilterService), \u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MultiSelect,
    selectors: [["p-multiSelect"], ["p-multiselect"], ["p-multi-select"]],
    contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, _c7, 4);
        \u0275\u0275contentQuery(dirIndex, _c8, 4);
        \u0275\u0275contentQuery(dirIndex, _c9, 4);
        \u0275\u0275contentQuery(dirIndex, _c10, 4);
        \u0275\u0275contentQuery(dirIndex, _c11, 4);
        \u0275\u0275contentQuery(dirIndex, _c122, 4);
        \u0275\u0275contentQuery(dirIndex, _c13, 4);
        \u0275\u0275contentQuery(dirIndex, _c14, 4);
        \u0275\u0275contentQuery(dirIndex, _c15, 4);
        \u0275\u0275contentQuery(dirIndex, _c16, 4);
        \u0275\u0275contentQuery(dirIndex, _c17, 4);
        \u0275\u0275contentQuery(dirIndex, _c18, 4);
        \u0275\u0275contentQuery(dirIndex, _c19, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.groupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyFilterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selectedItemsTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeTokenIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chipIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemCheckboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCheckboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function MultiSelect_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c20, 5);
        \u0275\u0275viewQuery(_c21, 5);
        \u0275\u0275viewQuery(_c22, 5);
        \u0275\u0275viewQuery(_c23, 5);
        \u0275\u0275viewQuery(_c24, 5);
        \u0275\u0275viewQuery(_c25, 5);
        \u0275\u0275viewQuery(_c26, 5);
        \u0275\u0275viewQuery(_c27, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterInputChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.focusInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCheckboxViewChild = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function MultiSelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MultiSelect_click_HostBindingHandler($event) {
          return ctx.onContainerClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      id: "id",
      ariaLabel: "ariaLabel",
      styleClass: "styleClass",
      panelStyle: "panelStyle",
      panelStyleClass: "panelStyleClass",
      inputId: "inputId",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      group: [2, "group", "group", booleanAttribute],
      filter: [2, "filter", "filter", booleanAttribute],
      filterPlaceHolder: "filterPlaceHolder",
      filterLocale: "filterLocale",
      overlayVisible: [2, "overlayVisible", "overlayVisible", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      dataKey: "dataKey",
      ariaLabelledBy: "ariaLabelledBy",
      displaySelectedLabel: "displaySelectedLabel",
      maxSelectedLabels: "maxSelectedLabels",
      selectionLimit: [2, "selectionLimit", "selectionLimit", numberAttribute],
      selectedItemsLabel: "selectedItemsLabel",
      showToggleAll: [2, "showToggleAll", "showToggleAll", booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
      dropdownIcon: "dropdownIcon",
      chipIcon: "chipIcon",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      filterBy: "filterBy",
      scrollHeight: "scrollHeight",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      loadingIcon: "loadingIcon",
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      filterMatchMode: "filterMatchMode",
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", booleanAttribute],
      display: "display",
      autocomplete: "autocomplete",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      placeholder: "placeholder",
      options: "options",
      filterValue: "filterValue",
      selectAll: "selectAll",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      filterFields: "filterFields",
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      highlightOnSelect: [2, "highlightOnSelect", "highlightOnSelect", booleanAttribute],
      size: [1, "size"],
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onClear: "onClear",
      onPanelShow: "onPanelShow",
      onPanelHide: "onPanelHide",
      onLazyLoad: "onLazyLoad",
      onRemove: "onRemove",
      onSelectAllChange: "onSelectAllChange"
    },
    features: [\u0275\u0275ProvidersFeature([MULTISELECT_VALUE_ACCESSOR, MultiSelectStyle, {
      provide: MULTISELECT_INSTANCE,
      useExisting: _MultiSelect
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _MultiSelect
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c29,
    decls: 16,
    vars: 46,
    consts: [["focusInput", ""], ["elseBlock", ""], ["overlay", ""], ["content", ""], ["token", ""], ["removeicon", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["headerCheckbox", ""], ["icon", ""], ["filterInput", ""], ["scroller", ""], ["loader", ""], ["items", ""], [1, "p-hidden-accessible", 3, "pBind"], ["role", "combobox", 3, "focus", "blur", "keydown", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus", "pBind"], [3, "mouseleave", "pBind", "pTooltip", "tooltipDisabled", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [3, "pBind"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "hostAttrSelector", "visible", "options", "target", "appendTo", "pt"], [3, "pBind", "class"], [3, "pBind", "class", 4, "ngFor", "ngForOf"], [3, "onRemove", "pt", "label", "removable", "removeIcon"], [3, "class", "pBind", "click", 4, "ngIf"], [3, "click", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "times", 3, "pBind", "class", "click", 4, "ngIf"], [3, "pBind", "class", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "click", "pBind"], [4, "ngTemplateOutlet"], [3, "pBind", "class", 4, "ngIf"], [3, "pBind", "class", "ngClass", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "pBind", "class", 4, "ngIf"], [3, "pBind", "ngClass"], ["data-p-icon", "chevron-down", 3, "pBind"], [3, "pBind", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus", "pBind"], [3, "items", "style", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad", 4, "ngIf"], [3, "pt", "ngModel", "ariaLabel", "binary", "variant", "disabled", "onChange", 4, "ngIf"], [3, "pt", "class", 4, "ngIf"], [3, "onChange", "pt", "ngModel", "ariaLabel", "binary", "variant", "disabled"], ["data-p-icon", "check", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "check", 3, "pBind"], [3, "pt"], ["pInputText", "", "type", "text", "role", "searchbox", 3, "input", "keydown", "click", "blur", "pt", "variant", "value"], ["data-p-icon", "search", 3, "pBind", 4, "ngIf"], ["class", "p-multiselect-filter-icon", 3, "pBind", 4, "ngIf"], ["data-p-icon", "search", 3, "pBind"], [1, "p-multiselect-filter-icon", 3, "pBind"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "tabindex", "lazy", "options"], ["role", "listbox", "aria-multiselectable", "true", 3, "pBind"], ["ngFor", "", 3, "ngForOf"], ["role", "option", 3, "pBind", "class", "ngStyle", 4, "ngIf"], ["role", "option", 3, "pBind", "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["pMultiSelectItem", "", "pRipple", "", 3, "onClick", "onMouseEnter", "pBind", "id", "option", "selected", "label", "disabled", "template", "itemCheckboxIconTemplate", "itemSize", "focused", "ariaPosInset", "ariaSetSize", "variant", "highlightOnSelect", "pt"]],
    template: function MultiSelect_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c28);
        \u0275\u0275elementStart(0, "div", 16)(1, "input", 17, 0);
        \u0275\u0275listener("focus", function MultiSelect_Template_input_focus_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function MultiSelect_Template_input_blur_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("keydown", function MultiSelect_Template_input_keydown_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 18);
        \u0275\u0275listener("mouseleave", function MultiSelect_Template_div_mouseleave_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.labelContainerMouseLeave());
        });
        \u0275\u0275elementStart(4, "div", 19);
        \u0275\u0275template(5, MultiSelect_ng_container_5_Template, 3, 2, "ng-container", 20)(6, MultiSelect_ng_container_6_Template, 3, 6, "ng-container", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, MultiSelect_ng_container_7_Template, 3, 2, "ng-container", 20);
        \u0275\u0275elementStart(8, "div", 19);
        \u0275\u0275template(9, MultiSelect_ng_container_9_Template, 3, 2, "ng-container", 21)(10, MultiSelect_ng_template_10_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p-overlay", 22, 2);
        \u0275\u0275twoWayListener("visibleChange", function MultiSelect_Template_p_overlay_visibleChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onAnimationStart", function MultiSelect_Template_p_overlay_onAnimationStart_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function MultiSelect_Template_p_overlay_onHide_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayHide($event));
        });
        \u0275\u0275template(14, MultiSelect_ng_template_14_Template, 13, 23, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const elseBlock_r24 = \u0275\u0275reference(11);
        \u0275\u0275property("pBind", ctx.ptm("hiddenInputContainer"));
        \u0275\u0275attribute("data-p-hidden-accessible", true);
        \u0275\u0275advance();
        \u0275\u0275property("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass)("pAutoFocus", ctx.autofocus)("pBind", ctx.ptm("hiddenInput"));
        \u0275\u0275attribute("aria-disabled", ctx.$disabled())("id", ctx.inputId)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", ctx.overlayVisible ?? false)("aria-controls", ctx.overlayVisible ? ctx.id + "_list" : null)("tabindex", !ctx.$disabled() ? ctx.tabindex : -1)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : void 0)("value", ctx.modelValue())("name", ctx.name())("required", ctx.required() ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("labelContainer"));
        \u0275\u0275property("pBind", ctx.ptm("labelContainer"))("pTooltip", ctx.tooltip)("tooltipDisabled", ctx._disableTooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("label"));
        \u0275\u0275property("pBind", ctx.ptm("label"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedItemsTemplate && !ctx._selectedItemsTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedItemsTemplate || ctx._selectedItemsTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isVisibleClearIcon);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("dropdown"));
        \u0275\u0275property("pBind", ctx.ptm("dropdown"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading)("ngIfElse", elseBlock_r24);
        \u0275\u0275advance(3);
        \u0275\u0275property("hostAttrSelector", ctx.$attrSelector);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.$appendTo())("pt", ctx.ptm("pcOverlay"));
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, MultiSelectItem, Overlay, SharedModule, Tooltip, Scroller, AutoFocus, CheckIcon, SearchIcon, TimesIcon, ChevronDownIcon, IconField, InputIcon, InputText, Chip, Checkbox, FormsModule, NgControlStatus, NgModel, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelect, [{
    type: Component,
    args: [{
      selector: "p-multiSelect, p-multiselect, p-multi-select",
      standalone: true,
      imports: [CommonModule, MultiSelectItem, Overlay, SharedModule, Tooltip, Scroller, AutoFocus, CheckIcon, SearchIcon, TimesIcon, ChevronDownIcon, IconField, InputIcon, InputText, Chip, Checkbox, FormsModule, BindModule],
      hostDirectives: [Bind],
      template: `
        <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true" [pBind]="ptm('hiddenInputContainer')">
            <input
                #focusInput
                [pTooltip]="tooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
                [attr.aria-disabled]="$disabled()"
                [attr.id]="inputId"
                role="combobox"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.tabindex]="!$disabled() ? tabindex : -1"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [pAutoFocus]="autofocus"
                [attr.value]="modelValue()"
                [attr.name]="name()"
                [attr.required]="required() ? '' : undefined"
                [attr.disabled]="$disabled() ? '' : undefined"
                [pBind]="ptm('hiddenInput')"
            />
        </div>
        <div
            [pBind]="ptm('labelContainer')"
            [class]="cx('labelContainer')"
            [pTooltip]="tooltip"
            (mouseleave)="labelContainerMouseLeave()"
            [tooltipDisabled]="_disableTooltip"
            [tooltipPosition]="tooltipPosition"
            [positionStyle]="tooltipPositionStyle"
            [tooltipStyleClass]="tooltipStyleClass"
        >
            <div [pBind]="ptm('label')" [class]="cx('label')">
                <ng-container *ngIf="!selectedItemsTemplate && !_selectedItemsTemplate">
                    <ng-container *ngIf="display === 'comma'">{{ label() || 'empty' }}</ng-container>
                    <ng-container *ngIf="display === 'chip'">
                        @if (chipSelectedItems() && chipSelectedItems().length === maxSelectedLabels) {
                            {{ getSelectedItemsLabel() }}
                        } @else {
                            <div #token *ngFor="let item of chipSelectedItems(); let i = index" [pBind]="ptm('chipItem')" [class]="cx('chipItem')">
                                <p-chip [pt]="ptm('pcChip')" [class]="cx('pcChip')" [label]="getLabelByValue(item)" [removable]="!$disabled() && !readonly" (onRemove)="removeOption(item, $event)" [removeIcon]="chipIcon">
                                    <ng-container *ngIf="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate">
                                        <ng-template #removeicon>
                                            <ng-container *ngIf="!$disabled() && !readonly">
                                                <span
                                                    [class]="cx('chipIcon')"
                                                    *ngIf="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate"
                                                    (click)="removeOption(item, $event)"
                                                    [attr.aria-hidden]="true"
                                                    [pBind]="ptm('chipIcon')"
                                                >
                                                    <ng-container *ngTemplateOutlet="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate; context: { class: 'p-multiselect-chip-icon' }"></ng-container>
                                                </span>
                                            </ng-container>
                                        </ng-template>
                                    </ng-container>
                                </p-chip>
                            </div>
                        }
                        <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || 'empty' }}</ng-container>
                    </ng-container>
                </ng-container>
                <ng-container *ngIf="selectedItemsTemplate || _selectedItemsTemplate">
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate || _selectedItemsTemplate; context: { $implicit: selectedOptions, removeChip: removeOption.bind(this) }"></ng-container>
                    <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || 'empty' }}</ng-container>
                </ng-container>
            </div>
        </div>
        <ng-container *ngIf="isVisibleClearIcon">
            <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [pBind]="ptm('clearIcon')" [class]="cx('clearIcon')" (click)="clear($event)" [attr.aria-hidden]="true" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" [pBind]="ptm('clearIcon')" [class]="cx('clearIcon')" (click)="clear($event)" [attr.aria-hidden]="true">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
        <div [pBind]="ptm('dropdown')" [class]="cx('dropdown')">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate || _loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [pBind]="ptm('loadingIcon')" [class]="cn(cx('loadingIcon'), 'pi-spin ' + loadingIcon)" [attr.aria-hidden]="true"></span>
                    <span *ngIf="!loadingIcon" [pBind]="ptm('loadingIcon')" [class]="cn(cx('loadingIcon'), 'pi pi-spinner pi-spin')" [attr.aria-hidden]="true"></span>
                </ng-container>
            </ng-container>
            <ng-template #elseBlock>
                <ng-container *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate">
                    <span *ngIf="dropdownIcon" [pBind]="ptm('dropdownIcon')" [class]="cx('dropdownIcon')" [ngClass]="dropdownIcon" [attr.aria-hidden]="true"></span>
                    <svg data-p-icon="chevron-down" *ngIf="!dropdownIcon" [pBind]="ptm('dropdownIcon')" [class]="cx('dropdownIcon')" [attr.aria-hidden]="true" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate || _dropdownIconTemplate" [pBind]="ptm('dropdownIcon')" [class]="cx('dropdownIcon')" [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-template>
                </span>
            </ng-template>
        </div>
        <p-overlay
            #overlay
            [hostAttrSelector]="$attrSelector"
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="$appendTo()"
            (onAnimationStart)="onOverlayAnimationStart($event)"
            (onHide)="onOverlayHide($event)"
            [pt]="ptm('pcOverlay')"
        >
            <ng-template #content>
                <div [pBind]="ptm('overlay')" [attr.id]="id + '_list'" [class]="cn(cx('overlay'), panelStyleClass)" [ngStyle]="panelStyle">
                    <span
                        #firstHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                        [pBind]="ptm('firstHiddenFocusableEl')"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    <div [pBind]="ptm('header')" [class]="cx('header')" *ngIf="showHeader">
                        <ng-content select="p-header"></ng-content>
                        <ng-container *ngIf="filterTemplate || _filterTemplate; else builtInFilterElement">
                            <ng-container *ngTemplateOutlet="filterTemplate || _filterTemplate; context: { options: filterOptions }"></ng-container>
                        </ng-container>
                        <ng-template #builtInFilterElement>
                            <p-checkbox
                                [pt]="getHeaderCheckboxPTOptions('pcHeaderCheckbox')"
                                [ngModel]="allSelected()"
                                [ariaLabel]="toggleAllAriaLabel"
                                [binary]="true"
                                (onChange)="onToggleAll($event)"
                                *ngIf="showToggleAll && !selectionLimit"
                                [variant]="$variant()"
                                [disabled]="$disabled()"
                                #headerCheckbox
                            >
                                <ng-template #icon let-klass="class">
                                    <svg data-p-icon="check" *ngIf="!headerCheckboxIconTemplate && !_headerCheckboxIconTemplate && allSelected()" [class]="klass" [pBind]="getHeaderCheckboxPTOptions('pcHeaderCheckbox.icon')" />
                                    <ng-template
                                        *ngTemplateOutlet="
                                            headerCheckboxIconTemplate || _headerCheckboxIconTemplate;
                                            context: {
                                                checked: allSelected(),
                                                partialSelected: partialSelected(),
                                                class: klass
                                            }
                                        "
                                    ></ng-template>
                                </ng-template>
                            </p-checkbox>

                            <p-iconfield *ngIf="filter" [pt]="ptm('pcFilterContainer')" [class]="cx('pcFilterContainer')">
                                <input
                                    #filterInput
                                    pInputText
                                    [pt]="ptm('pcFilter')"
                                    [variant]="$variant()"
                                    type="text"
                                    [attr.autocomplete]="autocomplete"
                                    role="searchbox"
                                    [attr.aria-owns]="id + '_list'"
                                    [attr.aria-activedescendant]="focusedOptionId"
                                    [value]="_filterValue() || ''"
                                    (input)="onFilterInputChange($event)"
                                    (keydown)="onFilterKeyDown($event)"
                                    (click)="onInputClick($event)"
                                    (blur)="onFilterBlur($event)"
                                    [class]="cx('pcFilter')"
                                    [attr.disabled]="$disabled() ? '' : undefined"
                                    [attr.placeholder]="filterPlaceHolder"
                                    [attr.aria-label]="ariaFilterLabel"
                                />
                                <p-inputicon [pt]="ptm('pcFilterIconContainer')">
                                    <svg data-p-icon="search" *ngIf="!filterIconTemplate && !_filterIconTemplate" [pBind]="ptm('filterIcon')" />
                                    <span *ngIf="filterIconTemplate || _filterIconTemplate" [pBind]="ptm('filterIcon')" class="p-multiselect-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                                    </span>
                                </p-inputicon>
                            </p-iconfield>
                        </ng-template>
                    </div>
                    <div [pBind]="ptm('listContainer')" [class]="cx('listContainer')" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                        <p-scroller
                            *ngIf="virtualScroll"
                            #scroller
                            [items]="visibleOptions()"
                            [style]="{ height: scrollHeight }"
                            [itemSize]="virtualScrollItemSize"
                            [autoSize]="true"
                            [tabindex]="-1"
                            [lazy]="lazy"
                            (onLazyLoad)="onLazyLoad.emit($event)"
                            [options]="virtualScrollOptions"
                        >
                            <ng-template #content let-items let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                            </ng-template>
                            <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                                <ng-template #loader let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                </ng-template>
                            </ng-container>
                        </p-scroller>
                        <ng-container *ngIf="!virtualScroll">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                        </ng-container>

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul #items [pBind]="ptm('list')" [class]="cn(cx('list'), scrollerOptions.contentStyleClass)" [style]="scrollerOptions.contentStyle" role="listbox" aria-multiselectable="true" [attr.aria-label]="listLabel">
                                <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                    <ng-container *ngIf="isOptionGroup(option)">
                                        <li [pBind]="ptm('optionGroup')" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [class]="cx('optionGroup')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                            <span *ngIf="!groupTemplate && option.optionGroup">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            <ng-container *ngIf="option.optionGroup && groupTemplate" [ngTemplateOutlet]="groupTemplate" [ngTemplateOutletContext]="{ $implicit: option.optionGroup }"></ng-container>
                                        </li>
                                    </ng-container>
                                    <ng-container *ngIf="!isOptionGroup(option)">
                                        <li
                                            pMultiSelectItem
                                            pRipple
                                            [pBind]="getPTOptions(option, getItemOptions, i, 'option')"
                                            [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                            [option]="option"
                                            [selected]="isSelected(option)"
                                            [label]="getOptionLabel(option)"
                                            [disabled]="isOptionDisabled(option)"
                                            [template]="itemTemplate || _itemTemplate"
                                            [itemCheckboxIconTemplate]="itemCheckboxIconTemplate || _itemCheckboxIconTemplate"
                                            [itemSize]="scrollerOptions.itemSize"
                                            [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                            [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            [ariaSetSize]="ariaSetSize"
                                            [variant]="$variant()"
                                            [highlightOnSelect]="highlightOnSelect"
                                            (onClick)="onOptionSelect($event, false, getOptionIndex(i, scrollerOptions))"
                                            (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            [pt]="pt"
                                        ></li>
                                    </ng-container>
                                </ng-template>

                                <li *ngIf="hasFilter() && isEmpty()" [pBind]="ptm('emptyMessage')" [class]="cx('emptyMessage')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyFilterTemplate && !_emptyFilterTemplate && !emptyTemplate && !_emptyTemplate) {
                                        {{ emptyFilterMessageLabel }}
                                    } @else {
                                        <ng-container *ngTemplateOutlet="emptyFilterTemplate || _emptyFilterTemplate || emptyTemplate || _emptyFilterTemplate"></ng-container>
                                    }
                                </li>
                                <li *ngIf="!hasFilter() && isEmpty()" [pBind]="ptm('emptyMessage')" [class]="cx('emptyMessage')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyTemplate && !_emptyTemplate) {
                                        {{ emptyMessageLabel }}
                                    } @else {
                                        <ng-container *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                            </ul>
                        </ng-template>
                    </div>
                    <div *ngIf="footerFacet || footerTemplate || _footerTemplate">
                        <ng-content select="p-footer"></ng-content>
                        <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                    </div>

                    <span
                        #lastHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                        [pBind]="ptm('lastHiddenFocusableEl')"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `,
      providers: [MULTISELECT_VALUE_ACCESSOR, MultiSelectStyle, {
        provide: MULTISELECT_INSTANCE,
        useExisting: MultiSelect
      }, {
        provide: PARENT_INSTANCE,
        useExisting: MultiSelect
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[attr.id]": "id",
        "(click)": "onContainerClick($event)",
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')"
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: FilterService
  }, {
    type: OverlayService
  }], {
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterPlaceHolder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    overlayVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    dataKey: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    displaySelectedLabel: [{
      type: Input
    }],
    maxSelectedLabels: [{
      type: Input
    }],
    selectionLimit: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectedItemsLabel: [{
      type: Input
    }],
    showToggleAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: Input
    }],
    chipIcon: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    autofocusFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    display: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    selectAll: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterFields: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    highlightOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onPanelShow: [{
      type: Output
    }],
    onPanelHide: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onSelectAllChange: [{
      type: Output
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    filterInputChild: [{
      type: ViewChild,
      args: ["filterInput"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    headerCheckboxViewChild: [{
      type: ViewChild,
      args: ["headerCheckbox"]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: ["group", {
        descendants: false
      }]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filter", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    emptyFilterTemplate: [{
      type: ContentChild,
      args: ["emptyfilter", {
        descendants: false
      }]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    selectedItemsTemplate: [{
      type: ContentChild,
      args: ["selecteditems", {
        descendants: false
      }]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    removeTokenIconTemplate: [{
      type: ContentChild,
      args: ["removetokenicon", {
        descendants: false
      }]
    }],
    chipIconTemplate: [{
      type: ContentChild,
      args: ["chipicon", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    itemCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["itemcheckboxicon", {
        descendants: false
      }]
    }],
    headerCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["headercheckboxicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MultiSelectModule = class _MultiSelectModule {
  static \u0275fac = function MultiSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MultiSelectModule,
    imports: [MultiSelect, SharedModule],
    exports: [MultiSelect, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MultiSelect, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectModule, [{
    type: NgModule,
    args: [{
      imports: [MultiSelect, SharedModule],
      exports: [MultiSelect, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/steps/index.mjs
var style4 = "\n    .p-steps {\n        position: relative;\n    }\n\n    .p-steps-list {\n        padding: 0;\n        margin: 0;\n        list-style-type: none;\n        display: flex;\n    }\n\n    .p-steps-item {\n        position: relative;\n        display: flex;\n        justify-content: center;\n        flex: 1 1 auto;\n    }\n\n    .p-steps-item.p-disabled,\n    .p-steps-item.p-disabled * {\n        opacity: 1;\n        pointer-events: auto;\n        user-select: auto;\n        cursor: auto;\n    }\n\n    .p-steps-item:before {\n        content: ' ';\n        border-top: 2px solid dt('steps.separator.background');\n        width: 100%;\n        top: 50%;\n        left: 0;\n        display: block;\n        position: absolute;\n        margin-top: calc(-1rem + 1px);\n    }\n\n    .p-steps-item:first-child::before {\n        width: calc(50% + 1rem);\n        transform: translateX(100%);\n    }\n\n    .p-steps-item:last-child::before {\n        width: 50%;\n    }\n\n    .p-steps-item-link {\n        display: inline-flex;\n        flex-direction: column;\n        align-items: center;\n        overflow: hidden;\n        text-decoration: none;\n        transition:\n            outline-color dt('steps.transition.duration'),\n            box-shadow dt('steps.transition.duration');\n        border-radius: dt('steps.item.link.border.radius');\n        outline-color: transparent;\n        gap: dt('steps.item.link.gap');\n    }\n\n    .p-steps-item-link:not(.p-disabled):focus-visible {\n        box-shadow: dt('steps.item.link.focus.ring.shadow');\n        outline: dt('steps.item.link.focus.ring.width') dt('steps.item.link.focus.ring.style') dt('steps.item.link.focus.ring.color');\n        outline-offset: dt('steps.item.link.focus.ring.offset');\n    }\n\n    .p-steps-item-label {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        color: dt('steps.item.label.color');\n        display: block;\n        font-weight: dt('steps.item.label.font.weight');\n    }\n\n    .p-steps-item-number {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: dt('steps.item.number.color');\n        border: 2px solid dt('steps.item.number.border.color');\n        background: dt('steps.item.number.background');\n        min-width: dt('steps.item.number.size');\n        height: dt('steps.item.number.size');\n        line-height: dt('steps.item.number.size');\n        font-size: dt('steps.item.number.font.size');\n        z-index: 1;\n        border-radius: dt('steps.item.number.border.radius');\n        position: relative;\n        font-weight: dt('steps.item.number.font.weight');\n    }\n\n    .p-steps-item-number::after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: dt('steps.item.number.border.radius');\n        box-shadow: dt('steps.item.number.shadow');\n    }\n\n    .p-steps:not(.p-readonly) .p-steps-item {\n        cursor: pointer;\n    }\n\n    .p-steps-item-active .p-steps-item-number {\n        background: dt('steps.item.number.active.background');\n        border-color: dt('steps.item.number.active.border.color');\n        color: dt('steps.item.number.active.color');\n    }\n\n    .p-steps-item-active .p-steps-item-label {\n        color: dt('steps.item.label.active.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-steps.mjs
var _c03 = ["list"];
var _c110 = (a0, a1) => ({
  item: a0,
  index: a1
});
var _c210 = () => ({
  exact: false
});
var _forTrack0 = ($index, $item) => $item.label;
function Steps_For_4_li_0_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function Steps_For_4_li_0_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLabel"));
    \u0275\u0275property("innerHTML", item_r3.label, \u0275\u0275sanitizeHtml);
  }
}
function Steps_For_4_li_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function Steps_For_4_li_0_a_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const item_r3 = ctx_r1.$implicit;
      const \u0275$index_5_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemClick($event, item_r3, \u0275$index_5_r4));
    })("keydown", function Steps_For_4_li_0_a_2_Template_a_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const item_r3 = ctx_r1.$implicit;
      const \u0275$index_5_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemKeydown($event, item_r3, \u0275$index_5_r4));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Steps_For_4_li_0_a_2_span_3_Template, 2, 3, "span", 11)(4, Steps_For_4_li_0_a_2_ng_template_4_Template, 1, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    const item_r3 = ctx_r1.$implicit;
    const \u0275$index_5_r4 = ctx_r1.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLink"));
    \u0275\u0275property("routerLink", item_r3.routerLink)("queryParams", item_r3.queryParams)("routerLinkActiveOptions", item_r3.routerLinkActiveOptions || \u0275\u0275pureFunction0(21, _c210))("target", item_r3.target)("fragment", item_r3.fragment)("queryParamsHandling", item_r3.queryParamsHandling)("preserveFragment", item_r3.preserveFragment)("skipLocationChange", item_r3.skipLocationChange)("replaceUrl", item_r3.replaceUrl)("state", item_r3.state);
    \u0275\u0275attribute("tabindex", ctx_r4.getItemTabIndex(item_r3, \u0275$index_5_r4))("aria-expanded", \u0275$index_5_r4 === ctx_r4.activeIndex)("aria-disabled", item_r3.disabled || ctx_r4.readonly && \u0275$index_5_r4 !== ctx_r4.activeIndex)("ariaCurrentWhenActive", ctx_r4.exact ? "step" : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r4.cx("itemNumber"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_5_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.escape !== false)("ngIfElse", htmlLabel_r6);
  }
}
function Steps_For_4_li_0_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function Steps_For_4_li_0_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLabel"));
    \u0275\u0275property("innerHTML", item_r3.label, \u0275\u0275sanitizeHtml);
  }
}
function Steps_For_4_li_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("click", function Steps_For_4_li_0_ng_template_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const item_r3 = ctx_r1.$implicit;
      const \u0275$index_5_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemClick($event, item_r3, \u0275$index_5_r4));
    })("keydown", function Steps_For_4_li_0_ng_template_3_Template_a_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const item_r3 = ctx_r1.$implicit;
      const \u0275$index_5_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemKeydown($event, item_r3, \u0275$index_5_r4));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Steps_For_4_li_0_ng_template_3_span_3_Template, 2, 3, "span", 11)(4, Steps_For_4_li_0_ng_template_3_ng_template_4_Template, 1, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r8 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    const item_r3 = ctx_r1.$implicit;
    const \u0275$index_5_r4 = ctx_r1.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLink"));
    \u0275\u0275property("target", item_r3.target);
    \u0275\u0275attribute("href", item_r3.url, \u0275\u0275sanitizeUrl)("tabindex", ctx_r4.getItemTabIndex(item_r3, \u0275$index_5_r4))("aria-expanded", \u0275$index_5_r4 === ctx_r4.activeIndex)("aria-disabled", item_r3.disabled || ctx_r4.readonly && \u0275$index_5_r4 !== ctx_r4.activeIndex)("ariaCurrentWhenActive", ctx_r4.exact && (!item_r3.disabled || ctx_r4.readonly) ? "step" : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r4.cx("itemNumber"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_5_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.escape !== false)("ngIfElse", htmlRouteLabel_r8);
  }
}
function Steps_For_4_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 8, 1);
    \u0275\u0275template(2, Steps_For_4_li_0_a_2_Template, 6, 22, "a", 9)(3, Steps_For_4_li_0_ng_template_3_Template, 6, 13, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const elseBlock_r9 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    const item_r3 = ctx_r1.$implicit;
    const \u0275$index_5_r4 = ctx_r1.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("item", \u0275\u0275pureFunction2(9, _c110, item_r3, \u0275$index_5_r4)));
    \u0275\u0275property("ngStyle", item_r3.style)("tooltipOptions", item_r3.tooltipOptions);
    \u0275\u0275attribute("aria-current", ctx_r4.isActive(item_r3, \u0275$index_5_r4) ? "step" : void 0)("id", item_r3.id)("data-pc-section", "menuitem");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.isClickableRouterLink(item_r3))("ngIfElse", elseBlock_r9);
  }
}
function Steps_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Steps_For_4_li_0_Template, 5, 12, "li", 7);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("ngIf", item_r3.visible !== false);
  }
}
var classes3 = {
  root: ({
    instance
  }) => ["p-steps p-component", {
    "p-readonly": instance.readonly
  }],
  list: "p-steps-list",
  item: ({
    instance,
    item,
    index
  }) => ["p-steps-item", {
    "p-steps-item-active": instance.isActive(item, index),
    "p-disabled": instance.isItemDisabled(item, index)
  }],
  itemLink: "p-steps-item-link",
  itemNumber: "p-steps-item-number",
  itemLabel: "p-steps-item-label"
};
var StepsStyle = class _StepsStyle extends BaseStyle {
  name = "steps";
  style = style4;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepsStyle_BaseFactory;
    return function StepsStyle_Factory(__ngFactoryType__) {
      return (\u0275StepsStyle_BaseFactory || (\u0275StepsStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepsStyle)))(__ngFactoryType__ || _StepsStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepsStyle,
    factory: _StepsStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepsStyle, [{
    type: Injectable
  }], null, null);
})();
var StepsClasses;
(function(StepsClasses2) {
  StepsClasses2["root"] = "p-steps";
  StepsClasses2["list"] = "p-steps-list";
  StepsClasses2["item"] = "p-steps-item";
  StepsClasses2["itemLink"] = "p-steps-item-link";
  StepsClasses2["itemNumber"] = "p-steps-item-number";
  StepsClasses2["itemLabel"] = "p-steps-item-label";
})(StepsClasses || (StepsClasses = {}));
var Steps = class _Steps extends BaseComponent {
  /**
   * Index of the active item.
   * @group Props
   */
  activeIndex = 0;
  /**
   * An array of menu items.
   * @group Props
   */
  model;
  /**
   * Whether the items are clickable or not.
   * @group Props
   */
  readonly = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
   * @group Props
   */
  exact = true;
  /**
   * Callback to invoke when the new step is selected.
   * @param {number} number - current index.
   * @group Emits
   */
  activeIndexChange = new EventEmitter();
  listViewChild;
  router = inject(Router);
  route = inject(ActivatedRoute);
  _componentStyle = inject(StepsStyle);
  subscription;
  onInit() {
    this.subscription = this.router.events.subscribe(() => this.cd.markForCheck());
  }
  onItemClick(event, item, i) {
    if (this.readonly || item.disabled) {
      event.preventDefault();
      return;
    }
    this.activeIndexChange.emit(i);
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item,
        index: i
      });
    }
  }
  onItemKeydown(event, item, i) {
    switch (event.code) {
      case "ArrowRight": {
        this.navigateToNextItem(event.target);
        event.preventDefault();
        break;
      }
      case "ArrowLeft": {
        this.navigateToPrevItem(event.target);
        event.preventDefault();
        break;
      }
      case "Home": {
        this.navigateToFirstItem(event.target);
        event.preventDefault();
        break;
      }
      case "End": {
        this.navigateToLastItem(event.target);
        event.preventDefault();
        break;
      }
      case "Tab":
        if (i !== (this.activeIndex ?? -1)) {
          const siblings = Y(this.listViewChild?.nativeElement, '[data-pc-section="menuitem"]');
          siblings[i].children[0].tabIndex = "-1";
          siblings[this.activeIndex ?? 0].children[0].tabIndex = "0";
        }
        break;
      case "Enter":
      case "Space": {
        this.onItemClick(event, item, i);
        event.preventDefault();
        break;
      }
      default:
        break;
    }
  }
  navigateToNextItem(target) {
    const nextItem = this.findNextItem(target);
    nextItem && this.setFocusToMenuitem(target, nextItem);
  }
  navigateToPrevItem(target) {
    const prevItem = this.findPrevItem(target);
    prevItem && this.setFocusToMenuitem(target, prevItem);
  }
  navigateToFirstItem(target) {
    const firstItem = this.findFirstItem();
    firstItem && this.setFocusToMenuitem(target, firstItem);
  }
  navigateToLastItem(target) {
    const lastItem = this.findLastItem();
    lastItem && this.setFocusToMenuitem(target, lastItem);
  }
  findNextItem(item) {
    const nextItem = item.parentElement.nextElementSibling;
    return nextItem ? nextItem.children[0] : null;
  }
  findPrevItem(item) {
    const prevItem = item.parentElement.previousElementSibling;
    return prevItem ? prevItem.children[0] : null;
  }
  findFirstItem() {
    const firstSibling = z(this.listViewChild?.nativeElement, '[data-pc-section="menuitem"]');
    return firstSibling ? firstSibling.children[0] : null;
  }
  findLastItem() {
    const siblings = Y(this.listViewChild?.nativeElement, '[data-pc-section="menuitem"]');
    return siblings ? siblings[siblings.length - 1].children[0] : null;
  }
  setFocusToMenuitem(target, focusableItem) {
    target.tabIndex = "-1";
    focusableItem.tabIndex = "0";
    focusableItem.focus();
  }
  isClickableRouterLink(item) {
    return item.routerLink && !this.readonly && !item.disabled;
  }
  isItemDisabled(item, index) {
    return item.disabled || this.readonly && !this.isActive(item, index);
  }
  isActive(item, index) {
    if (item.routerLink) {
      let routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
      return this.router.isActive(this.router.createUrlTree(routerLink, {
        relativeTo: this.route
      }).toString(), false);
    }
    return index === this.activeIndex;
  }
  getItemTabIndex(item, index) {
    if (item.disabled) {
      return "-1";
    }
    if (!item.disabled && this.activeIndex === index) {
      return item.tabindex || "0";
    }
    return item.tabindex ?? "-1";
  }
  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Steps_BaseFactory;
    return function Steps_Factory(__ngFactoryType__) {
      return (\u0275Steps_BaseFactory || (\u0275Steps_BaseFactory = \u0275\u0275getInheritedFactory(_Steps)))(__ngFactoryType__ || _Steps);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Steps,
    selectors: [["p-steps"]],
    viewQuery: function Steps_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listViewChild = _t.first);
      }
    },
    inputs: {
      activeIndex: [2, "activeIndex", "activeIndex", numberAttribute],
      model: "model",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      exact: [2, "exact", "exact", booleanAttribute]
    },
    outputs: {
      activeIndexChange: "activeIndexChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepsStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 7,
    consts: [["list", ""], ["menuitem", ""], ["elseBlock", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngStyle"], ["pTooltip", "", 3, "class", "ngStyle", "tooltipOptions"], ["pTooltip", "", 3, "class", "ngStyle", "tooltipOptions", 4, "ngIf"], ["pTooltip", "", 3, "ngStyle", "tooltipOptions"], ["role", "link", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "class", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown", 4, "ngIf", "ngIfElse"], ["role", "link", 3, "click", "keydown", "routerLink", "queryParams", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [3, "class", 4, "ngIf", "ngIfElse"], [3, "innerHTML"], ["role", "link", 3, "click", "keydown", "target"]],
    template: function Steps_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 5)(1, "ul", null, 0);
        \u0275\u0275repeaterCreate(3, Steps_For_4_Template, 1, 1, "li", 6, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        \u0275\u0275property("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "steps");
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("list"));
        \u0275\u0275attribute("data-pc-section", "menu");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.model);
      }
    },
    dependencies: [CommonModule, NgIf, NgStyle, RouterModule, RouterLink, TooltipModule, Tooltip, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Steps, [{
    type: Component,
    args: [{
      selector: "p-steps",
      standalone: true,
      imports: [CommonModule, RouterModule, TooltipModule, SharedModule],
      template: `
        <nav [class]="cn(cx('root'), styleClass)" [ngStyle]="style" [attr.data-pc-name]="'steps'">
            <ul #list [attr.data-pc-section]="'menu'" [class]="cx('list')">
                @for (item of model; track item.label; let i = $index) {
                    <li
                        *ngIf="item.visible !== false"
                        [class]="cx('item', { item, index: i })"
                        #menuitem
                        [ngStyle]="item.style"
                        [attr.aria-current]="isActive(item, i) ? 'step' : undefined"
                        [attr.id]="item.id"
                        pTooltip
                        [tooltipOptions]="item.tooltipOptions"
                        [attr.data-pc-section]="'menuitem'"
                    >
                        <a
                            role="link"
                            *ngIf="isClickableRouterLink(item); else elseBlock"
                            [routerLink]="item.routerLink"
                            [queryParams]="item.queryParams"
                            [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                            [class]="cx('itemLink')"
                            (click)="onItemClick($event, item, i)"
                            (keydown)="onItemKeydown($event, item, i)"
                            [target]="item.target"
                            [attr.tabindex]="getItemTabIndex(item, i)"
                            [attr.aria-expanded]="i === activeIndex"
                            [attr.aria-disabled]="item.disabled || (readonly && i !== activeIndex)"
                            [fragment]="item.fragment"
                            [queryParamsHandling]="item.queryParamsHandling"
                            [preserveFragment]="item.preserveFragment"
                            [skipLocationChange]="item.skipLocationChange"
                            [replaceUrl]="item.replaceUrl"
                            [state]="item.state"
                            [attr.ariaCurrentWhenActive]="exact ? 'step' : undefined"
                        >
                            <span [class]="cx('itemNumber')">{{ i + 1 }}</span>
                            <span [class]="cx('itemLabel')" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
                            <ng-template #htmlLabel><span [class]="cx('itemLabel')" [innerHTML]="item.label"></span></ng-template>
                        </a>
                        <ng-template #elseBlock>
                            <a
                                role="link"
                                [attr.href]="item.url"
                                [class]="cx('itemLink')"
                                (click)="onItemClick($event, item, i)"
                                (keydown)="onItemKeydown($event, item, i)"
                                [target]="item.target"
                                [attr.tabindex]="getItemTabIndex(item, i)"
                                [attr.aria-expanded]="i === activeIndex"
                                [attr.aria-disabled]="item.disabled || (readonly && i !== activeIndex)"
                                [attr.ariaCurrentWhenActive]="exact && (!item.disabled || readonly) ? 'step' : undefined"
                            >
                                <span [class]="cx('itemNumber')">{{ i + 1 }}</span>
                                <span [class]="cx('itemLabel')" *ngIf="item.escape !== false; else htmlRouteLabel">{{ item.label }}</span>
                                <ng-template #htmlRouteLabel><span [class]="cx('itemLabel')" [innerHTML]="item.label"></span></ng-template>
                            </a>
                        </ng-template>
                    </li>
                }
            </ul>
        </nav>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [StepsStyle]
    }]
  }], null, {
    activeIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    model: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    exact: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    activeIndexChange: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list", {
        static: false
      }]
    }]
  });
})();
var StepsModule = class _StepsModule {
  static \u0275fac = function StepsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StepsModule,
    imports: [Steps, SharedModule],
    exports: [Steps, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Steps, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepsModule, [{
    type: NgModule,
    args: [{
      imports: [Steps, SharedModule],
      exports: [Steps, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/knob/index.mjs
var style5 = "\n    .p-knob-range {\n        fill: none;\n        transition: stroke 0.1s ease-in;\n    }\n\n    .p-knob-value {\n        animation-name: p-knob-dash-frame;\n        animation-fill-mode: forwards;\n        fill: none;\n    }\n\n    .p-knob-text {\n        font-size: 1.3rem;\n        text-align: center;\n    }\n\n    .p-knob svg {\n        border-radius: 50%;\n        outline-color: transparent;\n        transition:\n            background dt('knob.transition.duration'),\n            color dt('knob.transition.duration'),\n            outline-color dt('knob.transition.duration'),\n            box-shadow dt('knob.transition.duration');\n    }\n\n    .p-knob svg:focus-visible {\n        box-shadow: dt('knob.focus.ring.shadow');\n        outline: dt('knob.focus.ring.width') dt('knob.focus.ring.style') dt('knob.focus.ring.color');\n        outline-offset: dt('knob.focus.ring.offset');\n    }\n\n    @keyframes p-knob-dash-frame {\n        100% {\n            stroke-dashoffset: 0;\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-knob.mjs
function Knob__svg_text_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("text"));
    \u0275\u0275property("pBind", ctx_r0.ptm("text"));
    \u0275\u0275attribute("x", 50)("y", 57)("fill", ctx_r0.textColor)("name", ctx_r0.name());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.valueToDisplay(), " ");
  }
}
var classes4 = {
  root: ({
    instance
  }) => ["p-knob p-component", {
    "p-disabled": instance.$disabled()
  }],
  range: "p-knob-range",
  value: "p-knob-value",
  text: "p-knob-text"
};
var KnobStyle = class _KnobStyle extends BaseStyle {
  name = "knob";
  style = style5;
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275KnobStyle_BaseFactory;
    return function KnobStyle_Factory(__ngFactoryType__) {
      return (\u0275KnobStyle_BaseFactory || (\u0275KnobStyle_BaseFactory = \u0275\u0275getInheritedFactory(_KnobStyle)))(__ngFactoryType__ || _KnobStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _KnobStyle,
    factory: _KnobStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KnobStyle, [{
    type: Injectable
  }], null, null);
})();
var KnobClasses;
(function(KnobClasses2) {
  KnobClasses2["root"] = "p-knob";
  KnobClasses2["range"] = "p-knob-range";
  KnobClasses2["value"] = "p-knob-value";
  KnobClasses2["text"] = "p-knob-text";
})(KnobClasses || (KnobClasses = {}));
var KNOB_INSTANCE = new InjectionToken("KNOB_INSTANCE");
var KNOB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Knob),
  multi: true
};
var Knob = class _Knob extends BaseEditableHolder {
  $pcKnob = inject(KNOB_INSTANCE, {
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
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Background of the value.
   * @group Props
   */
  valueColor = rr("knob.value.background").variable;
  /**
   * Background color of the range.
   * @group Props
   */
  rangeColor = rr("knob.range.background").variable;
  /**
   * Color of the value text.
   * @group Props
   */
  textColor = rr("knob.text.color").variable;
  /**
   * Template string of the value.
   * @group Props
   */
  valueTemplate = "{value}";
  /**
   * Size of the component in pixels.
   * @group Props
   */
  size = 100;
  /**
   * Mininum boundary value.
   * @group Props
   */
  min = 0;
  /**
   * Maximum boundary value.
   * @group Props
   */
  max = 100;
  /**
   * Step factor to increment/decrement the value.
   * @group Props
   */
  step = 1;
  /**
   * Width of the knob stroke.
   * @group Props
   */
  strokeWidth = 14;
  /**
   * Whether the show the value inside the knob.
   * @group Props
   */
  showValue = true;
  /**
   * When present, it specifies that the component value cannot be edited.
   * @group Props
   */
  readonly = false;
  /**
   * Callback to invoke on value change.
   * @param {number} value - New value.
   * @group Emits
   */
  onChange = new EventEmitter();
  radius = 40;
  midX = 50;
  midY = 50;
  minRadians = 4 * Math.PI / 3;
  maxRadians = -Math.PI / 3;
  value = 0;
  windowMouseMoveListener;
  windowMouseUpListener;
  windowTouchMoveListener;
  windowTouchEndListener;
  _componentStyle = inject(KnobStyle);
  mapRange(x, inMin, inMax, outMin, outMax) {
    return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
  onClick(event) {
    if (!this.$disabled() && !this.readonly) {
      this.updateValue(event.offsetX, event.offsetY);
    }
  }
  updateValue(offsetX, offsetY) {
    let dx = offsetX - this.size / 2;
    let dy = this.size / 2 - offsetY;
    let angle = Math.atan2(dy, dx);
    let start = -Math.PI / 2 - Math.PI / 6;
    this.updateModel(angle, start);
  }
  updateModel(angle, start) {
    let mappedValue;
    if (angle > this.maxRadians) mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);
    else if (angle < start) mappedValue = this.mapRange(angle + 2 * Math.PI, this.minRadians, this.maxRadians, this.min, this.max);
    else return;
    let newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;
    this.value = newValue;
    this.writeModelValue(this.value);
    this.onModelChange(this.value);
    this.onChange.emit(this.value);
  }
  onMouseDown(event) {
    if (!this.$disabled() && !this.readonly) {
      const window2 = this.document.defaultView || "window";
      this.windowMouseMoveListener = this.renderer.listen(window2, "mousemove", this.onMouseMove.bind(this));
      this.windowMouseUpListener = this.renderer.listen(window2, "mouseup", this.onMouseUp.bind(this));
      event.preventDefault();
    }
  }
  onMouseUp(event) {
    if (!this.$disabled() && !this.readonly) {
      if (this.windowMouseMoveListener) {
        this.windowMouseMoveListener();
        this.windowMouseUpListener = null;
      }
      if (this.windowMouseUpListener) {
        this.windowMouseUpListener();
        this.windowMouseMoveListener = null;
      }
      event.preventDefault();
    }
  }
  onTouchStart(event) {
    if (!this.$disabled() && !this.readonly) {
      const window2 = this.document.defaultView || "window";
      this.windowTouchMoveListener = this.renderer.listen(window2, "touchmove", this.onTouchMove.bind(this));
      this.windowTouchEndListener = this.renderer.listen(window2, "touchend", this.onTouchEnd.bind(this));
      event.preventDefault();
    }
  }
  onTouchEnd(event) {
    if (!this.$disabled() && !this.readonly) {
      if (this.windowTouchMoveListener) {
        this.windowTouchMoveListener();
      }
      if (this.windowTouchEndListener) {
        this.windowTouchEndListener();
      }
      this.windowTouchMoveListener = null;
      this.windowTouchEndListener = null;
      event.preventDefault();
    }
  }
  onMouseMove(event) {
    if (!this.$disabled() && !this.readonly) {
      this.updateValue(event.offsetX, event.offsetY);
      event.preventDefault();
    }
  }
  onTouchMove(event) {
    if (!this.$disabled() && !this.readonly && event instanceof TouchEvent && event.touches.length === 1) {
      const rect = this.el.nativeElement.children[0].getBoundingClientRect();
      const touch = event.targetTouches.item(0);
      if (touch) {
        const offsetX = touch.clientX - rect.left;
        const offsetY = touch.clientY - rect.top;
        this.updateValue(offsetX, offsetY);
      }
    }
  }
  updateModelValue(newValue) {
    if (newValue > this.max) this.value = this.max;
    else if (newValue < this.min) this.value = this.min;
    else this.value = newValue;
    this.writeModelValue(this.value);
    this.onModelChange(this.value);
    this.onChange.emit(this.value);
  }
  onKeyDown(event) {
    if (!this.$disabled() && !this.readonly) {
      switch (event.code) {
        case "ArrowRight":
        case "ArrowUp": {
          event.preventDefault();
          this.updateModelValue(this._value + 1);
          break;
        }
        case "ArrowLeft":
        case "ArrowDown": {
          event.preventDefault();
          this.updateModelValue(this._value - 1);
          break;
        }
        case "Home": {
          event.preventDefault();
          this.updateModelValue(this.min);
          break;
        }
        case "End": {
          event.preventDefault();
          this.updateModelValue(this.max);
          break;
        }
        case "PageUp": {
          event.preventDefault();
          this.updateModelValue(this._value + 10);
          break;
        }
        case "PageDown": {
          event.preventDefault();
          this.updateModelValue(this._value - 10);
          break;
        }
      }
    }
  }
  rangePath() {
    return `M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`;
  }
  valuePath() {
    return `M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`;
  }
  zeroRadians() {
    if (this.min > 0 && this.max > 0) return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);
    else return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
  }
  valueRadians() {
    return this.mapRange(this._value, this.min, this.max, this.minRadians, this.maxRadians);
  }
  minX() {
    return this.midX + Math.cos(this.minRadians) * this.radius;
  }
  minY() {
    return this.midY - Math.sin(this.minRadians) * this.radius;
  }
  maxX() {
    return this.midX + Math.cos(this.maxRadians) * this.radius;
  }
  maxY() {
    return this.midY - Math.sin(this.maxRadians) * this.radius;
  }
  zeroX() {
    return this.midX + Math.cos(this.zeroRadians()) * this.radius;
  }
  zeroY() {
    return this.midY - Math.sin(this.zeroRadians()) * this.radius;
  }
  valueX() {
    return this.midX + Math.cos(this.valueRadians()) * this.radius;
  }
  valueY() {
    return this.midY - Math.sin(this.valueRadians()) * this.radius;
  }
  largeArc() {
    return Math.abs(this.zeroRadians() - this.valueRadians()) < Math.PI ? 0 : 1;
  }
  sweep() {
    return this.valueRadians() > this.zeroRadians() ? 0 : 1;
  }
  valueToDisplay() {
    return this.valueTemplate.replace("{value}", this._value.toString());
  }
  get _value() {
    return this.value != null ? this.value : this.min;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(this.value);
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Knob_BaseFactory;
    return function Knob_Factory(__ngFactoryType__) {
      return (\u0275Knob_BaseFactory || (\u0275Knob_BaseFactory = \u0275\u0275getInheritedFactory(_Knob)))(__ngFactoryType__ || _Knob);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Knob,
    selectors: [["p-knob"]],
    hostVars: 2,
    hostBindings: function Knob_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      valueColor: "valueColor",
      rangeColor: "rangeColor",
      textColor: "textColor",
      valueTemplate: "valueTemplate",
      size: [2, "size", "size", numberAttribute],
      min: [2, "min", "min", numberAttribute],
      max: [2, "max", "max", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute],
      showValue: [2, "showValue", "showValue", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([KNOB_VALUE_ACCESSOR, KnobStyle, {
      provide: KNOB_INSTANCE,
      useExisting: _Knob
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Knob
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 25,
    consts: [["viewBox", "0 0 100 100", "role", "slider", 3, "click", "keydown", "mousedown", "mouseup", "touchstart", "touchend", "pBind"], [3, "pBind"], ["text-anchor", "middle", 3, "class", "pBind", 4, "ngIf"], ["text-anchor", "middle", 3, "pBind"]],
    template: function Knob_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275listener("click", function Knob_Template_svg_click_0_listener($event) {
          return ctx.onClick($event);
        })("keydown", function Knob_Template_svg_keydown_0_listener($event) {
          return ctx.onKeyDown($event);
        })("mousedown", function Knob_Template_svg_mousedown_0_listener($event) {
          return ctx.onMouseDown($event);
        })("mouseup", function Knob_Template_svg_mouseup_0_listener($event) {
          return ctx.onMouseUp($event);
        })("touchstart", function Knob_Template_svg_touchstart_0_listener($event) {
          return ctx.onTouchStart($event);
        })("touchend", function Knob_Template_svg_touchend_0_listener($event) {
          return ctx.onTouchEnd($event);
        });
        \u0275\u0275element(1, "path", 1)(2, "path", 1);
        \u0275\u0275template(3, Knob__svg_text_3_Template, 2, 8, "text", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.size + "px")("height", ctx.size + "px");
        \u0275\u0275property("pBind", ctx.ptm("svg"));
        \u0275\u0275attribute("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("required", ctx.required() ? "" : void 0)("aria-valuenow", ctx._value)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("tabindex", ctx.readonly || ctx.$disabled() ? -1 : ctx.tabindex);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("range"));
        \u0275\u0275property("pBind", ctx.ptm("range"));
        \u0275\u0275attribute("d", ctx.rangePath())("stroke-width", ctx.strokeWidth)("stroke", ctx.rangeColor);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("value"));
        \u0275\u0275property("pBind", ctx.ptm("value"));
        \u0275\u0275attribute("d", ctx.valuePath())("stroke-width", ctx.strokeWidth)("stroke", ctx.valueColor);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showValue);
      }
    },
    dependencies: [CommonModule, NgIf, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Knob, [{
    type: Component,
    args: [{
      selector: "p-knob",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `
        <svg
            viewBox="0 0 100 100"
            role="slider"
            [style.width]="size + 'px'"
            [style.height]="size + 'px'"
            (click)="onClick($event)"
            (keydown)="onKeyDown($event)"
            (mousedown)="onMouseDown($event)"
            (mouseup)="onMouseUp($event)"
            (touchstart)="onTouchStart($event)"
            (touchend)="onTouchEnd($event)"
            [attr.aria-valuemin]="min"
            [attr.aria-valuemax]="max"
            [attr.required]="required() ? '' : undefined"
            [attr.aria-valuenow]="_value"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.tabindex]="readonly || $disabled() ? -1 : tabindex"
            [pBind]="ptm('svg')"
        >
            <path [attr.d]="rangePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="rangeColor" [class]="cx('range')" [pBind]="ptm('range')"></path>
            <path [attr.d]="valuePath()" [attr.stroke-width]="strokeWidth" [attr.stroke]="valueColor" [class]="cx('value')" [pBind]="ptm('value')"></path>
            <text *ngIf="showValue" [attr.x]="50" [attr.y]="57" text-anchor="middle" [attr.fill]="textColor" [class]="cx('text')" [attr.name]="name()" [pBind]="ptm('text')">
                {{ valueToDisplay() }}
            </text>
        </svg>
    `,
      providers: [KNOB_VALUE_ACCESSOR, KnobStyle, {
        provide: KNOB_INSTANCE,
        useExisting: Knob
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Knob
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueColor: [{
      type: Input
    }],
    rangeColor: [{
      type: Input
    }],
    textColor: [{
      type: Input
    }],
    valueTemplate: [{
      type: Input
    }],
    size: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }]
  });
})();
var KnobModule = class _KnobModule {
  static \u0275fac = function KnobModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KnobModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _KnobModule,
    imports: [Knob, SharedModule],
    exports: [Knob, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Knob, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KnobModule, [{
    type: NgModule,
    args: [{
      imports: [Knob, SharedModule],
      exports: [Knob, SharedModule]
    }]
  }], null, null);
})();

// node_modules/canvas-confetti/dist/confetti.module.mjs
var module = {};
(function main(global, module2, isWorker, workerSize) {
  var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
  var canUsePaths = typeof Path2D === "function" && typeof DOMMatrix === "function";
  var canDrawBitmap = (function() {
    if (!global.OffscreenCanvas) {
      return false;
    }
    try {
      var canvas = new OffscreenCanvas(1, 1);
      var ctx = canvas.getContext("2d");
      ctx.fillRect(0, 0, 1, 1);
      var bitmap = canvas.transferToImageBitmap();
      ctx.createPattern(bitmap, "no-repeat");
    } catch (e) {
      return false;
    }
    return true;
  })();
  function noop() {
  }
  function promise(func) {
    var ModulePromise = module2.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
    if (typeof Prom === "function") {
      return new Prom(func);
    }
    func(noop, noop);
    return null;
  }
  var bitmapMapper = /* @__PURE__ */ (function(skipTransform, map) {
    return {
      transform: function(bitmap) {
        if (skipTransform) {
          return bitmap;
        }
        if (map.has(bitmap)) {
          return map.get(bitmap);
        }
        var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(bitmap, 0, 0);
        map.set(bitmap, canvas);
        return canvas;
      },
      clear: function() {
        map.clear();
      }
    };
  })(canDrawBitmap, /* @__PURE__ */ new Map());
  var raf = (function() {
    var TIME = Math.floor(1e3 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;
    if (typeof requestAnimationFrame === "function" && typeof cancelAnimationFrame === "function") {
      frame = function(cb) {
        var id = Math.random();
        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];
            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });
        return id;
      };
      cancel = function(id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function(cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function(timer) {
        return clearTimeout(timer);
      };
    }
    return { frame, cancel };
  })();
  var getWorker = /* @__PURE__ */ (function() {
    var worker;
    var prom;
    var resolves = {};
    function decorate(worker2) {
      function execute(options, callback) {
        worker2.postMessage({ options: options || {}, callback });
      }
      worker2.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker2.postMessage({ canvas: offscreen }, [offscreen]);
      };
      worker2.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }
        var id = Math.random().toString(36).slice(2);
        prom = promise(function(resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }
            delete resolves[id];
            worker2.removeEventListener("message", workerDone);
            prom = null;
            bitmapMapper.clear();
            done();
            resolve();
          }
          worker2.addEventListener("message", workerDone);
          execute(options, id);
          resolves[id] = workerDone.bind(null, { data: { callback: id } });
        });
        return prom;
      };
      worker2.reset = function resetWorker() {
        worker2.postMessage({ reset: true });
        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }
    return function() {
      if (worker) {
        return worker;
      }
      if (!isWorker && canUseWorker) {
        var code = [
          "var CONFETTI, SIZE = {}, module = {};",
          "(" + main.toString() + ")(this, module, true, SIZE);",
          "onmessage = function(msg) {",
          "  if (msg.data.options) {",
          "    CONFETTI(msg.data.options).then(function () {",
          "      if (msg.data.callback) {",
          "        postMessage({ callback: msg.data.callback });",
          "      }",
          "    });",
          "  } else if (msg.data.reset) {",
          "    CONFETTI && CONFETTI.reset();",
          "  } else if (msg.data.resize) {",
          "    SIZE.width = msg.data.resize.width;",
          "    SIZE.height = msg.data.resize.height;",
          "  } else if (msg.data.canvas) {",
          "    SIZE.width = msg.data.canvas.width;",
          "    SIZE.height = msg.data.canvas.height;",
          "    CONFETTI = module.exports.create(msg.data.canvas);",
          "  }",
          "}"
        ].join("\n");
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          typeof console !== "undefined" && typeof console.warn === "function" ? console.warn("\u{1F38A} Could not load worker", e) : null;
          return null;
        }
        decorate(worker);
      }
      return worker;
    };
  })();
  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ["square", "circle"],
    zIndex: 100,
    colors: [
      "#26ccff",
      "#a25afd",
      "#ff5e7e",
      "#88ff5a",
      "#fcff42",
      "#ffa62d",
      "#ff36ff"
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };
  function convert(val, transform) {
    return transform ? transform(val) : val;
  }
  function isOk(val) {
    return !(val === null || val === void 0);
  }
  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }
  function onlyPositiveInt(number) {
    return number < 0 ? 0 : Math.floor(number);
  }
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function toDecimal(str) {
    return parseInt(str, 16);
  }
  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }
  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, "");
    if (val.length < 6) {
      val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
    }
    return {
      r: toDecimal(val.substring(0, 2)),
      g: toDecimal(val.substring(2, 4)),
      b: toDecimal(val.substring(4, 6))
    };
  }
  function getOrigin(options) {
    var origin = prop(options, "origin", Object);
    origin.x = prop(origin, "x", Number);
    origin.y = prop(origin, "y", Number);
    return origin;
  }
  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }
  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  function getCanvas(zIndex) {
    var canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0px";
    canvas.style.left = "0px";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = zIndex;
    return canvas;
  }
  function ellipse(context, x, y2, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y2);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }
  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);
    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
      angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar,
      flat: opts.flat
    };
  }
  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.velocity *= fetti.decay;
    if (fetti.flat) {
      fetti.wobble = 0;
      fetti.wobbleX = fetti.x + 10 * fetti.scalar;
      fetti.wobbleY = fetti.y + 10 * fetti.scalar;
      fetti.tiltSin = 0;
      fetti.tiltCos = 0;
      fetti.random = 1;
    } else {
      fetti.wobble += fetti.wobbleSpeed;
      fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
      fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
      fetti.tiltAngle += 0.1;
      fetti.tiltSin = Math.sin(fetti.tiltAngle);
      fetti.tiltCos = Math.cos(fetti.tiltAngle);
      fetti.random = Math.random() + 2;
    }
    var progress = fetti.tick++ / fetti.totalTicks;
    var x1 = fetti.x + fetti.random * fetti.tiltCos;
    var y1 = fetti.y + fetti.random * fetti.tiltSin;
    var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
    var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
    context.fillStyle = "rgba(" + fetti.color.r + ", " + fetti.color.g + ", " + fetti.color.b + ", " + (1 - progress) + ")";
    context.beginPath();
    if (canUsePaths && fetti.shape.type === "path" && typeof fetti.shape.path === "string" && Array.isArray(fetti.shape.matrix)) {
      context.fill(transformPath2D(
        fetti.shape.path,
        fetti.shape.matrix,
        fetti.x,
        fetti.y,
        Math.abs(x2 - x1) * 0.1,
        Math.abs(y2 - y1) * 0.1,
        Math.PI / 10 * fetti.wobble
      ));
    } else if (fetti.shape.type === "bitmap") {
      var rotation = Math.PI / 10 * fetti.wobble;
      var scaleX = Math.abs(x2 - x1) * 0.1;
      var scaleY = Math.abs(y2 - y1) * 0.1;
      var width = fetti.shape.bitmap.width * fetti.scalar;
      var height = fetti.shape.bitmap.height * fetti.scalar;
      var matrix = new DOMMatrix([
        Math.cos(rotation) * scaleX,
        Math.sin(rotation) * scaleX,
        -Math.sin(rotation) * scaleY,
        Math.cos(rotation) * scaleY,
        fetti.x,
        fetti.y
      ]);
      matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));
      var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), "no-repeat");
      pattern.setTransform(matrix);
      context.globalAlpha = 1 - progress;
      context.fillStyle = pattern;
      context.fillRect(
        fetti.x - width / 2,
        fetti.y - height / 2,
        width,
        height
      );
      context.globalAlpha = 1;
    } else if (fetti.shape === "circle") {
      context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else if (fetti.shape === "star") {
      var rot = Math.PI / 2 * 3;
      var innerRadius = 4 * fetti.scalar;
      var outerRadius = 8 * fetti.scalar;
      var x = fetti.x;
      var y3 = fetti.y;
      var spikes = 5;
      var step = Math.PI / spikes;
      while (spikes--) {
        x = fetti.x + Math.cos(rot) * outerRadius;
        y3 = fetti.y + Math.sin(rot) * outerRadius;
        context.lineTo(x, y3);
        rot += step;
        x = fetti.x + Math.cos(rot) * innerRadius;
        y3 = fetti.y + Math.sin(rot) * innerRadius;
        context.lineTo(x, y3);
        rot += step;
      }
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }
    context.closePath();
    context.fill();
    return fetti.tick < fetti.totalTicks;
  }
  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext("2d");
    var animationFrame;
    var destroy;
    var prom = promise(function(resolve) {
      function onDone() {
        animationFrame = destroy = null;
        context.clearRect(0, 0, size.width, size.height);
        bitmapMapper.clear();
        done();
        resolve();
      }
      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }
        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }
        context.clearRect(0, 0, size.width, size.height);
        animatingFettis = animatingFettis.filter(function(fetti) {
          return updateFetti(context, fetti);
        });
        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }
      animationFrame = raf.frame(update);
      destroy = onDone;
    });
    return {
      addFettis: function(fettis2) {
        animatingFettis = animatingFettis.concat(fettis2);
        return prom;
      },
      canvas,
      promise: prom,
      reset: function() {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }
        if (destroy) {
          destroy();
        }
      }
    };
  }
  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, "resize");
    var hasResizeEventRegistered = false;
    var globalDisableForReducedMotion = prop(globalOpts, "disableForReducedMotion", Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, "useWorker");
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion)").matches;
    var animationObj;
    function fireLocal(options, size, done) {
      var particleCount = prop(options, "particleCount", onlyPositiveInt);
      var angle = prop(options, "angle", Number);
      var spread = prop(options, "spread", Number);
      var startVelocity = prop(options, "startVelocity", Number);
      var decay = prop(options, "decay", Number);
      var gravity = prop(options, "gravity", Number);
      var drift = prop(options, "drift", Number);
      var colors = prop(options, "colors", colorsToRgb);
      var ticks = prop(options, "ticks", Number);
      var shapes = prop(options, "shapes");
      var scalar = prop(options, "scalar");
      var flat = !!prop(options, "flat");
      var origin = getOrigin(options);
      var temp = particleCount;
      var fettis = [];
      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;
      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle,
            spread,
            startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks,
            decay,
            gravity,
            drift,
            scalar,
            flat
          })
        );
      }
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }
      animationObj = animate(canvas, fettis, resizer, size, done);
      return animationObj.promise;
    }
    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, "disableForReducedMotion", Boolean);
      var zIndex = prop(options, "zIndex", Number);
      if (disableForReducedMotion && preferLessMotion) {
        return promise(function(resolve) {
          resolve();
        });
      }
      if (isLibCanvas && animationObj) {
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }
      if (allowResize && !initialized) {
        resizer(canvas);
      }
      var size = {
        width: canvas.width,
        height: canvas.height
      };
      if (worker && !initialized) {
        worker.init(canvas);
      }
      initialized = true;
      if (worker) {
        canvas.__confetti_initialized = true;
      }
      function onResize() {
        if (worker) {
          var obj = {
            getBoundingClientRect: function() {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };
          resizer(obj);
          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }
        size.width = size.height = null;
      }
      function done() {
        animationObj = null;
        if (allowResize) {
          hasResizeEventRegistered = false;
          global.removeEventListener("resize", onResize);
        }
        if (isLibCanvas && canvas) {
          if (document.body.contains(canvas)) {
            document.body.removeChild(canvas);
          }
          canvas = null;
          initialized = false;
        }
      }
      if (allowResize && !hasResizeEventRegistered) {
        hasResizeEventRegistered = true;
        global.addEventListener("resize", onResize, false);
      }
      if (worker) {
        return worker.fire(options, size, done);
      }
      return fireLocal(options, size, done);
    }
    fire.reset = function() {
      if (worker) {
        worker.reset();
      }
      if (animationObj) {
        animationObj.reset();
      }
    };
    return fire;
  }
  var defaultFire;
  function getDefaultFire() {
    if (!defaultFire) {
      defaultFire = confettiCannon(null, { useWorker: true, resize: true });
    }
    return defaultFire;
  }
  function transformPath2D(pathString, pathMatrix, x, y2, scaleX, scaleY, rotation) {
    var path2d = new Path2D(pathString);
    var t1 = new Path2D();
    t1.addPath(path2d, new DOMMatrix(pathMatrix));
    var t2 = new Path2D();
    t2.addPath(t1, new DOMMatrix([
      Math.cos(rotation) * scaleX,
      Math.sin(rotation) * scaleX,
      -Math.sin(rotation) * scaleY,
      Math.cos(rotation) * scaleY,
      x,
      y2
    ]));
    return t2;
  }
  function shapeFromPath(pathData) {
    if (!canUsePaths) {
      throw new Error("path confetti are not supported in this browser");
    }
    var path, matrix;
    if (typeof pathData === "string") {
      path = pathData;
    } else {
      path = pathData.path;
      matrix = pathData.matrix;
    }
    var path2d = new Path2D(path);
    var tempCanvas = document.createElement("canvas");
    var tempCtx = tempCanvas.getContext("2d");
    if (!matrix) {
      var maxSize = 1e3;
      var minX = maxSize;
      var minY = maxSize;
      var maxX = 0;
      var maxY = 0;
      var width, height;
      for (var x = 0; x < maxSize; x += 2) {
        for (var y2 = 0; y2 < maxSize; y2 += 2) {
          if (tempCtx.isPointInPath(path2d, x, y2, "nonzero")) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y2);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y2);
          }
        }
      }
      width = maxX - minX;
      height = maxY - minY;
      var maxDesiredSize = 10;
      var scale = Math.min(maxDesiredSize / width, maxDesiredSize / height);
      matrix = [
        scale,
        0,
        0,
        scale,
        -Math.round(width / 2 + minX) * scale,
        -Math.round(height / 2 + minY) * scale
      ];
    }
    return {
      type: "path",
      path,
      matrix
    };
  }
  function shapeFromText(textData) {
    var text, scalar = 1, color = "#000000", fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    if (typeof textData === "string") {
      text = textData;
    } else {
      text = textData.text;
      scalar = "scalar" in textData ? textData.scalar : scalar;
      fontFamily = "fontFamily" in textData ? textData.fontFamily : fontFamily;
      color = "color" in textData ? textData.color : color;
    }
    var fontSize = 10 * scalar;
    var font = "" + fontSize + "px " + fontFamily;
    var canvas = new OffscreenCanvas(fontSize, fontSize);
    var ctx = canvas.getContext("2d");
    ctx.font = font;
    var size = ctx.measureText(text);
    var width = Math.ceil(size.actualBoundingBoxRight + size.actualBoundingBoxLeft);
    var height = Math.ceil(size.actualBoundingBoxAscent + size.actualBoundingBoxDescent);
    var padding = 2;
    var x = size.actualBoundingBoxLeft + padding;
    var y2 = size.actualBoundingBoxAscent + padding;
    width += padding + padding;
    height += padding + padding;
    canvas = new OffscreenCanvas(width, height);
    ctx = canvas.getContext("2d");
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y2);
    var scale = 1 / scalar;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: canvas.transferToImageBitmap(),
      matrix: [scale, 0, 0, scale, -width * scale / 2, -height * scale / 2]
    };
  }
  module2.exports = function() {
    return getDefaultFire().apply(this, arguments);
  };
  module2.exports.reset = function() {
    getDefaultFire().reset();
  };
  module2.exports.create = confettiCannon;
  module2.exports.shapeFromPath = shapeFromPath;
  module2.exports.shapeFromText = shapeFromText;
})((function() {
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return this || {};
})(), module, false);
var confetti_module_default = module.exports;
var create = module.exports.create;

// src/app/pages/quiz/quiz.component.ts
var _c04 = ["optionCard"];
var _c111 = (a0) => ({ "selected-card": a0 });
var _c211 = (a0, a1, a2, a3) => ({ "pi-star-fill text-yellow-500": a0, "pi-thumbs-up-fill text-green-500": a1, "pi-check-circle text-blue-500": a2, "pi-times-circle text-red-500": a3 });
var _c37 = (a0, a1) => ({ "bg-green-50": a0, "bg-red-50": a1 });
var _c42 = (a0, a1) => ({ "pi-check text-green-500": a0, "pi-times text-red-500": a1 });
function QuizComponent_p_progressSpinner_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner");
  }
}
function QuizComponent_p_card_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card", 5)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function QuizComponent_div_4_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275listener("click", function QuizComponent_div_4_div_1_div_5_Template_div_click_1_listener() {
      const subject_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectSubject(subject_r3));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subject_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r0.getIconForSubject(subject_r3.subject_name, true));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", subject_r3.icon, " category-icon"));
    \u0275\u0275styleProp("color", ctx_r0.getIconForSubject(subject_r3.subject_name, true));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subject_r3.subject_name);
  }
}
function QuizComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275text(3, " Bir Ders Se\xE7 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275template(5, QuizComponent_div_4_div_1_div_5_Template, 5, 8, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.subjects);
  }
}
function QuizComponent_div_4_div_2_div_5_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 23);
  }
}
function QuizComponent_div_4_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275listener("click", function QuizComponent_div_4_div_2_div_5_Template_div_click_1_listener() {
      const topic_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleTopicSelection(topic_r6));
    });
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, QuizComponent_div_4_div_2_div_5_i_5_Template, 1, 0, "i", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const topic_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r0.getIconForSubject((ctx_r0.selectedSubject == null ? null : ctx_r0.selectedSubject.subject_name) || "", true));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c111, ctx_r0.isTopicSelected(topic_r6)));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getIconForSubject((ctx_r0.selectedSubject == null ? null : ctx_r0.selectedSubject.subject_name) || "", true));
    \u0275\u0275property("ngClass", ctx_r0.getTopicIcon(topic_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topic_r6.topic_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTopicSelected(topic_r6));
  }
}
function QuizComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275element(2, "i", 14);
    \u0275\u0275text(3, " Konu Se\xE7imi ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275template(5, QuizComponent_div_4_div_2_div_5_Template, 6, 10, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "p-button", 17);
    \u0275\u0275listener("click", function QuizComponent_div_4_div_2_Template_p_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.currentView = "subject");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-button", 18);
    \u0275\u0275listener("click", function QuizComponent_div_4_div_2_Template_p_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.currentView = "settings");
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.topics);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.selectedTopics.length === 0);
  }
}
function QuizComponent_div_4_div_3_div_5_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 23);
  }
}
function QuizComponent_div_4_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275listener("click", function QuizComponent_div_4_div_3_div_5_Template_div_click_1_listener() {
      const difficulty_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectedDifficulty = difficulty_r9);
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, QuizComponent_div_4_div_3_div_5_i_5_Template, 1, 0, "i", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const difficulty_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", difficulty_r9.color);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c111, (ctx_r0.selectedDifficulty == null ? null : ctx_r0.selectedDifficulty.value) === difficulty_r9.value));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", difficulty_r9.icon, " category-icon"));
    \u0275\u0275styleProp("color", difficulty_r9.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(difficulty_r9.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.selectedDifficulty == null ? null : ctx_r0.selectedDifficulty.value) === difficulty_r9.value);
  }
}
function QuizComponent_div_4_div_3_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 28);
    \u0275\u0275text(1, " Her soru i\xE7in ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.questionTime, " saniye!");
  }
}
function QuizComponent_div_4_div_3_i_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 23);
  }
}
function QuizComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275text(3, " Quiz Ayarlar\u0131 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275template(5, QuizComponent_div_4_div_3_div_5_Template, 6, 12, "div", 15);
    \u0275\u0275elementStart(6, "div", 19)(7, "div", 20);
    \u0275\u0275listener("click", function QuizComponent_div_4_div_3_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isTimedQuiz = !ctx_r0.isTimedQuiz);
    });
    \u0275\u0275element(8, "i", 25);
    \u0275\u0275elementStart(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, QuizComponent_div_4_div_3_small_11_Template, 4, 1, "small", 26)(12, QuizComponent_div_4_div_3_i_12_Template, 1, 0, "i", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 16)(14, "p-button", 17);
    \u0275\u0275listener("click", function QuizComponent_div_4_div_3_Template_p_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.currentView = "topic");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p-button", 27);
    \u0275\u0275listener("click", function QuizComponent_div_4_div_3_Template_p_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.currentView = "confirm");
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.difficulties);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c111, ctx_r0.isTimedQuiz));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isTimedQuiz ? "S\xFCreli" : "S\xFCresiz");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTimedQuiz);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTimedQuiz);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.selectedDifficulty);
  }
}
function QuizComponent_div_4_p_card_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 41);
    \u0275\u0275text(1, " Se\xE7imleri Onayla ");
  }
}
function QuizComponent_div_4_p_card_4_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "p-button", 17);
    \u0275\u0275listener("click", function QuizComponent_div_4_p_card_4_ng_template_28_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.currentView = "settings");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 43);
    \u0275\u0275listener("click", function QuizComponent_div_4_p_card_4_ng_template_28_Template_p_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.initiateQuiz());
    });
    \u0275\u0275elementEnd()();
  }
}
function QuizComponent_div_4_p_card_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card", 29);
    \u0275\u0275template(1, QuizComponent_div_4_p_card_4_ng_template_1_Template, 2, 0, "ng-template", 30);
    \u0275\u0275elementStart(2, "div", 31)(3, "ul", 32)(4, "li", 33)(5, "span", 34);
    \u0275\u0275element(6, "i", 8);
    \u0275\u0275text(7, "Ders:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li", 33)(11, "span", 34);
    \u0275\u0275element(12, "i", 14);
    \u0275\u0275text(13, "Konular:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li", 33)(17, "span", 34);
    \u0275\u0275element(18, "i", 37);
    \u0275\u0275text(19, "Zorluk:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 35);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li", 38)(23, "span", 34);
    \u0275\u0275element(24, "i", 39);
    \u0275\u0275text(25, "S\xFCreli mi?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 35);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(28, QuizComponent_div_4_p_card_4_ng_template_28_Template, 3, 0, "ng-template", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.selectedSubject == null ? null : ctx_r0.selectedSubject.subject_name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedTopicsText);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedDifficulty == null ? null : ctx_r0.selectedDifficulty.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.isTimedQuiz ? "Evet" : "Hay\u0131r");
  }
}
function QuizComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, QuizComponent_div_4_div_1_Template, 6, 1, "div", 2)(2, QuizComponent_div_4_div_2_Template, 9, 2, "div", 2)(3, QuizComponent_div_4_div_3_Template, 16, 8, "div", 2)(4, QuizComponent_div_4_p_card_4_Template, 29, 4, "p-card", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentView === "subject");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentView === "topic");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentView === "settings");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentView === "confirm");
  }
}
function QuizComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 58);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("width", ctx_r0.timeLeft / ctx_r0.questionTime * 100, "%");
  }
}
function QuizComponent_div_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4, "KOMBO!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 63);
    \u0275\u0275text(6, "+5 Puan");
    \u0275\u0275elementEnd()();
  }
}
function QuizComponent_div_5_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.questions[ctx_r0.currentQuestionIndex].question_text, " ");
  }
}
function QuizComponent_div_5_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "img", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", "assets/images/" + ctx_r0.questions[ctx_r0.currentQuestionIndex].image_path, \u0275\u0275sanitizeUrl);
  }
}
function QuizComponent_div_5_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67, 0);
    \u0275\u0275listener("click", function QuizComponent_div_5_div_23_Template_div_click_1_listener() {
      const option_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!ctx_r0.answerSubmitted && ctx_r0.selectOption(option_r12.id));
    });
    \u0275\u0275elementStart(3, "span", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("cursor-pointer", !ctx_r0.answerSubmitted);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("ABCD"[i_r13]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r12.option_text);
  }
}
function QuizComponent_div_5_ng_template_24_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 73);
    \u0275\u0275listener("click", function QuizComponent_div_5_ng_template_24_p_button_1_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.showHint());
    });
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_div_5_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, QuizComponent_div_5_ng_template_24_p_button_1_Template, 1, 0, "p-button", 71);
    \u0275\u0275elementStart(2, "p-button", 72);
    \u0275\u0275listener("click", function QuizComponent_div_5_ng_template_24_Template_p_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nextQuestion());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.questions[ctx_r0.currentQuestionIndex].hint);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.answerSubmitted);
  }
}
function QuizComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275template(2, QuizComponent_div_5_div_2_Template, 1, 2, "div", 46);
    \u0275\u0275elementStart(3, "div", 47)(4, "span", 48);
    \u0275\u0275text(5, "SORU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 50)(9, "span", 51);
    \u0275\u0275text(10, "PUAN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 47)(14, "span", 48);
    \u0275\u0275text(15, "S\xDCRE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 49);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, QuizComponent_div_5_div_18_Template, 7, 0, "div", 53);
    \u0275\u0275elementStart(19, "p-card", 54);
    \u0275\u0275template(20, QuizComponent_div_5_ng_template_20_Template, 1, 1, "ng-template", 30)(21, QuizComponent_div_5_div_21_Template, 2, 1, "div", 55);
    \u0275\u0275elementStart(22, "div", 56);
    \u0275\u0275template(23, QuizComponent_div_5_div_23_Template, 7, 4, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, QuizComponent_div_5_ng_template_24_Template, 3, 2, "ng-template", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("time-warning-pulse", ctx_r0.isTimedQuiz && ctx_r0.timeLeft <= 5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isTimedQuiz);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.currentQuestionIndex + 1, "/", ctx_r0.questions.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.currentScore);
    \u0275\u0275advance();
    \u0275\u0275classProp("invisible", !ctx_r0.isTimedQuiz);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.timeLeft, "s");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showComboAnimation);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.questions[ctx_r0.currentQuestionIndex].image_path);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.questions[ctx_r0.currentQuestionIndex].options);
  }
}
function QuizComponent_div_6_ng_template_2_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "M\xFCkemmel \u0130\u015F!");
    \u0275\u0275elementContainerEnd();
  }
}
function QuizComponent_div_6_ng_template_2_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Harika!");
    \u0275\u0275elementContainerEnd();
  }
}
function QuizComponent_div_6_ng_template_2_div_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\u0130yi \u0130\u015F!");
    \u0275\u0275elementContainerEnd();
  }
}
function QuizComponent_div_6_ng_template_2_div_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Biraz Daha \xC7al\u0131\u015F!");
    \u0275\u0275elementContainerEnd();
  }
}
function QuizComponent_div_6_ng_template_2_div_0_div_29_div_5_i_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 115);
  }
  if (rf & 2) {
    const icon_r17 = ctx.$implicit;
    const prevQuiz_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", icon_r17, " text-xl"));
    \u0275\u0275property("pTooltip", prevQuiz_r18.topic_names);
  }
}
function QuizComponent_div_6_ng_template_2_div_0_div_29_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104)(2, "div", 105)(3, "span", 106);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 107);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 108);
    \u0275\u0275template(9, QuizComponent_div_6_ng_template_2_div_0_div_29_div_5_i_9_Template, 1, 4, "i", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 110)(11, "span", 111);
    \u0275\u0275element(12, "i", 112);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 113);
    \u0275\u0275element(15, "i", 114);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const prevQuiz_r18 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Quiz #", prevQuiz_r18.quiz_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, prevQuiz_r18.created_at, "dd.MM.yy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", prevQuiz_r18.topic_icons);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", prevQuiz_r18.correct_count);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", prevQuiz_r18.wrong_count);
  }
}
function QuizComponent_div_6_ng_template_2_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "p-divider", 94)(2, "span", 95);
    \u0275\u0275text(3, "Bu Dersteki Son Quizlerin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 101);
    \u0275\u0275template(5, QuizComponent_div_6_ng_template_2_div_0_div_29_div_5_Template, 17, 8, "div", 102);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.previousPerformance);
  }
}
function QuizComponent_div_6_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 75)(2, "h2", 76);
    \u0275\u0275element(3, "i", 77);
    \u0275\u0275elementStart(4, "span", 78);
    \u0275\u0275template(5, QuizComponent_div_6_ng_template_2_div_0_ng_container_5_Template, 2, 0, "ng-container", 2)(6, QuizComponent_div_6_ng_template_2_div_0_ng_container_6_Template, 2, 0, "ng-container", 2)(7, QuizComponent_div_6_ng_template_2_div_0_ng_container_7_Template, 2, 0, "ng-container", 2)(8, QuizComponent_div_6_ng_template_2_div_0_ng_container_8_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 79);
    \u0275\u0275text(10, "Quizi ba\u015Far\u0131yla tamamlad\u0131n\u0131z.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 80);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 81)(14, "div", 82)(15, "div", 83)(16, "span", 84);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 85);
    \u0275\u0275text(19, "Do\u011Fru Cevap");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 82)(21, "div", 86)(22, "span", 87);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 88);
    \u0275\u0275text(25, "Yanl\u0131\u015F Cevap");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 89)(27, "p-button", 90);
    \u0275\u0275listener("click", function QuizComponent_div_6_ng_template_2_div_0_Template_p_button_click_27_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.resetQuiz());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p-button", 91);
    \u0275\u0275listener("click", function QuizComponent_div_6_ng_template_2_div_0_Template_p_button_click_28_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.showReview = true);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, QuizComponent_div_6_ng_template_2_div_0_div_29_Template, 6, 1, "div", 92);
    \u0275\u0275elementStart(30, "div", 93)(31, "p-divider", 94)(32, "span", 95);
    \u0275\u0275text(33, "Sonucunu Payla\u015F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 96)(35, "p-button", 97);
    \u0275\u0275listener("click", function QuizComponent_div_6_ng_template_2_div_0_Template_p_button_click_35_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.shareOn("twitter"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p-button", 98);
    \u0275\u0275listener("click", function QuizComponent_div_6_ng_template_2_div_0_Template_p_button_click_36_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.shareOn("facebook"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p-button", 99);
    \u0275\u0275listener("click", function QuizComponent_div_6_ng_template_2_div_0_Template_p_button_click_37_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.shareOn("whatsapp"));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(9, _c211, ctx_r0.successPercentage >= 90, ctx_r0.successPercentage >= 70 && ctx_r0.successPercentage < 90, ctx_r0.successPercentage >= 50 && ctx_r0.successPercentage < 70, ctx_r0.successPercentage < 50));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.successPercentage >= 90);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successPercentage >= 70 && ctx_r0.successPercentage < 90);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successPercentage >= 50 && ctx_r0.successPercentage < 70);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successPercentage < 50);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Toplam Puan\u0131n\u0131z: ", ctx_r0.score);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.correctAnswersCount);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.wrongAnswersCount);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.previousPerformance.length > 0);
  }
}
function QuizComponent_div_6_ng_template_2_div_1_li_8_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 126);
    \u0275\u0275text(1, " Do\u011Fru Cevap: ");
    \u0275\u0275elementStart(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(question_r20.options[question_r20.correctOptionId].option_text);
  }
}
function QuizComponent_div_6_ng_template_2_div_1_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 120);
    \u0275\u0275element(1, "i", 121);
    \u0275\u0275elementStart(2, "div", 122)(3, "p", 123);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 124);
    \u0275\u0275text(6, "Senin Cevab\u0131n: ");
    \u0275\u0275elementStart(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, QuizComponent_div_6_ng_template_2_div_1_li_8_p_9_Template, 4, 1, "p", 125);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c37, ctx_r0.getAnswerForQuestion(question_r20.id).isCorrect, !ctx_r0.getAnswerForQuestion(question_r20.id).isCorrect));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c42, ctx_r0.getAnswerForQuestion(question_r20.id).isCorrect, !ctx_r0.getAnswerForQuestion(question_r20.id).isCorrect));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", i_r21 + 1, ". ", question_r20.question_text);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getAnswerForQuestion(question_r20.id).userAnswerText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.getAnswerForQuestion(question_r20.id).isCorrect);
  }
}
function QuizComponent_div_6_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 116)(2, "div", 117)(3, "p-button", 118);
    \u0275\u0275listener("click", function QuizComponent_div_6_ng_template_2_div_1_Template_p_button_click_3_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.showReview = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-divider", 94)(5, "span", 95);
    \u0275\u0275text(6, "Cevaplar\u0131n Analizi");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ul", 32);
    \u0275\u0275template(8, QuizComponent_div_6_ng_template_2_div_1_li_8_Template, 10, 12, "li", 119);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r0.questions);
  }
}
function QuizComponent_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuizComponent_div_6_ng_template_2_div_0_Template, 38, 14, "div", 2)(1, QuizComponent_div_6_ng_template_2_div_1_Template, 9, 1, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.showReview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showReview);
  }
}
function QuizComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p-card");
    \u0275\u0275template(2, QuizComponent_div_6_ng_template_2_Template, 2, 2, "ng-template", 74);
    \u0275\u0275elementEnd()();
  }
}
var QuizComponent = class _QuizComponent {
  quizService;
  messageService;
  route;
  renderer;
  el;
  router;
  authService;
  // DOM elementlerine erişim için
  optionCards;
  QUIZ_STATE_KEY = "activeQuizState";
  // State to be saved
  get quizState() {
    return {
      quizId: this.quizId,
      questions: this.questions,
      currentQuestionIndex: this.currentQuestionIndex,
      isTimedQuiz: this.isTimedQuiz,
      userAnswers: this.userAnswers
    };
  }
  // Görünüm yönetimi
  currentView = "subject";
  subjects = [];
  topics = [];
  selectedSubject = null;
  selectedTopics = [];
  difficulties = [
    { name: "Kolay", value: "easy", icon: "pi pi-face-smile", color: "var(--local-green-500)" },
    { name: "Orta", value: "medium", icon: "pi pi-sun", color: "var(--local-yellow-500)" },
    { name: "Zor", value: "hard", icon: "pi pi-bolt", color: "var(--local-red-500)" }
  ];
  selectedDifficulty = null;
  // Başlangıçta seçim yok
  isTimedQuiz = false;
  quizStarted = false;
  // Quiz phase
  questions = [];
  currentQuestionIndex = 0;
  selectedOptionId = null;
  quizId = null;
  userAnswers = [];
  currentQuizTopicIds = [];
  // Mevcut quiz'in konu ID'lerini tutar
  quizFinished = false;
  score = 0;
  correctAnswersCount = 0;
  wrongAnswersCount = 0;
  successPercentage = 0;
  showReview = false;
  loading = true;
  error = null;
  // Timer properties
  timer;
  questionTime = 20;
  // Her soru için 20 saniye
  timeLeft = this.questionTime;
  timeUp = false;
  // Sürenin dolup dolmadığını tutar
  answerSubmitted = false;
  // Cevabın gönderilip gönderilmediğini tutar
  previouslySelectedWrongOptions = /* @__PURE__ */ new Set();
  // Yanlış seçilen seçeneklerin ID'lerini tutar
  wrongAttempts = 0;
  // Yanlış cevap deneme sayısını tutar
  // Anlık Puanlama için
  currentScore = 0;
  correctStreak = 0;
  showComboAnimation = false;
  // Önceki performans için (PreviousPerformanceEntry tipini kullan)
  previousPerformance = [];
  previousCorrectCount = 0;
  previousWrongCount = 0;
  constructor(quizService, messageService, route, renderer, el, router, authService) {
    this.quizService = quizService;
    this.messageService = messageService;
    this.route = route;
    this.renderer = renderer;
    this.el = el;
    this.router = router;
    this.authService = authService;
  }
  get selectedTopicsText() {
    if (!this.selectedTopics || this.selectedTopics.length === 0) {
      return "";
    }
    return this.selectedTopics.map((t) => t.topic_name).join(", ");
  }
  ngOnInit() {
    this.loadState();
    if (!this.quizStarted) {
      this.loading = true;
      this.quizService.getSubjects().subscribe((data) => {
        this.subjects = this.enrichSubjectsWithIcons(data);
        this.loading = false;
        const navigation = this.router.getCurrentNavigation();
        const state = navigation?.extras.state;
        if (state?.preselectedSubject) {
          const subjectToSelect = this.subjects.find((s3) => s3.subject_id === state.preselectedSubject?.subject_id);
          if (subjectToSelect) {
            this.selectSubject(subjectToSelect);
          }
        }
      });
    }
  }
  ngOnDestroy() {
    if (this.quizStarted && !this.quizFinished) {
      this.saveState();
    }
  }
  enrichSubjectsWithIcons(subjects) {
    return subjects.map((subject) => {
      const dbIcon = subject.icon ? subject.icon.trim() : "";
      if (!dbIcon) {
        subject.icon = this.getIconForSubject(subject.subject_name);
      } else {
        subject.icon = dbIcon;
      }
      return subject;
    });
  }
  getIconForSubject(subjectName, returnColor = false) {
    const name = subjectName.toLocaleLowerCase("tr-TR");
    if (name.includes("matematik")) {
      return returnColor ? "#FF6B6B" : "pi pi-calculator";
    }
    if (name.includes("t\xFCrk\xE7e")) {
      return returnColor ? "#b762f0ff" : "pi pi-book";
    }
    if (name.includes("fen bilimleri")) {
      return returnColor ? "#45B7D1" : "pi pi-globe";
    }
    if (name.includes("hayat bilgisi")) {
      return returnColor ? "#4ECDC4" : "pi pi-compass";
    }
    return returnColor ? "var(--primary-color)" : "pi pi-question-circle";
  }
  saveState() {
    sessionStorage.setItem(this.QUIZ_STATE_KEY, JSON.stringify(this.quizState));
  }
  loadState() {
    const savedState = sessionStorage.getItem(this.QUIZ_STATE_KEY);
    if (savedState) {
      const state = JSON.parse(savedState);
      this.quizId = state.quizId;
      this.questions = state.questions;
      this.currentQuestionIndex = state.currentQuestionIndex;
      this.userAnswers = state.userAnswers;
      this.isTimedQuiz = state.isTimedQuiz;
      this.quizStarted = true;
      this.loading = false;
      if (this.questions.length > 0) {
        this.shuffleCurrentQuestionOptions();
      }
      if (this.isTimedQuiz) {
        this.startTimer();
      }
    }
  }
  onSubjectChange() {
    this.topics = [];
    this.selectedTopics = [];
    if (this.selectedSubject) {
      this.quizService.getTopics(this.selectedSubject.subject_id).subscribe((data) => {
        this.topics = data;
      });
    }
  }
  startQuiz() {
    if (!this.selectedSubject || this.selectedTopics.length === 0 || !this.selectedDifficulty)
      return;
    this.loading = true;
    this.quizStarted = true;
    const topicIds = this.selectedTopics.map((t) => t.topic_id);
    this.currentQuizTopicIds = topicIds;
    this.quizService.getQuestions(this.selectedSubject.subject_id, topicIds, this.isTimedQuiz, this.selectedDifficulty.value).subscribe({
      next: (response) => {
        this.quizId = response.quizId;
        this.questions = response.questions;
        this.saveState();
        if (this.isTimedQuiz) {
          this.startTimer();
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Sorular y\xFCklenirken hata olu\u015Ftu:", err);
        this.error = err.error?.message || "Sorular y\xFCklenemedi. L\xFCtfen tekrar deneyin.";
        this.quizStarted = false;
        sessionStorage.removeItem(this.QUIZ_STATE_KEY);
        this.loading = false;
      }
    });
  }
  initiateQuiz() {
    this.startQuiz();
  }
  selectSubject(subject) {
    this.selectedSubject = subject;
    this.onSubjectChange();
    this.currentView = "topic";
  }
  resetQuizSelection() {
    this.selectedSubject = null;
    this.selectedTopics = [];
    this.topics = [];
    this.selectedDifficulty = null;
    this.currentView = "subject";
  }
  toggleTopicSelection(topic) {
    const index = this.selectedTopics.findIndex((t) => t.topic_id === topic.topic_id);
    if (index > -1) {
      this.selectedTopics.splice(index, 1);
    } else {
      this.selectedTopics.push(topic);
    }
  }
  isTopicSelected(topic) {
    return this.selectedTopics.some((t) => t.topic_id === topic.topic_id);
  }
  getTopicIcon(topic) {
    const isPrimeIcon = topic.icon && topic.icon.startsWith("pi ");
    return isPrimeIcon ? `pi ${topic.icon}` : "pi pi-tag";
  }
  selectOption(optionId) {
    if (this.answerSubmitted)
      return;
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.selectedOptionId = optionId;
    const isCorrect = optionId === currentQuestion.correctOptionId;
    if (isCorrect) {
      this.previouslySelectedWrongOptions.clear();
      this.answerSubmitted = true;
      this.stopTimer();
      this.updateOptionStyles();
      this.fireConfetti();
      this.playSound("click.mp3");
      this.correctStreak++;
      let pointsEarned = 0;
      if (this.wrongAttempts === 0) {
        pointsEarned = 10;
      } else {
        pointsEarned = 5;
      }
      this.currentScore += pointsEarned;
      if (this.correctStreak > 0 && this.correctStreak % 3 === 0) {
        this.currentScore += 5;
        this.showComboAnimation = true;
        setTimeout(() => {
          this.showComboAnimation = false;
        }, 2e3);
      }
    } else {
      this.wrongAttempts++;
      this.previouslySelectedWrongOptions.add(optionId);
      this.playSound("wrong.mp3");
      if (this.wrongAttempts >= 2) {
        this.answerSubmitted = true;
        this.stopTimer();
      }
      this.updateOptionStyles();
      this.correctStreak = 0;
    }
  }
  updateOptionStyles() {
    const correctOptionId = this.questions[this.currentQuestionIndex].correctOptionId;
    this.optionCards.forEach((card, index) => {
      const cardElement = card.nativeElement;
      const optionId = this.questions[this.currentQuestionIndex].options[index].id;
      this.renderer.removeClass(cardElement, "correct-answer");
      this.renderer.removeClass(cardElement, "wrong-answer");
      this.renderer.removeStyle(cardElement, "background-color");
      this.renderer.removeStyle(cardElement, "border-color");
      if (this.answerSubmitted) {
        if (optionId === correctOptionId) {
          this.renderer.setStyle(cardElement, "background-color", "var(--local-green-100)", RendererStyleFlags2.Important);
          this.renderer.setStyle(cardElement, "border-color", "var(--local-green-500)", RendererStyleFlags2.Important);
          this.renderer.addClass(cardElement, "correct-answer");
        } else if (this.previouslySelectedWrongOptions.has(optionId)) {
          this.renderer.setStyle(cardElement, "background-color", "var(--local-red-100)", RendererStyleFlags2.Important);
          this.renderer.setStyle(cardElement, "border-color", "var(--local-red-500)", RendererStyleFlags2.Important);
          this.renderer.addClass(cardElement, "wrong-answer");
        }
      } else {
        if (this.previouslySelectedWrongOptions.has(optionId)) {
          this.renderer.setStyle(cardElement, "background-color", "var(--local-red-100)", RendererStyleFlags2.Important);
          this.renderer.setStyle(cardElement, "border-color", "var(--local-red-500)", RendererStyleFlags2.Important);
          this.renderer.addClass(cardElement, "wrong-answer");
        }
      }
    });
  }
  nextQuestion() {
    const timeTaken = this.isTimedQuiz ? this.questionTime - this.timeLeft : 0;
    this.stopTimer();
    const attempts = this.wrongAttempts + (this.selectedOptionId !== null && this.questions[this.currentQuestionIndex].correctOptionId === this.selectedOptionId ? 1 : 0);
    this.userAnswers.push({
      questionId: this.questions[this.currentQuestionIndex].id,
      optionId: this.selectedOptionId,
      // Süre dolduysa null olacak
      timeTaken,
      attempts: attempts > 0 ? attempts : 1
      // En az 1 deneme yapılmıştır
    });
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.shuffleCurrentQuestionOptions();
      this.saveState();
      this.answerSubmitted = false;
      this.timeUp = false;
      this.wrongAttempts = 0;
      this.previouslySelectedWrongOptions.clear();
      this.selectedOptionId = null;
      if (this.isTimedQuiz) {
        this.optionCards.forEach((card) => {
          const cardElement = card.nativeElement;
          this.renderer.removeStyle(cardElement, "background-color");
          this.renderer.removeStyle(cardElement, "border-color");
          this.renderer.removeClass(cardElement, "correct-answer");
          this.renderer.removeClass(cardElement, "wrong-answer");
        });
        this.resetTimer();
        this.startTimer();
      }
    } else {
      this.finishQuiz();
    }
  }
  shuffleCurrentQuestionOptions() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion && currentQuestion.options) {
      for (let i = currentQuestion.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentQuestion.options[i], currentQuestion.options[j]] = [currentQuestion.options[j], currentQuestion.options[i]];
      }
    }
  }
  finishQuiz() {
    if (this.quizId === null) {
      this.error = "Quiz ID bulunamad\u0131. L\xFCtfen tekrar deneyin.";
      this.loading = false;
      return;
    }
    this.loading = true;
    sessionStorage.removeItem(this.QUIZ_STATE_KEY);
    this.quizService.submitAnswers(this.quizId, this.userAnswers).subscribe({
      next: (result) => {
        this.authService.updateUserPoints(result.new_total_points);
        this.score = result.score;
        this.correctAnswersCount = this.userAnswers.filter((answer) => {
          const question = this.questions.find((q) => q.id === answer.questionId);
          return question && answer.optionId === question.correctOptionId;
        }).length;
        this.wrongAnswersCount = this.questions.length - this.correctAnswersCount;
        const numQuestions = this.questions.length;
        const finalPercentage = numQuestions > 0 ? Math.ceil(this.correctAnswersCount / numQuestions * 100) : 0;
        this.quizFinished = true;
        this.successPercentage = Math.min(finalPercentage, 100);
        let currentPercentage = 0;
        const interval = setInterval(() => {
          if (currentPercentage < finalPercentage) {
            currentPercentage++;
            this.successPercentage = currentPercentage;
          } else {
            clearInterval(interval);
          }
        }, 15);
        this.loading = false;
        this.getPreviousPerformance();
      },
      error: (err) => {
        console.error("Skor hesaplan\u0131rken hata:", err);
        this.error = "Skorunuz hesaplanamad\u0131. L\xFCtfen tekrar deneyin.";
        this.loading = false;
      }
    });
  }
  getPreviousPerformance() {
    if (!this.selectedSubject || !this.quizId)
      return;
    this.quizService.getPreviousPerformance(this.selectedSubject.subject_id, this.quizId).subscribe({
      next: (data) => {
        this.previousPerformance = data;
        this.previousCorrectCount = data.reduce((sum, entry) => sum + entry.correct_count, 0);
        this.previousWrongCount = data.reduce((sum, entry) => sum + entry.wrong_count, 0);
      },
      error: (err) => {
        console.error("\xD6nceki performans verileri getirilirken hata:", err.error?.message || err.message);
        this.previousPerformance = [];
      }
    });
  }
  shareOn(platform) {
    const shareText = `Yirmisaniye quizinde ${this.score} puan ald\u0131m! Sen de bu heyecana kat\u0131l!`;
    const appUrl = window.location.origin;
    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(appUrl)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + appUrl)}`;
        break;
    }
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  }
  getAnswerForQuestion(questionId) {
    const question = this.questions.find((q) => q.id === questionId);
    const userAnswer = this.userAnswers.find((a) => a.questionId === questionId);
    if (!question || !userAnswer || userAnswer.optionId === null)
      return { userAnswerText: "Cevaplanmad\u0131", isCorrect: false };
    return { userAnswerText: question.options[userAnswer.optionId].option_text, isCorrect: userAnswer.optionId === question.correctOptionId };
  }
  showHint() {
    const hint = this.questions[this.currentQuestionIndex].hint;
    if (hint) {
      this.messageService.add({ severity: "info", summary: "\u0130pucu", detail: hint, life: 5e3 });
    }
  }
  resetQuiz() {
    if (this.quizStarted && !this.quizFinished) {
    }
    sessionStorage.removeItem(this.QUIZ_STATE_KEY);
    this.quizStarted = false;
    this.quizFinished = false;
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.score = 0;
    this.correctAnswersCount = 0;
    this.wrongAnswersCount = 0;
    this.successPercentage = 0;
    this.showReview = false;
    this.error = null;
    this.timeUp = false;
    this.answerSubmitted = false;
    this.wrongAttempts = 0;
    this.previouslySelectedWrongOptions.clear();
    this.stopTimer();
    this.loading = false;
    this.currentScore = 0;
    this.correctStreak = 0;
    this.showComboAnimation = false;
    this.previousPerformance = [];
    this.previousCorrectCount = 0;
    this.previousWrongCount = 0;
    this.loading = true;
    this.quizService.getSubjects().subscribe((data) => {
      this.subjects = this.enrichSubjectsWithIcons(data);
      this.loading = false;
    });
    this.selectedSubject = null;
    this.selectedTopics = [];
    this.selectedDifficulty = null;
    this.currentView = "subject";
    this.topics = [];
  }
  playSound(fileName) {
    try {
      const audio = new Audio(`assets/audio/${fileName}`);
      audio.play();
    } catch (error) {
      console.error(`Ses dosyas\u0131 (${fileName}) \xE7al\u0131n\u0131rken hata olu\u015Ftu:`, error);
    }
  }
  fireConfetti() {
    confetti_module_default({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 1051
      // p-toast'un z-index'i genellikle 1050'dir, konfetinin üstte görünmesi için.
    });
  }
  startTimer() {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
        this.timeUp = true;
        this.answerSubmitted = true;
      }
    }, 1e3);
  }
  stopTimer() {
    clearInterval(this.timer);
  }
  resetTimer() {
    this.timeLeft = this.questionTime;
  }
  static \u0275fac = function QuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizComponent)(\u0275\u0275directiveInject(QuizService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizComponent, selectors: [["app-quiz"]], viewQuery: function QuizComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionCards = _t);
    }
  }, features: [\u0275\u0275ProvidersFeature([FilterService])], decls: 7, vars: 5, consts: [["optionCard", ""], [1, "quiz-container", "p-d-flex", "p-jc-center", "p-ai-center"], [4, "ngIf"], ["header", "Hata", 4, "ngIf"], ["class", "quiz-active-container", 4, "ngIf"], ["header", "Hata"], ["styleClass", "quiz-setup-card", 4, "ngIf"], [1, "quiz-step-header"], [1, "pi", "pi-book", "mr-2"], [1, "grid", "category-section", "justify-content-center", "mt-4"], ["class", "col-6 md:col-4 lg:col-2", 4, "ngFor", "ngForOf"], [1, "col-6", "md:col-4", "lg:col-2"], [1, "category-card", "h-full", 3, "click"], [1, "category-name"], [1, "pi", "pi-tags", "mr-2"], ["class", "col-6 md:col-4 lg:col-3", 4, "ngFor", "ngForOf"], [1, "flex", "justify-content-between", "mt-5"], ["label", "Geri", "icon", "pi pi-arrow-left", "styleClass", "p-button-secondary", 3, "click"], ["label", "\u0130leri", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "click", "disabled"], [1, "col-6", "md:col-4", "lg:col-3"], [1, "category-card", "h-full", 3, "click", "ngClass"], [1, "category-icon", 3, "ngClass"], ["class", "pi pi-check-circle selected-watermark", 4, "ngIf"], [1, "pi", "pi-check-circle", "selected-watermark"], [1, "pi", "pi-cog", "mr-2"], [1, "pi", "pi-clock", "category-icon"], ["class", "timed-warning-text mt-2", 4, "ngIf"], ["label", "Onayla", "icon", "pi pi-check", "iconPos", "right", 3, "click", "disabled"], [1, "timed-warning-text", "mt-2"], ["styleClass", "quiz-setup-card"], ["pTemplate", "title"], [1, "surface-ground", "p-4", "border-round"], [1, "list-none", "p-0", "m-0"], [1, "flex", "align-items-center", "justify-content-between", "mb-3"], [1, "font-semibold", "text-gray-600"], [1, "font-bold"], [1, "text-right", "font-bold"], [1, "pi", "pi-chart-bar", "mr-2"], [1, "flex", "align-items-center", "justify-content-between"], [1, "pi", "pi-clock", "mr-2"], ["pTemplate", "footer"], [1, "pi", "pi-check-square", "mr-2"], [1, "flex", "justify-content-between"], ["label", "Hadi Ba\u015Flayal\u0131m!", "icon", "pi pi-rocket", 3, "click"], [1, "quiz-active-container"], [1, "main-score-display"], ["class", "background-progress", 3, "width", 4, "ngIf"], [1, "quiz-stat", "content-layer"], [1, "stat-label"], [1, "stat-value"], [1, "score-container", "content-layer"], [1, "score-label"], [1, "score-value"], ["class", "combo-animation", 4, "ngIf"], [1, "w-full", "quiz-question-card"], ["class", "question-image my-3 text-center", 4, "ngIf"], [1, "grid", "options-grid", "my-4"], ["class", "col-12 md:col-6", 4, "ngFor", "ngForOf"], [1, "background-progress"], [1, "combo-animation"], [1, "combo-main"], [1, "pi", "pi-bolt", "combo-icon"], [1, "combo-text"], [1, "combo-points"], [1, "question-image", "my-3", "text-center"], ["alt", "Soru Resmi", 2, "max-width", "100%", "max-height", "200px", 3, "src"], [1, "col-12", "md:col-6"], [1, "option-card", "p-3", "border-round-lg", "text-center", "transition-all", "transition-duration-200", 3, "click"], [1, "option-prefix", "font-bold", "mr-3"], [1, "text-lg"], [1, "flex", "justify-content-between", "align-items-center", "gap-2"], ["label", "\u0130pucu", "icon", "pi pi-question-circle", "styleClass", "p-button-help p-button-outlined", 3, "click", 4, "ngIf"], ["label", "Sonraki Soru", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "click", "disabled"], ["label", "\u0130pucu", "icon", "pi pi-question-circle", "styleClass", "p-button-help p-button-outlined", 3, "click"], ["pTemplate", "content"], [1, "text-center", "mb-5"], [1, "text-3xl", "font-bold", "mb-3"], [1, "pi", 2, "font-size", "2.5rem", 3, "ngClass"], [1, "ml-3"], [1, "text-lg", "text-gray-600"], [1, "text-4xl", "font-bold", "text-primary", "mt-4"], [1, "grid", "text-center", "mt-5"], [1, "col-6"], [1, "p-3", "border-round-md", "bg-green-100"], [1, "text-green-700", "font-bold", "text-3xl"], [1, "text-green-600", "m-0", "text-lg"], [1, "p-3", "border-round-md", "bg-red-100"], [1, "text-red-700", "font-bold", "text-3xl"], [1, "text-red-600", "m-0", "text-lg"], [1, "mt-5", "flex", "justify-content-center", "gap-2"], ["label", "Tekrar Oyna", "icon", "pi pi-refresh", "styleClass", "p-button-secondary", 3, "click"], ["label", "Cevaplar\u0131 G\xF6zden Ge\xE7ir", "icon", "pi pi-search", 3, "click"], ["class", "my-5", 4, "ngIf"], [1, "mt-5", "text-center"], ["align", "center", "styleClass", "my-4"], [1, "font-semibold"], [1, "flex", "justify-content-center", "gap-3"], ["icon", "pi pi-twitter", "styleClass", "p-button-rounded p-button-info", "pTooltip", "Twitter'da Payla\u015F", "tooltipPosition", "bottom", 3, "click"], ["icon", "pi pi-facebook", "styleClass", "p-button-rounded p-button-primary", "pTooltip", "Facebook'ta Payla\u015F", "tooltipPosition", "bottom", 3, "click"], ["icon", "pi pi-whatsapp", "styleClass", "p-button-rounded p-button-success", "pTooltip", "WhatsApp'ta Payla\u015F", "tooltipPosition", "bottom", 3, "click"], [1, "my-5"], [1, "grid"], ["class", "col-12 md:col-4", 4, "ngFor", "ngForOf"], [1, "col-12", "md:col-4"], [1, "previous-performance-card", "p-3", "border-round", "h-full"], [1, "flex", "justify-content-between", "align-items-center", "mb-2"], [1, "font-bold", "text-lg"], [1, "text-sm", "text-color-secondary"], [1, "flex", "flex-wrap", "gap-2", "mb-3", "topic-icons-container"], ["tooltipPosition", "bottom", 3, "class", "pTooltip", 4, "ngFor", "ngForOf"], [1, "flex", "justify-content-around"], [1, "text-green-600", "font-bold"], [1, "pi", "pi-check-circle", "mr-1"], [1, "text-red-600", "font-bold"], [1, "pi", "pi-times-circle", "mr-1"], ["tooltipPosition", "bottom", 3, "pTooltip"], [1, "review-sticky-header"], [1, "flex", "justify-content-start", "mb-2"], ["label", "Sonu\xE7lara D\xF6n", "icon", "pi pi-arrow-left", "styleClass", "p-button-text", 3, "click"], ["class", "question-review-card mb-4 p-3 border-1 surface-border border-round", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "question-review-card", "mb-4", "p-3", "border-1", "surface-border", "border-round", 3, "ngClass"], [1, "watermark-icon", "pi", 3, "ngClass"], [1, "relative", "z-1"], [1, "font-semibold", "m-0", "mb-2"], [1, "m-0"], ["class", "m-0 mt-1", 4, "ngIf"], [1, "m-0", "mt-1"]], template: function QuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "p-toast");
      \u0275\u0275template(2, QuizComponent_p_progressSpinner_2_Template, 1, 0, "p-progressSpinner", 2)(3, QuizComponent_p_card_3_Template, 3, 1, "p-card", 3)(4, QuizComponent_div_4_Template, 5, 4, "div", 2)(5, QuizComponent_div_5_Template, 25, 12, "div", 4)(6, QuizComponent_div_6_Template, 3, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.quizStarted && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.quizStarted && !ctx.loading && !ctx.error && ctx.questions.length > 0 && !ctx.quizFinished);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.quizFinished);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
    CardModule,
    Card,
    PrimeTemplate,
    ButtonModule,
    Button,
    SelectButtonModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    ProgressSpinner,
    // NgIf'i import etmeyi unutmuşuz
    StepsModule,
    ToastModule,
    Toast,
    KnobModule,
    ProgressBarModule,
    TooltipModule,
    Tooltip,
    DividerModule,
    Divider,
    DatePipe
  ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%]     {\n  --local-green-100: #C8E6C9;\n  --local-green-500: #4CAF50;\n  --local-green-700: #388E3C;\n  --local-red-100: #FFCDD2;\n  --local-yellow-500: #FFC107;\n  --local-red-500: #F44336;\n  --local-red-700: #D32F2F;\n}\n[_nghost-%COMP%]     .category-section {\n  margin-top: 2rem;\n  gap: 1.5rem;\n}\n[_nghost-%COMP%]     .quiz-step-header {\n  background: rgba(var(--surface-a-rgb), 0.7);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  padding: 1.5rem;\n  border-radius: 12px;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  text-align: center;\n  margin-top: 2rem;\n  gap: 1.5rem;\n}\n[_nghost-%COMP%]     .category-card {\n  background: rgba(var(--surface-a-rgb), 0.7);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  padding: 1.5rem;\n  border-radius: 12px;\n  border-bottom: 5px solid;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .category-card:hover {\n  transform: translateY(-10px) perspective(1000px) rotateX(5deg);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]     .category-icon {\n  font-size: 3rem;\n  margin-bottom: 0.75rem;\n}\n[_nghost-%COMP%]     .category-name {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-color);\n}\n[_nghost-%COMP%]     .category-card.selected-card {\n  background-color: rgba(var(--local-green-100-rgb), 0.85);\n  border-color: var(--local-green-500) !important;\n  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);\n  transform: translateY(-5px);\n}\n[_nghost-%COMP%]     .selected-watermark {\n  position: absolute;\n  font-size: 5rem;\n  opacity: 0.1;\n  right: 0.5rem;\n  bottom: 0.5rem;\n  transform: rotate(-15deg);\n  pointer-events: none;\n  color: var(--local-green-700);\n}\n[_nghost-%COMP%]     .timed-warning-text {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n[_nghost-%COMP%]     .quiz-container {\n}\n[_nghost-%COMP%]     .quiz-container .option-card {\n  background-color: var(--surface-card);\n  border: 2px solid var(--surface-d);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease-in-out;\n}\n[_nghost-%COMP%]     .quiz-container .option-card:hover {\n  transform: translateY(-4px);\n  border-color: var(--primary-400);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]     .quiz-container .option-card.selected-option {\n  border-color: var(--primary-color);\n  background-color: var(--primary-color);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px var(--primary-100);\n}\n[_nghost-%COMP%]     .quiz-container .option-card.selected-option span {\n  color: var(--primary-color-text);\n}\n[_nghost-%COMP%]     .quiz-container .option-prefix {\n  border: 2px solid var(--surface-border);\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .quiz-container .p-card-title {\n  font-size: 1.5rem;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(-5px);\n  }\n  20%, 40%, 60%, 80% {\n    transform: translateX(5px);\n  }\n}\n[_nghost-%COMP%]     .question-review-card {\n  position: relative;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .question-review-card .watermark-icon {\n  position: absolute;\n  font-size: 8rem;\n  opacity: 0.08;\n  right: 1rem;\n  bottom: -1rem;\n  transform: rotate(-15deg);\n  pointer-events: none;\n}\n[_nghost-%COMP%]     .review-sticky-header {\n  position: sticky;\n  top: 4rem;\n  z-index: 100;\n  background-color: var(--surface-card);\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]     .quiz-question-card {\n  border: 1px solid var(--surface-border) !important;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08) !important;\n  border-radius: var(--border-radius) !important;\n}\n[_nghost-%COMP%]     .quiz-active-container {\n  position: relative;\n  width: 100%;\n  padding-top: 0rem;\n}\n[_nghost-%COMP%]     .main-score-display {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10;\n  position: relative;\n  background-color: var(--surface-card);\n  padding: 0.75rem;\n  border-radius: 1.5rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border: 2px solid var(--primary-color);\n  display: inline-flex;\n  align-items: center;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .main-score-display .background-progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background-color: #C8E6C9;\n  transition: width 1s linear;\n  z-index: 1;\n}\n[_nghost-%COMP%]     .main-score-display.time-warning-pulse {\n  animation: _ngcontent-%COMP%_pulse-red 1s infinite;\n}\n[_nghost-%COMP%]     .main-score-display.time-warning-pulse .background-progress {\n  background-color: #FFCDD2;\n}\n[_nghost-%COMP%]     .main-score-display .content-layer {\n  position: relative;\n  z-index: 2;\n}\n[_nghost-%COMP%]     .main-score-display .score-container.content-layer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 1.5rem;\n  border-left: 1px solid var(--surface-border);\n  border-right: 1px solid var(--surface-border);\n}\n[_nghost-%COMP%]     .main-score-display .score-container.content-layer .score-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  line-height: 1;\n}\n[_nghost-%COMP%]     .main-score-display .score-container.content-layer .score-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-color-secondary);\n  letter-spacing: 1px;\n}\n[_nghost-%COMP%]     .main-score-display .quiz-stat.content-layer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 1.5rem;\n}\n[_nghost-%COMP%]     .main-score-display .quiz-stat.content-layer .stat-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-color-secondary);\n  letter-spacing: 1px;\n}\n[_nghost-%COMP%]     .main-score-display .quiz-stat.content-layer .stat-value {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n[_nghost-%COMP%]     .combo-animation {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1052;\n  pointer-events: none;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_combo-bounce-in-out 2s ease-in-out forwards;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n}\n[_nghost-%COMP%]     .combo-main {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n[_nghost-%COMP%]     .combo-icon {\n  font-size: 4rem;\n  background:\n    linear-gradient(\n      45deg,\n      #ffeb3b,\n      #ffc107);\n  -webkit-text-fill-color: transparent;\n  filter: drop-shadow(0 2px 4px rgba(255, 193, 7, 0.5));\n}\n[_nghost-%COMP%]     .combo-text {\n  font-size: 3.5rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      45deg,\n      var(--primary-400),\n      var(--primary-600));\n  -webkit-text-fill-color: transparent;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n[_nghost-%COMP%]     .combo-points {\n  font-size: 2rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      45deg,\n      var(--green-400),\n      var(--green-600));\n  -webkit-text-fill-color: transparent;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n}\n@keyframes _ngcontent-%COMP%_combo-bounce-in-out {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.3);\n  }\n  25% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1.3);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.1);\n  }\n  75% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n  100% {\n    opacity: 0;\n    transform: translate(-50%, -40vh) scale(0.2);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-red {\n  0% {\n    box-shadow: 0 4px 12px rgba(244, 67, 54, 0.2), 0 0 0 0 rgba(244, 67, 54, 0.4);\n    border-color: var(--red-500);\n  }\n  70% {\n    box-shadow: 0 4px 12px rgba(244, 67, 54, 0.4), 0 0 0 10px rgba(244, 67, 54, 0);\n  }\n  100% {\n    box-shadow: 0 4px 12px rgba(244, 67, 54, 0.2), 0 0 0 0 rgba(244, 67, 54, 0);\n    border-color: var(--red-500);\n  }\n}\n[_nghost-%COMP%]     .previous-performance-card {\n  background-color: var(--surface-100);\n  border: 1px solid var(--surface-border);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .previous-performance-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n}\n[_nghost-%COMP%]     .previous-performance-card .topic-icons-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .previous-performance-card .topic-icons-container .pi {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=quiz.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizComponent, [{
    type: Component,
    args: [{ selector: "app-quiz", standalone: true, imports: [
      CommonModule,
      FormsModule,
      CardModule,
      ButtonModule,
      SelectButtonModule,
      MultiSelectModule,
      ProgressSpinnerModule,
      NgIf,
      // NgIf'i import etmeyi unutmuşuz
      StepsModule,
      ToastModule,
      KnobModule,
      ProgressBarModule,
      TooltipModule,
      DividerModule
      // Buraya ekledik
    ], providers: [FilterService], template: `<div class="quiz-container p-d-flex p-jc-center p-ai-center">\r
  <p-toast></p-toast>\r
\r
\r
  <!-- Y\xFCkleniyor durumu -->\r
  <p-progressSpinner *ngIf="loading"></p-progressSpinner>\r
\r
  <!-- Hata durumu -->\r
  <p-card *ngIf="!loading && error" header="Hata">\r
    <p>{{ error }}</p>\r
  </p-card>\r
\r
  <!-- Ders ve Konu Se\xE7im Ekran\u0131 -->\r
  <div *ngIf="!loading && !quizStarted && !error">\r
\r
    <!-- Ders Se\xE7imi -->\r
    <div *ngIf="currentView === 'subject'">\r
      <div class="quiz-step-header">\r
        <i class="pi pi-book mr-2"></i> Bir Ders Se\xE7\r
      </div>\r
      <div class="grid category-section justify-content-center mt-4">\r
        <div *ngFor="let subject of subjects" class="col-6 md:col-4 lg:col-2">\r
          <div class="category-card h-full" (click)="selectSubject(subject)"\r
            [style.border-color]="getIconForSubject(subject.subject_name, true)">\r
            <i class="pi {{ subject.icon }} category-icon"\r
              [style.color]="getIconForSubject(subject.subject_name, true)"></i>\r
            <span class="category-name">{{ subject.subject_name }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Konu Se\xE7imi -->\r
    <div *ngIf="currentView === 'topic'">\r
      <div class="quiz-step-header">\r
        <i class="pi pi-tags mr-2"></i> Konu Se\xE7imi\r
      </div>\r
      <div class="grid category-section justify-content-center mt-4">\r
        <div *ngFor="let topic of topics" class="col-6 md:col-4 lg:col-3">\r
          <div class="category-card h-full" (click)="toggleTopicSelection(topic)"\r
            [ngClass]="{'selected-card': isTopicSelected(topic)}"\r
            [style.border-color]="getIconForSubject(selectedSubject?.subject_name || '', true)">\r
            <i class="category-icon" [ngClass]="getTopicIcon(topic)"\r
              [style.color]="getIconForSubject(selectedSubject?.subject_name || '', true)"></i>\r
            <span class="category-name">{{ topic.topic_name }}</span>\r
            <i *ngIf="isTopicSelected(topic)" class="pi pi-check-circle selected-watermark"></i>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="flex justify-content-between mt-5">\r
        <p-button label="Geri" icon="pi pi-arrow-left" (click)="currentView = 'subject'"\r
          styleClass="p-button-secondary"></p-button>\r
        <p-button label="\u0130leri" icon="pi pi-arrow-right" iconPos="right" (click)="currentView = 'settings'"\r
          [disabled]="selectedTopics.length === 0"></p-button>\r
      </div>\r
    </div>\r
\r
    <!-- Ayarlar -->\r
    <div *ngIf="currentView === 'settings'">\r
      <div class="quiz-step-header">\r
        <i class="pi pi-cog mr-2"></i> Quiz Ayarlar\u0131\r
      </div>\r
      <div class="grid category-section justify-content-center mt-4">\r
        <!-- Zorluk Seviyesi Kartlar\u0131 -->\r
        <div *ngFor="let difficulty of difficulties" class="col-6 md:col-4 lg:col-3">\r
          <div class="category-card h-full" (click)="selectedDifficulty = difficulty"\r
            [ngClass]="{'selected-card': selectedDifficulty?.value === difficulty.value}"\r
            [style.border-color]="difficulty.color">\r
            <i class="pi {{ difficulty.icon }} category-icon" [style.color]="difficulty.color"></i>\r
            <span class="category-name">{{ difficulty.name }}</span>\r
            <i *ngIf="selectedDifficulty?.value === difficulty.value" class="pi pi-check-circle selected-watermark"></i>\r
          </div>\r
        </div>\r
\r
        <!-- S\xFCre Ayar\u0131 Kart\u0131 -->\r
        <div class="col-6 md:col-4 lg:col-3">\r
          <div class="category-card h-full" (click)="isTimedQuiz = !isTimedQuiz"\r
            [ngClass]="{'selected-card': isTimedQuiz}">\r
            <i class="pi pi-clock category-icon"></i>\r
            <span class="category-name">{{ isTimedQuiz ? 'S\xFCreli' : 'S\xFCresiz' }}</span>\r
            <small *ngIf="isTimedQuiz" class="timed-warning-text mt-2">\r
              Her soru i\xE7in <strong>{{ questionTime }} saniye!</strong>\r
            </small>\r
            <i *ngIf="isTimedQuiz" class="pi pi-check-circle selected-watermark"></i>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="flex justify-content-between mt-5">\r
        <p-button label="Geri" icon="pi pi-arrow-left" (click)="currentView = 'topic'"\r
          styleClass="p-button-secondary"></p-button>\r
        <p-button label="Onayla" icon="pi pi-check" iconPos="right" (click)="currentView = 'confirm'"\r
          [disabled]="!selectedDifficulty"></p-button>\r
      </div>\r
    </div>\r
\r
    <!-- Onay Ekran\u0131 -->\r
    <p-card *ngIf="currentView === 'confirm'" styleClass="quiz-setup-card">\r
      <ng-template pTemplate="title">\r
        <i class="pi pi-check-square mr-2"></i> Se\xE7imleri Onayla\r
      </ng-template>\r
      <div class="surface-ground p-4 border-round">\r
        <ul class="list-none p-0 m-0">\r
          <li class="flex align-items-center justify-content-between mb-3">\r
            <span class="font-semibold text-gray-600"><i class="pi pi-book mr-2"></i>Ders:</span>\r
            <span class="font-bold">{{ selectedSubject?.subject_name }}</span>\r
          </li>\r
          <li class="flex align-items-center justify-content-between mb-3">\r
            <span class="font-semibold text-gray-600"><i class="pi pi-tags mr-2"></i>Konular:</span>\r
            <span class="text-right font-bold">{{ selectedTopicsText }}</span>\r
          </li>\r
          <li class="flex align-items-center justify-content-between mb-3">\r
            <span class="font-semibold text-gray-600"><i class="pi pi-chart-bar mr-2"></i>Zorluk:</span>\r
            <span class="font-bold">{{ selectedDifficulty?.name }}</span>\r
          </li>\r
          <li class="flex align-items-center justify-content-between">\r
            <span class="font-semibold text-gray-600"><i class="pi pi-clock mr-2"></i>S\xFCreli mi?</span>\r
            <span class="font-bold">{{ isTimedQuiz ? 'Evet' : 'Hay\u0131r' }}</span>\r
          </li>\r
        </ul>\r
      </div>\r
      <ng-template pTemplate="footer">\r
        <div class="flex justify-content-between">\r
          <p-button label="Geri" icon="pi pi-arrow-left" (click)="currentView = 'settings'"\r
            styleClass="p-button-secondary"></p-button>\r
          <p-button label="Hadi Ba\u015Flayal\u0131m!" icon="pi pi-rocket" (click)="initiateQuiz()"></p-button>\r
        </div>\r
      </ng-template>\r
    </p-card>\r
  </div>\r
\r
  <!-- Quiz Ekran\u0131 -->\r
  <div *ngIf="quizStarted && !loading && !error && questions.length > 0 && !quizFinished" class="quiz-active-container">\r
    <!-- Ana Puan G\xF6stergesi -->\r
    <div class="main-score-display" [class.time-warning-pulse]="isTimedQuiz && timeLeft <= 5">\r
      <!-- Yeni Arka Plan \u0130lerleme \xC7ubu\u011Fu -->\r
      <div class="background-progress" *ngIf="isTimedQuiz" [style.width.%]="(timeLeft / questionTime) * 100"></div>\r
\r
      <!-- \u0130\xE7erik Katman\u0131 -->\r
      <div class="quiz-stat content-layer">\r
        <span class="stat-label">SORU</span>\r
        <span class="stat-value">{{ currentQuestionIndex + 1 }}/{{ questions.length }}</span>\r
      </div>\r
      <div class="score-container content-layer">\r
        <span class="score-label">PUAN</span>\r
        <span class="score-value">{{ currentScore }}</span>\r
      </div>\r
      <div class="quiz-stat content-layer" [class.invisible]="!isTimedQuiz">\r
        <span class="stat-label">S\xDCRE</span>\r
        <span class="stat-value">{{ timeLeft }}s</span>\r
      </div>\r
    </div>\r
\r
    <!-- Kombo Animasyonu -->\r
    <div *ngIf="showComboAnimation" class="combo-animation">\r
      <div class="combo-main">\r
        <i class="pi pi-bolt combo-icon"></i>\r
        <span class="combo-text">KOMBO!</span>\r
      </div>\r
      <span class="combo-points">+5 Puan</span>\r
    </div>\r
\r
    <!-- Quiz Sorular\u0131 (puan g\xF6stergesi kald\u0131r\u0131ld\u0131) -->\r
    <p-card class="w-full quiz-question-card">\r
      <!-- Header'daki progress bar kald\u0131r\u0131ld\u0131 -->\r
      <!-- Subtitle kald\u0131r\u0131ld\u0131, bilgiler yukar\u0131 ta\u015F\u0131nd\u0131 -->\r
      <ng-template pTemplate="title">\r
        {{ questions[currentQuestionIndex].question_text }}\r
      </ng-template>\r
\r
      <!-- Soru Resmi (varsa) -->\r
      <div *ngIf="questions[currentQuestionIndex].image_path" class="question-image my-3 text-center">\r
        <!-- Not: Resim yolu backend'den gelen veriye g\xF6re ayarlanmal\u0131d\u0131r. \xD6rn: 'assets/images/' + image_path -->\r
        <img [src]="'assets/images/' + questions[currentQuestionIndex].image_path" alt="Soru Resmi"\r
          style="max-width: 100%; max-height: 200px;">\r
      </div>\r
\r
      <!-- Yeni ve E\u011Flenceli Se\xE7enek Kartlar\u0131 -->\r
      <div class="grid options-grid my-4">\r
        <div class="col-12 md:col-6" *ngFor="let option of questions[currentQuestionIndex].options; let i = index">\r
          <div #optionCard class="option-card p-3 border-round-lg text-center transition-all transition-duration-200"\r
            [class.cursor-pointer]="!answerSubmitted" (click)="!answerSubmitted && selectOption(option.id)">\r
            <span class="option-prefix font-bold mr-3">{{ 'ABCD'[i] }}</span>\r
            <span class="text-lg">{{ option.option_text }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <ng-template pTemplate="footer">\r
        <div class="flex justify-content-between align-items-center gap-2">\r
          <p-button *ngIf="questions[currentQuestionIndex].hint" label="\u0130pucu" icon="pi pi-question-circle"\r
            (click)="showHint()" styleClass="p-button-help p-button-outlined"></p-button>\r
          <p-button label="Sonraki Soru" icon="pi pi-arrow-right" iconPos="right" (click)="nextQuestion()"\r
            [disabled]="!answerSubmitted">\r
          </p-button>\r
        </div>\r
      </ng-template>\r
    </p-card>\r
  </div>\r
\r
  <!-- Quiz Bitti -->\r
  <div *ngIf="quizFinished">\r
    <p-card>\r
      <ng-template pTemplate="content">\r
        <!-- Sonu\xE7 \xD6zeti -->\r
        <div *ngIf="!showReview">\r
          <div class="text-center mb-5">\r
            <h2 class="text-3xl font-bold mb-3">\r
              <i class="pi" [ngClass]="{\r
                  'pi-star-fill text-yellow-500': successPercentage >= 90,\r
                  'pi-thumbs-up-fill text-green-500': successPercentage >= 70 && successPercentage < 90,\r
                  'pi-check-circle text-blue-500': successPercentage >= 50 && successPercentage < 70,\r
                  'pi-times-circle text-red-500': successPercentage < 50\r
                }" style="font-size: 2.5rem;"></i>\r
              <span class="ml-3">\r
                <ng-container *ngIf="successPercentage >= 90">M\xFCkemmel \u0130\u015F!</ng-container>\r
                <ng-container *ngIf="successPercentage >= 70 && successPercentage < 90">Harika!</ng-container>\r
                <ng-container *ngIf="successPercentage >= 50 && successPercentage < 70">\u0130yi \u0130\u015F!</ng-container>\r
                <ng-container *ngIf="successPercentage < 50">Biraz Daha \xC7al\u0131\u015F!</ng-container>\r
              </span>\r
            </h2>\r
            <p class="text-lg text-gray-600">Quizi ba\u015Far\u0131yla tamamlad\u0131n\u0131z.</p>\r
\r
            <p class="text-4xl font-bold text-primary mt-4">Toplam Puan\u0131n\u0131z: {{ score }}</p>\r
          </div>\r
\r
          <div class="grid text-center mt-5">\r
            <div class="col-6">\r
              <div class="p-3 border-round-md bg-green-100">\r
                <span class="text-green-700 font-bold text-3xl">{{ correctAnswersCount }}</span>\r
                <p class="text-green-600 m-0 text-lg">Do\u011Fru Cevap</p>\r
              </div>\r
            </div>\r
            <div class="col-6">\r
              <div class="p-3 border-round-md bg-red-100">\r
                <span class="text-red-700 font-bold text-3xl">{{ wrongAnswersCount }}</span>\r
                <p class="text-red-600 m-0 text-lg">Yanl\u0131\u015F Cevap</p>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="mt-5 flex justify-content-center gap-2">\r
            <p-button label="Tekrar Oyna" icon="pi pi-refresh" (click)="resetQuiz()"\r
              styleClass="p-button-secondary"></p-button>\r
            <p-button label="Cevaplar\u0131 G\xF6zden Ge\xE7ir" icon="pi pi-search" (click)="showReview = true"></p-button>\r
          </div>\r
\r
          <!-- \xD6nceki performans \xF6zeti -->\r
          <div *ngIf="previousPerformance.length > 0" class="my-5">\r
            <p-divider align="center" styleClass="my-4">\r
              <span class="font-semibold">Bu Dersteki Son Quizlerin</span>\r
            </p-divider>\r
            <div class="grid">\r
              <div *ngFor="let prevQuiz of previousPerformance" class="col-12 md:col-4">\r
                <div class="previous-performance-card p-3 border-round h-full">\r
                  <div class="flex justify-content-between align-items-center mb-2">\r
                    <span class="font-bold text-lg">Quiz #{{ prevQuiz.quiz_id }}</span>\r
                    <span class="text-sm text-color-secondary">{{ prevQuiz.created_at | date:'dd.MM.yy' }}</span>\r
                  </div>\r
                  <div class="flex flex-wrap gap-2 mb-3 topic-icons-container">\r
                    <i *ngFor="let icon of prevQuiz.topic_icons" class="pi {{ icon }} text-xl"\r
                      [pTooltip]="prevQuiz.topic_names" tooltipPosition="bottom"></i>\r
                  </div>\r
                  <div class="flex justify-content-around">\r
                    <span class="text-green-600 font-bold"><i class="pi pi-check-circle mr-1"></i> {{\r
                      prevQuiz.correct_count }}</span>\r
                    <span class="text-red-600 font-bold"><i class="pi pi-times-circle mr-1"></i> {{\r
                      prevQuiz.wrong_count }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Sosyal Medya Payla\u015F\u0131m Butonlar\u0131 -->\r
          <div class="mt-5 text-center">\r
            <p-divider align="center" styleClass="my-4"><span class="font-semibold">Sonucunu Payla\u015F</span></p-divider>\r
            <div class="flex justify-content-center gap-3">\r
              <p-button icon="pi pi-twitter" (click)="shareOn('twitter')" styleClass="p-button-rounded p-button-info"\r
                pTooltip="Twitter'da Payla\u015F" tooltipPosition="bottom"></p-button>\r
              <p-button icon="pi pi-facebook" (click)="shareOn('facebook')"\r
                styleClass="p-button-rounded p-button-primary" pTooltip="Facebook'ta Payla\u015F"\r
                tooltipPosition="bottom"></p-button>\r
              <p-button icon="pi pi-whatsapp" (click)="shareOn('whatsapp')"\r
                styleClass="p-button-rounded p-button-success" pTooltip="WhatsApp'ta Payla\u015F"\r
                tooltipPosition="bottom"></p-button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Cevaplar\u0131 G\xF6zden Ge\xE7irme Ekran\u0131 -->\r
        <div *ngIf="showReview">\r
          <div class="review-sticky-header">\r
            <div class="flex justify-content-start mb-2">\r
              <p-button label="Sonu\xE7lara D\xF6n" icon="pi pi-arrow-left" (click)="showReview = false"\r
                styleClass="p-button-text"></p-button>\r
            </div>\r
            <p-divider align="center" styleClass="my-4">\r
              <span class="font-semibold">Cevaplar\u0131n Analizi</span>\r
            </p-divider>\r
          </div>\r
          <ul class="list-none p-0 m-0">\r
            <li *ngFor="let question of questions; let i = index"\r
              class="question-review-card mb-4 p-3 border-1 surface-border border-round" [ngClass]="{\r
                'bg-green-50': getAnswerForQuestion(question.id).isCorrect, \r
                'bg-red-50': !getAnswerForQuestion(question.id).isCorrect\r
              }">\r
              <!-- Watermark \u0130konu -->\r
              <i class="watermark-icon pi" [ngClass]="{\r
                  'pi-check text-green-500': getAnswerForQuestion(question.id).isCorrect,\r
                  'pi-times text-red-500': !getAnswerForQuestion(question.id).isCorrect\r
                }"></i>\r
              <!-- \u0130\xE7erik -->\r
              <div class="relative z-1">\r
                <p class="font-semibold m-0 mb-2">{{ i + 1 }}. {{ question.question_text }}</p>\r
                <p class="m-0">Senin Cevab\u0131n: <span class="font-bold">{{\r
                    getAnswerForQuestion(question.id).userAnswerText }}</span></p>\r
                <p *ngIf="!getAnswerForQuestion(question.id).isCorrect" class="m-0 mt-1">\r
                  Do\u011Fru Cevap: <span class="font-bold">{{ question.options[question.correctOptionId].option_text\r
                    }}</span>\r
                </p>\r
              </div>\r
            </li>\r
          </ul>\r
        </div>\r
      </ng-template>\r
    </p-card>\r
  </div>\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/quiz/quiz.component.scss */\n:host ::ng-deep {\n  --local-green-100: #C8E6C9;\n  --local-green-500: #4CAF50;\n  --local-green-700: #388E3C;\n  --local-red-100: #FFCDD2;\n  --local-yellow-500: #FFC107;\n  --local-red-500: #F44336;\n  --local-red-700: #D32F2F;\n}\n:host ::ng-deep .category-section {\n  margin-top: 2rem;\n  gap: 1.5rem;\n}\n:host ::ng-deep .quiz-step-header {\n  background: rgba(var(--surface-a-rgb), 0.7);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  padding: 1.5rem;\n  border-radius: 12px;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  text-align: center;\n  margin-top: 2rem;\n  gap: 1.5rem;\n}\n:host ::ng-deep .category-card {\n  background: rgba(var(--surface-a-rgb), 0.7);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  padding: 1.5rem;\n  border-radius: 12px;\n  border-bottom: 5px solid;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n:host ::ng-deep .category-card:hover {\n  transform: translateY(-10px) perspective(1000px) rotateX(5deg);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n}\n:host ::ng-deep .category-icon {\n  font-size: 3rem;\n  margin-bottom: 0.75rem;\n}\n:host ::ng-deep .category-name {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-color);\n}\n:host ::ng-deep .category-card.selected-card {\n  background-color: rgba(var(--local-green-100-rgb), 0.85);\n  border-color: var(--local-green-500) !important;\n  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);\n  transform: translateY(-5px);\n}\n:host ::ng-deep .selected-watermark {\n  position: absolute;\n  font-size: 5rem;\n  opacity: 0.1;\n  right: 0.5rem;\n  bottom: 0.5rem;\n  transform: rotate(-15deg);\n  pointer-events: none;\n  color: var(--local-green-700);\n}\n:host ::ng-deep .timed-warning-text {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n:host ::ng-deep .quiz-container {\n}\n:host ::ng-deep .quiz-container .option-card {\n  background-color: var(--surface-card);\n  border: 2px solid var(--surface-d);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease-in-out;\n}\n:host ::ng-deep .quiz-container .option-card:hover {\n  transform: translateY(-4px);\n  border-color: var(--primary-400);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n:host ::ng-deep .quiz-container .option-card.selected-option {\n  border-color: var(--primary-color);\n  background-color: var(--primary-color);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px var(--primary-100);\n}\n:host ::ng-deep .quiz-container .option-card.selected-option span {\n  color: var(--primary-color-text);\n}\n:host ::ng-deep .quiz-container .option-prefix {\n  border: 2px solid var(--surface-border);\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n:host ::ng-deep .quiz-container .p-card-title {\n  font-size: 1.5rem;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(-5px);\n  }\n  20%, 40%, 60%, 80% {\n    transform: translateX(5px);\n  }\n}\n:host ::ng-deep .question-review-card {\n  position: relative;\n  overflow: hidden;\n}\n:host ::ng-deep .question-review-card .watermark-icon {\n  position: absolute;\n  font-size: 8rem;\n  opacity: 0.08;\n  right: 1rem;\n  bottom: -1rem;\n  transform: rotate(-15deg);\n  pointer-events: none;\n}\n:host ::ng-deep .review-sticky-header {\n  position: sticky;\n  top: 4rem;\n  z-index: 100;\n  background-color: var(--surface-card);\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n:host ::ng-deep .quiz-question-card {\n  border: 1px solid var(--surface-border) !important;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08) !important;\n  border-radius: var(--border-radius) !important;\n}\n:host ::ng-deep .quiz-active-container {\n  position: relative;\n  width: 100%;\n  padding-top: 0rem;\n}\n:host ::ng-deep .main-score-display {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10;\n  position: relative;\n  background-color: var(--surface-card);\n  padding: 0.75rem;\n  border-radius: 1.5rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border: 2px solid var(--primary-color);\n  display: inline-flex;\n  align-items: center;\n  overflow: hidden;\n}\n:host ::ng-deep .main-score-display .background-progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background-color: #C8E6C9;\n  transition: width 1s linear;\n  z-index: 1;\n}\n:host ::ng-deep .main-score-display.time-warning-pulse {\n  animation: pulse-red 1s infinite;\n}\n:host ::ng-deep .main-score-display.time-warning-pulse .background-progress {\n  background-color: #FFCDD2;\n}\n:host ::ng-deep .main-score-display .content-layer {\n  position: relative;\n  z-index: 2;\n}\n:host ::ng-deep .main-score-display .score-container.content-layer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 1.5rem;\n  border-left: 1px solid var(--surface-border);\n  border-right: 1px solid var(--surface-border);\n}\n:host ::ng-deep .main-score-display .score-container.content-layer .score-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  line-height: 1;\n}\n:host ::ng-deep .main-score-display .score-container.content-layer .score-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-color-secondary);\n  letter-spacing: 1px;\n}\n:host ::ng-deep .main-score-display .quiz-stat.content-layer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 1.5rem;\n}\n:host ::ng-deep .main-score-display .quiz-stat.content-layer .stat-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-color-secondary);\n  letter-spacing: 1px;\n}\n:host ::ng-deep .main-score-display .quiz-stat.content-layer .stat-value {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n:host ::ng-deep .combo-animation {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1052;\n  pointer-events: none;\n  opacity: 0;\n  animation: combo-bounce-in-out 2s ease-in-out forwards;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n}\n:host ::ng-deep .combo-main {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n:host ::ng-deep .combo-icon {\n  font-size: 4rem;\n  background:\n    linear-gradient(\n      45deg,\n      #ffeb3b,\n      #ffc107);\n  -webkit-text-fill-color: transparent;\n  filter: drop-shadow(0 2px 4px rgba(255, 193, 7, 0.5));\n}\n:host ::ng-deep .combo-text {\n  font-size: 3.5rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      45deg,\n      var(--primary-400),\n      var(--primary-600));\n  -webkit-text-fill-color: transparent;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n:host ::ng-deep .combo-points {\n  font-size: 2rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      45deg,\n      var(--green-400),\n      var(--green-600));\n  -webkit-text-fill-color: transparent;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n}\n@keyframes combo-bounce-in-out {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.3);\n  }\n  25% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1.3);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.1);\n  }\n  75% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n  100% {\n    opacity: 0;\n    transform: translate(-50%, -40vh) scale(0.2);\n  }\n}\n@keyframes pulse-red {\n  0% {\n    box-shadow: 0 4px 12px rgba(244, 67, 54, 0.2), 0 0 0 0 rgba(244, 67, 54, 0.4);\n    border-color: var(--red-500);\n  }\n  70% {\n    box-shadow: 0 4px 12px rgba(244, 67, 54, 0.4), 0 0 0 10px rgba(244, 67, 54, 0);\n  }\n  100% {\n    box-shadow: 0 4px 12px rgba(244, 67, 54, 0.2), 0 0 0 0 rgba(244, 67, 54, 0);\n    border-color: var(--red-500);\n  }\n}\n:host ::ng-deep .previous-performance-card {\n  background-color: var(--surface-100);\n  border: 1px solid var(--surface-border);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n:host ::ng-deep .previous-performance-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n}\n:host ::ng-deep .previous-performance-card .topic-icons-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n}\n:host ::ng-deep .previous-performance-card .topic-icons-container .pi {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=quiz.component.css.map */\n'] }]
  }], () => [{ type: QuizService }, { type: MessageService }, { type: ActivatedRoute }, { type: Renderer2 }, { type: ElementRef }, { type: Router }, { type: AuthService }], { optionCards: [{
    type: ViewChildren,
    args: ["optionCard"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizComponent, { className: "QuizComponent", filePath: "src/app/pages/quiz/quiz.component.ts", lineNumber: 47 });
})();
export {
  QuizComponent
};
//# sourceMappingURL=chunk-HQSACXPC.js.map
