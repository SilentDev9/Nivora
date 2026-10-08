<template>
  <div class="animate__animated animate__fadeIn">
    <div class="contuiner">
      <dashboard--panel></dashboard--panel>
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

      <div class="grouping">
        <div class="grouping--header">
          <span>دسته بندی</span><i class="fa fa-th-list"></i>
        </div>
        <div class="grouping--list">
          <ul>
            <li><span>اکشن</span><i class="fa fa-dollar"></i></li>
            <li><span>درام</span><i class="fa fa-heart-o"></i></li>
            <li><span>ترسناک</span><i class="fa fa-hand-rock-o"></i></li>
            <li><span>علمی تخیلی</span><i class="fa fa-reddit-alien"></i></li>
            <li><span>کمدی</span><i class="fa fa-sign-language"></i></li>
            <li><span>انیمیشن</span><i class="fa fa-lightbulb-o"></i></li>
          </ul>
        </div>
      </div>
      <div class="somting--work">
        <div class="somting--header">
          <span>فعالیت های اخیر</span><i class="fa fa-odnoklassniki"></i>
          <div class="somting--list">
            <ul>
              <li>
                <img
                  src="../../img/Nivora_Posters_20/12.png"
                  alt="اژانس شیشه ای"
                />
                <div>
                  <span class="somting--namefilm"
                    >تماشای فیلم {{ "اژانس شیشه ای" }}</span
                  >

                  <span class="somting--time">دیروز - 22:10</span>
                </div>
                <i class="fa fa-ticket"></i>
              </li>
              <li>
                <img
                  src="../../img/Nivora_Posters_20/05.png"
                  alt="اژانس شیشه ای"
                />
                <div>
                  <span class="somting--namefilm"
                    >لایک فیلم {{ "آواز گنجشک ها" }}</span
                  >

                  <span class="somting--time">چهارشنبه - 5:30</span>
                </div>
                <i class="fa fa-heart"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardPanel from "../Shared/DashboardPanel.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      test: 0,
      nameUser: "محمد امین",
      texts: [
        "امروز داستان جدید در انتظار توست ...",
        "فیلم ها فقط سرگرمی نیستند .  آن ها پنچره ای به دنیای دیگرند",
        "گاهی بهترین سفر . از روی صفحه شروع میشود",
        "هر فیلم پنچره ای به دنیای دیگر است"
      ],
      currentText: 0,

      dashboard: true,
      filme: false,
      serial: false,
      licked: false,
      seting: false
    };
  },
  components: {
    "dashboard--panel": DashboardPanel
  },
  mounted() {
    setInterval(() => {
      this.currentText = (this.currentText + 1) % this.texts.length;
    }, 7000);
  },
  computed:{
    ...mapGetters("Productderama",["likedProducts"])
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.contuiner {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  padding-bottom: 48px;
  overflow-x: hidden;
}
span {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.user--welcome {
  background-image: url("../../img/ad5c36ed-639b-43ed-8e5a-a56dcdc579f5.png");
  background-position: center;
  background-size: cover;
  min-height: 170px;
  margin: 0 auto 24px;
  width: min(1320px, 94%);
  border-radius: 22px;
  text-align: right;
  padding: 20px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border: 2px solid var(--accent);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.18);
}
.user--welcome span {
  color: #fff;
  display: block;
  direction: rtl;
  background: linear-gradient(
    145deg,
    rgba(38, 38, 46, 0.92),
    rgba(54, 0, 0, 0.8)
  );
  border-radius: 50px;
  padding: 5px 12px;
  max-width: 100%;
  text-align: right;
}
.text--welcom {
  font-weight: 900;
  font-size: 1.1em;
}
.text--chenge {
  font-size: 0.85em;
  font-weight: 600;
}
.user--imge {
  width: 72px;
  height: 72px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 0 0 4px;
  background-image: url("../../img/Profile.png");
  border: 2px solid rgba(255, 255, 255, 0.35);
}
.text-fade-enter-active,
.text-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.text-fade-enter-from,
.text-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
.user--visited {
  width: min(1320px, 94%);
  margin: 0 auto;
}
.user--visited ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0;
  margin: 0;
}
.user--visited li {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
  min-height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 24px 12px 16px;
  font-size: 1.05rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}
.user--visited li i {
  position: absolute;
  top: 12px;
  right: 15px;
  color: var(--accent);
  font-size: 1.15rem;
}
.user--visited li span:first-child {
  position: static;
  font-size: 1.35rem;
  font-weight: 900;
  margin: 5%;
}
.user--visited li span:nth-child(2) {
  color: var(--dim);
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
.grouping,
.somting--work {
  width: min(1320px, 94%);
  margin: 24px auto 0;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: var(--surface);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
}
.grouping--header,
.somting--header {
  gap: 10px;
  padding: 20px 24px;
  font-size: 1.05rem;
  text-align: right;
  padding: 5%;
}
.somting--header {
  flex-direction: column;
}
.grouping--header i,
.somting--header i {
  color: var(--accent);
  padding: 10px;
}
.grouping--list ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 0 20px 20px;
  margin: 0;
}
.grouping--list li {
  background: var(--line);
  border: 1px solid var(--bg);
  width: 100%;
  display: flex;
  margin: 0;
  justify-content: flex-end;
  border-radius: 12px;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 12px 16px;
}
.grouping--list i {
  margin-left: 10px;
  color: var(--accent);
}
.somting--list ul {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  width: 100%;
}
.somting--list {
  width: 100%;
}
.somting--list li {
  display: flex;
  align-items: center;
  background: var(--line);
  border: 1px solid var(--bg);
  border-radius: 16px;
  margin: 0;
  min-height: 78px;
  padding-left: 14px;
  width: 100%;
  justify-content: space-between;
}
.somting--list img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
.somting--time {
  font-size: 0.7em;
  color: var(--dim);
  display: block;
}
.somting--namefilm {
  font-size: 0.82em;
  font-weight: 600;
}
.somting--list li > i {
  color: var(--accent);
}
@media (min-width: 1000px) {
  .contuiner {
    padding-bottom: 70px;
  }
  .panel--hember {
    width: 360px;
  }
  .user--visited li {
    min-height: 115px;
  }
  .grouping,
  .somting--work {
    margin-top: 28px;
  }
  .grouping--list ul {
    grid-template-columns: repeat(6, 1fr);
  }
  .somting--list ul {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 760px) {
  header {
    padding: 14px 16px;
  }
  .user--welcome {
    min-height: 145px;
  }
  .user--visited ul {
    grid-template-columns: 1fr;
  }
  .grouping--list ul {
    grid-template-columns: repeat(2, 1fr);
  }
  .somting--list ul {
    grid-template-columns: 1fr;
  }
  .somting--list li {
    grid-template-columns: 62px 1fr 20px;
  }
  .somting--list img {
    width: 62px;
    height: 78px;
  }
}
@media (max-width: 420px) {
  .user--welcome {
    width: 94%;
    padding: 14px;
  }
  .user--visited li {
    min-height: 90px;
    font-size: 0.9rem;
  }
  .grouping--list ul {
    grid-template-columns: 1fr;
  }

  .panel--hember {
    width: 88vw;
  }
}
</style>
