<template>
  <div class="countiner">
    <div class="product--header"><span>پیشنهادی</span></div>
    <div class="product--visite">
      <ul>
        <li v-for="product in proposedProducts" :key="product.id">
          <router-link :to="'/ProductViwe/' + product.id">
            <img :src="product.image" :alt="product.title" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("Product", ["proposedProducts"])
  }
};
</script>

<style scoped>
.countiner {
  margin-top: 18px;
}
</style>
