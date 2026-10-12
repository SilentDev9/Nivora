<template>
  <main class="info-page" dir="rtl">
    <router-link to="/" class="back">← بازگشت به صفحه اصلی</router-link>
    <span class="eyebrow">NIVORA / GUIDELINES</span>
    <h1>قوانین استفاده</h1>
    <p class="lead">
      این نسخه از نیورا یک پروژه‌ی نمایشی و آموزشی برای معرفی فیلم‌ها و تمرین
      توسعه وب است.
    </p>
    <section>
      <h2>۱. ماهیت محتوا</h2>
      <p>
        اطلاعات فیلم‌ها برای نمایش و تمرین رابط کاربری استفاده شده‌اند و ممکن
        است کامل یا به‌روز نباشند.
      </p>
    </section>
    <section>
      <h2>۲. حساب کاربری</h2>
      <p>
        ثبت‌نام این نسخه فقط به‌صورت محلی در مرورگر انجام می‌شود و به سرور واقعی
        متصل نیست. از رمز عبور واقعی یا حساس استفاده نکنید.
      </p>
    </section>
    <section>
      <h2>۳. استفاده مسئولانه</h2>
      <p>
        از امکانات سایت برای ثبت اطلاعات شخصی دیگران یا انتشار محتوای غیرمجاز
        استفاده نکنید.
      </p>
    </section>
    <section>
      <h2>۴. تغییرات</h2>
      <p>قابلیت‌ها و محتوای سایت ممکن است در جریان توسعه تغییر کنند.</p>
    </section>
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
.lead {
  color: var(--dim);
  font-size: 1.05rem;
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
  margin: 0;
}
</style>
