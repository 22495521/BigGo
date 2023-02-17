import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";
// import './assets/main.css'
import "./assets/helpers/all.scss";
const app = createApp(App);

app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);

app.mount("#app");
