import{_ as n,L as p,r as a,o as d,c as i,d as x,w as h,b as t,t as e,s as u,e as f,v as b,F as _,f as g}from"./index-8ed5a044.js";const m="/BigGo/assets/Section_01_avatar-c7d2fe24.png";const y={components:{Loading:p},data(){return{id:"",url:"",path:"",product:{},color:"red",isLoading:!1}},methods:{getId(){this.id=this.$route.params.id},getCourse(){this.isLoading=!0;const r=`${this.url}api/${this.path}/product/${this.id}`;this.$http.get(r).then(s=>{this.product=s.data.product,this.isred(),this.isLoading=!1}).catch(s=>{console.log(s)})},isred(){this.product.category=="免費課程"?this.color="yellow":this.product.category=="中級班"?this.color="yellow":this.product.category=="段位班"?this.color="yellow":this.color="red"}},created(){this.url="https://vue3-course-api.hexschool.io/v2/",this.path="biggo",this.getId(),this.getCourse()},mounted(){}},v=t("div",{class:"loadingio-spinner-dual-ball-laqyobj2qgl"},[t("div",{class:"ldio-sh19xg6jfo"},[t("div"),t("div"),t("div")])],-1),w={class:"container"},C={key:0,class:"mx-auto",style:{"max-width":"1156px"}},j={class:"px-4 px-md-0"},k={class:"fw-bolder text-center text-md-start",style:{"font-size":"40px margin-top:80px","margin-bottom":"40px","margin-top":"80px"}},L={class:"p-5 py-lg-7 flex-md-row justify-content-md-center",style:{"box-shadow":"2px 2px 8px rgba(0, 0, 0, 0.25)","border-radius":"12px"}},N={class:"d-flex flex-column flex-lg-row"},z={class:"rowwidth d-flex align-items-start"},V={class:"pt-lg-4"},B=["src"],D={class:"rowwidth ps-lg-5"},S={class:"border-bottom border-2 border-dark text-center text-md-start py-4"},T={class:"font-title fw-bold"},q=t("br",null,null,-1),F={class:"font-content"},I={class:"font-content py-2"},U={class:"p-4 p-md-1 px-md-4 text-end",style:{"background-color":"#f6f6f6"}},E={class:"fs-6 text-decoration-line-through",style:{color:"#909090"}},G=t("br",null,null,-1),A={class:"fs-2 fw-bolder",style:{color:"#6f6f6f"}},H={class:"text-md-end text-center mt-5"},J=t("i",{class:"bi bi-cart-fill me-3 btn-icon"},null,-1),K={class:"px-4 px-md-0"},M=t("h2",{class:"fw-bolder text-center text-md-start",style:{"font-size":"40px margin-top:80px","margin-bottom":"40px","margin-top":"80px"}}," 課程大綱 ",-1),O={class:"d-flex flex-column p-5 flex-md-row justify-content-md-center",style:{"box-shadow":"2px 2px 8px rgba(0, 0, 0, 0.25)","border-radius":"12px"}},P={class:"d-flex flex-column outline"},Q={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},R={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},W={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},X={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},Y={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},Z={class:"d-flex flex-column outline"},$={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},tt={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},ot={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},et={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},st={class:"bg-secondary text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold",style:{"line-height":"140%","border-radius":"12px"}},rt=g('<div class="px-5 px-md-0"><h2 class="fw-bolder text-center text-md-start" style="font-size:40px;margin-top:80px;margin-bottom:40px;"> 師資 </h2><div class="d-flex flex-column p-5 flex-md-row justify-content-md-center p-lg-6" style="box-shadow:2px 2px 8px rgba(0, 0, 0, 0.25);border-radius:12px;"><div class="teacher-img-w text-center pe-md-2 pe-lg-4"><img src="'+m+'" class="img-fluid" alt=""></div><div class="teacher-w pt-3 pt-md-0 ps-md-4 pe-lg-8 d-flex justify-content-center flex-column"><h2 class="font-teacher-title pb-3 fw-bold"> 大頭老師 </h2><p class="font-teacher-content"> 段位：中華民國圍棋協會四段<br> 幽默風趣的教學風格、擅長各種比喻故事，讓不管是大朋友或小朋友都能快樂學圍棋。 </p></div></div></div><div class="mb-5 px-5 px-md-0"><h2 class="fw-bolder text-center text-md-start" style="font-size:40px;margin-top:80px;margin-bottom:40px;"> 課程小叮嚀 </h2><div class="d-flex flex-column p-5 justify-content-md-center" style="box-shadow:2px 2px 8px rgba(0, 0, 0, 0.25);border-radius:12px;"><p class="ps-3 pe-3 pe-md-5 py-3 bg-secondary font-conurse-talk" style="border-radius:12px;"> 壹 : 課程皆為線上課程，需準備一台電腦或手機。 </p><p class="ps-3 pe-3 pe-md-5 py-3 bg-secondary font-conurse-talk" style="border-radius:12px;"> 貳 : 喜歡實體練棋的學員可準備一組棋具。 </p></div></div>',2);function dt(r,s,it,lt,o,ct){const l=a("loading");return d(),i(_,null,[x(l,{active:o.isLoading,"onUpdate:active":s[0]||(s[0]=c=>o.isLoading=c),"can-cancel":!1},{default:h(()=>[v]),_:1},8,["active"]),t("div",w,[o.product.title?(d(),i("div",C,[t("div",j,[t("h2",k,e(o.product.category),1),t("div",L,[t("div",N,[t("div",z,[t("div",V,[t("img",{src:o.product.imageUrl,class:"img-fluid",style:{"border-radius":"16px"},alt:""},null,8,B)])]),t("div",D,[t("p",S,[t("span",T,e(o.product.title),1),q,t("span",F,"適合："+e(o.product.unit),1)]),t("p",I,e(o.product.description),1),t("div",U,[t("span",E,"NT$ "+e(o.product.origin_price),1),G,t("span",A,"NT$ "+e(o.product.price),1)])])]),t("div",H,[t("button",{type:"button",class:u(["rounded-pill fs-5",{btnred:o.color=="red",btnyellow:o.color=="yellow"}]),style:{width:"243px",height:"61px",padding:"12px 32px"}},[J,f("加入購物車 ")],2)])])]),t("div",K,[M,t("div",O,[t("div",P,[t("div",Q," 第一堂:"+e(o.product.content[0]),1),t("div",R," 第二堂:"+e(o.product.content[1]),1),t("div",W," 第三堂:"+e(o.product.content[2]),1),t("div",X," 第四堂:"+e(o.product.content[3]),1),t("div",Y," 第五堂:"+e(o.product.content[4]),1)]),t("div",Z,[t("div",$," 第六堂:"+e(o.product.content[5]),1),t("div",tt," 第七堂:"+e(o.product.content[6]),1),t("div",ot," 第八堂:"+e(o.product.content[7]),1),t("div",et," 第九堂:"+e(o.product.content[8]),1),t("div",st," 第十堂:"+e(o.product.content[9]),1)])])]),rt])):b("",!0)])],64)}const pt=n(y,[["render",dt]]);export{pt as default};
