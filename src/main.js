import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import "./assets/custom.scss";
axios.defaults.baseURL='http://localhost:3306'
const app = createApp(App).use(router);
app.config.globalProperties.$http = axios
app.use(VueAxios, axios);
app.mount("#app");
