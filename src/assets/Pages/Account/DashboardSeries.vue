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
        ><router-link class="active" to="/Dashboard/series"
          ><i class="fa fa-file-movie-o"></i> سریال ها</router-link
        ><router-link to="/Dashboard/likes"
          ><i class="fa fa-heart"></i> علاقمندی ها</router-link
        ><router-link to="/Dashboard/settings"
          ><i class="fa fa-gear"></i> تنظیمات</router-link
        >
      </aside>
      <section class="content">
        <div class="page-heading">
          <div>
            <span class="eyebrow">NIVORA / SERIES</span>
            <h1>سریال ها</h1>
            <p>سریال‌های ذخیره‌شده و در حال تماشا.</p>
          </div>
          <span class="count"><i class="fa fa-television"></i> 8 سریال</span>
        </div>
        <div class="series-list">
          <article v-for="item in 6" :key="item" class="series-card">
            <div class="cover">
              <img
                :src="
                  ('../../img/Nivora_Posters_20/' +
                    String(item + 8).padStart(2, '0') +
                    '.png')
                "
                alt="سریال"
              />
            </div>
            <div class="series-info">
              <span class="tag">در حال تماشا</span>
              <h2>
                {{
                  [
                    "دیرهنگام",
                    "شهر زیبا",
                    "بیگانه",
                    "آژانس شیشه ای",
                    "ماهی ها عاشق میشوند",
                    "برندگان"
                  ][item - 1]
                }}
              </h2>
              <p>فصل 1 • قسمت {{ item + 2 }}</p>
              <div class="progress">
                <span :style="{ width: item * 13 + 18 + '%' }"></span>
              </div>
              <small>{{ item * 13 + 18 }}٪ تماشا شده</small>
            </div>
            <i class="fa fa-play-circle play"></i>
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
.play {
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
.page-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
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
.series-list {
  display: grid;
  gap: 14px;
}
.series-card {
  display: grid;
  grid-template-columns: 130px 1fr 50px;
  align-items: center;
  gap: 20px;
  padding: 14px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
}
.cover {
  height: 160px;
  border-radius: 13px;
  overflow: hidden;
}
.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.series-info h2 {
  margin: 7px 0 4px;
  font-size: 1.15rem;
}
.series-info p,
.series-info small {
  color: var(--dim);
  margin: 0;
}
.tag {
  font-size: 0.7rem;
  background: rgba(229, 52, 44, 0.13);
  color: var(--accent);
  padding: 4px 8px;
  border-radius: 7px;
}
.progress {
  height: 7px;
  background: var(--line);
  border-radius: 10px;
  margin: 16px 0 5px;
  overflow: hidden;
}
.progress span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--accent), #ff7a18);
  border-radius: 10px;
}
.play {
  font-size: 2rem;
  text-align: center;
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
  .page-heading {
    align-items: start;
    flex-direction: column;
    gap: 12px;
  }
  .series-card {
    grid-template-columns: 90px 1fr 35px;
    gap: 12px;
  }
  .cover {
    height: 125px;
  }
  .series-info h2 {
    font-size: 0.95rem;
  }
  .home-btn span {
    display: none;
  }
}
</style>
