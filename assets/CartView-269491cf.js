import{b as y,_ as v,o,c,d as t,t as n,m as p,r as a,e as r,F as h,A as $,w as f,C as w}from"./index-329b1518.js";import{c as _}from"./cart-b05fa151.js";import{S as k}from"./StepCirclelist-285daf63.js";const T={props:["item"],methods:{...y(_,["deleteitem"]),DeleteItem(s){this.deleteitem(s)}}},x={class:"cart-item"},I={class:"cart-content"},B=["src"],N={class:"cart-content-title"},V={class:"cart-content-price"},D={class:"trash-icon"},S=t("i",{class:"bi bi-trash3-fill"},null,-1),L=[S];function A(s,i,e,b,C,l){return o(),c("div",x,[t("div",I,[t("img",{class:"img-fluid",src:e.item.product.imageUrl,alt:"購物車圖片"},null,8,B),t("div",N,[t("p",null,n(e.item.product.category)+"-"+n(e.item.product.title),1)]),t("div",V,[t("p",null,"NT$ "+n(e.item.product.origin_price),1),t("p",null,"NT$ "+n(e.item.product.price),1)])]),t("div",D,[t("button",{type:"button",class:"border-0",onClick:i[0]||(i[0]=d=>l.DeleteItem(e.item.id))},L)])])}const F=v(T,[["render",A]]),R="/BigGo/assets/illustration01-438ed37b.svg";const E={components:{stepCirclelist:k,CartItem:F},data(){return{total:null}},computed:{...p(_,["gettal"]),...p(_,["carts"])},methods:{scrollToTop(){window.scrollTo(0,0)}},created(){},mounted(){}},G={class:"CartViewwrap"},O={key:0},U={class:"total-font fw-bold"},W={class:"step-btn"},j=t("button",{type:"button",class:"fw-bold px-5 py-2"}," 下一步,填寫資料 ",-1),q={key:1,class:"text-center step-btn"},z=t("p",{class:"fw-bold fs-2 mb-4"},"無任何訂單",-1),H=t("button",{type:"button",class:"fw-bold rounded-pill fs-5 px-5 py-2"}," 來去逛逛 ",-1),J=t("div",{class:"mt-5"},[t("img",{src:R,alt:"無任何訂單圖片",class:"img-fluid"})],-1),K=t("div",null,null,-1);function M(s,i,e,b,C,l){const d=a("stepCirclelist"),g=a("CartItem"),m=a("Router-Link");return o(),c(h,null,[t("div",G,[s.carts[0]?(o(),c("div",O,[r(d,{step:1}),(o(!0),c(h,null,$(s.carts,u=>(o(),w(g,{key:u.id,item:u},null,8,["item"]))),128)),t("p",U,"總計NT$ "+n(s.gettal),1),t("div",W,[r(m,{to:"/WriteData",onClick:l.scrollToTop},{default:f(()=>[j]),_:1},8,["onClick"])])])):(o(),c("div",q,[z,r(m,{to:"/CourseOverview"},{default:f(()=>[H]),_:1}),J]))]),K],64)}const Y=v(E,[["render",M]]);export{Y as default};