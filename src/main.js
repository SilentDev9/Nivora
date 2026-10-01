import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import { Routes } from "./Routes";
import store from "./Store/store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: "hash"
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
