import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/index.css";

Vue.prototype.$apiUrl = "http://localhost:3080";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
