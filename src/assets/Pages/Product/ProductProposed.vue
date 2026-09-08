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
    // به‌جای this.$store.getters['Product/proposedProducts']، مستقیم می‌نویسیم this.proposedProducts
    ...mapGetters("Product", ["proposedProducts"])
  }
};
</script>

<style scoped>
.countiner {
  margin: 4%;
  height: 510px;
  background-color: var(--surface);
}
.product--header {
  margin: 5px;
  border-bottom: 2px solid var(--line);
  width: 90%;
  height: 30px;
  padding: 20px;
  text-align: center;
  font-size: 22px;
}
.product--visite ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  margin: 0;
}
.product--visite li img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--line);
}
</style>
