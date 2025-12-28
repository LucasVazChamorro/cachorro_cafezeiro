import NivelamentoCover from "./NivelamentoCover.jsx";

export default function NivelamentoLayout({
    title,
    subtitle,
    coverSrc,
    coverAlt,
    breadcrumbs = [], // [{ label, href? }]
    children,
}) {
    return (
        <main className="nivelamento-main">
            <div className="container mt-4">

                {/* BREADCRUMB (opcional) */}
                {breadcrumbs.length > 0 && (
                    <nav className="breadcrumb-cc mt-3 mb-3">
                        {breadcrumbs.map((item, idx) => (
                            <span key={idx}>
                                {idx > 0 && <span>›</span>}
                                {item.href ? (
                                    <a href={item.href}>{item.label}</a>
                                ) : (
                                    <span className="current">{item.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}

                {/* TÍTULO */}
                {title && (
                    <section className="mb-4 text-center">
                        <h1 className="nivelamento-title mb-2">{title}</h1>
                        {subtitle && <p className="nivelamento-subtitle mb-0">{subtitle}</p>}
                    </section>
                )}

                {/* CAPA (opcional) */}
                {coverSrc && (
                    <NivelamentoCover
                        src={coverSrc}
                        alt={coverAlt || title || "Capa do nivelamento"}
                    />
                )}

                {/* CONTEÚDO */}
                <section className="mb-4">{children}</section>

                {/* FOOTER PADRÃO */}
                <footer className="py-4 footer-cc mt-4">
                    <div className="container text-center small">
                        <div className="mb-2">
                            © <span>{new Date().getFullYear()}</span> Cachorro Cafezeiro — Todos os direitos reservados.
                        </div>
                        {title && <div className="muted">Nivelamento — {title}</div>}
                    </div>
                </footer>

            </div>
        </main>
    );
}
