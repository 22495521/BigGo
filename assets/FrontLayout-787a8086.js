import{_ as d,R as p,a as _,m,b as g,r as i,o as h,c as u,d as t,e as s,w as e,f as o,F as v,g as f,t as b}from"./index-322df4d3.js";import{c as n}from"./cart-0eb58cb9.js";import{_ as r}from"./Logo-75fbb69d.js";const x="/BigGo/assets/shopping_cart-0d9dc368.svg",k="/BigGo/assets/icon_line-558d82f8.svg",w="/BigGo/assets/icon_mail-8c581b8f.svg",y="/BigGo/assets/icon_facebook-172df7ce.svg",B="/BigGo/assets/icon_instagram-8b48b444.svg",R={components:{RouterView:p,RouterLink:_},data(){return{fullPage:!0,isLoading:!1}},computed:{...m(n,["getnum"])},methods:{...g(n,["getitem"])},mounted(){this.getitem()}},V={class:"navbar navbar-expand-md navbar-light bg-primary"},T={class:"container-fluid"},C=t("img",{src:r,alt:"",width:"226",height:"41",class:"d-inline-block align-text-top"},null,-1),F=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),G={class:"collapse navbar-collapse pe-3",id:"navbarText",ref:"navbarText"},L={class:"navbar-nav ms-auto"},N={class:"nav-item ps-3"},$={class:"nav-item ps-3"},P={class:"nav-item ps-3"},S={class:"nav-item ps-3"},j=t("img",{src:x,style:{width:"25px",height:"25px"},alt:"購物車icon",class:"position-relative"},null,-1),A={class:"position-absolute top-25 start-75 translate-middle badge rounded-pill",style:{background:"red"}},D=t("span",{class:"visually-hidden"},"items",-1),E={class:"bg-primary"},O=f('<div class="container d-flex flex-column flex-md-row align-items-center justify-content-md-center pt-5"><div class="pe-md-5 pb-4 pb-md-0"><img src="'+r+'" alt=""></div><div><a href="#"><img class="me-3" src="'+k+'" width="33px" height="33px" alt=""></a><a href="#"><img class="me-3" src="'+w+'" width="33px" height="33px" alt=""></a><a href="#"><img class="me-3" src="'+y+'" width="33px" height="33px" alt=""></a><a href="#"><img src="'+B+'" width="33px" height="33px" alt=""></a></div></div>',1),Q={class:"mt-6 mt-md-5 text-center pb-4 pb-md-2"},q={class:"mb-0"},z=t("p",null,"Copyright © 2023 大圍棋教室",-1);function H(c,I,J,K,M,U){const a=i("Router-Link"),l=i("RouterView");return h(),u(v,null,[t("nav",V,[t("div",T,[s(a,{class:"nav-link fw-bolder text-dark fs-6","aria-current":"page",to:"/FrontPage"},{default:e(()=>[C]),_:1}),F,t("div",G,[t("ul",L,[t("li",N,[s(a,{class:"nav-link fw-bolder text-dark fs-6","aria-current":"page",to:"/FrontPage"},{default:e(()=>[o("首頁")]),_:1})]),t("li",$,[s(a,{class:"nav-link fw-bolder text-dark fs-6","aria-current":"page",to:"/CourseOverview"},{default:e(()=>[o("課程總覽")]),_:1})]),t("li",P,[s(a,{class:"nav-link fw-bolder text-dark fs-6","aria-current":"page",to:"/Quesiton"},{default:e(()=>[o("問與答")]),_:1})]),t("li",S,[s(a,{class:"nav-link fw-bolder text-dark fs-6 position-relative","aria-current":"page",to:"/Cartview"},{default:e(()=>[j,t("span",A,[o(b(c.getnum)+" ",1),D])]),_:1})])])],512)])]),s(l),t("div",E,[O,t("div",Q,[t("p",q,[o(" 僅作練習使用，無任何商業用途 | "),s(a,{class:"nav-link text-dark fs-6 d-inline","aria-current":"page",to:"login"},{default:e(()=>[o("登入後台")]),_:1})]),z])])],64)}const Z=d(R,[["render",H]]);export{Z as default};
