import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/index.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
