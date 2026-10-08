<template>
  <div>
    <div class="panel--hember" :class="{ 'panel--active': isPanelMobile }">
      <ul>
        <router-link to="/Dashboard">
          <li v-on:click="clickdashboard" :class="{ 'menu--activ': dashboard }">
            <i class="fa fa-home"></i><span>داشبورد</span>
          </li>
        </router-link>
        <router-link to="/Dashboard/films">
          <li v-on:click="clickfilme" :class="{ 'menu--activ': filme }">
            <i class="fa fa-film"></i><span>فیلم ها</span>
          </li>
        </router-link>
        <router-link to="/Dashboard/series">
          <li v-on:click="clickserial" :class="{ 'menu--activ': serial }">
            <i class="fa fa-file-movie-o"></i><span>سریال ها</span>
          </li>
        </router-link>
        <router-link to="/Dashboard/likes">
          <li v-on:click="clicklicked" :class="{ 'menu--activ': licked }">
            <i class="fa fa-heart"></i><span>علاقمندی ها</span>
          </li>
        </router-link>
        <router-link to="/Dashboard/settings">
          <li v-on:click="clickseting" :class="{ 'menu--activ': seting }">
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
export default {
  data() {
    return {
      sunOrmoon: "☾",
      isLight: false,
      isPanelMobile: false,
      dashboard: true,
      filme: false,
      serial: false,
      licked: false,
      seting: false
    };
  },
  methods: {
    toggleTheme() {
      if (this.isLight == false) {
        this.isLight = !this.isLight;
        this.sunOrmoon = "☀";
        document.documentElement.setAttribute(
          "data-theme",
          this.isLight ? "light" : "dark"
        );
        return;
      }
      if (this.isLight == true) {
        this.isLight = !this.isLight;
        this.sunOrmoon = "☾";
      }
      document.documentElement.setAttribute(
        "data-theme",
        this.isLight ? "light" : "dark"
      );
    },
    openPanelMobile() {
      this.isPanelMobile = !this.isPanelMobile;
    },
    clickdashboard() {
      this.dashboard = true;
      this.filme = false;
      this.serial = false;
      this.licked = false;
      this.seting = false;
    },
    clickfilme() {
      this.dashboard = false;
      this.filme = true;
      this.serial = false;
      this.licked = false;
      this.seting = false;
    },
    clickserial() {
      this.dashboard = false;
      this.filme = false;
      this.serial = true;
      this.licked = false;
      this.seting = false;
    },
    clicklicked() {
      this.dashboard = false;
      this.filme = false;
      this.serial = false;
      this.licked = true;
      this.seting = false;
    },
    clickseting() {
      this.dashboard = false;
      this.filme = false;
      this.serial = false;
      this.licked = false;
      this.seting = true;
    }
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
