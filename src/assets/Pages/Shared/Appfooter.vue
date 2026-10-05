<template>
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
<script>
export default{}
</script>
<style scoped>
.nivora-footer{margin-top:60px;background:linear-gradient(180deg,var(--surface),var(--bg));border-top:1px solid var(--line);padding:42px 20px 18px;color:var(--text)}
.footer-inner{width:min(1280px,100%);margin:auto;display:grid;grid-template-columns:1.2fr 2fr auto;align-items:center;gap:30px}
.footer-brand{display:flex;align-items:center;gap:12px}.brand-mark{display:grid;place-items:center;width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,var(--accent),#ff7a18);color:#fff;font-size:1.5rem;font-weight:900}.footer-brand strong{display:block;font-size:1.35rem}.footer-brand small{display:block;color:var(--dim);font-size:.75rem}.footer-inner>p{margin:0;color:var(--dim)}.footer-inner ul{display:flex;gap:10px;padding:0;margin:0}.footer-inner li{width:42px;height:42px;display:grid;place-items:center;border:1px solid var(--line);border-radius:12px;color:var(--text);transition:.25s}.footer-inner li:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}.footer-bottom{width:min(1280px,100%);margin:32px auto 0;padding-top:16px;border-top:1px solid var(--line);color:var(--dim);font-size:.75rem;text-align:center}@media(max-width:800px){.footer-inner{grid-template-columns:1fr;text-align:center;justify-items:center}.footer-brand{justify-content:center}.footer-inner>p{max-width:480px}}
</style>
