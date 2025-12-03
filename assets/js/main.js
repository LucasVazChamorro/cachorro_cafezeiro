// ====================================================================
//  main.js — lógica global do projeto (Dark Mode + utilidades)
// ====================================================================

// --------------------------------------------------------------
// FUNÇÃO GLOBAL — chamada por loadNavbar.js
// --------------------------------------------------------------
function initDarkMode() {

    const body = document.body;
    const html = document.documentElement;
    const meta = document.getElementById("meta-theme");

    const toggle = document.getElementById("darkToggle");

    if (!toggle) {
        console.warn("⏳ Aguardando navbar carregar para ativar dark mode…");
        return;
    }

    // -------------------------------
    // Carrega tema salvo
    // -------------------------------

    let saved = localStorage.getItem("cc-theme");

    // Se não houver configuração salva, usa o sistema
    if (!saved) {
        saved = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    applyTheme(saved);

    // -------------------------------
    // Evento do botão
    // -------------------------------

    toggle.addEventListener("click", () => {
        const newTheme = html.getAttribute("data-theme") === "light" ? "dark" : "light";
        applyTheme(newTheme);
        localStorage.setItem("cc-theme", newTheme);
    });

    // -------------------------------
    // Função auxiliar
    // -------------------------------

    function applyTheme(theme) {
        const dark = theme === "dark";

        html.setAttribute("data-theme", theme);
        meta.setAttribute("content", dark ? "#121212" : "#5D4037");
        toggle.textContent = dark ? "☀️" : "🌙";

        // Classe opcional para estilizar no CSS
        if (dark) {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    }

    console.log("✔ Dark mode inicializado corretamente.");
}

// ====================================================================
//  Utilidade: atualiza o ano no footer
// ====================================================================

document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
