// Dear Wallet site: footer year and copy-to-clipboard buttons.
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });

document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const text = btn.getAttribute('data-copy');
    const label = btn.textContent;
    const done = () => { btn.textContent = 'copied ♡'; setTimeout(() => { btn.textContent = label; }, 1600); };
    const fallback = () => {
      const code = document.getElementById('email');
      if (!code) return;
      const range = document.createRange();
      range.selectNodeContents(code);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      btn.textContent = 'selected, press copy';
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  });
});

// Light / dark switch. Follows the system until the visitor picks one, then remembers it.
(function () {
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const current = () => root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
  const label = () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    document.querySelectorAll('.theme-toggle').forEach((b) => {
      b.setAttribute('aria-label', `Switch to ${next} mode`);
      b.setAttribute('title', `Switch to ${next} mode`);
    });
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
      m.setAttribute('content', current() === 'dark' ? '#1C1838' : '#F6CDEB');
      m.removeAttribute('media');
    });
  };
  document.querySelectorAll('.theme-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('dw-theme', next); } catch (e) { /* storage unavailable: choice lasts for this page only */ }
      label();
    });
  });
  media.addEventListener('change', label);
  label();
})();
