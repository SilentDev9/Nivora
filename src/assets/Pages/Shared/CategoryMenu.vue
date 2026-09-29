<template>
  <nav class="category-menu">
    <div class="cuntainer">
      <div>
        <router-link to="/Login"><i class="fa fa-user-circle"></i></router-link>
        <a><i class="fa fa-download"></i></a>
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
          <span v-on:click="OpenGrouping">دسته بندی </span
          ><i class="fa fa-caret-left " :class="{ routateIcon: clickMenu }">
          </i>
          <br />
          <br />
          <ul class="grouping" :class="{ 'active--grouping ': isGroupingOpne }">
            <li>اکشن</li>
            <li>درام</li>
            <li>کمدی</li>
            <li>ترسناک</li>
            <li>جنایی</li>
          </ul>
        </li>

        <li></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      isMenuOpen: false,
      isGroupingOpne: false,
      clickMenu: false
    };
  },
  methods: {
    clickHandler() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    OpenGrouping() {
      this.isGroupingOpne = !this.isGroupingOpne;
      this.clickMenu = !this.clickMenu;
    }
  }
};
</script>

<style scoped>
.category-menu {
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  margin: 0;
  z-index: 1000;
  box-shadow: 0 4px 24px rgba(139, 0, 0, 0.22);
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
  font-size: 1.35rem;
  cursor: pointer;
}
.menuMobile {
  position: fixed;
  top: 0;
  right: -100%;
  width: min(360px, 86vw);
  height: 100dvh;
  background: var(--surface);
  padding: 90px 20px 30px;
  overflow-y: auto;
  transition: right 0.3s ease;
  z-index: 1;
  direction: rtl;
  font-size: 1.05rem;
  color: var(--text);
  box-shadow: -10px 0 35px rgba(0,0,0,.2);
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
</style>
