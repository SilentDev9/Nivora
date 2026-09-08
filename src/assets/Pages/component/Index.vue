<template>
  <div>
    <app--header></app--header>
    <product--proposed></product--proposed>
  </div>
</template>

<script>
import AppHeader from "../Shared/AppHeader.vue";
import ProductProposed from "../Product/ProductProposed.vue";
export default {
  components: {
    "app--header": AppHeader,
    "product--proposed": ProductProposed
  }
};
</script>
