<template>
  <Transition>
    <div class="contuiner">
      <div>
        <header>
          <div><i class="fa fa-bars"></i></div>
          <div>
            <button
              class="theme-chenge"
              :class="{ light: isLight }"
              @click="toggleTheme"
            >
              <span class="theme">{{ sunOrmoon }}</span>
            </button>
            <i class="fa fa-bell-o"></i>
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
              <span >{{ test }}</span>
              <span >علاقعه مندی ها</span>
              <i class="fa fa-heart"></i>
            </li>
            <li>
              <span>{{ test }}</span>
              <span >فیلم ذخیره شده</span>
              <i class="fa fa-save"></i>
            </li>
            <li>
              <span >{{ test }}</span>
              <span >سریال دیده شده</span>
              <i class="fa fa-television"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="panel--hember">

</div> -->
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
      currentText: 0
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
  padding: 20px;
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
.user--visited span:first-child{
position: absolute;
bottom: 20%;
}

</style>
