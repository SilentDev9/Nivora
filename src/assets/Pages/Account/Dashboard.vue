<template>
  <div>
    <header>
      <div class="header--dashbord">
        <div><i class="fa fa-user-circle"></i></div>
        <div><i class="fa fa-shopping-cart"></i></div>
      </div>
      <br />

      <ul>
        <li>تایم تماشا : {{ userVisited.timeViewing }}</li>
        <li>ویدیو : {{ userVisited.video }}</li>
        <li>ذخیره شده : {{ userVisited.save }}</li>
        <li>پسندیده : {{ userVisited.good }}</li>
      </ul>

      <div class="last--visit">
        <div class="img--visit"></div>
      </div>
    </header>
    <main></main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userVisited: {
        timeViewing: 0,
        save: 0,
        good: 0,
        video: 0
      }
    };
  },
  Component: {
    User() {
      return this.$store.getters["User/user"];
    }
  }
};
</script>

<style scoped>
header {
  width: min(1100px, calc(100% - 32px));
  margin: 30px auto;
  border: 2px solid var(--accent);
  border-radius: 24px;
}
.header--dashbord {
  background-color: var(--bg);
  color: var(--text);
  border: 2px solid var(--accent);
  box-shadow: 0 10px 60px rgba(229,52,44,.18);
  border-radius: 24px;
  margin: 14px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.header--dashbord i {
  position: static;
  font-size: 2.2rem;
  color: var(--text);
}
header ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 16px;
}
li {
  display: inline-block;
  font-size: .95em;
  direction: rtl;
  padding: 10px 14px;
  font-weight: 800;
  color: var(--text);
}
.last--visit {
  background-color: var(--text);
  min-height: 100px;
  margin: 20px;
  border-radius: 8px;
}
@media (max-width: 500px) {
  header { width: calc(100% - 16px); margin: 18px auto; }
  .header--dashbord { margin: 8px; padding: 14px; }
  header ul { padding: 0 8px; }
  li { font-size: .85em; padding: 8px 10px; }
  .last--visit { margin: 12px; }
}
</style>
