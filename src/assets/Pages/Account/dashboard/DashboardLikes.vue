<template>
  <div class="animate__animated  animate__slideInDown">
    <dashboard--panel></dashboard--panel>
    <div class="countinear">
      <header>
        <i class="fa fa-heart"></i> <span>فیلم های لایک شده</span>
        <i class="fa fa-heart"></i>
      </header>
      <div class="sectoin--like">
        <div v-for="movie in likedProducts" class="sectoin--list">
          <img
            :src="movie.image"
            :alt="movie.title"
          />
          <span>{{ movie.title }}</span>
        </div>
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
  height: 620px;
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
  height: 500px;
  margin: 22px 10px;
  border: 4px solid var(--line);
  border-radius: 40px;
}
.sectoin--list {
  width: 100%;
  height: 100px;
  background-color: var(--surface);
  border: 5px solid var(--accent);
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg);
}
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
