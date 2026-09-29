<template>
  <div class="countiner">
    <div class="img--countiner" v-if="product">
      <img :src="product.image" :alt="product.title" class="main-image" />
      <h1>{{ product.title }}</h1>

      <div class="video--direction">
        <ul>
          <li>تایم : </li>
          <li>امتیاز :</li>
          <li>بازیگران :</li>
          <li>توضیحات :</li>
        </ul>
      </div>
    </div>

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

    product() {
      return this.productById(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.countiner {
  background-color: var(--surface);
  border-radius: 20px;
  color: var(--text);
  text-align: center;
  direction: rtl;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  margin: 70px;
  border: 5px solid var(--line);
  padding: 10px;
}
.countiner h1 {
  padding: 20px;
}
.img--countiner {
  width: 100%;
  height: 700px;
}
.img--countiner img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.video--direction{
  display: flex;
  background-color: var(--surface);
  font-weight: 700;
}
</style>
