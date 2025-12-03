(function () {
    const body = document.body;
    const toggle = document.getElementById('darkToggle');
    const meta = document.getElementById('meta-theme');

    function setYear() {
        const el = document.getElementById('year');
        if (el) el.textContent = new Date().getFullYear();
    }
    setYear();

    function applyTheme(isDark) {
        if (isDark) {
            body.classList.add('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
            meta.setAttribute('content', '#121212');
            if (toggle) {
                toggle.textContent = '☀️';
                toggle.setAttribute('aria-pressed', 'true');
            }
        } else {
            body.classList.remove('dark');
            document.documentElement.setAttribute('data-theme', 'light');
            meta.setAttribute('content', '#5D4037');
            if (toggle) {
                toggle.textContent = '🌙';
                toggle.setAttribute('aria-pressed', 'false');
            }
        }
    }

    let stored = localStorage.getItem('cc-theme');
    if (stored === null) {
        const prefersDark = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        stored = prefersDark ? 'dark' : 'light';
    }
    applyTheme(stored === 'dark');

    if (toggle) {
        toggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const next = !isDark;
            applyTheme(next);
            localStorage.setItem('cc-theme', next ? 'dark' : 'light');
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const reveals = Array.from(document.querySelectorAll('.reveal'));
        reveals.forEach((el, i) => setTimeout(() => el.classList.add('show'), i * 90));
    });

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();
