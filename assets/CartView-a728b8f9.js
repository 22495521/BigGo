import{b as $,_ as f,o as s,c as o,d as t,t as i,m as y,r as l,e as a,F as p,x as g,w as u,z as w}from"./index-043e2955.js";import{c as h}from"./cart-c77359ba.js";import{S as k}from"./StepCirclelist-7c20e38c.js";const x={props:["item"],methods:{...$(h,["deleteitem"])}},T={class:"cart-item"},B={class:"cart-content"},N=["src"],V={class:"cart-content-title"},I={class:"cart-content-price"},S={class:"trash-icon"},L=t("i",{class:"bi bi-trash3-fill"},null,-1),D=[L];function F(c,n,e,v,b,r){return s(),o("div",T,[t("div",B,[t("img",{class:"img-fluid",src:e.item.product.imageUrl,alt:"購物車圖片"},null,8,N),t("div",V,[t("p",null,i(e.item.product.category)+"-"+i(e.item.product.title),1)]),t("div",I,[t("p",null,"NT$ "+i(e.item.product.origin_price),1),t("p",null,"NT$ "+i(e.item.product.price),1)])]),t("div",S,[t("button",{type:"button",class:"border-0",onClick:n[0]||(n[0]=_=>c.deleteitem(e.item.id))},D)])])}const R=f(x,[["render",F]]),z="/BigGo/assets/illustration01-438ed37b.svg";const A={components:{stepCirclelist:k,CartItem:R},computed:{...y(h,["carts"])},methods:{scrollToTop(){window.scrollTo(0,0)}},created(){},mounted(){}},E={class:"CartViewwrap"},G={key:0},O=t("p",{class:"total-font fw-bold"},"總計NT$ 7500",-1),U={class:"step-btn"},W=t("button",{type:"button",class:"fw-bold px-5 py-2"}," 下一步,填寫資料 ",-1),j={key:1,class:"text-center step-btn"},q=t("p",{class:"fw-bold fs-2 mb-4"},"無任何訂單",-1),H=t("button",{type:"button",class:"fw-bold rounded-pill fs-5 px-5 py-2"}," 來去逛逛 ",-1),J=t("div",{class:"mt-5"},[t("img",{src:z,alt:"無任何訂單圖片",class:"img-fluid"})],-1),K=t("div",null,null,-1);function M(c,n,e,v,b,r){const _=l("stepCirclelist"),C=l("CartItem"),d=l("Router-Link");return s(),o(p,null,[t("div",E,[c.carts[0]?(s(),o("div",G,[a(_,{step:1}),(s(!0),o(p,null,g(c.carts,m=>(s(),w(C,{key:m.id,item:m},null,8,["item"]))),128)),O,t("div",U,[a(d,{to:"/WriteData",onClick:r.scrollToTop},{default:u(()=>[W]),_:1},8,["onClick"])])])):(s(),o("div",j,[q,a(d,{to:"/CourseOverview"},{default:u(()=>[H]),_:1}),J]))]),K],64)}const Y=f(A,[["render",M]]);export{Y as default};