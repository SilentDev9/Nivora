<template>
  <div>
    <app--header></app--header>
    <product--proposed></product--proposed>
    <product--derama></product--derama>
    <product--irani></product--irani>

    <app--footer></app--footer>
  </div>
</template>

<script>
import AppHeader from "../Shared/AppHeader.vue";
import ProductProposed from "../Product/ProductProposed.vue";
import Appfooter from "../Shared/Appfooter.vue";
import productIrani from "../Product/productIrani.vue";
import productDerama from "../Product/productDerama.vue";
export default {
  components: {
    "app--header": AppHeader,
    "product--proposed": ProductProposed,
    "app--footer":Appfooter,
    'product--irani':productIrani,
    'product--derama':productDerama
  }
};
</script>
