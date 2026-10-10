<template>
  <div>
    <category--menu></category--menu>
    <navbar-header></navbar-header>
    <header>
      <span class="name--visite"><span>N</span>ivora</span>
      <i class="fa btn-info"></i>
      <form class="form--header">
        <input
          v-model="searchText"
          type="search"
          placeholder="دنبال چی می گردی ؟"
        />
        <button><i class="fa fa-search"></i></button>
      </form>
      <div v-if="searchText.trim()" class="search--results">
        <router-link
          v-for="movie in searchResults"
          :key="movie.id"
          :to="'/ProductViwe/drama/' + movie.id"
          class="search--result"
        >
          <img :src="movie.image" :alt="movie.title" />
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
import NavbarHeader from "./NavbarHeader.vue";
import CategoryMenu from "./CategoryMenu.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      searchText: ""
    };
  },
  components: {
    "category--menu": CategoryMenu,
    "navbar-header": NavbarHeader
  },
  computed: {
    ...mapGetters("Productderama", ["deramaProduct"]),
    searchResults() {
      if (!this.searchText.trim()) {
        return [];
      }
      const search = this.searchText.trim().toLowerCase();
      return this.deramaProduct.filter(movie =>
        movie.title.toLowerCase().includes(search)
      );
    }
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
  margin-bottom: 300px;
}
.name--visite {
  padding: 50px;
  font-size: clamp(3rem, 7vw, 3.6rem);
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
  background-color: var(--surface);
  direction: rtl;
  color: var(--text);
  border: 2px solid var(--line);
  outline: none;
  font-size: clamp(1rem, 2vw, 1.2rem);
}
.form--header input:focus {
  transition: all 0.8s;
  border-color: var(--accent);
  border: 4px solid var(--accent);
  border-bottom: none;
  border-radius: 0px;
}
.form--header button {
  font-size: 22px;
  color: var(--text);
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

@media (min-width: 1100px) {
  header {
    min-height: 430px;
    padding-top: 150px;
    margin-bottom: 260px;
  }
  .name--visite {
    font-size: clamp(3.6rem, 5vw, 5.2rem);
  }
  .form--header {
    width: min(1000px, 72vw);
  }
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
  .search--results {
    transition: all ease 2.5s;
    width: 100%;
    margin: 1%;
    height: 200px;

    border: 4px solid var(--accent);
    background-color: var(--surface);
    padding: 1%;
    display: flex;
    justify-content: center;
    border-top: none;
  }
  .search--results img {
    width: 100%;
    height: 100%;
    padding: 1%;
  }
}
</style>
