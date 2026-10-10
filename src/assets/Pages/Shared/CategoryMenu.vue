<template>
  <div class="category-menu">
    <div class="cuntainer">
      <div>
        <router-link to="/Login"><i class="fa fa-user-circle"></i></router-link>

        <button
          class="theme-toggle"
          :class="{ light: isLight }"
          @click="toggleTheme"
        >
          <span class="moon">☾</span> <span class="sun">☀</span>
        </button>
      </div>

      <div class="category-item">
        <a v-on:click="clickHandler">
          <i
            class="fa fa-align-justify "
            :class="{ 'fa fa-outdent': isMenuOpen }"
          ></i>
        </a>
      </div>
    </div>

    <div class="menuMobile" :class="{ 'menu--active': isMenuOpen }">
      <ul>
        <li>
          <hr />
          <br />
          <div class="menuMobile--header">
            <span v-on:click="OpenGrouping">دسته بندی </span
            ><i class="fa fa-caret-left " :class="{ routateIcon: clickMenu }">
            </i>
          </div>
          <ul class="grouping" :class="{ 'active--grouping ': isGroupingOpne }">
            <li>اکشن</li>
            <li>درام</li>
            <li>کمدی</li>
            <li>ترسناک</li>
            <li>جنایی</li>
          </ul>
        </li>
        <br />
        <hr />
        <div class="menuMobile--nav">
          <router-link to="/Login/about"><span>ارتباط با ما</span></router-link>
          <router-link to="/Login/about"><span>پشتیبانی</span></router-link>
        </div>
      </ul>
    </div>
    <header>
      <div class="loginAndCheangeTm">
        <div>
          <router-link to="/Login"
            ><button><i class="fa fa-user-circle"></i></button
          ></router-link>
        </div>
        <div>
          <button
            class="theme-toggle"
            :class="{ light: isLight }"
            @click="toggleTheme"
          >
            <span class="moon">☾</span> <span class="sun">☀</span>
          </button>
        </div>
      </div>
      <div>
        <div><span class="theNivora">The Nivora WebSite</span></div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isGroupingOpne: false,
      clickMenu: false,
      isLight: false
    };
  },
  methods: {
    clickHandler() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    OpenGrouping() {
      this.isGroupingOpne = !this.isGroupingOpne;
      this.clickMenu = !this.clickMenu;
    },
    toggleTheme() {
      this.isLight = !this.isLight;

      document.documentElement.setAttribute(
        "data-theme",
        this.isLight ? "light" : "dark"
      );
    }
  },
  components: {}
};
</script>

<style scoped>
.category-menu {
  background-color: transparent;
  margin: 0;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.cuntainer {
  width: 100%;
  min-height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px;
}
.cuntainer > div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cuntainer i {
  position: static;
  margin: 0;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
}
.menuMobile {
  position: fixed;
  top: 0;
  right: -100%;
  width: min(360px, 86vw);
  height: 100dvh;
  background: var(--surface);
  padding: 90px 20px 30px;
  transition: right 0.3s ease;
  z-index: 1;
  direction: rtl;
  font-size: 1.05rem;
  color: var(--text);
  box-shadow: -10px 0 35px rgba(0, 0, 0, 0.2);
}
.menuMobile--header {
  display: flex;
  align-items: center;
}
.menuMobile--header i {
  padding: 5px;
}
.menu--active {
  right: 0;
}
button {
  background-color: transparent;
  color: var(--text);
  border: none;
}
.category-item {
  z-index: 2;
}
.menuMobile span {
  display: inline-block;
  padding: 5px;
  font-weight: 800;
  font-size: 1.3rem;
}
.menuMobile--nav {
  display: flex;
  justify-content: space-around;
}
li {
  list-style-type: none;
}
ul {
  padding: 0;
}
.grouping {
  display: none;
}
.grouping li {
  display: inline-block;
  background-color: var(--surface);
  border-radius: 10px;
  padding: 6px 10px;
  margin: 5px;
  border-bottom: 1px solid var(--line);
}
.menuMobile i {
  transition: all ease 0.5s;
}
.active--grouping {
  display: block;
}
.routateIcon {
  transition: all ease 0.5s;
  transform: rotate(-90deg);
  color: var(--accent);
}
a {
  color: var(--text);
}
header {
  display: none;
}
@media (min-width: 1024px) {
  .cuntainer {
    display: none;
  }
  header {
    display: flex;
    background: linear-gradient(
      145deg,
      var(--surface),
      rgba(229, 52, 44, 0.035)
    );
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--line);
  }
  header i {
    font-size: 2rem;
    padding: 20px;
  }
  .theNivora {
    color: var(--accent);
    font-size: 1.7rem;
    padding: 10px;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: 900;

    text-shadow: 1px 1px 1px var(--dim);
  }

  .loginAndCheangeTm {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .category-menu {
    position: relative;
  }
}
</style>
