<template>
  <div class="countiner">
    <div class="product--header">
      <div><span class="text--propsed">Nivora Proposed</span></div>
      <div><span>پیشنهادی</span></div>
    </div>
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
  width: min(1200px, calc(100% - 32px));
  margin: 32px auto;
  padding: 28px;
  background: linear-gradient(145deg, var(--surface), rgba(229, 52, 44, 0.045));
  border: 2px solid var(--line);
  border-radius: 28px;
}

.product--header {
  width: 100%;
  margin: 0 0 18px;
  padding: 12px 8px;
  border-bottom: 2px solid var(--line);
  text-align: center;
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
}

.product--visite ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;
  margin: 0;
  padding: 8px 0;
}

.product--visite li {
  min-width: 0;
}
.text--propsed{
color: var(--accent);
}
.product--visite li img {
  display: block;
  width: 100%;
  aspect-ratio: 2 / 3;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--line);
}

@media (max-width: 1000px) {
  .product--visite ul {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  body {
    font-size: 15px;
  }

  .countiner {
    width: calc(100% - 20px);
    margin: 20px auto;
    padding: 16px;
    border-radius: 18px;
  }

  .product--visite ul {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }
}

@media (max-width: 420px) {
  .countiner {
    width: calc(100% - 12px);
    margin: 14px auto;
    padding: 12px;
  }

  .product--visite ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
}
</style>
