import { createApp } from "vue";
import { createPinia } from "pinia";

//icon 使用
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
//
import App from "./App.vue";
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
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(LoadingPlugin);
app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);
app.mount("#app");
