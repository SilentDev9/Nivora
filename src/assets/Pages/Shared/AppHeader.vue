<template>
  <div>
 <category--menu></category--menu>
      <header>

        <span class="name--visite"><span>N</span>ivora</span>
        <i class="fa btn-info"></i>
        <form class="form--header">
          <input type="search" placeholder="دنبال چی می گردی ؟" />
          <button><i class="fa fa-search"></i></button>
        </form>
      </header>

  </div>
</template>

<script>
import CategoryMenu from "./CategoryMenu.vue";
export default {
  components: {
    "category--menu": CategoryMenu
  }
};
</script>

<style scoped>
header {
  min-height: 360px;
  padding: 120px 20px 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.name--visite {
  margin: 0 0 28px;
  font-size: clamp(2.2rem, 6vw, 3.6rem);
  color: var(--text);
  letter-spacing: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
}
.name--visite span {
  color: var(--accent);
  font-size: 1.1em;
}
.form--header {
  margin: 0;
  width: min(850px, 100%);
  position: relative;
}
.form--header input {
  display: block;
  width: 100%;
  min-height: 58px;
  padding: 12px 72px 12px 18px;
  border-radius: 12px;
  background-color: rgba(19, 19, 19, 0.79);
  direction: rtl;
  color: white;
  border: 1px solid rgb(44, 44, 44);
  outline: none;
  font-size: clamp(1rem, 2vw, 1.2rem);
}
.form--header input:focus {
  border-color: var(--accent);
}
.form--header button {
  font-size: 22px;
  color: #ffffff;
  position: absolute;
  left: 6px;
  top: 6px;
  width: 46px;
  height: 46px;
  line-height: 1;
  text-align: center;
  border: 0;
  background-color: var(--accent);
  padding: 0;
  margin: 0;
  border-radius: 9px;
}

@media (max-width: 700px) {
  header {
    min-height: 300px;
    padding: 105px 14px 24px;
  }

  .name--visite {
    margin-bottom: 22px;
    letter-spacing: 2px;
  }

  .form--header input {
    min-height: 52px;
    padding-right: 14px;
    padding-left: 60px;
  }

  .form--header button {
    width: 42px;
    height: 42px;
    top: 5px;
    left: 5px;
  }
}
</style>

