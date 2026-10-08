<template>
  <div class="account-page" dir="rtl">
    <header class="topbar">
      <router-link class="brand" to="/Dashboard">Nivora</router-link
      ><router-link class="home-btn" to="/"
        ><i class="fa fa-home"></i><span>خانه</span></router-link
      >
    </header>
    <main class="page-wrap">
      <aside class="side-nav">
        <div class="nav-title">
          <i class="fa fa-user-circle"></i><span>پنل کاربری</span>
        </div>
        <router-link to="/Dashboard"
          ><i class="fa fa-home"></i> داشبورد</router-link
        ><router-link to="/Dashboard/films"
          ><i class="fa fa-film"></i> فیلم ها</router-link
        ><router-link to="/Dashboard/series"
          ><i class="fa fa-file-movie-o"></i> سریال ها</router-link
        ><router-link class="active" to="/Dashboard/likes"
          ><i class="fa fa-heart"></i> علاقمندی ها</router-link
        ><router-link to="/Dashboard/settings"
          ><i class="fa fa-gear"></i> تنظیمات</router-link
        >
      </aside>
      <section class="content">
        <div class="heading">
          <div>
            <span class="eyebrow">NIVORA / FAVORITES</span>
            <h1>علاقمندی ها</h1>
            <p>فیلم‌ها و سریال‌هایی که برای بعد نگه داشته‌ای.</p>
          </div>
          <i class="fa fa-heart heart-big"></i>
        </div>
        <div class="empty-note">
          <i class="fa fa-bookmark-o"></i>
          <h2>لیست علاقمندی‌ها آماده است</h2>
          <p>
            اینجا محلی برای نمایش آیتم‌های موردعلاقه توست. فعلاً چند کارت نمونه
            برای طراحی قرار داده شده.
          </p>
        </div>
        <div class="liked-grid">
          <article v-for="item in 4" :key="item" class="liked-card">
            <img
              :src="
                ('../../img/Nivora_Posters_20/' +
                  String(item + 12).padStart(2, '0') +
                  '.png')
              "
              alt="فیلم"
            />
            <div>
              <h3>
                {{
                  [
                    "بانوی اردیبهشت",
                    "ماهی ها عاشق میشوند",
                    "کشتزارهای سفید",
                    "بیست و یک اوت"
                  ][item - 1]
                }}
              </h3>
              <span>★ 8.{{ item + 1 }}</span>
            </div>
            <i class="fa fa-heart"></i>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>
<style scoped>
.account-page {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  padding-bottom: 40px;
}
.topbar {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(18px, 5vw, 70px);
  border-bottom: 1px solid var(--line);
  background: rgba(20, 20, 24, 0.8);
  backdrop-filter: blur(14px);
  position: sticky;
  top: 0;
  z-index: 10;
}
.brand {
  font-size: 1.7rem;
  font-weight: 900;
  color: var(--text);
}
.home-btn {
  display: flex;
  gap: 9px;
  align-items: center;
  padding: 10px 15px;
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--text);
}
.home-btn i,
.heart-big,
.liked-card > i {
  color: var(--accent);
}
.page-wrap {
  max-width: 1380px;
  margin: auto;
  padding: 34px clamp(16px, 4vw, 50px);
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 28px;
}
.side-nav {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 18px;
  height: max-content;
  position: sticky;
  top: 105px;
}
.nav-title {
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 800;
  padding: 10px 12px 20px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 10px;
}
.nav-title i {
  color: var(--accent);
}
.side-nav a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 14px;
  margin: 5px 0;
  border-radius: 13px;
  color: var(--dim);
}
.side-nav a:hover,
.side-nav a.active {
  background: linear-gradient(135deg, var(--accent), #ff7a18);
  color: #fff;
}
.side-nav a i {
  width: 20px;
  text-align: center;
}
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}
.eyebrow {
  font-size: 0.72rem;
  color: var(--accent);
  font-weight: 800;
  letter-spacing: 1.5px;
}
.heading h1 {
  font-size: 2rem;
  margin: 4px 0;
}
.heading p {
  margin: 0;
  color: var(--dim);
}
.heart-big {
  font-size: 3rem;
  opacity: 0.8;
}
.empty-note {
  border: 1px dashed var(--line);
  background: var(--surface);
  border-radius: 20px;
  text-align: center;
  padding: 35px;
  margin-bottom: 20px;
}
.empty-note i {
  font-size: 2rem;
  color: var(--accent);
}
.empty-note h2 {
  margin: 8px 0;
}
.empty-note p {
  color: var(--dim);
  margin: 0;
}
.liked-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.liked-card {
  display: grid;
  grid-template-columns: 85px 1fr 25px;
  align-items: center;
  gap: 14px;
  padding: 12px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
}
.liked-card img {
  width: 85px;
  height: 105px;
  object-fit: cover;
  border-radius: 11px;
}
.liked-card h3 {
  margin: 0 0 5px;
  font-size: 0.95rem;
}
.liked-card span {
  font-size: 0.8rem;
  color: #f59e0b;
}
.liked-card > i {
  font-size: 1.1rem;
}
@media (max-width: 760px) {
  .page-wrap {
    display: block;
    padding-top: 20px;
  }
  .side-nav {
    position: static;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    padding: 8px;
    margin-bottom: 22px;
  }
  .nav-title {
    display: none;
  }
  .side-nav a {
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    margin: 0;
    padding: 9px 4px;
    font-size: 0.7rem;
  }
  .liked-grid {
    grid-template-columns: 1fr;
  }
  .heading {
    align-items: flex-start;
  }
  .heart-big {
    font-size: 2rem;
  }
  .home-btn span {
    display: none;
  }
}
</style>
