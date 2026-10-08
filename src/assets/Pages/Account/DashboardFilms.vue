<template>
  <div class="account-page" dir="rtl">
    <header class="topbar">
      <router-link class="brand" to="/Dashboard">Nivora</router-link>
      <router-link class="home-btn" to="/"
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
        >
        <router-link class="active" to="/Dashboard/films"
          ><i class="fa fa-film"></i> فیلم ها</router-link
        >
        <router-link to="/Dashboard/series"
          ><i class="fa fa-file-movie-o"></i> سریال ها</router-link
        >
        <router-link to="/Dashboard/likes"
          ><i class="fa fa-heart"></i> علاقمندی ها</router-link
        >
        <router-link to="/Dashboard/settings"
          ><i class="fa fa-gear"></i> تنظیمات</router-link
        >
      </aside>

      <section class="content">
        <div class="page-heading">
          <div>
            <span class="eyebrow">NIVORA / LIBRARY</span>
            <h1>فیلم ها</h1>
            <p>فیلم‌هایی که در حساب کاربری ذخیره شده‌اند.</p>
          </div>
          <span class="count"><i class="fa fa-film"></i> 12 فیلم</span>
        </div>

        <div class="toolbar">
          <div class="search">
            <i class="fa fa-search"></i><input placeholder="جستجوی فیلم..." />
          </div>
          <button class="filter"><i class="fa fa-filter"></i> جدیدترین</button>
        </div>

        <div class="movie-grid">
          <article class="movie-card" v-for="item in 8" :key="item">
            <div class="poster">
              <img
                :src="
                  ('../../img/Nivora_Posters_20/' +
                    String(item).padStart(2, '0') +
                    '.png')
                "
                :alt="'فیلم ' + item"
              /><span>{{ item <= 4 ? "2026" : "2025" }}</span>
            </div>
            <div class="movie-info">
              <h3>
                {{
                  [
                    "جدایی نادر از سیمین",
                    "درباره الی",
                    "فروشنده",
                    "زندگی و یک روز",
                    "آواز گنجشک ها",
                    "بچه های آسمان",
                    "باران",
                    "دایره"
                  ][item - 1]
                }}
              </h3>
              <p>درام • ایرانی</p>
            </div>
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
  letter-spacing: 0.5px;
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
.home-btn i {
  color: var(--accent);
}
.page-wrap {
  max-width: 1380px;
  margin: 0 auto;
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
  font-size: 1.3rem;
}
.side-nav a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 14px;
  margin: 5px 0;
  border-radius: 13px;
  color: var(--dim);
  transition: 0.2s;
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
.content {
  min-width: 0;
}
.page-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 24px;
}
.eyebrow {
  font-size: 0.72rem;
  color: var(--accent);
  font-weight: 800;
  letter-spacing: 1.5px;
}
.page-heading h1 {
  font-size: 2rem;
  margin: 4px 0;
}
.page-heading p {
  margin: 0;
  color: var(--dim);
}
.count {
  white-space: nowrap;
  padding: 10px 14px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--dim);
}
.count i {
  color: var(--accent);
  margin-left: 5px;
}
.toolbar {
  display: flex;
  gap: 12px;
  margin-bottom: 22px;
}
.search {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 0 14px;
}
.search i {
  color: var(--accent);
}
.search input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text);
  padding: 12px;
}
.filter {
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text);
  border-radius: 14px;
  padding: 0 18px;
}
.movie-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
.movie-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  transition: 0.25s;
}
.movie-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.25);
}
.poster {
  height: 290px;
  position: relative;
  background: #111;
}
.poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.poster span {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  padding: 3px 8px;
  border-radius: 8px;
  font-size: 0.72rem;
}
.movie-info {
  padding: 13px;
}
.movie-info h3 {
  font-size: 0.95rem;
  margin: 0 0 4px;
}
.movie-info p {
  margin: 0;
  color: var(--dim);
  font-size: 0.78rem;
}
@media (max-width: 1050px) {
  .page-wrap {
    grid-template-columns: 210px 1fr;
  }
  .movie-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .poster {
    height: 270px;
  }
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
  .side-nav a i {
    font-size: 1rem;
  }
  .page-heading {
    align-items: start;
    flex-direction: column;
  }
  .movie-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
  .poster {
    height: 230px;
  }
  .toolbar {
    flex-direction: column;
  }
  .filter {
    height: 45px;
  }
  .home-btn span {
    display: none;
  }
}
@media (max-width: 390px) {
  .movie-grid {
    grid-template-columns: 1fr 1fr;
  }
  .poster {
    height: 200px;
  }
  .movie-info h3 {
    font-size: 0.82rem;
  }
  .topbar {
    height: 70px;
  }
}
</style>
