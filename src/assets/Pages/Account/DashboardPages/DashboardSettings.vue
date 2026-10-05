<template>
  <main class="dashboard-page" dir="rtl">
    <section class="dashboard-page__hero">
      <div>
        <span class="dashboard-page__eyebrow">NIVORA / داشبورد</span>
        <h1>تنظیمات</h1>
        <p>تنظیمات حساب و تجربه کاربری Nivora.</p>
      </div>
      <div class="dashboard-page__badge"><i class="fa fa-film"></i></div>
    </section>

    <section class="dashboard-page__content">
      <div class="dashboard-page__section-title">
        <span>دسترسی سریع</span>
        <i class="fa fa-th-large"></i>
      </div>
      <div class="dashboard-page__grid">
        <article class="dash-card"><div class="dash-card__icon"><i class="fa fa-film"></i></div><div><h3>حساب کاربری</h3><p>نمایش و مدیریت محتوا</p></div><span class="dash-card__arrow">←</span></article><article class="dash-card"><div class="dash-card__icon"><i class="fa fa-play-circle"></i></div><div><h3>ظاهر و پوسته</h3><p>دسترسی سریع به بخش‌های مرتبط</p></div><span class="dash-card__arrow">←</span></article><article class="dash-card"><div class="dash-card__icon"><i class="fa fa-heart"></i></div><div><h3>اعلان‌ها</h3><p>لیست شخصی و ذخیره‌شده</p></div><span class="dash-card__arrow">←</span></article>
      </div>
    </section>

    <section class="dashboard-page__empty">
      <i class="fa fa-inbox"></i>
      <h2>این بخش آماده توسعه است</h2>
      <p>ساختار HTML و CSS آماده است؛ منطق Vue را خودت به آن اضافه کن.</p>
    </section>
  </main>
</template>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  padding: 32px clamp(14px, 3vw, 42px) 48px;
  background: var(--bg);
  color: var(--text);
}
.dashboard-page__hero {
  max-width: 1180px;
  margin: 0 auto 24px;
  padding: clamp(24px, 5vw, 48px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: linear-gradient(135deg, var(--surface), rgba(229,52,44,.06));
  box-shadow: 0 18px 50px rgba(0,0,0,.12);
}
.dashboard-page__eyebrow {
  color: var(--accent);
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: 2px;
}
.dashboard-page h1 { margin: 8px 0; font-size: clamp(2rem, 5vw, 3.2rem); }
.dashboard-page__hero p { margin: 0; color: var(--dim); max-width: 620px; }
.dashboard-page__badge {
  width: 76px; height: 76px; flex: 0 0 76px;
  display: grid; place-items: center;
  border-radius: 22px; color: #fff; background: var(--accent);
  font-size: 1.8rem; box-shadow: 0 12px 28px rgba(229,52,44,.22);
}
.dashboard-page__content, .dashboard-page__empty {
  max-width: 1180px; margin: 0 auto 24px;
  padding: 24px; border: 1px solid var(--line);
  border-radius: 24px; background: var(--surface);
}
.dashboard-page__section-title {
  display:flex; justify-content:flex-end; align-items:center; gap:10px;
  margin-bottom:18px; font-weight:800;
}
.dashboard-page__section-title i { color:var(--accent); }
.dashboard-page__grid {
  display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px;
}
.dash-card {
  min-height:120px; display:flex; align-items:center; gap:14px;
  padding:18px; border:1px solid var(--line); border-radius:18px;
  background:var(--bg); transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease;
}
.dash-card:hover { transform:translateY(-3px); border-color:var(--accent); box-shadow:0 12px 30px rgba(0,0,0,.12); }
.dash-card__icon { width:48px;height:48px; flex:0 0 48px; display:grid;place-items:center;border-radius:14px;background:rgba(229,52,44,.1);color:var(--accent);font-size:1.2rem; }
.dash-card h3 { margin:0 0 3px; font-size:1rem; }
.dash-card p { margin:0; color:var(--dim); font-size:.82rem; }
.dash-card__arrow { margin-right:auto; color:var(--dim); font-size:1.2rem; }
.dashboard-page__empty { text-align:center; padding:48px 20px; }
.dashboard-page__empty i { color:var(--accent); font-size:2rem; }
.dashboard-page__empty h2 { margin:10px 0 4px; font-size:1.2rem; }
.dashboard-page__empty p { margin:0; color:var(--dim); }
@media (max-width: 800px) { .dashboard-page__grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media (max-width: 560px) {
  .dashboard-page { padding:16px 10px 32px; }
  .dashboard-page__hero { padding:24px 18px; border-radius:20px; }
  .dashboard-page__badge { width:56px;height:56px;flex-basis:56px;border-radius:16px;font-size:1.3rem; }
  .dashboard-page__content,.dashboard-page__empty { padding:16px; border-radius:18px; }
  .dashboard-page__grid { grid-template-columns:1fr; }
}
</style>
