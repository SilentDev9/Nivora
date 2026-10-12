<template>
  <div>
    <app--header></app--header>
    <product--proposed></product--proposed>
<propagande--fixedad></propagande--fixedad>
    <product--derama></product--derama>
    <product--irani></product--irani>
<propagande--fixedadtwo></propagande--fixedadtwo>
    <app--footer></app--footer>
  </div>
</template>

<script>
import AppHeader from "../Shared/AppHeader.vue";
import ProductProposed from "../Product/ProductProposed.vue";
import Appfooter from "../Shared/Appfooter.vue";
import productIrani from "../Product/productIrani.vue";
import productDerama from "../Product/productDerama.vue";
import fixedAd from "../Propaganda/fixedAd.vue";
import fixedAdTwo from "../Propaganda/fixedAdTwo.vue";
export default {
  components: {
    "app--header": AppHeader,
    "product--proposed": ProductProposed,
    "app--footer":Appfooter,
    'product--irani':productIrani,
    'product--derama':productDerama,
    'propagande--fixedad':fixedAd,
    'propagande--fixedadtwo':fixedAdTwo
  }
};
</script>
