// loadNavbar.js — versão estável e atualizada
document.addEventListener("DOMContentLoaded", async () => {

    // Caminhos possíveis para localizar navbar.html
    const paths = [
        "/assets/components/navbar.html",
        "../assets/components/navbar.html",
        "../../assets/components/navbar.html"
    ];

    let navbarHTML = null;

    // Tenta carregar a navbar em múltiplos caminhos
    for (const path of paths) {
        try {
            const response = await fetch(path + "?v=" + Date.now());

            if (response.ok) {
                navbarHTML = await response.text();
                break;
            }
        } catch (e) { /* silencioso */ }
    }

    if (!navbarHTML) {
        console.error("❌ Navbar não encontrada. Verifique o caminho do arquivo.");
        return;
    }

    // Insere o HTML no placeholder
    const container = document.getElementById("navbar-dashboard");
    if (!container) {
        console.error("❌ Elemento #navbar-dashboard não encontrado na página.");
        return;
    }

    container.innerHTML = navbarHTML;

    // Reativa dropdowns do Bootstrap
    document.querySelectorAll('.dropdown-toggle').forEach((el) => {
        new bootstrap.Dropdown(el);
    });

    // Ativa comportamento dos submenus multinível
    document.querySelectorAll(".dropdown-submenu").forEach((submenu) => {
        submenu.addEventListener("mouseenter", function () {
            const dropdown = submenu.querySelector(".dropdown-menu");
            if (dropdown) dropdown.classList.add("show");
        });
        submenu.addEventListener("mouseleave", function () {
            const dropdown = submenu.querySelector(".dropdown-menu");
            if (dropdown) dropdown.classList.remove("show");
        });
    });

    console.log("✔ Navbar carregada com sucesso.");
});
