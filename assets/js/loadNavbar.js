// ====================================================================
//  loadNavbar.js — Carrega a navbar global e ativa dropdown multinível
// ====================================================================

document.addEventListener("DOMContentLoaded", async () => {

    const paths = [
        "/assets/components/navbar.html",
        "../assets/components/navbar.html",
        "../../assets/components/navbar.html",
        "../../../assets/components/navbar.html"
    ];

    let navbarHTML = null;

    // Tentativa inteligente de encontrar o arquivo navbar.html
    for (const path of paths) {
        try {
            const response = await fetch(path + "?v=" + Date.now());
            if (response.ok) {
                navbarHTML = await response.text();
                break;
            }
        } catch (err) { }
    }

    if (!navbarHTML) {
        console.error("❌ ERRO: navbar.html não encontrada.");
        return;
    }

    const container = document.getElementById("navbar-dashboard");
    if (!container) {
        console.error("❌ ERRO: elemento #navbar-dashboard não foi encontrado.");
        return;
    }

    // Insere a navbar na página
    container.innerHTML = navbarHTML;

    // ======================================================
    // Ativa dropdown do Bootstrap nos menus principais
    // ======================================================

    document.querySelectorAll('.dropdown-toggle').forEach((el) => {
        new bootstrap.Dropdown(el);
    });

    // ======================================================
    // SUBMENUS MULTINÍVEL — Lógica avançada de abertura
    // ======================================================

    document.querySelectorAll(".dropdown-submenu").forEach(submenu => {

        submenu.addEventListener("mouseenter", function () {
            const menu = submenu.querySelector(".dropdown-menu");
            if (!menu) return;

            // reset
            menu.classList.remove("open-left");

            // mostra de forma invisível para medir o espaço
            menu.style.visibility = "hidden";
            menu.classList.add("show");

            const rect = menu.getBoundingClientRect();
            const screenWidth = window.innerWidth;

            // se ultrapassar a tela, abre para a esquerda
            if (rect.right > screenWidth) {
                menu.classList.add("open-left");
            }

            menu.style.visibility = "visible";
        });

        submenu.addEventListener("mouseleave", function () {
            const menu = submenu.querySelector(".dropdown-menu");
            if (menu) menu.classList.remove("show");
        });
    });

    // ======================================================
    // ⭐ FIX IMPORTANTE:
    // Reativa o modo escuro agora que o botão está no DOM
    // ======================================================

    if (typeof initDarkMode === "function") {
        initDarkMode();
    }

    console.log("✔ Navbar carregada, submenus ativos e dark mode reativado.");
});
