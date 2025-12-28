export default function HomeFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-top py-4 mt-5 bg-white">
            <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
                <div className="text-muted small">
                    © {year} Cachorro Cafezeiro • Todos os direitos reservados.
                </div>

                <div className="d-flex gap-3 small">
                    <a className="text-decoration-none text-muted" href="#termos">
                        Termos
                    </a>
                    <a className="text-decoration-none text-muted" href="#politica">
                        Política de Privacidade
                    </a>
                </div>
            </div>
        </footer>
    );
}
