<template>
  <div class="settings-page" dir="rtl">
    <dashboard--panel />
    <main class="settings-card">
      <span class="eyebrow">NIVORA ACCOUNT</span>
      <h1>تنظیمات حساب</h1>
      <p class="muted">اطلاعات نمایشی حساب فعلی در این مرورگر ذخیره شده است.</p>
      <div class="setting-row"><span>نام کاربری</span><strong>{{ userName }}</strong></div>
      <div class="setting-row"><span>ایمیل</span><strong>{{ userEmail }}</strong></div>
      <div class="setting-row"><span>پوسته سایت</span><strong>{{ themeLabel }}</strong></div>
      <button class="theme-action" @click="changeTheme">تغییر پوسته</button>
      <button class="logout-action" @click="logout">خروج از حساب</button>
      <p v-if="message" class="notice">{{ message }}</p>
    </main>
  </div>
</template>
<script>
import DashboardPanel from "../../Shared/DashboardPanel.vue";
import { getTheme, toggleTheme } from "../../../../composables/useTheme";
export default {
  components: { "dashboard--panel": DashboardPanel },
  data() { return { theme: getTheme(), message: "" }; },
  computed: {
    user() { return this.$store.state.User.user; },
    userName() { return this.user && this.user.username ? this.user.username : "ثبت نشده"; },
    userEmail() { return this.user && this.user.email ? this.user.email : "وارد نشده"; },
    themeLabel() { return this.theme === "light" ? "روشن" : "تاریک"; }
  },
  methods: {
    changeTheme() { this.theme = toggleTheme(); },
    logout() { this.$store.commit("User/CLEAR_USER"); this.message = "از حساب خارج شدی."; this.$router.push("/Login"); }
  }
};
</script>
<style scoped>
.settings-page { min-height:100vh; background:var(--bg); color:var(--text); padding-bottom:40px; }
.settings-card { width:min(760px, calc(100% - 28px)); margin:34px auto; padding:clamp(22px, 4vw, 42px); border:1px solid var(--line); border-radius:24px; background:var(--surface); }
.eyebrow { color:var(--accent); font-size:.75rem; letter-spacing:2px; font-weight:800; }
h1 { margin:10px 0; font-size:clamp(1.7rem, 4vw, 2.5rem); }
.muted { color:var(--dim); line-height:1.9; }
.setting-row { display:flex; justify-content:space-between; gap:18px; padding:17px 0; border-bottom:1px solid var(--line); }
.setting-row strong { overflow-wrap:anywhere; text-align:left; }
button { border:0; border-radius:12px; padding:12px 18px; margin:20px 8px 0 0; cursor:pointer; }
.theme-action { background:var(--accent); color:#fff; }
.logout-action { background:transparent; color:var(--text); border:1px solid var(--line); }
.notice { color:var(--accent); }
@media(max-width:520px){ .setting-row { flex-direction:column; gap:6px; } }
</style>
