<template>
  <div class="animate__animated  animate__slideInDown">
    <dashboard--panel></dashboard--panel>
    <div class="contuiner">
      <header><span>فیلم ها</span> <i class="fa fa-film"></i></header>
      <div
        class="section--falms"
        v-on:click="openProgressText1"
        :class="{ 'active--text': openText1 }"
      >
        <div class="section--visite">
          <img
            src="../../../img/Nivora_Posters_20/02 - درباره الی.png"
            alt=""
          />
          <progress max="100" value="78"></progress>

          <div><span>78%</span></div>
        </div>
        <div class="section--text">
          <p><span>فیلم درباره الی :</span> شما 78 درصد این فیلم را دیده اید</p>
          <button>ادامه ویدیو</button>
        </div>
      </div>
      <div
        class="section--falms"
        v-on:click="openProgressText2"
        :class="{ 'active--text': openText2 }"
      >
        <div class="section--visite">
          <img
            src="../../../img/Nivora_Posters_20/12 - آژانس شیشه ای.png"
            alt=""
          />
          <progress max="100" value="100"></progress>

          <div><span>100%</span></div>
        </div>
        <div class="section--text">
          <p>
            <span>فیلم آژانس شیشه ای :</span> شما 100 درصد این فیلم را دیده اید
          </p>
          <button>فیلم جدید</button>
        </div>
      </div>
      <div
        class="section--falms"
        v-on:click="openProgressText3"
        :class="{ 'active--text': openText3 }"
      >
        <div class="section--visite">
          <img
            src="../../../img/Nivora_Posters_20/05 - آواز گنجشک ها.png"
            alt=""
          />
          <progress max="100" value="39"></progress>

          <div><span>39%</span></div>
        </div>
        <div class="section--text">
          <p>
            <span>فیلم آواز گنجشک ها :</span> شما 39 درصد این فیلم را دیده اید
          </p>
          <button>ادامه ویدیو</button>
        </div>
      </div>
      <div
        class="section--falms"
        v-on:click="openProgressText4"
        :class="{ 'active--text': openText4 }"
      >
        <div class="section--visite">
          <img src="../../../img/Nivora_Posters_20/19 - برندگان.png" alt="" />
          <progress max="100" value="63"></progress>

          <div><span>78%</span></div>
        </div>
        <div class="section--text">
          <p><span>فیلم برندگان :</span> شما 63 درصد این فیلم را دیده اید</p>
          <button>ادامه ویدیو</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DashboardPanel from "../../Shared/DashboardPanel.vue";
export default {
  data() {
    return {
      openText1: false,
      openText2: false,
      openText3: false,
      openText4: false
    };
  },
  components: {
    "dashboard--panel": DashboardPanel
  },
  methods: {
    openProgressText1() {
      this.openText1 = !this.openText1;
    },
    openProgressText2() {
      this.openText2 = !this.openText2;
    },
    openProgressText3() {
      this.openText3 = !this.openText3;
    },
    openProgressText4() {
      this.openText4 = !this.openText4;
    }
  }
};
</script>

<style scoped>
.contuiner {
  direction: rtl;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  padding-bottom: 48px;
  overflow-x: hidden;
  transition: all ease 1s;
}
span {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
header {
  display: flex;
  background-color: var(--surface);
  padding: 5%;
  border: 3px solid var(--line);
  border-radius: 20px;
  text-align: right;
  font-size: 1.2rem;
  margin: 5%;
  justify-content: space-between;
  align-items: center;
}
header i {
  color: var(--accent);
}
.section--falms {
  margin: 5%;
  border-radius: 10px;
  text-align: center;
  direction: rtl;
  background-color: var(--surface);
  border: 2px solid var(--line);
  border-radius: 50px;
  height: 65px;
  overflow: hidden;
}

.section--visite {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
}
.section--falms progress {
  width: 60%;
  padding: 3%;
}
progress::-webkit-progress-bar {
  background: #e5342e;
}
progress::-moz-progress-bar {
  background: #e5342e;
}
progress::-webkit-progress-value {
  background: #e5342e;
}
.section--falms ul {
  padding: 0;
}

.section--falms img {
  width: 15%;
  border-radius: 50px;
  height: 60px;
  object-fit: cover;
}
.section--text {
  border-top: 2px solid var(--accent);
  margin: 10px;
}
.section--text button {
  width: 40%;
  padding: 1%;
  margin: 10px;
  color: var(--text);
  background-image: linear-gradient(120deg, var(--help), var(--accent));
  border: 3px solid var(--line);
}
.active--text {
  border-radius: 10px;
  height: auto;
}
.active--text img {
  border-radius: 10px;
}
</style>
