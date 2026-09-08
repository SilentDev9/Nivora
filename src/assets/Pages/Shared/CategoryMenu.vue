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
import { RouterLink } from 'vue-router';

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
  z-index: 100;
  box-shadow: 9px 0px 50px rgba(139, 0, 0, 0.368);
}
.cuntainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
/* button{
  background-color:transparent;
  color: white;
  border: none;
} */
.cuntainer i {
  margin: 10px;
  font-size: 28px;
  cursor: pointer;
}
.menuMobile {
  position: fixed;
  top: 0;
  right: -100%;
  width: 60%;
  height: 100vh;
  background: var(--surface);
  padding: 90px 20px;
  transition: 0.3s ease;
  z-index: 1;
  direction: rtl;
  font-size: 1.4em;
  color: var(--text);
}
.menuMobile ul:hover {
  cursor: pointer;
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
  padding: 5px 5px 5px 10px;
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
  padding: 6px;
  margin: 5px;
  border-bottom: 1px solid var(--line);
}
.menuMobile i {
  transition: all ease 0.5s;
}
.grouping li:visited {
  background-color: darkred;
}
.active--grouping {
  display: block;
}
.theme-btn {
  color: var(--text);
}
.routateIcon {
  transition: all ease 0.5s;
  transform: rotate(-90deg);
  color: var(--accent);
}
a{
  color: var(--text);
}
</style>
