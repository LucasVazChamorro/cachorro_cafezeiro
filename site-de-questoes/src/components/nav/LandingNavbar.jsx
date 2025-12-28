import { Link } from "react-router-dom";
import { CupHot, BoxArrowInRight } from "react-bootstrap-icons";

export default function LandingNavbar() {
    return (
        <header className="sticky-top cc-navbar">
            <div className="container py-2 d-flex align-items-center justify-content-between gap-3">
                <a href="#inicio" className="d-flex align-items-center gap-2 text-decoration-none">
                    <img
                        src="/logo.png"
                        alt="Cachorro Cafezeiro"
                        className="cc-logo cc-logo--sm"
                        width="40"
                        height="40"
                    />

                    <span className="fw-bold text-dark">Cachorro Cafezeiro</span>
                </a>

                <nav className="d-none d-md-flex align-items-center gap-3">
                    <a className="text-decoration-none text-muted" href="#beneficios">Benefícios</a>
                    <a className="text-decoration-none text-muted" href="#como-funciona">Como funciona</a>
                    <a className="text-decoration-none text-muted" href="#planos">Planos</a>
                    <a className="text-decoration-none text-muted" href="#cadastro">Cadastro</a>
                </nav>

                <div className="d-flex align-items-center gap-2">
                    <Link to="/dashboard" className="btn btn-outline-secondary">
                        Entrar
                    </Link>


                    <a href="#cadastro" className="btn cc-btn-cafe">
                        <CupHot className="me-2" />
                        Criar conta
                    </a>
                </div>
            </div>
        </header>
    );
}
