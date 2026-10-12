<template>
  <div class="animate__animated  animate__slideInDown">
    <dashboard--panel></dashboard--panel>
    <div class="countinear">
      <header>
        <i class="fa fa-heart"></i> <span>فیلم های لایک شده</span>
        <i class="fa fa-heart"></i>
      </header>
      <div class="sectoin--like">
        <router-link
          v-for="movie in likedProducts"
          :key="movie.id"
          :to="'/ProductViwe/drama/' + movie.id"
          class="sectoin--list"
        >
          <img :src="movie.image" :alt="movie.title" />
          <span>{{ movie.title }}</span>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </router-link>
        <p v-if="!likedProducts.length" class="empty-likes">هنوز فیلمی به علاقه‌مندی‌ها اضافه نکرده‌ای.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DashboardPanel from "../../Shared/DashboardPanel.vue";
export default {
  components: {
    "dashboard--panel": DashboardPanel
  },
  computed: {
    ...mapGetters("Productderama", ["likedProducts"])
  }
};
</script>

<style scoped>
.countinear {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 300px; height: auto; padding-bottom: 20px;
  margin: 5%;
  border: 5px solid var(--line);
}
.countinear header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.countinear header i {
  font-size: 1.3rem;
  color: var(--accent);
}
.countinear header span {
  font-weight: 800;
  font-size: 1rem;
}
.sectoin--like {
  background-color: var(--bg);
  min-height: 240px; height: auto; padding: 12px;
  margin: 22px 10px;
  border: 4px solid var(--line);
  border-radius: 40px;
}
.sectoin--list {
  text-decoration: none;
  color: var(--text);
  width: 100%;
  height: 100px;
  background-color: var(--surface);
  border: 5px solid var(--accent);
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg);
  margin-bottom: 12px;
  overflow: hidden;
  transition: transform .2s ease, border-color .2s ease;
}
.sectoin--list:hover { transform: translateY(-2px); border-color: #ff3434; }
.sectoin--list > i { color: var(--accent); padding: 16px; }
.empty-likes { text-align: center; color: var(--dim); padding: 36px 12px; }
.sectoin--list img {
  height: 100%;
  border-radius: 35px 0px 0px 35px;
  width: 15%;
}
.sectoin--list span {
  font-size: 1.2rem;
  padding: 10px;
}
</style>
