import{a as ee,b as te}from"./chunk-EL2QWLBF.js";import{f as X}from"./chunk-GKJMT5CE.js";import{a as ne,b as ie}from"./chunk-KIIJUMUO.js";import{c as re,d as ae,e as le,f as se}from"./chunk-QUNI36NL.js";import"./chunk-JG7ZSHJF.js";import"./chunk-7ZBFPDV6.js";import"./chunk-QSPZEBXG.js";import"./chunk-2QNRKEEY.js";import"./chunk-V3RLZPWU.js";import"./chunk-4O3FVBGX.js";import"./chunk-DUHWH566.js";import"./chunk-MAKQHRFT.js";import{f as J,h as U}from"./chunk-OVN2A4WB.js";import"./chunk-XEILQOEW.js";import{a as oe}from"./chunk-YK547WEA.js";import{a as W,b as Y}from"./chunk-BK62AMNQ.js";import{Ea as L,Fa as h,La as $,Oa as G,Pa as Z,Qa as g,p as O,r as y,za as K}from"./chunk-IGLYEISI.js";import{$ as w,$a as D,Ab as _,Da as m,Mb as N,Nb as j,Oa as k,Ob as l,P as x,Pb as u,Q as E,Qb as q,Rb as R,S as z,U as p,Va as d,Wa as M,Wb as f,Xb as P,Za as T,_ as I,_a as F,a as v,b as S,dc as V,fc as A,gb as B,lb as c,ma as b,mb as n,nb as i,ob as o,vb as H,zb as Q}from"./chunk-GHXVRSLK.js";var me=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;var he={root:{position:"relative"}},ge={root:({instance:e})=>["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]},pe=(()=>{class e extends ${name="skeleton";style=me;classes=ge;inlineStyles=he;static \u0275fac=(()=>{let t;return function(s){return(t||(t=b(e)))(s||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();var de=new z("SKELETON_INSTANCE"),C=(()=>{class e extends Z{$pcSkeleton=p(de,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(g,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=p(pe);get containerStyle(){let t=this._componentStyle?.inlineStyles.root,r;return this.size?r=S(v({},t),{width:this.size,height:this.size,borderRadius:this.borderRadius}):r=S(v({},t),{width:this.width,height:this.height,borderRadius:this.borderRadius}),r}static \u0275fac=(()=>{let t;return function(s){return(t||(t=b(e)))(s||e)}})();static \u0275cmp=d({type:e,selectors:[["p-skeleton"]],hostVars:5,hostBindings:function(r,s){r&2&&(B("aria-hidden",!0),N(s.containerStyle),j(s.cn(s.cx("root"),s.styleClass)))},inputs:{styleClass:"styleClass",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[f([pe,{provide:de,useExisting:e},{provide:G,useExisting:e}]),F([g]),T],decls:0,vars:0,template:function(r,s){},dependencies:[y,h],encapsulation:2,changeDetection:0})}return e})(),ce=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=M({type:e});static \u0275inj=E({imports:[C,h,h]})}return e})();var Se=()=>["subject_name","topic_name"];function be(e,a){e&1&&(n(0,"tr"),o(1,"th",8),n(2,"th",9),l(3,"Ders "),o(4,"p-sortIcon",10),i(),n(5,"th",11),l(6,"Konu "),o(7,"p-sortIcon",12),i(),n(8,"th",13),l(9,"Skor "),o(10,"p-sortIcon",14),i(),n(11,"th",13),l(12,"Ba\u015Far\u0131 "),o(13,"p-sortIcon",14),i(),n(14,"th",15),l(15,"Zorluk "),o(16,"p-sortIcon",16),i(),n(17,"th",17),l(18,"Tarih "),o(19,"p-sortIcon",18),i()())}function ke(e,a){if(e&1){let t=H();n(0,"tr")(1,"td")(2,"button",19),Q("click",function(){let s=I(t).$implicit,fe=_();return w(fe.viewDetails(s.quiz_id))}),i()(),n(3,"td"),l(4),i(),n(5,"td"),l(6),i(),n(7,"td"),l(8),i(),n(9,"td")(10,"div",20),o(11,"p-progressBar",21),n(12,"span",22),l(13),i()()(),n(14,"td"),o(15,"p-tag",23),i(),n(16,"td"),l(17),V(18,"date"),i()()}if(e&2){let t=a.$implicit,r=_();m(4),u(t.subject_name),m(2),u(t.topic_name),m(2),R("",t.score," / ",t.total_questions),m(3),c("value",r.calculatePercentage(t.score,t.total_questions))("showValue",!1),m(2),q("",r.calculatePercentage(t.score,t.total_questions),"%"),m(2),c("severity",r.getSeverity(t.difficulty)||"info")("value",t.difficulty),m(2),u(A(18,10,t.created_at,"dd/MM/yyyy HH:mm"))}}function _e(e,a){e&1&&(n(0,"tr")(1,"td"),o(2,"p-skeleton",24),i(),n(3,"td"),o(4,"p-skeleton"),i(),n(5,"td"),o(6,"p-skeleton"),i(),n(7,"td"),o(8,"p-skeleton"),i(),n(9,"td"),o(10,"p-skeleton"),i(),n(11,"td"),o(12,"p-skeleton"),i(),n(13,"td"),o(14,"p-skeleton"),i(),n(15,"td"),o(16,"p-skeleton"),i()())}function Ce(e,a){e&1&&(n(0,"tr")(1,"td",25),l(2,"Hen\xFCz tamamlanm\u0131\u015F bir quiz bulunmuyor."),i()())}var ue=class e{constructor(a,t){this.quizService=a;this.router=t}history=[];loading=!0;ngOnInit(){this.quizService.getQuizHistory().subscribe(a=>{this.history=a,this.loading=!1})}viewDetails(a){this.router.navigate(["/app/history",a])}getSeverity(a){switch(a){case"easy":return"success";case"medium":return"warning";case"hard":return"danger";default:return"info"}}calculatePercentage(a,t){return t===0?0:Math.round(a/t*100)}static \u0275fac=function(t){return new(t||e)(k(oe),k(X))};static \u0275cmp=d({type:e,selectors:[["app-quiz-history"]],features:[f([K])],decls:8,vars:5,consts:[["dt",""],[1,"card"],["header","Quiz Ge\xE7mi\u015Fim"],["responsiveLayout","scroll","styleClass","p-datatable-striped",3,"value","paginator","rows","globalFilterFields"],["pTemplate","header"],["pTemplate","body"],["pTemplate","loadingbody"],["pTemplate","emptymessage"],[1,"w-1"],["pSortableColumn","subject_name"],["field","subject_name"],["pSortableColumn","topic_name"],["field","topic_name"],["pSortableColumn","score"],["field","score"],["pSortableColumn","difficulty"],["field","difficulty"],["pSortableColumn","created_at"],["field","created_at"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button-rounded","p-button-text",3,"click"],[1,"flex","align-items-center"],["styleClass","h-1rem flex-1",3,"value","showValue"],[1,"ml-2","font-bold"],[3,"severity","value"],["shape","circle","size","2rem"],["colspan","7"]],template:function(t,r){t&1&&(n(0,"div",1)(1,"p-card",2)(2,"p-table",3,0),D(4,be,20,0,"ng-template",4)(5,ke,19,13,"ng-template",5)(6,_e,17,0,"ng-template",6)(7,Ce,3,0,"ng-template",7),i()()()),t&2&&(m(2),c("value",r.history)("paginator",!0)("rows",10)("globalFilterFields",P(4,Se)))},dependencies:[y,se,re,L,ae,le,U,J,ie,ne,Y,W,ce,C,te,ee,O],encapsulation:2})};export{ue as QuizHistoryComponent};
