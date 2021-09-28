import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import loadAxios from "./services/index";

loadAxios(Vue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
