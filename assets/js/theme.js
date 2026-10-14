/* Light/dark toggle. Dark is the default; a visitor's choice is remembered on this device. */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  var meta = document.querySelector('meta[name="theme-color"]');
  function current() { return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }
  function sync() {
    var light = current() === 'light';
    var label = light ? 'Switch to dark mode' : 'Switch to light mode';
    btn.setAttribute('aria-pressed', light ? 'true' : 'false');
    btn.setAttribute('aria-label', label);
    btn.title = label;
    if (meta) meta.setAttribute('content', light ? '#F5F4EF' : '#131517');
  }
  sync();
  btn.addEventListener('click', function () {
    var next = current() === 'light' ? 'dark' : 'light';
    if (next === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
    if (window.posthog && posthog.capture) posthog.capture('theme_toggled', { theme: next, path: location.pathname });
  });
})();
