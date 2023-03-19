import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import tippy from "@/plugins/vue-tippy"; // add  vue tippy
import "@/plugins/vee-validate"; // add  vee-validate components and rules
import "@/plugins/ui-components"; // add  ui components
import "@/assets/scss/index.scss"; // add  all scss files
Vue.config.productionTip = false;
Vue.prototype.$publicPath =
  process.env.NODE_ENV === "production" ? "/abz.agency-test-task/" : "/";

new Vue({
  router,
  store,
  tippy,
  render: (h) => h(App),
}).$mount("#app");
