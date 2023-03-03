import{A as n}from"./aos-6fadb60d.js";import{_ as a,L as p,r as h,o as i,c as d,d as x,w as u,b as t,t as s,s as _,e as f,v as b,F as m,f as g}from"./index-86a55d92.js";const v="/BigGo/assets/Section_01_illustration01-279ef76d.svg",y="/BigGo/assets/Section_01_avatar-c7d2fe24.png";const w={components:{Loading:p},data(){return{id:"",url:"",path:"",product:{},color:"red",isLoading:!1}},methods:{getId(){this.id=this.$route.params.id},getCourse(){this.isLoading=!0;const r=`${this.url}api/${this.path}/product/${this.id}`;this.$http.get(r).then(e=>{this.product=e.data.product,this.isred(),this.isLoading=!1}).catch(e=>{console.log(e)})},isred(){this.product.category=="免費課程"?this.color="yellow":this.product.category=="中級班"?this.color="yellow":this.product.category=="段位班"?this.color="yellow":this.color="red"}},created(){this.url="https://vue3-course-api.hexschool.io/v2/",this.path="biggo",this.getId(),this.getCourse()},mounted(){n.init({duration:2e3})}},C=t("div",{class:"loadingio-spinner-dual-ball-laqyobj2qgl"},[t("div",{class:"ldio-sh19xg6jfo"},[t("div"),t("div"),t("div")])],-1),j={class:"container position-relative"},k=t("div",{class:"car-wrapper position-absolute w-100"},[t("img",{src:v,alt:"car",class:"car","data-aos":"car-animation"})],-1),L={key:0,class:"mx-auto",style:{"max-width":"1156px"}},N={class:"px-4 px-md-0"},z={class:"fw-bolder text-center text-md-start",style:{"font-size":"40px margin-top:80px","margin-bottom":"40px","margin-top":"80px"}},B={class:"p-5 py-lg-7 flex-md-row justify-content-md-center",style:{"box-shadow":"2px 2px 8px rgba(0, 0, 0, 0.25)","border-radius":"12px"}},S={class:"d-flex flex-column flex-lg-row"},V={class:"rowwidth d-flex align-items-start"},D={class:"pt-lg-4"},T=["src"],q={class:"rowwidth ps-lg-5"},A={class:"border-bottom border-2 border-dark text-center text-md-start py-4"},F={class:"font-title fw-bold"},G=t("br",null,null,-1),I={class:"font-content"},U={class:"font-content py-2"},E={class:"p-4 p-md-1 px-md-4 text-end",style:{"background-color":"#f6f6f6"}},O={class:"fs-6 text-decoration-line-through",style:{color:"#909090"}},H=t("br",null,null,-1),J={class:"fs-2 fw-bolder",style:{color:"#6f6f6f"}},K={class:"text-md-end text-center mt-5"},M=t("i",{class:"bi bi-cart-fill me-3 btn-icon"},null,-1),P={class:"px-4 px-md-0"},Q=t("h2",{class:"fw-bolder text-center text-md-start",style:{"font-size":"40px margin-top:80px","margin-bottom":"40px","margin-top":"80px"}}," 課程大綱 ",-1),R={class:"d-flex flex-column p-5 flex-md-row justify-content-md-center",style:{"box-shadow":"2px 2px 8px rgba(0, 0, 0, 0.25)","border-radius":"12px"}},W={class:"d-flex flex-column outline"},X={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},Y={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},Z={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},$={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},tt={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},ot={class:"d-flex flex-column outline"},st={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},et={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},rt={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},it={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},dt={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},lt=g('<div class="px-5 px-md-0"><h2 class="fw-bolder text-center text-md-start" style="font-size:40px;margin-top:80px;margin-bottom:40px;"> 師資 </h2><div class="d-flex flex-column p-5 flex-md-row justify-content-md-center p-lg-6" style="box-shadow:2px 2px 8px rgba(0, 0, 0, 0.25);border-radius:12px;"><div class="teacher-img-w text-center pe-md-2 pe-lg-4"><img src="'+y+'" class="img-fluid" alt=""></div><div class="teacher-w pt-3 pt-md-0 ps-md-4 pe-lg-8 d-flex justify-content-center flex-column"><h2 class="font-teacher-title pb-3 fw-bold">大頭老師</h2><p class="font-teacher-content"> 段位：中華民國圍棋協會四段<br> 幽默風趣的教學風格、擅長各種比喻故事，讓不管是大朋友或小朋友都能快樂學圍棋。 </p></div></div></div><div class="mb-5 px-5 px-md-0"><h2 class="fw-bolder text-center text-md-start" style="font-size:40px;margin-top:80px;margin-bottom:40px;"> 課程小叮嚀 </h2><div class="d-flex flex-column p-5 justify-content-md-center" style="box-shadow:2px 2px 8px rgba(0, 0, 0, 0.25);border-radius:12px;"><p class="ps-3 pe-3 pe-md-5 py-3 bg-secondary font-conurse-talk" style="border-radius:12px;"> 壹 : 課程皆為線上課程，需準備一台電腦或手機。 </p><p class="ps-3 pe-3 pe-md-5 py-3 bg-secondary font-conurse-talk" style="border-radius:12px;"> 貳 : 喜歡實體練棋的學員可準備一組棋具。 </p></div></div>',2);function ct(r,e,nt,at,o,pt){const l=h("loading");return i(),d(m,null,[x(l,{active:o.isLoading,"onUpdate:active":e[0]||(e[0]=c=>o.isLoading=c),"can-cancel":!1},{default:u(()=>[C]),_:1},8,["active"]),t("div",j,[k,o.product.title?(i(),d("div",L,[t("div",N,[t("h2",z,s(o.product.category),1),t("div",B,[t("div",S,[t("div",V,[t("div",D,[t("img",{src:o.product.imageUrl,class:"img-fluid",style:{"border-radius":"16px"},alt:""},null,8,T)])]),t("div",q,[t("p",A,[t("span",F,s(o.product.title),1),G,t("span",I,"適合："+s(o.product.unit),1)]),t("p",U,s(o.product.description),1),t("div",E,[t("span",O,"NT$ "+s(o.product.origin_price),1),H,t("span",J,"NT$ "+s(o.product.price),1)])])]),t("div",K,[t("button",{type:"button",class:_(["rounded-pill fs-5",{btnred:o.color=="red",btnyellow:o.color=="yellow"}]),style:{width:"243px",height:"61px",padding:"12px 32px"}},[M,f("加入購物車 ")],2)])])]),t("div",P,[Q,t("div",R,[t("div",W,[t("div",X," 第一堂:"+s(o.product.content[0]),1),t("div",Y," 第二堂:"+s(o.product.content[1]),1),t("div",Z," 第三堂:"+s(o.product.content[2]),1),t("div",$," 第四堂:"+s(o.product.content[3]),1),t("div",tt," 第五堂:"+s(o.product.content[4]),1)]),t("div",ot,[t("div",st," 第六堂:"+s(o.product.content[5]),1),t("div",et," 第七堂:"+s(o.product.content[6]),1),t("div",rt," 第八堂:"+s(o.product.content[7]),1),t("div",it," 第九堂:"+s(o.product.content[8]),1),t("div",dt," 第十堂:"+s(o.product.content[9]),1)])])]),lt])):b("",!0)])],64)}const ut=a(w,[["render",ct]]);export{ut as default};
