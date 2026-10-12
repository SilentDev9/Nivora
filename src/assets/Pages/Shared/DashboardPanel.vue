<template>
  <div>
    <div class="panel--hember" :class="{ 'panel--active': isPanelMobile }">
      <ul>
        <router-link to="/Dashboard">
          <li :class="{ 'menu--activ': $route.path === '/Dashboard' }">
            <i class="fa fa-home"></i><span>داشبورد</span>
          </li>
        </router-link>
        <router-link to="/Dashboard/films">
          <li :class="{ 'menu--activ': $route.path === '/Dashboard/films' }">
            <i class="fa fa-film"></i><span>فیلم ها</span>
          </li>
        </router-link>
        <router-link to="/Dashboard/series">
          <li :class="{ 'menu--activ': $route.path === '/Dashboard/series' }">
            <i class="fa fa-file-movie-o"></i><span>سریال ها</span>
          </li>
        </router-link>
        <router-link to="/Dashboard/likes">
          <li :class="{ 'menu--activ': $route.path === '/Dashboard/likes' }">
            <i class="fa fa-heart"></i><span>علاقمندی ها</span>
          </li>
        </router-link>
        <router-link to="/Dashboard/settings">
          <li :class="{ 'menu--activ': $route.path === '/Dashboard/settings' }">
            <i class="fa fa-gear"></i><span>تنظیمات</span>
          </li>
        </router-link>
      </ul>
    </div>
    <div>
      <header>
        <div class="buttun--panel">
          <div>
            <button
              :class="{ 'button--Panel--active': isPanelMobile }"
              v-on:click="openPanelMobile"
            >
              <i class="fa fa-bars"></i>
            </button>
          </div>

          <div><span>Nivora</span></div>
        </div>

        <div>
          <button
            class="theme-chenge"
            :class="{ light: isLight }"
            @click="toggleTheme"
          >
            <span class="theme">{{ sunOrmoon }}</span>
          </button>
          <router-link to="/"> <i class="fa fa-home"></i> </router-link>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import { getTheme, toggleTheme } from "../../../composables/useTheme";
export default {
  data() {
    return {
      sunOrmoon: getTheme() === "light" ? "☀" : "☾",
      isLight: getTheme() === "light",
      isPanelMobile: false
    };
  },
  methods: {
    toggleTheme() {
      this.isLight = toggleTheme() === "light";
      this.sunOrmoon = this.isLight ? "☀" : "☾";
    },
    openPanelMobile() {
      this.isPanelMobile = !this.isPanelMobile;
    },
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px clamp(16px, 4vw, 56px);
  min-height: 76px;
  position: relative;
  z-index: 30;
}
header i {
  font-size: 1.65rem;
  transition: 0.25s;
  color: var(--text);
}
.buttun--panel {
  display: flex;
  align-items: center;
  gap: 14px;
  width: auto;
  direction: ltr;
  z-index: 1001;
}
.buttun--panel button {
  margin: 0;
  padding: 8px;
  color: var(--text);
}
button {
  background-color: transparent;
  border: none;
}
.buttun--panel span {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.55rem;
  font-weight: 800;
  letter-spacing: 0.5px;
}
.theme {
  background: transparent;
  color: var(--text);
  font-size: 2rem;
}
header > div:last-child {
  display: flex;
  align-items: center;
  gap: 14px;
  direction: ltr;
}
header > div:last-child > a {
  width: auto;
  color: var(--text);
}
.panel--hember {
  width: min(390px, 88vw);
  height: 100dvh;
  background: linear-gradient(135deg, var(--surface), var(--bg));
  border: 1px solid var(--line);
  border-radius: 0 18px 18px 0;
  position: fixed;
  top: 0;
  left: -110%;
  z-index: 100;
  transition: left 0.45s ease;
  padding: 96px 20px 30px;
  box-shadow: 20px 0 60px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  direction: ltr;
  z-index: 1;
}
.panel--active {
  left: 0;
}
.panel--hember ul {
  border-bottom: 1px solid var(--line);
  border-top: 1px solid var(--line);
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  margin: 0;
}
.panel--hember ul li {
  width: 100%;
  height: 54px;
  margin: 5px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 18px;
  font-weight: 700;
  font-size: 1rem;
  position: relative;
  border-radius: 14px;
  gap: 14px;
  direction: ltr;
}
.panel--hember ul li span {
  padding: 0;
  direction: rtl;
}
.panel--hember ul a {
  width: 100%;
}
.menu--activ {
  background: linear-gradient(135deg, #e5342c, #ff7a18);
  font-weight: 800;
  color: #fff;
  box-shadow: 0 8px 25px rgba(229, 52, 44, 0.2);
}
.panel--hember li i {
  width: 24px;
  text-align: center;
  color: var(--accent);
}
.menu--activ i {
  color: #fff !important;
}
</style>
