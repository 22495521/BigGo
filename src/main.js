import { createApp } from "vue";
import { createPinia } from "pinia";

import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
// 引入 VeeValidate 的驗證規則
import AllRules from "@vee-validate/rules";
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from "@vee-validate/i18n";
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

//icon 使用
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
//
import App from "./App.vue";
// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale("zh_TW");

import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

library.add(faThumbsUp);

// import './assets/main.css'
import "./assets/helpers/all.scss";
const app = createApp(App);

app.component("VField", Field);
app.component("VForm", Form);
app.component("ErrorMessage", ErrorMessage);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(LoadingPlugin);
app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);
app.mount("#app");
