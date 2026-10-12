<template>
  <div>
    <category--menu></category--menu>
    <navbar-header></navbar-header>
    <header>
      <span class="name--visite"><span>N</span>ivora</span>
      <i class="fa btn-info"></i>
      <form class="form--header" @submit.prevent>
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
  margin-bottom: 20%;
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
    min-height: 360px;
    padding-top: 110px;
    margin-bottom: 100px;
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
    width: min(100%, 850px);
    margin: 0 auto;
    max-height: 240px;
    overflow: auto;
    border: 1px solid var(--line);
    border-top: 0;
    border-radius: 0 0 14px 14px;
    background: var(--surface);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 10px;
  }
  .search--results img {
    width: 100%;
    height: 125px;
    object-fit: cover;
    border-radius: 8px;
  }
}

.search--results {
  width: min(850px, 100%);
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
  max-height: 300px;
  overflow: auto;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}
.search--results img {
  display: block;
  width: 100%;
  height: 145px;
  object-fit: cover;
  border-radius: 9px;
  transition: transform 0.2s ease;
}
.search--results a:hover img {
  transform: translateY(-3px);
}
@media (min-width: 1100px) {
  header {
    margin-bottom: 100px;
  }
}
</style>
