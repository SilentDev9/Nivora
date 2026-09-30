<template>
  <main class="product-page">
    <div v-if="product" class="product-detail">
      <div class="detail-top">
        <router-link to="/" class="back-link"><i class="fa fa-arrow-right"></i> بازگشت به صفحه اصلی</router-link>
        <span class="detail-badge">NIVORA • {{ isDrama ? "DRAMA" : "MOVIE" }}</span>
      </div>

      <section class="hero-detail">
        <div class="poster-column">
          <div class="main-poster">
            <img :src="product.image" :alt="product.title" />
            <span class="poster-score"><i class="fa fa-star"></i> {{ product.score }}</span>
          </div>
        </div>

        <div class="info-column">
          <span class="small-title">معرفی فیلم</span>
          <h1>{{ product.title }}</h1>
          <p class="description">داستانی تماشایی از سینمای ایران، با فضایی ماندگار و شخصیت‌هایی که تا مدت‌ها در ذهن می‌مانند.</p>

          <div class="meta-grid">
            <div class="meta-card"><i class="fa fa-clock-o"></i><span>مدت زمان</span><strong>{{ product.time || "-" }}</strong></div>
            <div class="meta-card"><i class="fa fa-star"></i><span>امتیاز</span><strong>{{ product.score || "-" }}</strong></div>
            <div class="meta-card"><i class="fa fa-video-camera"></i><span>کارگردان</span><strong>{{ product.direction || "-" }}</strong></div>
          </div>

          <div class="cast-box">
            <span><i class="fa fa-users"></i> بازیگران</span>
            <p>{{ product.cast || "اطلاعات بازیگران ثبت نشده است." }}</p>
          </div>

          <button class="watch-btn" type="button"><i class="fa fa-play"></i> تماشای فیلم</button>
        </div>
      </section>
    </div>

    <div v-else class="not-found">
      <i class="fa fa-film"></i>
      <h2>فیلم پیدا نشد</h2>
      <p>احتمالاً لینک فیلم دیگر در فهرست نیست.</p>
      <router-link to="/" class="watch-btn">برگرد به صفحه اصلی</router-link>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("Product", ["productById"]),
    ...mapGetters("Productderama", { dramaProductById: "productById" }),

    isDrama() {
      return this.$route.path.indexOf("/ProductViwe/drama/") === 0;
    },

    product() {
      const id = this.$route.params.id;
      return this.isDrama ? this.dramaProductById(id) : this.productById(id);
    }
  }
};
</script>

<style scoped>
.product-page {
  width: min(1120px, calc(100% - 28px));
  margin: 28px auto 50px;
  direction: rtl;
}

.product-detail {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: radial-gradient(circle at 85% 15%, rgba(229,52,44,.13), transparent 35%), var(--surface);
  box-shadow: 0 24px 70px rgba(0,0,0,.2);
}

.detail-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 18px 24px;
  border-bottom: 1px solid var(--line);
}

.back-link { color: var(--dim); font-size: 13px; }
.back-link:hover { color: var(--text); }
.detail-badge { color: var(--accent); font-size: 11px; font-weight: 800; letter-spacing: 1.5px; }

.hero-detail {
  display: grid;
  grid-template-columns: minmax(280px, 390px) 1fr;
  gap: 42px;
  padding: 36px;
  align-items: start;
}

.poster-column { display: flex; justify-content: center; }
.main-poster { position: relative; width: min(100%, 350px); overflow: hidden; border-radius: 22px; box-shadow: 0 25px 55px rgba(0,0,0,.35); }
.main-poster::after { content:""; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,.45),transparent 40%); pointer-events:none; }
.main-poster img { display:block; width:100%; aspect-ratio:2/3; object-fit:cover; }
.poster-score { position:absolute; z-index:2; top:13px; right:13px; padding:6px 9px; border-radius:9px; background:rgba(0,0,0,.75); color:#fff; font-size:13px; }
.poster-score i { color:#ffc107; }

.info-column { padding-top: 8px; }
.small-title { color:var(--accent); font-size:12px; font-weight:800; }
.info-column h1 { margin:5px 0 12px; font-size:clamp(2rem,5vw,3.2rem); line-height:1.2; }
.description { max-width:650px; margin:0 0 24px; color:var(--dim); line-height:2; }

.meta-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-bottom:16px; }
.meta-card { padding:15px; border:1px solid var(--line); border-radius:15px; background:rgba(255,255,255,.025); }
.meta-card i { color:var(--accent); margin-left:7px; }
.meta-card span { display:block; color:var(--dim); font-size:11px; margin-bottom:5px; }
.meta-card strong { display:block; font-size:13px; }

.cast-box { padding:16px; border-radius:16px; border:1px solid var(--line); background:rgba(0,0,0,.08); }
.cast-box > span { color:var(--text); font-size:13px; font-weight:700; }
.cast-box i { color:var(--accent); margin-left:7px; }
.cast-box p { margin:7px 0 0; color:var(--dim); font-size:13px; line-height:1.9; }

.watch-btn {
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  margin-top:18px; padding:12px 24px; border:0; border-radius:13px;
  background:var(--accent); color:#fff; font-weight:800; box-shadow:0 12px 25px rgba(229,52,44,.22);
  transition:.2s ease;
}
.watch-btn:hover { transform:translateY(-2px); filter:brightness(1.08); color:#fff; }

.not-found { text-align:center; padding:80px 20px; border:1px solid var(--line); border-radius:24px; background:var(--surface); }
.not-found > i { color:var(--accent); font-size:48px; }
.not-found h2 { margin:15px 0 5px; }
.not-found p { color:var(--dim); }

@media (max-width:800px) {
  .hero-detail { grid-template-columns:1fr; gap:25px; padding:22px; }
  .info-column { text-align:right; }
  .main-poster { width:min(100%, 300px); }
}

@media (max-width:500px) {
  .product-page { width:calc(100% - 14px); margin-top:14px; }
  .detail-top { padding:14px; }
  .hero-detail { padding:16px; }
  .meta-grid { grid-template-columns:1fr; }
  .detail-badge { display:none; }
}
</style>
