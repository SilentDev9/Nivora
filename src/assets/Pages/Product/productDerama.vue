<template>
  <section class="drama-section countiner">
    <div class="section-heading">
      <div>
        <span class="eyebrow">NIVORA COLLECTION</span>
        <h2>فیلم‌های درام</h2>
        <p>داستان‌هایی که بعد از تمام شدنشان هم یک گوشه‌ی ذهنتان می‌مانند.</p>
      </div>
      <span class="movie-count">{{ deramaProduct.length }} فیلم</span>
    </div>

    <div class="drama-slider">
      <button
        class="slider--btn slider-btn-right"
        type="button"
        aria-label="فیلم‌های قبلی"
        @click="scrollRight"
      >
        <i class="fa fa-chevron-right"></i>
      </button>

      <div ref="movieSlider" class="movie-scroll">
        <ul>
          <li v-for="movie in deramaProduct" :key="movie.id">
            <router-link
              :to="'/ProductViwe/drama/' + movie.id"
              class="movie-card"
            >
              <div class="poster-wrap">
                <img :src="movie.image" :alt="movie.title" />
                <span class="score"
                  ><i class="fa fa-star"></i> {{ movie.score }}</span
                >
                <span class="play-icon"><i class="fa fa-play"></i></span>
              </div>
              <div class="movie-info">
                <h3>{{ movie.title }}</h3>
                <span><i class="fa fa-clock-o"></i> {{ movie.time }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>

      <button
        class="slider--btn slider-btn-left"
        type="button"
        aria-label="فیلم‌های بعدی"
        @click="scrollLeft"
      >
        <i class="fa fa-chevron-left"></i>
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("Productderama", ["deramaProduct"])
  },
  methods: {
    scrollRight() {
      this.$refs.movieSlider.scrollBy({
        left: 520,
        behavior: "smooth"
      });
    },
    scrollLeft() {
      this.$refs.movieSlider.scrollBy({
        left: -520,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.countiner{
  margin: 10px;
  border-radius: 20px;
  border: 3px solid var(--line);
  padding: 5px;
}
.drama-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, var(--surface), rgba(229, 52, 44, 0.045));
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  direction: rtl;
  margin-bottom: 22px;
}

.eyebrow {
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.section-heading h2 {
  margin: 2px 0 3px;
  font-size: clamp(1.35rem, 3vw, 1.9rem);
}

.section-heading p {
  margin: 0;
  color: var(--dim);
  font-size: 13px;
}

.movie-count {
  flex: 0 0 auto;
  padding: 7px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--dim);
  font-size: 12px;
  background: rgba(255, 255, 255, 0.02);
}

.drama-slider {
  position: relative;
}

.movie-scroll {
  direction: ltr;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 5px 42px 10px;
}

.movie-scroll::-webkit-scrollbar {
  display: none;
}

.movie-scroll ul {
  display: flex;
  flex-wrap: nowrap;
  gap: 18px;
  width: max-content;
  margin: 0;
  padding: 0;
  direction: ltr;
}

.movie-scroll li {
  width: 165px;
  flex: 0 0 165px;
}

.movie-card {
  display: block;
  color: var(--text);
  direction: rtl;
}

.poster-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 2 / 3;
  border-radius: 15px;
  background: #111;
  border: 1px solid var(--line);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.poster-wrap::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.62), transparent 45%);
  opacity: 0.7;
  pointer-events: none;
}

.poster-wrap img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.movie-card:hover .poster-wrap {
  transform: translateY(-7px);
  border-color: rgba(229, 52, 44, 0.65);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.32);
}

.score {
  position: absolute;
  z-index: 2;
  top: 9px;
  right: 9px;
  padding: 4px 7px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.72);
  color: #fff;
  font-size: 11px;
  direction: ltr;
}

.score i {
  color: #ffc107;
}

.play-icon {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%) scale(0.8);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  background: rgba(229, 52, 44, 0.9);
  color: #fff;
  opacity: 0;
  transition: 0.25s ease;
}
.movie-card:hover .poster-wrap{
  border-radius: 20px 20px 0px 0px;
  border-bottom: none;
  border-top: none;
}
.movie-card:hover .play-icon {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
.movie-card:hover .movie-info {
  opacity: 1;
  background: linear-gradient(145deg, var(--surface), rgba(229, 53, 44, 0.212));
 transform: translateY(-10px);
 border: 1px solid rgba(229, 52, 44, 0.9);

}
.movie-info {
  direction: rtl;
  padding: 9px 2px 0;
  opacity: 0;
  padding: 10px;
  transform: translateY(-100px);
  transition: all 1s;
  z-index: 0;
  border-radius: 0px 0px 20px 20px;
}

.movie-info h3 {
  overflow: hidden;
  margin: 0 0 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
}

.movie-info span {
  color: var(--dim);
  font-size: 11px;
}

.slider--btn {
  position: absolute;
  z-index: 5;
  top: 42%;
  width: 42px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(20, 20, 24, 0.9);
  color: #fff;
  font-size: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  transition: 0.2s ease;
}

.slider--btn:hover {
  background: var(--accent);
  border-color: var(--accent);
  transform: translateY(-50%) scale(1.05);
}

.slider-btn-right {
  right: 5px;
}
.slider-btn-left {
  left: 5px;
}

@media (max-width: 700px) {
  .section-heading {
    align-items: center;
  }
  .section-heading p {
    display: none;
  }
  .movie-scroll {
    padding-inline: 34px;
  }
  .movie-scroll li {
    width: 145px;
    flex-basis: 145px;
  }
  .slider--btn {
    width: 34px;
    height: 50px;
    font-size: 16px;
  }
}

@media (max-width: 420px) {
  .movie-scroll {
    padding-inline: 28px;
  }
  .movie-scroll li {
    width: 132px;
    flex-basis: 132px;
  }
  .movie-scroll ul {
    gap: 12px;
  }
}
</style>
