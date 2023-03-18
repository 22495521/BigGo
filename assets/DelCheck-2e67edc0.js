import{c as k,_ as st,o as it,d as nt,e as y,g as ot}from"./index-20940758.js";import{b as O,d as at,r as L,a as $,e as Y,c as rt}from"./base-component-1420cbca.js";var V={},lt={get exports(){return V},set exports(n){V=n}},S={},ct={get exports(){return S},set exports(n){S=n}};/*!
  * Bootstrap scrollbar.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var R;function dt(){return R||(R=1,function(n,b){(function(o,t){n.exports=t(O(),at(),L())})(k,function(o,t,h){const d=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_=".sticky-top",r="padding-right",m="margin-right";class p{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,r,e=>e+a),this._setElementAttributes(d,r,e=>e+a),this._setElementAttributes(_,m,e=>e-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,r),this._resetElementAttributes(d,r),this._resetElementAttributes(_,m)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,e,s){const u=this.getWidth(),E=A=>{if(A!==this._element&&window.innerWidth>A.clientWidth+u)return;this._saveInitialAttribute(A,e);const c=window.getComputedStyle(A).getPropertyValue(e);A.style.setProperty(e,`${s(Number.parseFloat(c))}px`)};this._applyManipulationCallback(a,E)}_saveInitialAttribute(a,e){const s=a.style.getPropertyValue(e);s&&t.setDataAttribute(a,e,s)}_resetElementAttributes(a,e){const s=u=>{const E=t.getDataAttribute(u,e);if(E===null){u.style.removeProperty(e);return}t.removeDataAttribute(u,e),u.style.setProperty(e,E)};this._applyManipulationCallback(a,s)}_applyManipulationCallback(a,e){if(h.isElement(a)){e(a);return}for(const s of o.find(a,this._element))e(s)}}return p})}(ct)),S}var C={},ht={get exports(){return C},set exports(n){C=n}};/*!
  * Bootstrap backdrop.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var P;function ut(){return P||(P=1,function(n,b){(function(o,t){n.exports=t($(),L(),Y())})(k,function(o,t,h){const d="backdrop",_="fade",r="show",m=`mousedown.bs.${d}`,p={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},g={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class a extends h{constructor(s){super(),this._config=this._getConfig(s),this._isAppended=!1,this._element=null}static get Default(){return p}static get DefaultType(){return g}static get NAME(){return d}show(s){if(!this._config.isVisible){t.execute(s);return}this._append();const u=this._getElement();this._config.isAnimated&&t.reflow(u),u.classList.add(r),this._emulateAnimation(()=>{t.execute(s)})}hide(s){if(!this._config.isVisible){t.execute(s);return}this._getElement().classList.remove(r),this._emulateAnimation(()=>{this.dispose(),t.execute(s)})}dispose(){this._isAppended&&(o.off(this._element,m),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const s=document.createElement("div");s.className=this._config.className,this._config.isAnimated&&s.classList.add(_),this._element=s}return this._element}_configAfterMerge(s){return s.rootElement=t.getElement(s.rootElement),s}_append(){if(this._isAppended)return;const s=this._getElement();this._config.rootElement.append(s),o.on(s,m,()=>{t.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(s){t.executeAfterTransition(s,this._getElement(),this._config.isAnimated)}}return a})}(ht)),C}var M={},_t={get exports(){return M},set exports(n){M=n}};/*!
  * Bootstrap focustrap.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var W;function mt(){return W||(W=1,function(n,b){(function(o,t){n.exports=t($(),O(),Y())})(k,function(o,t,h){const d="focustrap",r=".bs.focustrap",m=`focusin${r}`,p=`keydown.tab${r}`,g="Tab",a="forward",e="backward",s={autofocus:!0,trapElement:null},u={autofocus:"boolean",trapElement:"element"};class E extends h{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return s}static get DefaultType(){return u}static get NAME(){return d}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),o.off(document,r),o.on(document,m,c=>this._handleFocusin(c)),o.on(document,p,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.off(document,r))}_handleFocusin(c){const{trapElement:T}=this._config;if(c.target===document||c.target===T||T.contains(c.target))return;const v=t.focusableChildren(T);v.length===0?T.focus():this._lastTabNavDirection===e?v[v.length-1].focus():v[0].focus()}_handleKeydown(c){c.key===g&&(this._lastTabNavDirection=c.shiftKey?e:a)}}return E})}(_t)),M}var N={},ft={get exports(){return N},set exports(n){N=n}};/*!
  * Bootstrap component-functions.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var F;function pt(){return F||(F=1,function(n,b){(function(o,t){t(b,$(),L(),O())})(k,function(o,t,h,d){const _=(r,m="hide")=>{const p=`click.dismiss${r.EVENT_KEY}`,g=r.NAME;t.on(document,p,`[data-bs-dismiss="${g}"]`,function(a){if(["A","AREA"].includes(this.tagName)&&a.preventDefault(),h.isDisabled(this))return;const e=d.getElementFromSelector(this)||this.closest(`.${g}`);r.getOrCreateInstance(e)[m]()})};o.enableDismissTrigger=_,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})})}(ft,N)),N}/*!
  * Bootstrap modal.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(n,b){(function(o,t){n.exports=t(L(),$(),O(),dt(),rt(),ut(),mt(),pt())})(k,function(o,t,h,d,_,r,m,p){const g="modal",e=".bs.modal",s=".data-api",u="Escape",E=`hide${e}`,A=`hidePrevented${e}`,c=`hidden${e}`,T=`show${e}`,v=`shown${e}`,K=`resize${e}`,q=`click.dismiss${e}`,G=`mousedown.dismiss${e}`,z=`keydown.dismiss${e}`,U=`click${e}${s}`,I="modal-open",Q="fade",B="show",x="modal-static",J=".modal.show",X=".modal-dialog",Z=".modal-body",j='[data-bs-toggle="modal"]',H={backdrop:!0,focus:!0,keyboard:!0},tt={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class D extends _{constructor(i,l){super(i,l),this._dialog=h.findOne(X,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new d,this._addEventListeners()}static get Default(){return H}static get DefaultType(){return tt}static get NAME(){return g}toggle(i){return this._isShown?this.hide():this.show(i)}show(i){this._isShown||this._isTransitioning||t.trigger(this._element,T,{relatedTarget:i}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(I),this._adjustDialog(),this._backdrop.show(()=>this._showElement(i)))}hide(){!this._isShown||this._isTransitioning||t.trigger(this._element,E).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(B),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const i of[window,this._dialog])t.off(i,e);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new r({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new m({trapElement:this._element})}_showElement(i){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const l=h.findOne(Z,this._dialog);l&&(l.scrollTop=0),o.reflow(this._element),this._element.classList.add(B);const f=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,t.trigger(this._element,v,{relatedTarget:i})};this._queueCallback(f,this._dialog,this._isAnimated())}_addEventListeners(){t.on(this._element,z,i=>{if(i.key===u){if(this._config.keyboard){i.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),t.on(window,K,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),t.on(this._element,G,i=>{t.one(this._element,q,l=>{if(!(this._element!==i.target||this._element!==l.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(I),this._resetAdjustments(),this._scrollBar.reset(),t.trigger(this._element,c)})}_isAnimated(){return this._element.classList.contains(Q)}_triggerBackdropTransition(){if(t.trigger(this._element,A).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,f=this._element.style.overflowY;f==="hidden"||this._element.classList.contains(x)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(x),this._queueCallback(()=>{this._element.classList.remove(x),this._queueCallback(()=>{this._element.style.overflowY=f},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const i=this._element.scrollHeight>document.documentElement.clientHeight,l=this._scrollBar.getWidth(),f=l>0;if(f&&!i){const w=o.isRTL()?"paddingLeft":"paddingRight";this._element.style[w]=`${l}px`}if(!f&&i){const w=o.isRTL()?"paddingRight":"paddingLeft";this._element.style[w]=`${l}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(i,l){return this.each(function(){const f=D.getOrCreateInstance(this,i);if(typeof i=="string"){if(typeof f[i]>"u")throw new TypeError(`No method named "${i}"`);f[i](l)}})}}return t.on(document,U,j,function(et){const i=h.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&et.preventDefault(),t.one(i,T,w=>{w.defaultPrevented||t.one(i,c,()=>{o.isVisible(this)&&this.focus()})});const l=h.findOne(J);l&&D.getInstance(l).hide(),D.getOrCreateInstance(i).toggle(this)}),p.enableDismissTrigger(D),o.defineJQueryPlugin(D),D})})(lt);const gt=V,bt={data(){return{isorder:null,id:null,myModal:null,url:null,path:null}},methods:{openModal(n){this.myModal.show(),this.id=n},delData(){this.isorder==0&&this.$http.delete(`${this.url}/api/${this.path}/admin/product/${this.id}`).then(()=>{this.myModal.hide(),this.$emit("getData")}).catch(n=>{console.log(n)}),this.isorder==1&&this.$http.delete(`${this.url}/api/${this.path}/admin/order/${this.id}`).then(()=>{this.myModal.hide(),this.$emit("getData")}).catch(n=>{console.log(n)})}},created(){this.url="https://vue3-course-api.hexschool.io/v2/",this.path="biggo"},mounted(){const n=new gt(this.$refs.delProductModal);this.myModal=n}},Et={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},At={class:"modal-dialog modal-dialog-centered"},Tt={class:"modal-content border-0"},Dt=ot('<div class="modal-header text-white" style="background-color:black;"><h5 id="delProductModalLabel" class="modal-title"><span>刪除產品</span></h5><button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"> 是否刪除 <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。 </div>',2),vt={class:"modal-footer"},wt=y("button",{type:"button",class:"btn btn-lg btn-darklight","data-bs-dismiss":"modal"}," 取消 ",-1);function yt(n,b,o,t,h,d){return it(),nt("div",Et,[y("div",At,[y("div",Tt,[Dt,y("div",vt,[wt,y("button",{type:"button",class:"btn-lg btn btn-success",onClick:b[0]||(b[0]=(..._)=>d.delData&&d.delData(..._))}," 確認刪除 ")])])])],512)}const St=st(bt,[["render",yt]]);export{St as D,gt as M};
