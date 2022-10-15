import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import "./axios";
import store from "./vuex";

createApp(App).use(router).use(store).mount("#app");
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
