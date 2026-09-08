<template>
  <div>
 <category--menu></category--menu>
    <div class="hed">
      <header>
        <span class="name--visite"><span>N</span>ivora</span>
        <i class="fa btn-info"></i>
        <form class="form--header">
          <input type="search" placeholder="دنبال چی می گردی ؟" />
          <button><i class="fa fa-search"></i></button>
        </form>
      </header>
    </div>
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
