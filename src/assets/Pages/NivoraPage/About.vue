<template>
  <div class="animate__animated animate__fadeInLeft">
    <div class="countiner">
      <br />
      <div class="detail-top">
        <router-link to="/" class="back-link"
          ><i class="fa fa-arrow-right"></i> بازگشت به صفحه اصلی</router-link
        >
        <span class="detail-badge"
          >NIVORA • {{ isDrama ? "DRAMA" : "MOVIE" }}</span
        >
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
        <div class="relationship--header">
          <span>ارتباط با ما</span> <i class="fa fa-users"></i>
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
            <li><i class="fa fa-linkedin-square"></i><a href="#">linkedin</a></li>
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
    setInterval(() => {
      this.currentText = (this.currentText + 1) % this.texts.length;
    }, 3000);
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
</style>
