<template>
  <div>
 <category--menu></category--menu>
<br>
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


.avtive--help {
  transition: all ease 1s;
  top: 0;
  right: 0;
}
header {
  height: 330px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.name--visite {
  margin: 400px 45px 45px 45px;
  font-size: 2.9em;
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
  margin: 40px;
  width: 80%;
  position: relative;
}
.form--header input {
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(19, 19, 19, 0.79);
  border-style: double;
  direction: rtl;
  color: white;
  overflow: hidden;
  border: 1px solid rgb(44, 44, 44);
  color: white;
  font-size: 1.2em;
}
.form--header input::placeholder {
  padding: 5px;
}
.form--header button {
  font-size: 28px;
  color: #ffffff;
  position: absolute;
  left: 0;
  top: 0px;
  width: 65px;
  height: 65px;
  line-height: 5px;
  text-align: center;
  border: 0;
  cursor: pointer;
  background-color: red;
  padding: 20px;
  margin: 5px;
  border-radius: 10px;
}

</style>

