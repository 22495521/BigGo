import{_ as g,R as m,a as u,m as h,b as f,r as l,o as v,c as b,d as t,e as s,w as o,n as i,F as x,f as k,g as n,t as w}from"./index-ef444c57.js";import{c}from"./cart-40fb1790.js";import{_ as d}from"./Logo-75fbb69d.js";const y="/BigGo/assets/shopping_cart-0d9dc368.svg",B="/BigGo/assets/icon_line-558d82f8.svg",C="/BigGo/assets/icon_mail-8c581b8f.svg",F="/BigGo/assets/icon_facebook-172df7ce.svg",R="/BigGo/assets/icon_instagram-8b48b444.svg";const V={components:{RouterView:m,RouterLink:u},data(){return{fullPage:!0,isLoading:!1,nowPgae:null}},computed:{...h(c,["getnum"])},methods:{...f(c,["getitem"]),chagepage(a){this.nowPgae=a}},mounted(){this.getitem()}},$={class:"navbar navbar-expand-md navbar-light bg-primary"},L={class:"container-fluid"},P=t("img",{src:d,alt:"",width:"226",height:"41",class:"d-inline-block align-text-top"},null,-1),T=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),G={class:"collapse navbar-collapse pe-3",id:"navbarText",ref:"navbarText"},N={class:"navbar-nav ms-auto"},S={class:"nav-item ps-3"},O=n("首頁"),Q={class:"nav-item ps-3"},j=n("課程總覽"),z={class:"nav-item ps-3"},A=n("問與答"),D={class:"nav-item ps-3"},E=t("img",{src:y,style:{width:"25px",height:"25px"},alt:"購物車icon",class:"position-relative"},null,-1),q={class:"position-absolute top-25 start-75 translate-middle badge rounded-pill",style:{background:"#ffffff",color:"#ff8080"}},H=t("span",{class:"visually-hidden"},"items",-1),I={class:"bg-primary"},J=k('<div class="container d-flex flex-column flex-md-row align-items-center justify-content-md-center pt-5"><div class="pe-md-5 pb-4 pb-md-0"><img src="'+d+'" alt=""></div><div><a href="#"><img class="me-3" src="'+B+'" width="33px" height="33px" alt=""></a><a href="#"><img class="me-3" src="'+C+'" width="33px" height="33px" alt=""></a><a href="#"><img class="me-3" src="'+F+'" width="33px" height="33px" alt=""></a><a href="#"><img src="'+R+'" width="33px" height="33px" alt=""></a></div></div>',1),K={class:"mt-6 mt-md-5 text-center pb-4 pb-md-2"},M={class:"mb-0"},U=n(" 僅作練習使用，無任何商業用途 | "),W=n("登入後台"),X=t("p",null,"Copyright © 2023 大圍棋教室",-1);function Y(a,r,Z,tt,st,_){const e=l("Router-Link"),p=l("RouterView");return v(),b(x,null,[t("nav",$,[t("div",L,[s(e,{class:"nav-link fw-bolder text-dark fs-6","aria-current":"page",to:"/FrontPage"},{default:o(()=>[P]),_:1}),T,t("div",G,[t("ul",N,[t("li",S,[s(e,{class:i([{"layoutmark-pen":a.$route.path==="/FrontPage"},"nav-link fw-bolder text-dark fs-6"]),"aria-current":"page",to:"/FrontPage"},{default:o(()=>[O]),_:1},8,["class"])]),t("li",Q,[s(e,{class:i(["nav-link fw-bolder text-dark fs-6",{"layoutmark-pen":a.$route.path==="/CourseOverview"}]),"aria-current":"page",to:"/CourseOverview"},{default:o(()=>[j]),_:1},8,["class"])]),t("li",z,[s(e,{class:i(["nav-link fw-bolder text-dark fs-6",{"layoutmark-pen":a.$route.path==="/Quesiton"}]),"aria-current":"page",to:"/Quesiton"},{default:o(()=>[A]),_:1},8,["class"])]),t("li",D,[s(e,{onClick:r[0]||(r[0]=at=>_.chagepage(4)),class:"nav-link fw-bolder text-dark fs-6 position-relative","aria-current":"page",to:"/Cartview"},{default:o(()=>[E,t("span",q,[n(w(a.getnum)+" ",1),H])]),_:1})])])],512)])]),s(p),t("div",I,[J,t("div",K,[t("p",M,[U,s(e,{class:"nav-link text-dark fs-6 d-inline","aria-current":"page",to:"login"},{default:o(()=>[W]),_:1})]),X])])],64)}const it=g(V,[["render",Y]]);export{it as default};
