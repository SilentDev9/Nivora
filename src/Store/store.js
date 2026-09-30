import Vue from "vue";
import Vuex from "vuex";
import Product from "./Modulse/Product";
import User from "./Modulse/User";
import Productderama from "./Modulse/productDerama";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Product,
    User,
    Productderama
  }
});
