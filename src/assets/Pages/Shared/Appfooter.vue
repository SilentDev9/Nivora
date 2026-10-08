<template>
<<<<<<< HEAD
  <footer class="site-footer" dir="rtl">
    <div class="site-footer__main">
      <div class="site-footer__brand">
        <div class="site-footer__logo"><span>N</span>ivora</div>
        <p>خانه‌ای برای کشف فیلم‌ها، سریال‌ها و داستان‌هایی که ارزش تماشا دارند.</p>
      </div>

      <div class="site-footer__column">
        <h3>دسترسی سریع</h3>
        <a href="#">فیلم‌ها</a>
        <a href="#">سریال‌ها</a>
        <a href="#">علاقمندی‌ها</a>
      </div>

      <div class="site-footer__column">
        <h3>نیورا</h3>
        <router-link to="/Login/about">درباره ما</router-link>
        <a href="#">قوانین</a>
        <a href="#">پشتیبانی</a>
      </div>

      <div class="site-footer__social">
        <h3>ما را دنبال کن</h3>
        <div>
          <a href="#" aria-label="Telegram"><i class="fa fa-telegram"></i></a>
          <a href="#" aria-label="GitHub"><i class="fa fa-github"></i></a>
          <a href="#" aria-label="YouTube"><i class="fa fa-youtube-play"></i></a>
        </div>
      </div>
    </div>

    <div class="site-footer__bottom">
      <span>© Nivora</span>
      <span>ساخته شده با ❤️ برای علاقه‌مندان به سینما</span>
    </div>
  </footer>
</template>

=======
  <footer class="nivora-footer" dir="rtl">
    <div class="footer-inner">
      <div class="footer-brand"><span class="brand-mark">N</span><div><strong>Nivora</strong><small>سینما، داستان، تجربه</small></div></div>
      <p>یک فضای ساده برای کشف و دنبال کردن فیلم‌ها و سریال‌ها.</p>
      <ul>
        <li><i class="fa fa-telegram"></i></li>
        <li><i class="fa fa-github"></i></li>
        <li><i class="fa fa-youtube-play"></i></li>
      </ul>
    </div>
    <div class="footer-bottom">© 2026 Nivora · ساخته شده با Vue</div>
  </footer>
</template>
>>>>>>> 56377cba1a5988ac25761b24231e6c55fead697f
<script>
export default {};
</script>
<style scoped>
<<<<<<< HEAD
.site-footer {
  width: min(1200px, calc(100% - 32px));
  margin: 48px auto 24px;
  padding: 34px 34px 18px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: linear-gradient(145deg, var(--surface), rgba(229,52,44,.035));
  color: var(--text);
}
.site-footer__main {
  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr 1.2fr;
  gap: 32px;
}
.site-footer__brand { text-align: right; }
.site-footer__logo { font-size: 2rem; font-weight: 900; letter-spacing: 1px; }
.site-footer__logo span { color: var(--accent); }
.site-footer__brand p { max-width: 360px; margin: 10px 0 0; color: var(--dim); font-size: .86rem; line-height: 1.9; }
.site-footer h3 { margin: 0 0 12px; font-size: .9rem; }
.site-footer__column { display: flex; flex-direction: column; gap: 7px; }
.site-footer__column a { color: var(--dim); font-size: .82rem; transition: color .2s ease, transform .2s ease; }
.site-footer__column a:hover { color: var(--accent); transform: translateX(-3px); }
.site-footer__social > div { display: flex; gap: 8px; }
.site-footer__social a {
  width: 42px; height: 42px;
  display: grid; place-items: center;
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--text);
  background: var(--bg);
  transition: .2s ease;
}
.site-footer__social a:hover { color: var(--accent); border-color: var(--accent); transform: translateY(-2px); }
.site-footer__bottom {
  display: flex; justify-content: space-between; gap: 16px;
  margin-top: 28px; padding-top: 15px;
  border-top: 1px solid var(--line);
  color: var(--dim); font-size: .72rem;
}
@media (max-width: 850px) {
  .site-footer__main { grid-template-columns: 1.5fr 1fr 1fr; }
  .site-footer__social { grid-column: 1 / -1; }
}
@media (max-width: 560px) {
  .site-footer { width: calc(100% - 20px); margin-top: 32px; padding: 24px 18px 16px; border-radius: 20px; }
  .site-footer__main { grid-template-columns: 1fr 1fr; gap: 24px; }
  .site-footer__brand { grid-column: 1 / -1; }
  .site-footer__social { grid-column: 1 / -1; }
  .site-footer__bottom { flex-direction: column; gap: 5px; }
}
=======
.nivora-footer{margin-top:60px;background:linear-gradient(180deg,var(--surface),var(--bg));border-top:1px solid var(--line);padding:42px 20px 18px;color:var(--text)}
.footer-inner{width:min(1280px,100%);margin:auto;display:grid;grid-template-columns:1.2fr 2fr auto;align-items:center;gap:30px}
.footer-brand{display:flex;align-items:center;gap:12px}.brand-mark{display:grid;place-items:center;width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,var(--accent),#ff7a18);color:#fff;font-size:1.5rem;font-weight:900}.footer-brand strong{display:block;font-size:1.35rem}.footer-brand small{display:block;color:var(--dim);font-size:.75rem}.footer-inner>p{margin:0;color:var(--dim)}.footer-inner ul{display:flex;gap:10px;padding:0;margin:0}.footer-inner li{width:42px;height:42px;display:grid;place-items:center;border:1px solid var(--line);border-radius:12px;color:var(--text);transition:.25s}.footer-inner li:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}.footer-bottom{width:min(1280px,100%);margin:32px auto 0;padding-top:16px;border-top:1px solid var(--line);color:var(--dim);font-size:.75rem;text-align:center}@media(max-width:800px){.footer-inner{grid-template-columns:1fr;text-align:center;justify-items:center}.footer-brand{justify-content:center}.footer-inner>p{max-width:480px}}
>>>>>>> 56377cba1a5988ac25761b24231e6c55fead697f
</style>
