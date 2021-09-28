import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import loadAxios from "./services/index";

loadAxios(Vue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
