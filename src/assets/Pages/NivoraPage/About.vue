<template>
  <div class="animate__animated animate__fadeInLeft">
    <div class="countiner">
      <br />
      <div class="detail-top">
        <router-link to="/" class="back-link"
          ><i class="fa fa-arrow-right"></i> بازگشت به صفحه اصلی</router-link
        >
        <span class="detail-badge">NIVORA • CREATOR</span>
      </div>
      <header>
        <h1>Nivora</h1>
        <div>
          <Transition name="text-fade" mode="out-in">
            <span :key="currentText" class="text--chenge">{{
              texts[currentText]
            }}</span>
          </Transition>
        </div>
      </header>
      <div class="relationship">
        <section class="about-intro">
          <span class="eyebrow">ABOUT THE CREATOR</span>
          <h2>سلام، من محمد امین بحرینی‌ام.</h2>
          <p>
            دانش‌آموز هنرستان و توسعه‌دهنده‌ی وب در مسیر یادگیری؛ Nivora یکی از
            پروژه‌های شخصی من برای تمرین Vue، طراحی رابط کاربری و ساخت تجربه‌ای
            بهتر برای علاقه‌مندان سینماست.
          </p>
        </section>
        <div class="relationship--header">
          <span>مهارت‌ها و مسیر یادگیری</span> <i class="fa fa-code"></i>
        </div>
        <div class="skills-grid">
          <div>
            <strong>HTML & CSS</strong
            ><span>ساختار صفحات و طراحی واکنش‌گرا</span>
          </div>
          <div>
            <strong>JavaScript</strong
            ><span>در حال توسعه مهارت در منطق و تعاملات</span>
          </div>
          <div>
            <strong>Vue.js</strong
            ><span>کامپوننت‌ها، Router و Vuex در پروژه Nivora</span>
          </div>
          <div>
            <strong>GitHub</strong><span>انتشار و معرفی پروژه‌های شخصی</span>
          </div>
        </div>
        <div class="relationship--header">
          <span>پروژه‌ها و ارتباط</span> <i class="fa fa-users"></i>
        </div>
        <div class="relationship--list">
          <ul>
            <li>
              <i class="fa fa-telegram"></i>
              <a href="https://t.me/AminVeyro">telegram</a>
            </li>
            <li>
              <i class="fa fa-github"></i
              ><a href="https://silentdev9.github.io/">github</a>
            </li>
            <li>
              <i class="fa fa-code"></i
              ><a
                href="https://silentdev9.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                >نمونه‌کارها</a
              >
            </li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: ["خوش امدید به Nivora ", "سازنده SilentDev9"],
      currentText: 0
    };
  },
  mounted() {
    this.textTimer = setInterval(() => {
      this.currentText = (this.currentText + 1) % this.texts.length;
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.textTimer);
  }
};
</script>

<style scoped>
.countiner {
  margin-top: -10px;
  background-color: var(--surface);
  direction: rtl;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-bottom: -10%;
}
header {
  height: 300px;
  margin: 2%;
  border-radius: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
header span {
  font-family: 1.4rem;
  font-weight: 900;
  text-shadow: 2px 0px 2px var(--bg);
  padding: 10px;
  border-radius: 10px;
}
header h1 {
  font-size: 4rem;
  text-shadow: 3px 0px 3px var(--accent);
  margin: 0;
}
.relationship {
  margin: 2%;
  background-color: var(--surface);
}
.relationship span {
  font-size: 1.2rem;
}
.relationship--header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid var(--accent);
  margin: 10px;

  padding: 10px;
  font-weight: 700;
}
.relationship--list ul {
  margin: 30px 0px;
  margin-bottom: 30px;
}
.relationship--list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--line);
  width: 82%;
  border-radius: 20px;
  margin: 30px 10px;
  transition: all 0.8;
}
.relationship--list li i {
  font-size: 1.2rem;
  padding: 14px;
}
.relationship--list li a {
  border-radius: 5px;
  font-size: 0.9rem;
  width: 60%;
  font-weight: 700;
  margin: auto;
  text-align: center;
  padding: 5px;
}
.relationship--list li:first-child {
  border-right: 4px solid blue;
}
.relationship--list li:first-child i {
  border-left: 4px solid blue;
}
.relationship--list li:first-child a {
  background-color: blue;
}
.relationship--list li:nth-child(2) {
  border-right: 4px solid blueviolet;
}
.relationship--list li:nth-child(2) i {
  border-left: 4px solid blueviolet;
  font-size: 1.4rem;
}
.relationship--list li:nth-child(2) a {
  background-color: blueviolet;
}
.relationship--list li:nth-child(3) {
  border-right: 4px solid var(--text);
}
.relationship--list li:nth-child(3) i {
  border-left: 4px solid var(--text);
  font-size: 1.4rem;
  color: var(--text);
}
.relationship--list li:nth-child(3) a {
  background-color: var(--text);
  color: black;
}

.detail-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 18px 24px;
  border-bottom: 1px solid var(--line);
}

.back-link {
  color: var(--dim);
  font-size: 13px;
}
.back-link:hover {
  color: var(--text);
}
.detail-badge {
  color: var(--accent);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.about-intro {
  width: min(900px, 92%);
  margin: 0 auto 28px;
  padding: clamp(22px, 4vw, 42px);
  border: 1px solid var(--line);
  border-radius: 22px;
  background: linear-gradient(135deg, var(--surface), rgba(229, 52, 44, 0.08));
}
.eyebrow {
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;
}
.about-intro h2 {
  font-size: clamp(1.5rem, 3vw, 2.3rem);
  margin: 12px 0;
}
.about-intro p {
  max-width: 780px;
  color: var(--dim);
  line-height: 2;
}
.skills-grid {
  width: min(900px, 92%);
  margin: 20px auto 35px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}
.skills-grid div {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 16px;
}
.skills-grid strong {
  color: var(--text);
}
.skills-grid span {
  color: var(--dim);
  line-height: 1.8;
  font-size: 0.9rem;
}
@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
