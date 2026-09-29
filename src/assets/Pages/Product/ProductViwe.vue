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
  width: min(1100px, calc(100% - 32px));
  background-color: var(--surface);
  border-radius: 20px;
  color: var(--text);
  text-align: center;
  direction: rtl;
  margin: 32px auto;
  border: 2px solid var(--line);
  padding: 16px;
}
.countiner h1 {
  padding: 10px;
  font-size: clamp(1.5rem, 4vw, 2.2rem);
}
.img--countiner {
  width: 100%;
}
.img--countiner .main-image {
  display: block;
  width: min(100%, 520px);
  height: auto;
  max-height: 760px;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 20px;
}
.video--direction {
  display: flex;
  justify-content: center;
  background-color: var(--surface);
  font-weight: 700;
  color: var(--text);
}
.video--direction ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  padding: 0;
}
.video--direction li {
  padding: 12px 8px;
  border: 1px solid var(--line);
  border-radius: 10px;
}
.not-found {
  width: 100%;
  padding: 40px 10px;
}

@media (max-width: 700px) {
  .countiner {
    width: calc(100% - 16px);
    margin: 20px auto;
    padding: 10px;
  }

  .img--countiner .main-image {
    border-radius: 14px;
  }

  .video--direction ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }
}
</style>
