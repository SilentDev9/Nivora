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
        ><router-link to="/Dashboard/likes"
          ><i class="fa fa-heart"></i> علاقمندی ها</router-link
        ><router-link class="active" to="/Dashboard/settings"
          ><i class="fa fa-gear"></i> تنظیمات</router-link
        >
      </aside>
      <section class="content">
        <div class="heading">
          <div>
            <span class="eyebrow">NIVORA / ACCOUNT</span>
            <h1>تنظیمات</h1>
            <p>تنظیمات ظاهری و اطلاعات حساب کاربری.</p>
          </div>
          <i class="fa fa-gear gear"></i>
        </div>
        <div class="settings-card">
          <div class="setting-row">
            <div>
              <h3>اطلاعات کاربری</h3>
              <p>نام و ایمیل حساب خود را مدیریت کنید.</p>
            </div>
            <span class="status">فعال</span>
          </div>
          <div class="fields">
            <label>نام کاربری<input value="محمد امین" readonly/></label
            ><label>ایمیل<input value="user@nivora.local" readonly/></label>
          </div>
          <div class="setting-row">
            <div>
              <h3>ظاهر سایت</h3>
              <p>تم فعلی سایت از سیستم تم Nivora استفاده می‌کند.</p>
            </div>
            <span class="theme-pill"><i class="fa fa-moon-o"></i> حالت شب</span>
          </div>
          <div class="setting-row last">
            <div>
              <h3>اعلان‌ها</h3>
              <p>این بخش برای تنظیم اعلان‌های آینده آماده شده است.</p>
            </div>
            <span class="switch"><span></span></span>
          </div>
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
.gear {
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
.gear {
  font-size: 3rem;
}
.settings-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 10px 24px;
}
.setting-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid var(--line);
}
.setting-row h3 {
  margin: 0 0 4px;
}
.setting-row p {
  margin: 0;
  color: var(--dim);
  font-size: 0.85rem;
}
.setting-row.last {
  border: 0;
}
.status,
.theme-pill {
  padding: 7px 11px;
  border-radius: 9px;
  background: rgba(229, 52, 44, 0.1);
  color: var(--accent);
  white-space: nowrap;
  font-size: 0.78rem;
}
.fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
}
.fields label {
  font-size: 0.8rem;
  color: var(--dim);
}
.fields input {
  display: block;
  width: 100%;
  margin-top: 7px;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 11px;
  color: var(--text);
  padding: 12px;
  outline: 0;
}
.switch {
  width: 48px;
  height: 26px;
  border-radius: 30px;
  background: var(--line);
  padding: 3px;
}
.switch span {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent);
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
  .heading {
    align-items: flex-start;
  }
  .fields {
    grid-template-columns: 1fr;
  }
  .setting-row {
    align-items: flex-start;
  }
  .home-btn span {
    display: none;
  }
}
</style>
