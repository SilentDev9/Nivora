<template>
  <Transition>
    <div class="contuiner">
      <div class="panel--hember" :class="{ 'panel--active': isPanelMobile }">
        <ul>
          <li v-on:click="clickdashboard" :class="{ 'menu--activ': dashboard }">
            <i class="fa fa-home"></i><span>داشبورد</span>
          </li>
          <li v-on:click="clickfilme" :class="{ 'menu--activ': filme }">
            <i class="fa fa-film"></i><span>فیلم ها</span>
          </li>
          <li v-on:click="clickserial" :class="{ 'menu--activ': serial }">
            <i class="fa fa-file-movie-o"></i><span>سریال ها</span>
          </li>
          <li v-on:click="clicklicked" :class="{ 'menu--activ': licked }">
            <i class="fa fa-heart"></i><span>علاقمندی ها</span>
          </li>
          <li v-on:click="clickseting" :class="{ 'menu--activ': seting }">
            <i class="fa fa-gear"></i><span>تنظیمات</span>
          </li>
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
            <router-link to="/">
 <i class="fa fa-home"></i>
            </router-link>

          </div>
        </header>
        <div class="user--welcome">
          <div class="user--imge"></div>
          <span class="text--welcom">خوش امدی . {{ nameUser }}</span>
          <Transition name="text-fade" mode="out-in">
            <span :key="currentText" class="text--chenge">{{
              texts[currentText]
            }}</span>
          </Transition>
        </div>
        <br />
        <div class="user--visited">
          <ul>
            <li>
              <span>{{ test }}</span> <span>علاقعه مندی ها</span>
              <i class="fa fa-heart"></i>
            </li>
            <li>
              <span>{{ test }}</span> <span>فیلم ذخیره شده</span>
              <i class="fa fa-save"></i>
            </li>
            <li>
              <span>{{ test }}</span> <span>سریال دیده شده</span>
              <i class="fa fa-television"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      sunOrmoon: "☾",
      isLight: false,
      test: 0,
      nameUser: "محمد امین",
      texts: [
        "امروز داستان جدید در انتظار توست ...",
        "فیلم ها فقط سرگرمی نیستند .  آن ها پنچره ای به دنیای دیگرند",
        "گاهی بهترین سفر . از روی صفحه شروع میشود",
        "هر فیلم پنچره ای به دنیای دیگر است"
      ],
      currentText: 0,
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
  },
  mounted() {
    setInterval(() => {
      this.currentText = (this.currentText + 1) % this.texts.length;
    }, 7000);
  }
};
</script>

<style scoped>
.contuiner {
  background-color: var(--bg);
  height: 100vh;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
}
.theme {
  background-color: transparent;
  color: var(--text);
  font-size: 2.2em;
}
header i {
  font-size: 2em;
  transition: all 0.5s;
}
button {
  background-color: transparent;
  border: none;
  margin-right: 20px;
}
.user--welcome {
  background-image: url("../../img/ad5c36ed-639b-43ed-8e5a-a56dcdc579f5.png");
  background-position: 0px -7px;
  background-size: cover;
  height: 150px;
  margin: 0 3%;
  border-radius: 20px;
  text-align: right;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 15px;
  border: 2px solid var(--accent);
}
.user--welcome span {
  color: white;
  display: block;
  direction: rtl;
  background: linear-gradient(145deg, var(--line), var(--help));
  border-radius: 50px;
  padding: 1px 4px;
}
.text--welcom {
  font-weight: 900;
  font-size: 1.1em;
}
.text--chenge {
  font-size: 0.8em;
  font-weight: 600;
}
.user--imge {
  width: 20%;
  height: 50px;
  background-size: cover;
  border-radius: 50px;
  margin: 5px;
}
.text-fade-enter-active,
.text-fade-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}
.text-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.text-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.user--visited ul {
  display: flex;
  padding: 0px;
  justify-content: space-around;
}
.user--visited li {
  background-color: var(--line);
  border: 3px solid var(--surface);
  border-radius: 20px;
  width: 30%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  align-items: stretch;
  padding: 20px 0px;
  z-index: 0;
}
.user--visited li span {
  font-size: 0.8em;
  font-weight: 800;
}
.user--visited li i {
  color: var(--accent);
  padding: 0px 5px;
  font-size: 1.3em;
}
.user--visited span:first-child {
  position: absolute;
  bottom: 20%;
}
@media (max-width: 400px) {
  .user--visited li span {
    font-size: 0.6em;
    font-weight: 800;
  }
  .user--visited li i {
    color: var(--accent);
    padding: 0px 5px;
    font-size: 1em;
  }
}

/* panell--mobile */

.panel--hember {
  width: 40%;
  height: 100vh;
  background-image: linear-gradient(100deg, var(--surface), var(--bg));
  border: 3px solid var(--line);
  border-radius: 0px 10px 10px 0px;
  position: absolute;
  left: -300px;
  z-index: 100;
  transition: all ease-in-out 0.8s;
  padding: 20% 0;
}

.buttun--panel {
  z-index: 101;
  text-align: left;
  width: 25%;
  display: flex;
  align-items: self-end;
}

.buttun--panel span {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.7em;
}
.panel--active {
  left: 0;
}
.button--Panel--active {
  color: var(--accent);
  transition: all 0.5s;
}
button {
  color: var(--text);
}

.panel--hember ul {
  border-bottom: 1.5px solid var(--line);
  border-top: 1.5px solid var(--line);
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 10px;
}
.panel--hember ul li {
  width: 100%;
  height: 50px;
  margin: 10px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  font-weight: 600;
  font-size: 1em;
  position: relative;
  border-radius: 10px;
}
.panel--hember ul li span {
  padding: 30px;
}
.menu--activ {
  position: absolute;
  background-color: rgb(168, 2, 2);
  font-weight: 800;
  transition: all ease-in 0.2s;
}
</style>
