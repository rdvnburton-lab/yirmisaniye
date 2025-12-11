import{a as Bt,c as Tt}from"./chunk-XEILQOEW.js";import{Ea as wt,Fa as I,G as at,La as F,Oa as C,Pa as f,Qa as l,Ra as St,S as K,Sa as Dt,V as N,ka as V,l as xt,m as Ct,ma as _t,n as kt,r as T,ua as lt,v as It}from"./chunk-IGLYEISI.js";import{$a as B,Ab as h,Bb as U,Cb as G,Da as u,Db as A,Fb as O,Gb as L,Hb as et,Ia as H,Ib as mt,Kb as vt,Lb as q,Nb as m,Ob as Z,P as D,Pb as J,Q as E,S as v,U as i,Va as k,Wa as P,Wb as x,Xa as w,Za as p,Zb as it,_a as y,aa as $,da as ct,gb as S,kc as rt,lb as d,lc as j,ma as b,mb as X,nb as Y,nc as g,oa as bt,ob as M,oc as dt,pb as tt,qb as nt,rb as ot,sa as pt,sb as R,tb as Q,tc as a,ub as gt,uc as yt,wb as ht,zb as ft}from"./chunk-GHXVRSLK.js";var Et=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var qt=`
    ${Et}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Zt={root:({instance:t})=>{let r=typeof t.value=="function"?t.value():t.value,n=typeof t.size=="function"?t.size():t.size,e=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,o=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":_t(r)&&String(r).length===1,"p-badge-dot":V(r),"p-badge-sm":n==="small"||e==="small","p-badge-lg":n==="large"||e==="large","p-badge-xl":n==="xlarge"||e==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},Pt=(()=>{class t extends F{name="badge";style=qt;classes=Zt;static \u0275fac=(()=>{let n;return function(o){return(n||(n=b(t)))(o||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var Nt=new v("BADGE_INSTANCE");var st=(()=>{class t extends f{$pcBadge=i(Nt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=g();badgeSize=g();size=g();severity=g();value=g();badgeDisabled=g(!1,{transform:a});_componentStyle=i(Pt);static \u0275fac=(()=>{let n;return function(o){return(n||(n=b(t)))(o||t)}})();static \u0275cmp=k({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(e,o){e&2&&(m(o.cn(o.cx("root"),o.styleClass())),vt("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[x([Pt,{provide:Nt,useExisting:t},{provide:C,useExisting:t}]),y([l]),p],decls:1,vars:1,template:function(e,o){e&1&&Z(0),e&2&&J(o.value())},dependencies:[T,I,St],encapsulation:2,changeDetection:0})}return t})(),zt=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=P({type:t});static \u0275inj=E({imports:[st,I,I]})}return t})();var Mt=(()=>{class t extends f{autofocus=!1;focused=!1;platformId=i(pt);document=i(ct);host=i(bt);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){It(this.platformId)&&this.autofocus&&setTimeout(()=>{let n=Dt.getFocusableElements(this.host?.nativeElement);n.length===0&&this.host.nativeElement.focus(),n.length>0&&n[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let n;return function(o){return(n||(n=b(t)))(o||t)}})();static \u0275dir=w({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[p]})}return t})();var Kt=["*"],Wt={root:"p-fluid"},At=(()=>{class t extends F{name="fluid";classes=Wt;static \u0275fac=(()=>{let n;return function(o){return(n||(n=b(t)))(o||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var Ot=new v("FLUID_INSTANCE"),ut=(()=>{class t extends f{$pcFluid=i(Ot,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=i(At);static \u0275fac=(()=>{let n;return function(o){return(n||(n=b(t)))(o||t)}})();static \u0275cmp=k({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(e,o){e&2&&m(o.cx("root"))},features:[x([At,{provide:Ot,useExisting:t},{provide:C,useExisting:t}]),y([l]),p],ngContentSelectors:Kt,decls:1,vars:0,template:function(e,o){e&1&&(U(),G(0))},dependencies:[T],encapsulation:2,changeDetection:0})}return t})();var Xt=["data-p-icon","spinner"],Lt=(()=>{class t extends Tt{pathId;onInit(){this.pathId="url(#"+lt()+")"}static \u0275fac=(()=>{let n;return function(o){return(n||(n=b(t)))(o||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","spinner"]],features:[p],attrs:Xt,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(e,o){e&1&&($(),tt(0,"g"),ot(1,"path",0),nt(),tt(2,"defs")(3,"clipPath",1),ot(4,"rect",2),nt()()),e&2&&(S("clip-path",o.pathId),u(3),ht("id",o.pathId))},encapsulation:2})}return t})();var jt=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Yt=["content"],tn=["loadingicon"],nn=["icon"],on=["*"],Gt=(t,r)=>({class:t,pt:r});function en(t,r){t&1&&gt(0)}function rn(t,r){if(t&1&&M(0,"span",7),t&2){let n=h(3);m(n.cn(n.cx("loadingIcon"),"pi-spin",n.loadingIcon)),d("pBind",n.ptm("loadingIcon")),S("aria-hidden",!0)}}function dn(t,r){if(t&1&&($(),M(0,"svg",8)),t&2){let n=h(3);m(n.cn(n.cx("loadingIcon"),n.spinnerIconClass())),d("pBind",n.ptm("loadingIcon"))("spin",!0),S("aria-hidden",!0)}}function an(t,r){if(t&1&&(R(0),B(1,rn,1,4,"span",3)(2,dn,1,5,"svg",6),Q()),t&2){let n=h(2);u(),d("ngIf",n.loadingIcon),u(),d("ngIf",!n.loadingIcon)}}function ln(t,r){}function sn(t,r){if(t&1&&B(0,ln,0,0,"ng-template",9),t&2){let n=h(2);d("ngIf",n.loadingIconTemplate||n._loadingIconTemplate)}}function un(t,r){if(t&1&&(R(0),B(1,an,3,2,"ng-container",2)(2,sn,1,1,null,5),Q()),t&2){let n=h();u(),d("ngIf",!n.loadingIconTemplate&&!n._loadingIconTemplate),u(),d("ngTemplateOutlet",n.loadingIconTemplate||n._loadingIconTemplate)("ngTemplateOutletContext",it(3,Gt,n.cx("loadingIcon"),n.ptm("loadingIcon")))}}function cn(t,r){if(t&1&&M(0,"span",7),t&2){let n=h(2);m(n.cn("icon",n.iconClass())),d("pBind",n.ptm("icon"))}}function bn(t,r){}function pn(t,r){if(t&1&&B(0,bn,0,0,"ng-template",9),t&2){let n=h(2);d("ngIf",!n.icon&&(n.iconTemplate||n._iconTemplate))}}function gn(t,r){if(t&1&&(R(0),B(1,cn,1,3,"span",3)(2,pn,1,1,null,5),Q()),t&2){let n=h();u(),d("ngIf",n.icon&&!n.iconTemplate&&!n._iconTemplate),u(),d("ngTemplateOutlet",n.iconTemplate||n._iconTemplate)("ngTemplateOutletContext",it(3,Gt,n.cx("icon"),n.ptm("icon")))}}function hn(t,r){if(t&1&&(X(0,"span",7),Z(1),Y()),t&2){let n=h();m(n.cx("label")),d("pBind",n.ptm("label")),S("aria-hidden",n.icon&&!n.label),u(),J(n.label)}}function fn(t,r){if(t&1&&M(0,"p-badge",10),t&2){let n=h();d("value",n.badge)("severity",n.badgeSeverity)("pt",n.ptm("pcBadge"))}}var mn={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,r])=>!!r).reduce((r,[n])=>r+` ${n}`,"p-button-loading-icon"),label:"p-button-label"},z=(()=>{class t extends F{name="button";style=jt;classes=mn;static \u0275fac=(()=>{let n;return function(o){return(n||(n=b(t)))(o||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var Vt=new v("BUTTON_INSTANCE"),$t=new v("BUTTON_DIRECTIVE_INSTANCE"),Ht=new v("BUTTON_LABEL_INSTANCE"),Rt=new v("BUTTON_ICON_INSTANCE"),_={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Qt=(()=>{class t extends f{ptButtonLabel=g();$pcButtonLabel=i(Ht,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(l,{self:!0});constructor(){super(),j(()=>{this.ptButtonLabel()&&this.directivePT.set(this.ptButtonLabel())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(e){return new(e||t)};static \u0275dir=w({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(e,o){e&2&&q("p-button-label",!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"]},features:[x([z,{provide:Ht,useExisting:t},{provide:C,useExisting:t}]),y([l]),p]})}return t})(),Ut=(()=>{class t extends f{ptButtonIcon=g();$pcButtonIcon=i(Rt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(l,{self:!0});constructor(){super(),j(()=>{this.ptButtonIcon()&&this.directivePT.set(this.ptButtonIcon())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(e){return new(e||t)};static \u0275dir=w({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(e,o){e&2&&q("p-button-icon",!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"]},features:[x([z,{provide:Rt,useExisting:t},{provide:C,useExisting:t}]),y([l]),p]})}return t})(),No=(()=>{class t extends f{$pcButtonDirective=i($t,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(l,{self:!0});_componentStyle=i(z);ptButtonDirective=g();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),j(()=>{this.ptButtonDirective()&&this.directivePT.set(this.ptButtonDirective())})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=g(void 0,{transform:a});iconSignal=dt(Ut);labelSignal=dt(Qt);isIconOnly=rt(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(_);pcFluid=i(ut,{optional:!0,host:!0,skipSelf:!0});isTextButton=rt(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(n){this._label=n,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(n){this._icon=n,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(n){this._loading=n,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(n){this._buttonProps=n,n&&typeof n=="object"&&Object.entries(n).forEach(([e,o])=>this[`_${e}`]!==o&&(this[`_${e}`]=o))}get severity(){return this._severity}set severity(n){this._severity=n,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){at(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let n=[_.button,_.component];return this.icon&&!this.label&&V(this.htmlElement.textContent)&&n.push(_.iconOnly),this.loading&&(n.push(_.disabled,_.loading),!this.icon&&this.label&&n.push(_.labelOnly),this.icon&&!this.label&&!V(this.htmlElement.textContent)&&n.push(_.iconOnly)),this.text&&n.push("p-button-text"),this.severity&&n.push(`p-button-${this.severity}`),this.plain&&n.push("p-button-plain"),this.raised&&n.push("p-button-raised"),this.size&&n.push(`p-button-${this.size}`),this.outlined&&n.push("p-button-outlined"),this.rounded&&n.push("p-button-rounded"),this.size==="small"&&n.push("p-button-sm"),this.size==="large"&&n.push("p-button-lg"),this.hasFluid&&n.push("p-button-fluid"),n}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let n=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...n)}removeExistingSeverityClass(){let n=["success","info","warn","danger","help","primary","secondary","contrast"],e=this.htmlElement.classList.value.split(" ").find(o=>n.some(s=>o===`p-button-${s}`));e&&this.htmlElement.classList.remove(e)}createLabel(){if(!N(this.htmlElement,".p-button-label")&&this.label){let e=K("span",{class:this.cx("label"),"p-bind":this.ptm("label"),"aria-hidden":this.icon&&!this.label?"true":null});e.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(e)}}createIcon(){if(!N(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let e=this.label?"p-button-icon-"+this.iconPos:null,o=this.getIconClass(),s=K("span",{class:this.cn(this.cx("icon"),e,o),"aria-hidden":"true","p-bind":this.ptm("icon")});!this.loadingIcon&&this.loading&&(s.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(s,this.htmlElement.firstChild)}}updateLabel(){let n=N(this.htmlElement,".p-button-label");if(!this.label){n&&this.htmlElement.removeChild(n);return}n?n.textContent=this.label:this.createLabel()}updateIcon(){let n=N(this.htmlElement,".p-button-icon"),e=N(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&n?n.innerHTML=this.spinnerIcon:n?.innerHTML&&(n.innerHTML=""),n?this.iconPos?n.className="p-button-icon "+(e?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():n.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(e){return new(e||t)};static \u0275dir=w({type:t,selectors:[["","pButton",""]],contentQueries:function(e,o,s){e&1&&(et(s,o.iconSignal,Ut,5),et(s,o.labelSignal,Qt,5)),e&2&&mt(2)},hostVars:4,hostBindings:function(e,o){e&2&&q("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],hostName:"hostName",text:[2,"text","text",a],plain:[2,"plain","plain",a],raised:[2,"raised","raised",a],size:"size",outlined:[2,"outlined","outlined",a],rounded:[2,"rounded","rounded",a],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[x([z,{provide:$t,useExisting:t},{provide:C,useExisting:t}]),y([l]),p]})}return t})(),vn=(()=>{class t extends f{hostName="";$pcButton=i(Vt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(l,{self:!0});_componentStyle=i(z);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=g(void 0,{transform:a});onClick=new H;onFocus=new H;onBlur=new H;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=i(ut,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"content":this._contentTemplate=n.template;break;case"icon":this._iconTemplate=n.template;break;case"loadingicon":this._loadingIconTemplate=n.template;break;default:this._contentTemplate=n.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,n])=>!!n).reduce((n,[e])=>n+` ${e}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let n;return function(o){return(n||(n=b(t)))(o||t)}})();static \u0275cmp=k({type:t,selectors:[["p-button"]],contentQueries:function(e,o,s){if(e&1&&(A(s,Yt,5),A(s,tn,5),A(s,nn,5),A(s,wt,4)),e&2){let c;O(c=L())&&(o.contentTemplate=c.first),O(c=L())&&(o.loadingIconTemplate=c.first),O(c=L())&&(o.iconTemplate=c.first),O(c=L())&&(o.templates=c)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",a],raised:[2,"raised","raised",a],rounded:[2,"rounded","rounded",a],text:[2,"text","text",a],plain:[2,"plain","plain",a],outlined:[2,"outlined","outlined",a],link:[2,"link","link",a],tabindex:[2,"tabindex","tabindex",yt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",a],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",a],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[x([z,{provide:Vt,useExisting:t},{provide:C,useExisting:t}]),y([l]),p],ngContentSelectors:on,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt"]],template:function(e,o){e&1&&(U(),X(0,"button",0),ft("click",function(c){return o.onClick.emit(c)})("focus",function(c){return o.onFocus.emit(c)})("blur",function(c){return o.onBlur.emit(c)}),G(1),B(2,en,1,0,"ng-container",1)(3,un,3,6,"ng-container",2)(4,gn,3,6,"ng-container",2)(5,hn,2,5,"span",3)(6,fn,1,3,"p-badge",4),Y()),e&2&&(m(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),d("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),S("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),u(2),d("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),u(),d("ngIf",o.loading),u(),d("ngIf",!o.loading),u(),d("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),u(),d("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[T,xt,kt,Ct,Bt,Mt,Lt,zt,st,I,l],encapsulation:2,changeDetection:0})}return t})(),Fo=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=P({type:t});static \u0275inj=E({imports:[T,vn,I,I]})}return t})();export{Lt as a,Mt as b,st as c,zt as d,ut as e,No as f,vn as g,Fo as h};
