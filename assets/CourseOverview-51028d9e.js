import{_ as h,o as e,c as l,b as t,t as p,s as b,L as y,r as _,d as v,w as m,F as a,u as r,f as w,v as u}from"./index-cb918a6b.js";const k={props:["data","color"]},C={class:"card card-list col-8 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-3 mb-md-0 pt-3 px-3 border border-2 border-dark",style:{"border-radius":"12px"}},$=["src"],j={class:"card-body"},L={class:"row"},N={class:"card-title col-6 mb-0 text-nowrap"},B={class:"col-6 text-end text-decoration-line-through old-price d-flex justify-content-end align-items-end",style:{color:"#909090"}},V={class:"mb-1"},q={class:"card-text row"},E={class:"col-6 text-nowrap mt-"},F={class:"col-6 text-end"};function O(x,n,d,s,c,f){return e(),l("div",C,[t("img",{src:d.data.imageUrl,style:{"border-radius":"12px"},class:"card-img-top img-fluid",alt:"..."},null,8,$),t("div",j,[t("div",L,[t("p",N,p(d.data.title),1),t("div",B,[t("p",V,"NT$"+p(d.data.origin_price),1)])]),t("div",q,[t("p",E,"適合："+p(d.data.unit),1),t("div",F,"NT$"+p(d.data.price),1)]),t("div",null,[t("button",{class:b([[d.color==1?"btn-primary":"btnyellow"],"btn w-100 border border-2 border-dark"]),style:{padding:`7px 15px
                  border: 3px solid #6f6f6f`,"border-radius":"640px"}}," 課程詳情 ",2)])])])}const S=h(k,[["render",O]]);const T={components:{CardComponent:S,Loading:y},data(){return{isLoading:!1,course:[[],[],[],[],[]]}},methods:{getCourse(){this.isLoading=!0;const x="https://vue3-course-api.hexschool.io/v2/api/biggo/products/all";this.$http.get(x).then(n=>{n.data.products.forEach(s=>{s.category=="免費課程"?this.course[0].push(s):s.category=="啟蒙班"?this.course[1].push(s):s.category=="中級班"?this.course[2].push(s):s.category=="高級班"?this.course[3].push(s):s.category=="段位班"&&this.course[4].push(s),this.isLoading=!1})}).catch(n=>{console.log(n)})}},mounted(){this.getCourse()}},U=t("div",{class:"loadingio-spinner-dual-ball-laqyobj2qgl"},[t("div",{class:"ldio-sh19xg6jfo"},[t("div"),t("div"),t("div")])],-1),z=w('<div class="text-center overflow-auto text-nowrap pt-5" style="background-color:#f6f6f6;"><button type="button" style="width:128px;height:51px;padding:12px 30px;background:#ffc656;" class="me-3 btn rounded-pill"> 所有課程 </button><button type="button" style="background:white;width:128px;height:51px;padding:12px 30px;" class="me-3 btn rounded-pill"> 免費課程 </button><button type="button" style="background:white;width:128px;height:51px;padding:12px 30px;" class="me-3 btn rounded-pill"> 啟蒙課程 </button><button type="button" style="background:white;width:128px;height:51px;padding:12px 30px;" class="me-3 btn rounded-pill"> 中級課程 </button><button type="button" style="background:white;width:128px;height:51px;padding:12px 30px;" class="me-3 btn rounded-pill"> 高級課程 </button><button type="button" style="background:white;width:128px;height:51px;padding:12px 30px;" class="me-3 btn rounded-pill"> 段位課程 </button></div><div class="pb-5" style="background-color:#f6f6f6;"></div>',2),D={style:{"background-color":"#f6f6f6"}},A={style:{"background-color":"white"},class:"py-5 course-radius"},G=t("p",{class:"h2 mb-4 text-center"},"免費課程",-1),H={class:"px-md-5 px-xxl-7 card-padding"},I={class:"d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center px-xxxl-7"},J={style:{"background-color":"white"}},K={style:{"background-color":"#f6f6f6"},class:"py-5 course-radius"},M=t("p",{class:"h2 mb-4 text-center"},"啟蒙班",-1),P={class:"px-md-5 px-xxl-7 card-padding"},Q={class:"d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center px-xxxl-7"},R={style:{"background-color":"#f6f6f6"}},W={style:{"background-color":"white"},class:"py-5 course-radius"},X=t("p",{class:"h2 mb-4 text-center"},"中級班",-1),Y={class:"px-md-5 px-xxl-7 card-padding"},Z={class:"d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center px-xxxl-7"},tt={style:{"background-color":"white"}},ot={style:{"background-color":"#f6f6f6"},class:"py-5 course-radius"},st=t("p",{class:"h2 mb-4 text-center"},"高級班",-1),et={class:"px-md-5 px-xxl-7 card-padding"},dt={class:"d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center px-xxxl-7"},ct={style:{"background-color":"#f6f6f6"}},nt={style:{"background-color":"white"},class:"py-5 course-radius"},lt=t("p",{class:"h2 mb-4 text-center"},"段位班",-1),at={class:"px-md-5 px-xxl-7 card-padding"},it={class:"d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center px-xxxl-7"};function rt(x,n,d,s,c,f){const g=_("loading"),i=_("CardComponent");return e(),l(a,null,[v(g,{active:c.isLoading,"onUpdate:active":n[0]||(n[0]=o=>c.isLoading=o),"can-cancel":!1},{default:m(()=>[U]),_:1},8,["active"]),z,t("div",D,[t("div",A,[G,t("div",H,[t("div",I,[(e(!0),l(a,null,r(c.course[0],o=>(e(),u(i,{data:o,color:"0",key:o.id},null,8,["data"]))),128))])])])]),t("div",J,[t("div",K,[M,t("div",P,[t("div",Q,[(e(!0),l(a,null,r(c.course[1],o=>(e(),u(i,{data:o,color:"1",key:o.id},null,8,["data"]))),128))])])])]),t("div",R,[t("div",W,[X,t("div",Y,[t("div",Z,[(e(!0),l(a,null,r(c.course[2],o=>(e(),u(i,{color:"0",data:o,key:o.id},null,8,["data"]))),128))])])])]),t("div",tt,[t("div",ot,[st,t("div",et,[t("div",dt,[(e(!0),l(a,null,r(c.course[3],o=>(e(),u(i,{data:o,color:"1",key:o.id},null,8,["data"]))),128))])])])]),t("div",ct,[t("div",nt,[lt,t("div",at,[t("div",it,[(e(!0),l(a,null,r(c.course[4],o=>(e(),u(i,{data:o,color:"0",key:o.id},null,8,["data"]))),128))])])])])],64)}const pt=h(T,[["render",rt]]);export{pt as default};
