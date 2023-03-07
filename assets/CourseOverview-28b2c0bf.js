import{_ as v,r as y,o as d,c as l,d as t,t as h,e as m,w,f as b,n as r,L as k,F as a,x as p,y as _,z as x}from"./index-043e2955.js";const T={props:["data","color"],methods:{scrollToTop(){window.scrollTo(0,0)}}},C={class:"card card-list col-8 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-3 mb-md-0 pt-3 px-3 border border-2 border-dark",style:{"border-radius":"12px"}},j=["src"],A={class:"card-body"},L={class:"row"},N={class:"card-title col-6 mb-0 text-nowrap"},B={class:"col-6 text-end text-decoration-line-through old-price d-flex justify-content-end align-items-end",style:{color:"#909090"}},V={class:"mb-1"},q={class:"card-text row"},z={class:"col-6 text-nowrap font-normal"},E={class:"col-6 text-end text-nowrap"};function F(u,o,n,c,e,i){const f=y("Router-Link");return d(),l("div",C,[t("img",{src:n.data.imageUrl,style:{"border-radius":"12px"},class:"card-img-top img-fluid",alt:"..."},null,8,j),t("div",A,[t("div",L,[t("p",N,h(n.data.title),1),t("div",B,[t("p",V,"NT$"+h(n.data.origin_price),1)])]),t("div",q,[t("p",z,"適合："+h(n.data.unit),1),t("div",E,"NT$"+h(n.data.price),1)]),t("div",null,[m(f,{class:r([[n.color==1?"btn-red":"btn-yellow"],"btn w-100 border border-2 border-dark"]),onClick:i.scrollToTop,style:{padding:`7px 15px
                  border: 3px solid #6f6f6f`,"border-radius":"640px"},to:`Course/${n.data.id}`},{default:w(()=>[b("課程詳情")]),_:1},8,["class","onClick","to"])])])])}const O=v(T,[["render",F]]);const R={components:{CardComponent:O,Loading:k},data(){return{isLoading:!1,course:[[],[],[],[],[]],selectedTag:""}},methods:{getCourse(){this.isLoading=!0;const u="https://vue3-course-api.hexschool.io/v2/api/biggo/products/all";this.$http.get(u).then(o=>{o.data.products.forEach(c=>{c.category=="免費課程"?this.course[0].push(c):c.category=="啟蒙班"?this.course[1].push(c):c.category=="中級班"?this.course[2].push(c):c.category=="高級班"?this.course[3].push(c):c.category=="段位班"&&this.course[4].push(c),this.isLoading=!1})}).catch(o=>{console.log(o)})},showTag(u){return this.selectedTag===""||this.selectedTag===u}},mounted(){this.getCourse()}},U=t("div",{class:"loadingio-spinner-dual-ball-laqyobj2qgl"},[t("div",{class:"ldio-sh19xg6jfo"},[t("div"),t("div"),t("div")])],-1),D={class:"text-center overflow-auto text-nowrap pt-5",style:{"background-color":"#f6f6f6"}},S=t("div",{class:"pb-5",style:{"background-color":"#f6f6f6"}},null,-1),G={key:0,style:{"background-color":"#f6f6f6"}},H={style:{"background-color":"white"},class:"py-5 course-radius"},I=t("p",{class:"h2 mb-4 text-center"},"免費課程",-1),J={class:"px-md-5 card-padding d-flex justify-content-center"},K={class:"d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center",style:{"max-width":"1024px",width:"100%"}},M={key:1,style:{"background-color":"white"}},P={style:{"background-color":"#f6f6f6"},class:"py-5 course-radius"},Q=t("p",{class:"h2 mb-4 text-center"},"啟蒙班",-1),W={class:"px-md-5 card-padding d-flex justify-content-center"},X={class:"d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center",style:{"max-width":"1024px",width:"100%"}},Y={key:2,style:{"background-color":"#f6f6f6"}},Z={style:{"background-color":"white"},class:"py-5 course-radius"},$=t("p",{class:"h2 mb-4 text-center"},"中級班",-1),tt={class:"px-md-5 card-padding d-flex justify-content-center"},et={class:"d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center",style:{"max-width":"1024px",width:"100%"}},st={key:3,style:{"background-color":"white"}},ot={style:{"background-color":"#f6f6f6"},class:"py-5 course-radius"},dt=t("p",{class:"h2 mb-4 text-center"},"高級班",-1),ct={class:"px-md-5 card-padding d-flex justify-content-center"},lt={class:"d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center",style:{"max-width":"1024px",width:"100%"}},nt={key:4,style:{"background-color":"#f6f6f6"}},it={style:{"background-color":"white"},class:"py-5 course-radius"},rt=t("p",{class:"h2 mb-4 text-center"},"段位班",-1),at={class:"px-md-5 card-padding d-flex justify-content-center"},ut={class:"d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center",style:{"max-width":"1024px",width:"100%"}};function gt(u,o,n,c,e,i){const f=y("loading"),g=y("CardComponent");return d(),l(a,null,[m(f,{active:e.isLoading,"onUpdate:active":o[0]||(o[0]=s=>e.isLoading=s),"can-cancel":!1},{default:w(()=>[U]),_:1},8,["active"]),t("div",D,[t("button",{onClick:o[1]||(o[1]=s=>e.selectedTag=""),type:"button",class:r([{isActive:e.selectedTag=="",notActive:e.selectedTag!=""},"me-3 rounded-pill"]),style:{width:"128px",height:"51px",padding:"12px 30px"}}," 所有課程 ",2),t("button",{onClick:o[2]||(o[2]=s=>e.selectedTag="tag1"),class:r([{isActive:e.selectedTag=="tag1",notActive:e.selectedTag!="tag1"},"me-3 rounded-pill"]),type:"button",style:{width:"128px",height:"51px",padding:"12px 30px"}}," 免費課程 ",2),t("button",{onClick:o[3]||(o[3]=s=>e.selectedTag="tag2"),class:r([{isActive:e.selectedTag=="tag2",notActive:e.selectedTag!="tag2"},"me-3 rounded-pill"]),type:"button",style:{width:"128px",height:"51px",padding:"12px 30px"}}," 啟蒙課程 ",2),t("button",{onClick:o[4]||(o[4]=s=>e.selectedTag="tag3"),class:r([{isActive:e.selectedTag=="tag3",notActive:e.selectedTag!="tag3"},"me-3 rounded-pill"]),type:"button",style:{width:"128px",height:"51px",padding:"12px 30px"}}," 中級課程 ",2),t("button",{onClick:o[5]||(o[5]=s=>e.selectedTag="tag4"),class:r([{isActive:e.selectedTag=="tag4",notActive:e.selectedTag!="tag4"},"me-3 rounded-pill"]),type:"button",style:{width:"128px",height:"51px",padding:"12px 30px"}}," 高級課程 ",2),t("button",{onClick:o[6]||(o[6]=s=>e.selectedTag="tag5"),class:r([{isActive:e.selectedTag=="tag5",notActive:e.selectedTag!="tag5"},"me-3 rounded-pill"]),type:"button",style:{width:"128px",height:"51px",padding:"12px 30px"}}," 段位課程 ",2)]),S,i.showTag("tag1")?(d(),l("div",G,[t("div",H,[I,t("div",J,[t("div",K,[(d(!0),l(a,null,p(e.course[0],s=>(d(),x(g,{data:s,color:"0",key:s.id},null,8,["data"]))),128))])])])])):_("",!0),i.showTag("tag2")?(d(),l("div",M,[t("div",P,[Q,t("div",W,[t("div",X,[(d(!0),l(a,null,p(e.course[1],s=>(d(),x(g,{data:s,color:"1",key:s.id},null,8,["data"]))),128))])])])])):_("",!0),i.showTag("tag3")?(d(),l("div",Y,[t("div",Z,[$,t("div",tt,[t("div",et,[(d(!0),l(a,null,p(e.course[2],s=>(d(),x(g,{color:"0",data:s,key:s.id},null,8,["data"]))),128))])])])])):_("",!0),i.showTag("tag4")?(d(),l("div",st,[t("div",ot,[dt,t("div",ct,[t("div",lt,[(d(!0),l(a,null,p(e.course[3],s=>(d(),x(g,{data:s,color:"1",key:s.id},null,8,["data"]))),128))])])])])):_("",!0),i.showTag("tag5")?(d(),l("div",nt,[t("div",it,[rt,t("div",at,[t("div",ut,[(d(!0),l(a,null,p(e.course[4],s=>(d(),x(g,{data:s,color:"0",key:s.id},null,8,["data"]))),128))])])])])):_("",!0)],64)}const _t=v(R,[["render",gt]]);export{_t as default};