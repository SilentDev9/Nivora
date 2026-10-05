# Nivora Assets - responsive update

این پوشه برای جایگزینی مستقیم `src/assets` پروژه Nivora آماده شده است.

## تغییرات
- بازطراحی ریسپانسیو داشبورد در موبایل، تبلت و دسکتاپ
- اصلاح typo مربوط به `router-view` در Dashboard
- حذف چیدمان‌های شکننده absolute از بخش‌های اصلی داشبورد
- Footer حرفه‌ای و ریسپانسیو
- چهار صفحه آماده برای ادامه توسعه داشبورد، فقط با Template + CSS:
  - `Pages/Account/DashboardPages/DashboardFilms.vue`
  - `Pages/Account/DashboardPages/DashboardSeries.vue`
  - `Pages/Account/DashboardPages/DashboardLikes.vue`
  - `Pages/Account/DashboardPages/DashboardSettings.vue`
- بهبود فرم‌های ثبت‌نام و فراموشی رمز در نمایشگرهای کوچک
- اصلاح نمایش اطلاعات کارت فیلم در موبایل، چون hover روی صفحه لمسی یک ایده نسبتاً مشکوک برای انسان‌های بدون ماوس است.

## اتصال صفحات جدید
این چهار فایل عمدی است که JavaScript ندارند. برای اینکه دکمه‌های پنل واقعاً به آنها route شوند، مسیرها را بعداً در `Routes.js` خودت اضافه کن.
