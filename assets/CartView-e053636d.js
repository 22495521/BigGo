import{b as C,_ as p,o as s,c as o,d as t,t as c,m as g,r as a,e as l,F as m,x as y,w as u,z as w}from"./index-322df4d3.js";import{c as f}from"./cart-0eb58cb9.js";import{S as k}from"./StepCirclelist-10c917fb.js";const x={props:["item"],methods:{...C(f,["deleteitem"])}},B={class:"cart-item"},N={class:"cart-content"},I=["src"],S={class:"cart-content-title"},V={class:"cart-content-price"},L={class:"trash-icon"},T=t("i",{class:"bi bi-trash3-fill"},null,-1),D=[T];function F(n,i,e,h,v,b){return s(),o("div",B,[t("div",N,[t("img",{class:"img-fluid",src:e.item.product.imageUrl,alt:"購物車圖片"},null,8,I),t("div",S,[t("p",null,c(e.item.product.category)+"-"+c(e.item.product.title),1)]),t("div",V,[t("p",null,"NT$ "+c(e.item.product.origin_price),1),t("p",null,"NT$ "+c(e.item.product.price),1)])]),t("div",L,[t("button",{type:"button",class:"border-0",onClick:i[0]||(i[0]=r=>n.deleteitem(e.item.id))},D)])])}const R=p(x,[["render",F]]),z="/BigGo/assets/illustration01-438ed37b.svg";const A={components:{stepCirclelist:k,CartItem:R},computed:{...g(f,["carts"])},created(){},mounted(){}},E={class:"wrap"},G={key:0},O=t("p",{class:"total-font fw-bold"},"總計NT$ 7500",-1),U={class:"step-btn"},W=t("button",{type:"button",class:"fw-bold"}," 下一步,填寫資料 ",-1),j={key:1,class:"text-center step-btn"},q=t("p",{class:"fw-bold fs-2 mb-4"},"無任何訂單",-1),H=t("button",{type:"button",class:"fw-bold rounded-pill"}," 來去逛逛 ",-1),J=t("div",{class:"mt-5"},[t("img",{src:z,alt:"無任何訂單圖片",class:"img-fluid"})],-1),K=t("div",null,null,-1);function M(n,i,e,h,v,b){const r=a("stepCirclelist"),$=a("CartItem"),_=a("Router-Link");return s(),o(m,null,[t("div",E,[n.carts[0]?(s(),o("div",G,[l(r),(s(!0),o(m,null,y(n.carts,d=>(s(),w($,{key:d.id,item:d},null,8,["item"]))),128)),O,t("div",U,[l(_,{to:"/WriteData"},{default:u(()=>[W]),_:1})])])):(s(),o("div",j,[q,l(_,{to:"/CourseOverview"},{default:u(()=>[H]),_:1}),J]))]),K],64)}const Y=p(A,[["render",M]]);export{Y as default};
