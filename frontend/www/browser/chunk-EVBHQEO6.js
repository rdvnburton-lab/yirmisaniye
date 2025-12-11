import{b as xe,c as ve,d as Se,e as Ce}from"./chunk-XF67VSU4.js";import{b as fe,c as _e}from"./chunk-MZQCBFKV.js";import{b as Qe}from"./chunk-KIIJUMUO.js";import{a as je,b as Fe,c as Ve,d as Ne,e as ze,f as Re}from"./chunk-QUNI36NL.js";import"./chunk-JG7ZSHJF.js";import"./chunk-7ZBFPDV6.js";import"./chunk-QSPZEBXG.js";import{b as Te,d as Me,e as we,g as qe,k as Ee,m as Ie,o as ke,p as De,q as Be}from"./chunk-2QNRKEEY.js";import"./chunk-V3RLZPWU.js";import"./chunk-4O3FVBGX.js";import"./chunk-DUHWH566.js";import"./chunk-MAKQHRFT.js";import{e as be,f as he,h as ye}from"./chunk-OVN2A4WB.js";import"./chunk-XEILQOEW.js";import{Aa as K,Ea as U,Fa as Y,La as Z,Oa as G,Pa as ge,Qa as S,Ra as X,k as ce,l as H,n as ue,r as P,wa as L,z as me}from"./chunk-IGLYEISI.js";import{$ as m,$a as f,Ab as c,Bb as se,Cb as le,Da as l,Db as I,Fb as k,Gb as D,Ia as oe,Mb as $,Nb as v,Oa as F,Ob as d,P as T,Pb as q,Q,S as j,Sb as b,T as ne,Tb as h,U as _,Ub as y,Va as V,Vb as de,Wa as N,Wb as E,Xa as ae,Xb as B,Za as z,_ as u,_a as R,a as ie,gb as re,kc as pe,lb as p,ma as M,mb as a,nb as n,nc as O,ob as C,tc as W,ub as A,vb as w,zb as x}from"./chunk-GHXVRSLK.js";var Ae=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var Xe=`
    ${Ae}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,Je={root:({instance:t})=>["p-textarea p-component",{"p-filled":t.$filled(),"p-textarea-resizable ":t.autoResize,"p-variant-filled":t.$variant()==="filled","p-textarea-fluid":t.hasFluid,"p-inputfield-sm p-textarea-sm":t.pSize==="small","p-textarea-lg p-inputfield-lg":t.pSize==="large","p-invalid":t.invalid()}]},Oe=(()=>{class t extends Z{name="textarea";style=Xe;classes=Je;static \u0275fac=(()=>{let e;return function(i){return(e||(e=M(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var We=new j("TEXTAREA_INSTANCE"),He=(()=>{class t extends ke{bindDirectiveInstance=_(S,{self:!0});$pcTextarea=_(We,{optional:!0,skipSelf:!0})??void 0;autoResize;pSize;variant=O();fluid=O(void 0,{transform:W});invalid=O(void 0,{transform:W});$variant=pe(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new oe;ngControlSubscription;_componentStyle=_(Oe);ngControl=_(Me,{optional:!0,self:!0});pcFluid=_(be,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=M(t)))(i||t)}})();static \u0275dir=ae({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(o,i){o&1&&x("input",function(g){return i.onInput(g)}),o&2&&v(i.cx("root"))},inputs:{autoResize:[2,"autoResize","autoResize",W],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[E([Oe,{provide:We,useExisting:t},{provide:G,useExisting:t}]),R([S]),z]})}return t})(),Pe=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=N({type:t});static \u0275inj=Q({})}return t})();var Le=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`;var tt=["start"],it=["end"],nt=["center"],ot=["*"];function at(t,r){t&1&&A(0)}function rt(t,r){if(t&1&&(a(0,"div",1),f(1,at,1,0,"ng-container",2),n()),t&2){let e=c();v(e.cx("start")),p("pBind",e.ptm("start")),l(),p("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function st(t,r){t&1&&A(0)}function lt(t,r){if(t&1&&(a(0,"div",1),f(1,st,1,0,"ng-container",2),n()),t&2){let e=c();v(e.cx("center")),p("pBind",e.ptm("center")),l(),p("ngTemplateOutlet",e.centerTemplate||e._centerTemplate)}}function dt(t,r){t&1&&A(0)}function pt(t,r){if(t&1&&(a(0,"div",1),f(1,dt,1,0,"ng-container",2),n()),t&2){let e=c();v(e.cx("end")),p("pBind",e.ptm("end")),l(),p("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var ct={root:()=>["p-toolbar p-component"],start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},Ke=(()=>{class t extends Z{name="toolbar";style=Le;classes=ct;static \u0275fac=(()=>{let e;return function(i){return(e||(e=M(t)))(i||t)}})();static \u0275prov=T({token:t,factory:t.\u0275fac})}return t})();var Ue=new j("TOOLBAR_INSTANCE"),te=(()=>{class t extends ge{$pcToolbar=_(Ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;ariaLabelledBy;_componentStyle=_(Ke);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"start":case"left":this._startTemplate=e.template;break;case"end":case"right":this._endTemplate=e.template;break;case"center":this._centerTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=M(t)))(i||t)}})();static \u0275cmp=V({type:t,selectors:[["p-toolbar"]],contentQueries:function(o,i,s){if(o&1&&(I(s,tt,4),I(s,it,4),I(s,nt,4),I(s,U,4)),o&2){let g;k(g=D())&&(i.startTemplate=g.first),k(g=D())&&(i.endTemplate=g.first),k(g=D())&&(i.centerTemplate=g.first),k(g=D())&&(i.templates=g)}},hostAttrs:["role","toolbar"],hostVars:3,hostBindings:function(o,i){o&2&&(re("aria-labelledby",i.ariaLabelledBy),v(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[E([Ke,{provide:Ue,useExisting:t},{provide:G,useExisting:t}]),R([S]),z],ngContentSelectors:ot,decls:4,vars:3,consts:[[3,"class","pBind",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"]],template:function(o,i){o&1&&(se(),le(0),f(1,rt,2,4,"div",0)(2,lt,2,4,"div",0)(3,pt,2,4,"div",0)),o&2&&(l(),p("ngIf",i.startTemplate||i._startTemplate),l(),p("ngIf",i.centerTemplate||i._centerTemplate),l(),p("ngIf",i.endTemplate||i._endTemplate))},dependencies:[P,H,ue,Y,X,S],encapsulation:2,changeDetection:0})}return t})(),Ye=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=N({type:t});static \u0275inj=Q({imports:[te,Y,X,Y,X]})}return t})();var J=class t{constructor(r){this.http=r}apiUrl="/api/admin";getQuestions(){return this.http.get(`${this.apiUrl}/questions`)}addQuestion(r){return this.http.post(`${this.apiUrl}/questions`,r)}updateQuestion(r,e){return this.http.put(`${this.apiUrl}/questions/${r}`,e)}deleteQuestion(r){return this.http.delete(`${this.apiUrl}/questions/${r}`)}getSubjectsAndTopics(){return this.http.get(`${this.apiUrl}/subjects-topics`)}static \u0275fac=function(e){return new(e||t)(ne(me))};static \u0275prov=T({token:t,factory:t.\u0275fac,providedIn:"root"})};var gt=()=>["question_text","subject_name","topic_name"],ft=()=>({"min-width":"75rem"}),_t=()=>({width:"600px"}),bt=()=>({width:"450px"});function ht(t,r){if(t&1){let e=w();a(0,"button",10),x("click",function(){u(e);let i=c();return m(i.openNew())}),n()}}function yt(t,r){t&1&&(a(0,"div",11)(1,"h5",12),d(2,"Soru Y\xF6netimi"),n()())}function xt(t,r){t&1&&(a(0,"tr")(1,"th",13),d(2,"Soru "),C(3,"p-sortIcon",14),n(),a(4,"th",15),d(5,"Ders "),C(6,"p-sortIcon",16),n(),a(7,"th",17),d(8,"Konu "),C(9,"p-sortIcon",18),n(),a(10,"th",19),d(11,"Zorluk "),C(12,"p-sortIcon",20),n(),a(13,"th"),d(14,"\u0130\u015Flemler"),n()())}function vt(t,r){if(t&1){let e=w();a(0,"tr")(1,"td"),d(2),n(),a(3,"td"),d(4),n(),a(5,"td"),d(6),n(),a(7,"td")(8,"span"),d(9),n()(),a(10,"td")(11,"button",21),x("click",function(){let i=u(e).$implicit,s=c();return m(s.editQuestion(i))}),n(),a(12,"button",22),x("click",function(){let i=u(e).$implicit,s=c();return m(s.deleteQuestion(i))}),n()()()}if(t&2){let e=r.$implicit;l(2),q(e.question_text),l(2),q(e.subject_name),l(2),q(e.topic_name),l(2),v("badge status-"+e.difficulty),l(),q(e.difficulty)}}function St(t,r){t&1&&(a(0,"small",42),d(1,"Soru metni gereklidir."),n())}function Ct(t,r){if(t&1){let e=w();a(0,"div",43)(1,"div",44)(2,"span",45),d(3),n(),a(4,"input",46),y("ngModelChange",function(i){let s=u(e).index,g=c(2);return h(g.question.options[s],i)||(g.question.options[s]=i),m(i)}),n()()()}if(t&2){let e=r.index,o=c(2);l(3),q(e+1),l(),p("placeholder",de("Se\xE7enek ",e+1)),b("ngModel",o.question.options[e])}}function Tt(t,r){if(t&1){let e=w();a(0,"div",23)(1,"label",24),d(2,"Ders"),n(),a(3,"p-select",25),y("ngModelChange",function(i){u(e);let s=c();return h(s.question.subject_id,i)||(s.question.subject_id=i),m(i)}),x("ngModelChange",function(){u(e);let i=c();return m(i.onSubjectChange())}),n()(),a(4,"div",23)(5,"label",26),d(6,"Konu"),n(),a(7,"p-select",27),y("ngModelChange",function(i){u(e);let s=c();return h(s.question.topic_id,i)||(s.question.topic_id=i),m(i)}),n()(),a(8,"div",23)(9,"label",28),d(10,"Zorluk"),n(),a(11,"p-select",29),y("ngModelChange",function(i){u(e);let s=c();return h(s.question.difficulty,i)||(s.question.difficulty=i),m(i)}),n()(),a(12,"div",23)(13,"label",30),d(14,"Soru Metni"),n(),a(15,"textarea",31),y("ngModelChange",function(i){u(e);let s=c();return h(s.question.question_text,i)||(s.question.question_text=i),m(i)}),n(),f(16,St,2,0,"small",32),n(),a(17,"div",23)(18,"label",33),d(19,"Resim Yolu (Opsiyonel)"),n(),a(20,"input",34),y("ngModelChange",function(i){u(e);let s=c();return h(s.question.image_path,i)||(s.question.image_path=i),m(i)}),n()(),a(21,"div",23)(22,"label",35),d(23,"Se\xE7enekler"),n(),f(24,Ct,5,4,"div",36),n(),a(25,"div",23)(26,"label",37),d(27,"Do\u011Fru Cevap"),n(),a(28,"p-select",38),y("ngModelChange",function(i){u(e);let s=c();return h(s.question.correct_answer,i)||(s.question.correct_answer=i),m(i)}),n(),a(29,"small",39),d(30,"Listeden se\xE7in veya metni birebir yaz\u0131n."),n()(),a(31,"div",23)(32,"label",40),d(33,"\u0130pucu (Opsiyonel)"),n(),a(34,"input",41),y("ngModelChange",function(i){u(e);let s=c();return h(s.question.hint,i)||(s.question.hint=i),m(i)}),n()()}if(t&2){let e=c();l(3),p("options",e.subjects),b("ngModel",e.question.subject_id),l(4),p("options",e.filteredTopics),b("ngModel",e.question.topic_id),p("disabled",!e.question.subject_id),l(4),p("options",e.difficulties),b("ngModel",e.question.difficulty),l(4),b("ngModel",e.question.question_text),l(),p("ngIf",e.submitted&&!e.question.question_text),l(4),b("ngModel",e.question.image_path),l(4),p("ngForOf",e.question.options)("ngForTrackBy",e.trackByIndex),l(4),p("options",e.question.options),b("ngModel",e.question.correct_answer),l(6),b("ngModel",e.question.hint)}}function Mt(t,r){if(t&1){let e=w();a(0,"button",47),x("click",function(){u(e);let i=c();return m(i.hideDialog())}),n(),a(1,"button",48),x("click",function(){u(e);let i=c();return m(i.saveQuestion())}),n()}}var Ze=class t{constructor(r,e,o){this.adminService=r;this.messageService=e;this.confirmationService=o}questions=[];questionDialog=!1;question={};submitted=!1;subjects=[];topics=[];filteredTopics=[];difficulties=[{label:"Kolay",value:"easy"},{label:"Orta",value:"medium"},{label:"Zor",value:"hard"}];ngOnInit(){this.loadQuestions(),this.loadSubjectsAndTopics()}loadQuestions(){this.adminService.getQuestions().subscribe({next:r=>this.questions=r,error:r=>this.messageService.add({severity:"error",summary:"Hata",detail:"Sorular y\xFCklenemedi"})})}loadSubjectsAndTopics(){this.adminService.getSubjectsAndTopics().subscribe({next:r=>{this.subjects=r},error:r=>this.messageService.add({severity:"error",summary:"Hata",detail:"Dersler y\xFCklenemedi"})})}onSubjectChange(){if(this.question.subject_id){let r=this.subjects.find(e=>e.subject_id===this.question.subject_id);this.filteredTopics=r?r.topics:[]}else this.filteredTopics=[]}openNew(){this.question={options:["","","",""],difficulty:"easy"},this.submitted=!1,this.questionDialog=!0}editQuestion(r){if(this.question=ie({},r),typeof this.question.options=="string")try{this.question.options=JSON.parse(this.question.options)}catch{this.question.options=["","","",""]}let e=this.subjects.find(o=>o.topics.some(i=>i.topic_id===this.question.topic_id));e&&(this.question.subject_id=e.subject_id,this.filteredTopics=e.topics),this.questionDialog=!0}deleteQuestion(r){this.confirmationService.confirm({message:"Bu soruyu silmek istedi\u011Finize emin misiniz?",header:"Onay",icon:"pi pi-exclamation-triangle",accept:()=>{this.adminService.deleteQuestion(r.question_id).subscribe({next:()=>{this.questions=this.questions.filter(e=>e.question_id!==r.question_id),this.messageService.add({severity:"success",summary:"Ba\u015Far\u0131l\u0131",detail:"Soru silindi",life:3e3})},error:()=>this.messageService.add({severity:"error",summary:"Hata",detail:"Soru silinemedi"})})}})}hideDialog(){this.questionDialog=!1,this.submitted=!1}saveQuestion(){this.submitted=!0,this.question.question_text?.trim()&&this.question.correct_answer?.trim()&&this.question.topic_id&&(this.question.question_id?this.adminService.updateQuestion(this.question.question_id,this.question).subscribe({next:()=>{this.messageService.add({severity:"success",summary:"Ba\u015Far\u0131l\u0131",detail:"Soru g\xFCncellendi",life:3e3}),this.loadQuestions(),this.hideDialog()},error:()=>this.messageService.add({severity:"error",summary:"Hata",detail:"G\xFCncelleme ba\u015Far\u0131s\u0131z"})}):this.adminService.addQuestion(this.question).subscribe({next:()=>{this.messageService.add({severity:"success",summary:"Ba\u015Far\u0131l\u0131",detail:"Soru eklendi",life:3e3}),this.loadQuestions(),this.hideDialog()},error:()=>this.messageService.add({severity:"error",summary:"Hata",detail:"Ekleme ba\u015Far\u0131s\u0131z"})}))}trackByIndex(r,e){return r}static \u0275fac=function(e){return new(e||t)(F(J),F(K),F(L))};static \u0275cmp=V({type:t,selectors:[["app-question-management"]],features:[E([K,L])],decls:12,vars:17,consts:[[1,"card"],["styleClass","mb-4 gap-2"],["pTemplate","left"],["dataKey","question_id","currentPageReportTemplate","{totalRecords} kay\u0131ttan {first} ile {last} aras\u0131 g\xF6steriliyor",3,"value","rows","paginator","globalFilterFields","tableStyle","rowHover","showCurrentPageReport"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Soru Detaylar\u0131","styleClass","p-fluid",3,"visibleChange","visible","modal"],["pTemplate","content"],["pTemplate","footer"],["pButton","","pRipple","","label","Yeni Soru","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],[1,"flex","align-items-center","justify-content-between"],[1,"m-0"],["pSortableColumn","question_text"],["field","question_text"],["pSortableColumn","subject_name"],["field","subject_name"],["pSortableColumn","topic_name"],["field","topic_name"],["pSortableColumn","difficulty"],["field","difficulty"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],[1,"field"],["for","subject"],["optionLabel","subject_name","optionValue","subject_id","placeholder","Ders Se\xE7in",3,"ngModelChange","options","ngModel"],["for","topic"],["optionLabel","topic_name","optionValue","topic_id","placeholder","Konu Se\xE7in",3,"ngModelChange","options","ngModel","disabled"],["for","difficulty"],["placeholder","Zorluk Se\xE7in",3,"ngModelChange","options","ngModel"],["for","question_text"],["id","question_text","pInputTextarea","","required","","rows","3","cols","20",3,"ngModelChange","ngModel"],["class","p-error",4,"ngIf"],["for","image_path"],["type","text","pInputText","","id","image_path",3,"ngModelChange","ngModel"],[1,"mb-3"],["class","mb-2",4,"ngFor","ngForOf","ngForTrackBy"],["for","correct_answer"],["placeholder","Do\u011Fru Cevab\u0131 Se\xE7in",3,"ngModelChange","options","ngModel"],[1,"block","mt-1"],["for","hint"],["type","text","pInputText","","id","hint",3,"ngModelChange","ngModel"],[1,"p-error"],[1,"mb-2"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],["type","text","pInputText","",3,"ngModelChange","ngModel","placeholder"],["pButton","","pRipple","","label","\u0130ptal","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Kaydet","icon","pi pi-check",1,"p-button-text",3,"click"]],template:function(e,o){e&1&&(a(0,"div",0),C(1,"p-toast"),a(2,"p-toolbar",1),f(3,ht,1,0,"ng-template",2),n(),a(4,"p-table",3),f(5,yt,3,0,"ng-template",4)(6,xt,15,0,"ng-template",5)(7,vt,13,6,"ng-template",6),n()(),a(8,"p-dialog",7),y("visibleChange",function(s){return h(o.questionDialog,s)||(o.questionDialog=s),s}),f(9,Tt,35,15,"ng-template",8)(10,Mt,2,0,"ng-template",9),n(),C(11,"p-confirmDialog")),e&2&&(l(4),p("value",o.questions)("rows",10)("paginator",!0)("globalFilterFields",B(13,gt))("tableStyle",B(14,ft))("rowHover",!0)("showCurrentPageReport",!0),l(4),$(B(15,_t)),b("visible",o.questionDialog),p("modal",!0),l(3),$(B(16,bt)))},dependencies:[P,ce,H,Ie,Te,we,Ee,qe,Re,Ve,U,Ne,ze,ye,he,ve,xe,Be,De,Pe,He,Fe,je,_e,fe,Ce,Se,Ye,te,Qe],encapsulation:2})};export{Ze as QuestionManagementComponent};
