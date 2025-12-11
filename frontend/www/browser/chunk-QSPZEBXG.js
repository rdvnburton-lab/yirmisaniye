import{a as X,d as Ee,e as De,g as Ne,m as Fe,o as Se}from"./chunk-2QNRKEEY.js";import{a as we}from"./chunk-V3RLZPWU.js";import{a as Be,c as Me}from"./chunk-XEILQOEW.js";import{Ea as U,Fa as f,La as E,Oa as D,Pa as ce,Qa as c,Ra as N,i as _e,l as Te,n as K,na as ae,oa as z,pa as Ie,r as w}from"./chunk-IGLYEISI.js";import{$ as P,$a as y,Ab as b,Bb as ne,Cb as oe,Da as h,Db as B,Eb as xe,Fb as v,Gb as C,Ia as S,Mb as ke,Nb as u,O as j,Ob as ye,P as _,Pb as ve,Q as F,S as T,U as d,Va as k,Wa as V,Wb as M,Xa as he,Yb as pe,Za as g,Zb as ie,_ as $,_a as I,aa as J,gb as A,gc as Ce,ha as ee,hb as R,ib as H,jb as ge,kb as fe,kc as le,lb as r,ma as s,mb as L,nb as O,nc as m,ob as Q,rb as me,sb as se,tb as ue,tc as p,ub as W,uc as G,vb as te,zb as q}from"./chunk-GHXVRSLK.js";var Z=(()=>{class t extends Se{required=m(void 0,{transform:p});invalid=m(void 0,{transform:p});disabled=m(void 0,{transform:p});name=m();_disabled=ee(!1);$disabled=le(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,o){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275dir=he({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[g]})}return t})();var Ve=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var We=["icon"],et=["content"],ze=t=>({$implicit:t});function tt(t,a){t&1&&W(0)}function nt(t,a){if(t&1&&Q(0,"span",0),t&2){let e=b(3);u(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),r("pBind",e.ptm("icon"))}}function ot(t,a){if(t&1&&R(0,nt,1,3,"span",2),t&2){let e=b(2);H(e.onIcon||e.offIcon?0:-1)}}function it(t,a){t&1&&W(0)}function lt(t,a){if(t&1&&y(0,it,1,0,"ng-container",1),t&2){let e=b(2);r("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",pe(2,ze,e.checked))}}function at(t,a){if(t&1&&(R(0,ot,1,1)(1,lt,1,4,"ng-container"),L(2,"span",0),ye(3),O()),t&2){let e=b();H(e.iconTemplate?1:0),h(2),u(e.cx("label")),r("pBind",e.ptm("label")),h(),ve(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var ct=`
    ${Ve}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,rt={root:({instance:t})=>["p-togglebutton p-component",{"p-togglebutton-checked":t.checked,"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large","p-togglebutton-fluid":t.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},Le=(()=>{class t extends E{name="togglebutton";style=ct;classes=rt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();var Oe=new T("TOGGLEBUTTON_INSTANCE"),dt={provide:X,useExisting:j(()=>be),multi:!0},be=(()=>{class t extends Z{$pcToggleButton=d(Oe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=m(void 0,{transform:p});onChange=new S;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=d(Le);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,o){this.checked=e,o(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(o,n,i){if(o&1&&(B(i,We,4),B(i,et,4),B(i,U,4)),o&2){let l;v(l=C())&&(n.iconTemplate=l.first),v(l=C())&&(n.contentTemplate=l.first),v(l=C())&&(n.templates=l)}},hostVars:8,hostBindings:function(o,n){o&1&&q("keydown",function(l){return n.onKeyDown(l)})("click",function(l){return n.toggle(l)}),o&2&&(A("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("aria-pressed",n.checked?"true":"false")("role","button")("tabindex",n.tabindex!==void 0?n.tabindex:n.$disabled()?-1:0)("data-pc-name","togglebutton"),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",G],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",p],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[M([dt,Le,{provide:Oe,useExisting:t},{provide:D,useExisting:t}]),I([Be,c]),g],decls:3,vars:8,consts:[[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind"]],template:function(o,n){o&1&&(L(0,"span",0),y(1,tt,1,0,"ng-container",1),R(2,at,4,5),O()),o&2&&(u(n.cx("content")),r("pBind",n.ptm("content")),h(),r("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",pe(6,ze,n.checked)),h(),H(n.contentTemplate?-1:2))},dependencies:[w,K,f,N,c],encapsulation:2,changeDetection:0})}return t})();var je=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var st=["item"],ut=(t,a)=>({$implicit:t,index:a});function pt(t,a){return this.getOptionLabel(a)}function bt(t,a){t&1&&W(0)}function ht(t,a){if(t&1&&y(0,bt,1,0,"ng-container",3),t&2){let e=b(2),o=e.$implicit,n=e.$index,i=b();r("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",ie(2,ut,o,n))}}function gt(t,a){t&1&&y(0,ht,1,5,"ng-template",null,0,Ce)}function ft(t,a){if(t&1){let e=te();L(0,"p-togglebutton",2),q("onChange",function(n){let i=$(e),l=i.$implicit,x=i.$index,de=b();return P(de.onOptionSelect(n,l,x))}),R(1,gt,2,0),O()}if(t&2){let e=a.$implicit,o=b();r("autofocus",o.autofocus)("styleClass",o.styleClass)("ngModel",o.isSelected(e))("onLabel",o.getOptionLabel(e))("offLabel",o.getOptionLabel(e))("disabled",o.$disabled()||o.isOptionDisabled(e))("allowEmpty",o.getAllowEmpty())("size",o.size())("fluid",o.fluid())("pt",o.ptm("pcToggleButton")),h(),H(o.itemTemplate||o._itemTemplate?1:-1)}}var mt=`
    ${je}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,xt={root:({instance:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid(),"p-selectbutton-fluid":t.fluid()}]},$e=(()=>{class t extends E{name="selectbutton";style=mt;classes=xt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();var Pe=new T("SELECTBUTTON_INSTANCE"),kt={provide:X,useExisting:j(()=>Re),multi:!0},Re=(()=>{class t extends Z{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=m();fluid=m(void 0,{transform:p});onOptionClick=new S;onChange=new S;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=d($e);$pcSelectButton=d(Pe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?ae(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?ae(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?ae(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,o,n){if(this.$disabled()||this.isOptionDisabled(o))return;let i=this.isSelected(o);if(i&&this.unselectable)return;let l=this.getOptionValue(o),x;if(this.multiple)i?x=this.value.filter(de=>!z(de,l,this.equalityKey||void 0)):x=this.value?[...this.value,l]:[l];else{if(i&&!this.allowEmpty)return;x=i?null:l}this.focusedIndex=n,this.value=x,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:o,index:n})}changeTabIndexes(e,o){let n,i;for(let l=0;l<=this.el.nativeElement.children.length-1;l++)this.el.nativeElement.children[l].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[l],index:l});o==="prev"?n.index===0?i=this.el.nativeElement.children.length-1:i=n.index-1:n.index===this.el.nativeElement.children.length-1?i=0:i=n.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(e,o){this.focusedIndex=o}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(o=>!z(o,this.getOptionValue(e),this.dataKey))}isSelected(e){let o=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(z(i,n,this.dataKey)){o=!0;break}}}else o=z(this.getOptionValue(e),this.value,this.equalityKey||void 0);return o}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}writeControlValue(e,o){this.value=e,o(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(o,n,i){if(o&1&&(B(i,st,4),B(i,U,4)),o&2){let l;v(l=C())&&(n.itemTemplate=l.first),v(l=C())&&(n.templates=l)}},hostVars:4,hostBindings:function(o,n){o&2&&(A("role","group")("aria-labelledby",n.ariaLabelledBy),u(n.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",p],tabindex:[2,"tabindex","tabindex",G],multiple:[2,"multiple","multiple",p],allowEmpty:[2,"allowEmpty","allowEmpty",p],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",p],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[M([kt,$e,{provide:Pe,useExisting:t},{provide:D,useExisting:t}]),I([c]),g],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,n){o&1&&ge(0,ft,2,11,"p-togglebutton",1,pt,!0),o&2&&fe(n.options)},dependencies:[be,Fe,De,Ne,w,K,f,N],encapsulation:2,changeDetection:0})}return t})(),Ln=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=V({type:t});static \u0275inj=F({imports:[Re,f,f]})}return t})();var yt=["data-p-icon","minus"],He=(()=>{class t extends Me{static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","minus"]],features:[g],attrs:yt,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(o,n){o&1&&(J(),me(0,"path",0))},encapsulation:2})}return t})();var Qe=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var vt=["icon"],Ct=["input"],_t=(t,a)=>({checked:t,class:a});function Tt(t,a){if(t&1&&Q(0,"span",8),t&2){let e=b(3);u(e.cx("icon")),r("ngClass",e.checkboxIcon)("pBind",e.ptm("icon"))}}function It(t,a){if(t&1&&(J(),Q(0,"svg",9)),t&2){let e=b(3);u(e.cx("icon")),r("pBind",e.ptm("icon"))}}function Bt(t,a){if(t&1&&(se(0),y(1,Tt,1,4,"span",6)(2,It,1,3,"svg",7),ue()),t&2){let e=b(2);h(),r("ngIf",e.checkboxIcon),h(),r("ngIf",!e.checkboxIcon)}}function Mt(t,a){if(t&1&&(J(),Q(0,"svg",10)),t&2){let e=b(2);u(e.cx("icon")),r("pBind",e.ptm("icon"))}}function wt(t,a){if(t&1&&(se(0),y(1,Bt,3,2,"ng-container",3)(2,Mt,1,3,"svg",5),ue()),t&2){let e=b();h(),r("ngIf",e.checked),h(),r("ngIf",e._indeterminate())}}function Et(t,a){}function Dt(t,a){t&1&&y(0,Et,0,0,"ng-template")}var Nt=`
    ${Qe}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Ft={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},qe=(()=>{class t extends E{name="checkbox";style=Nt;classes=Ft;static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();var Ge=new T("CHECKBOX_INSTANCE"),St={provide:X,useExisting:j(()=>Ke),multi:!0},Ke=(()=>{class t extends Z{hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=m();size=m();onChange=new S;onFocus=new S;onBlur=new S;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:Ie(this.value,this.modelValue())}_indeterminate=ee(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=d(qe);bindDirectiveInstance=d(c,{self:!0});$pcCheckbox=d(Ge,{optional:!0,skipSelf:!0})??void 0;$variant=le(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(e){let o,n=this.injector.get(Ee,null,{optional:!0,self:!0}),i=n&&!this.formControl?n.value:this.modelValue();this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(o),this.onModelChange(o)):(this.checked||this._indeterminate()?o=i.filter(l=>!z(l,this.value)):o=i?[...i,this.value]:[this.value],this.onModelChange(o),this.writeModelValue(o),this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,o){o(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,n,i){if(o&1&&(B(i,vt,4),B(i,U,4)),o&2){let l;v(l=C())&&(n.checkboxIconTemplate=l.first),v(l=C())&&(n.templates=l)}},viewQuery:function(o,n){if(o&1&&xe(Ct,5),o&2){let i;v(i=C())&&(n.inputViewChild=i.first)}},hostVars:5,hostBindings:function(o,n){o&2&&(A("data-p-highlight",n.checked)("data-p-checked",n.checked)("data-p-disabled",n.$disabled()),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",p],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",G],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",p],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",p],autofocus:[2,"autofocus","autofocus",p],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[M([St,qe,{provide:Ge,useExisting:t},{provide:D,useExisting:t}]),I([c]),g],decls:5,vars:24,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(o,n){if(o&1){let i=te();L(0,"input",1,0),q("focus",function(x){return $(i),P(n.onInputFocus(x))})("blur",function(x){return $(i),P(n.onInputBlur(x))})("change",function(x){return $(i),P(n.handleChange(x))}),O(),L(2,"div",2),y(3,wt,3,2,"ng-container",3)(4,Dt,1,0,null,4),O()}o&2&&(ke(n.inputStyle),u(n.cn(n.cx("input"),n.inputClass)),r("checked",n.checked)("pBind",n.ptm("input")),A("id",n.inputId)("value",n.value)("name",n.name())("tabindex",n.tabindex)("required",n.required()?"":void 0)("readonly",n.readonly?"":void 0)("disabled",n.$disabled()?"":void 0)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel),h(2),u(n.cx("box")),r("pBind",n.ptm("box")),h(),r("ngIf",!n.checkboxIconTemplate&&!n._checkboxIconTemplate),h(),r("ngTemplateOutlet",n.checkboxIconTemplate||n._checkboxIconTemplate)("ngTemplateOutletContext",ie(21,_t,n.checked,n.cx("icon"))))},dependencies:[w,_e,Te,K,f,we,He,N,c],encapsulation:2,changeDetection:0})}return t})(),so=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=V({type:t});static \u0275inj=F({imports:[Ke,f,f]})}return t})();var Ue=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var Vt=["*"],Lt={root:({instance:t})=>["p-iconfield",{"p-iconfield-left":t.iconPosition=="left","p-iconfield-right":t.iconPosition=="right"}]},Xe=(()=>{class t extends E{name="iconfield";style=Ue;classes=Lt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();var Ye=new T("ICONFIELD_INSTANCE"),Ot=(()=>{class t extends ce{hostName="";_componentStyle=d(Xe);$pcIconField=d(Ye,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(o,n){o&2&&u(n.cn(n.cx("root"),n.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[M([Xe,{provide:Ye,useExisting:t},{provide:D,useExisting:t}]),I([c]),g],ngContentSelectors:Vt,decls:1,vars:0,template:function(o,n){o&1&&(ne(),oe(0))},dependencies:[w,N],encapsulation:2,changeDetection:0})}return t})(),Bo=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=V({type:t});static \u0275inj=F({imports:[Ot]})}return t})();var At=["*"],zt={root:"p-inputicon"},Ze=(()=>{class t extends E{name="inputicon";classes=zt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),Je=new T("INPUTICON_INSTANCE"),jt=(()=>{class t extends ce{hostName="";styleClass;_componentStyle=d(Ze);$pcInputIcon=d(Je,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(o,n){o&2&&u(n.cn(n.cx("root"),n.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[M([Ze,{provide:Je,useExisting:t},{provide:D,useExisting:t}]),I([c]),g],ngContentSelectors:At,decls:1,vars:0,template:function(o,n){o&1&&(ne(),oe(0))},dependencies:[w,f,N],encapsulation:2,changeDetection:0})}return t})(),$o=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=V({type:t});static \u0275inj=F({imports:[jt,f,f]})}return t})();export{Z as a,Re as b,Ln as c,Ke as d,so as e,Ot as f,Bo as g,jt as h,$o as i};
