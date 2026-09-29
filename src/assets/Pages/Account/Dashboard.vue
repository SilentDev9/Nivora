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
  border: 4px solid var(--accent);
  border-radius: 30px;
}
.header--dashbord {
  background-color: var(--bg);
  color: var(--text);
  border: 4px solid var(--accent);
  box-shadow: 1px 10px 100px var(--accent);
  border-radius: 40px;
  margin: 15px;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 30px;
}

.header--dashbord i {
  font-size: 50px;
  color: var(--text);
}
header ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  display: inline-block;
  font-size: 0.9em;
  direction: rtl;
  padding: 10px;
  font-weight: 800;
  color: var(--text);
}
.last--visit{
  background-color: var(--text);
  height: 100px;
  margin: 30px;
  border-radius: 5px;
}
</style>
