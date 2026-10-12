<template>
  <main class="info-page" dir="rtl">
    <router-link to="/" class="back">← بازگشت به صفحه اصلی</router-link>
    <span class="eyebrow">NIVORA / SUPPORT</span>
    <h1>پشتیبانی</h1>
    <p class="lead">
      اگر بخشی از رابط کاربری درست کار نمی‌کند، راه‌های ارتباط و گزارش مشکل
      اینجاست.
    </p>
    <section>
      <h2>گزارش باگ</h2>
      <p>
        نام صفحه، کاری که انجام دادی و متن خطا را یادداشت کن تا بررسی مشکل
        ساده‌تر شود.
      </p>
    </section>
    <section>
      <h2>ارتباط با سازنده</h2>
      <p>
        برای پیام مستقیم از تلگرام یا برای مشاهده پروژه‌ها از صفحه گیت‌هاب
        استفاده کن.
      </p>
      <div class="actions">
        <a
          href="https://t.me/AminVeyro"
          target="_blank"
          rel="noopener noreferrer"
          >تلگرام</a
        ><a
          href="https://github.com/silentdev9"
          target="_blank"
          rel="noopener noreferrer"
          >گیت‌هاب</a
        >
      </div>
    </section>
    <p class="note">
      توجه: این نسخه هنوز سامانه‌ی تیکت یا پشتیبانی آنلاین ندارد.
    </p>
  </main>
</template>
<style scoped>
.info-page {
  width: min(850px, calc(100% - 28px));
  margin: 36px auto;
  padding: clamp(22px, 5vw, 48px);
  color: var(--text);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 24px;
  line-height: 2;
}
.back {
  display: inline-block;
  margin-bottom: 28px;
  color: var(--dim);
}
.eyebrow {
  display: block;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;
}
h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 8px 0;
}
.lead,
.note {
  color: var(--dim);
}
section {
  padding: 18px 0;
  border-top: 1px solid var(--line);
}
section h2 {
  font-size: 1.1rem;
}
section p {
  color: var(--dim);
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.actions a {
  padding: 9px 16px;
  border-radius: 10px;
  color: white;
  background: var(--accent);
  text-decoration: none;
}
</style>
