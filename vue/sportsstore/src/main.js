import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"

import store from "./store";
import router from "./router";

Vue.filter("currency", (value) =>
    new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(value));

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
