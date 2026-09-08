<template>
  <div class="countiner">
    <template v-if="product">
      <img :src="product.image" :alt="product.title" class="main-image" />
      <h1>{{ product.title }}</h1>
    </template>

    <!-- اگه id توی URL با هیچ محصولی مچ نشد (مثلاً کاربر دستی یه عدد اشتباه توی آدرس نوشت) -->
    <div class="not-found" v-else>
      <p>همچین محصولی پیدا نشد</p>
      <router-link to="/">برگرد به صفحه‌ی اصلی</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("Product", ["productById"]),

    // this.$route.params.id همون بخش از آدرسه که توی Routes.js با ":id" مشخص کردیم؛
    // یعنی برای /ProductViwe/3 مقدارش میشه "3"
    product() {
      return this.productById(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.countiner {
  margin: 4%;
  padding: 24px;
  background-color: var(--surface);
  border-radius: 10px;
  text-align: center;
}
.main-image {
  width: 100%;
  max-width: 420px;
  border-radius: 10px;
  border: 1px solid var(--line);
}
h1 {
  margin-top: 18px;
  font-size: 24px;
}
.not-found {
  color: var(--dim);
}
</style>
