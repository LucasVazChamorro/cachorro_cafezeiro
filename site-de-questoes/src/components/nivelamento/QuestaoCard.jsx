import { useMemo, useState } from "react";

const letra = (idx) => String.fromCharCode(65 + idx);

export default function QuestaoCard({
    numero,
    rotulo = "Questão de Concurso",
    // ✅ antigo (continua aceitando)
    fonte,

    // ✅ novo (preferível para banco)
    banca,
    prova,
    ano,

    enunciado,
    alternativas,
    correta,
    comentario,

    // ✅ NOVO (opcional)
    // { tipo: "imagem", src: "...", alt?: "...", legenda?: "..." }
    midia,
}) {
    const fonteComputada = useMemo(() => {
        // 1) Se já veio pronto, usa direto
        if (typeof fonte === "string" && fonte.trim()) return fonte.trim();

        // 2) Monta a partir de banca/prova/ano
        const b = typeof banca === "string" ? banca.trim() : "";
        const p = typeof prova === "string" ? prova.trim() : "";
        const a = ano === null || ano === undefined || ano === "" ? "" : String(ano).trim();

        if (!b && !p && !a) return "Questão de Concurso";
        if (b && p && a) return `${b} (${p} / ${a})`;
        if (b && p && !a) return `${b} (${p})`;
        if (b && !p && a) return `${b} (${a})`;
        if (b && !p && !a) return b;
        // fallback final
        return [b, p, a].filter(Boolean).join(" — ") || "Questão de Concurso";
    }, [fonte, banca, prova, ano]);

    const corretaIndex = useMemo(() => {
        const map = { A: 0, B: 1, C: 2, D: 3, E: 4 };
        return map[String(correta).toUpperCase()] ?? 0;
    }, [correta]);

    const [selecionada, setSelecionada] = useState(null);
    const [open, setOpen] = useState(false);

    const acertou = selecionada !== null && selecionada === corretaIndex;

    function toggle() {
        setOpen((v) => !v);
    }

    function limparResposta() {
        setSelecionada(null);
        setOpen(false);
    }

    return (
        <div className="card nivelamento-card mb-4 border border-success">
            <div className="card-body">
                <h4 className="mb-3">
                    <i className="bi bi-journal-check me-2 text-success"></i>
                    {rotulo} {numero}
                </h4>


                <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                    <span className="badge text-bg-light border">
                        <i className="bi bi-bank me-1"></i>
                        {fonteComputada}
                    </span>
                    <span className="small text-muted">
                        Marque a alternativa correta e clique em <strong>Ver gabarito</strong>.
                    </span>
                </div>

                {/* ✅ MÍDIA (opcional) */}
                {midia?.tipo === "imagem" && midia?.src && (
                    <div className="mb-3 text-center">
                        <img
                            src={midia.src}
                            alt={midia.alt || "Imagem da questão"}
                            className="img-fluid rounded border"
                        />
                        {midia.legenda && (
                            <div className="small text-muted mt-1">{midia.legenda}</div>
                        )}
                    </div>
                )}

                {/* ENUNCIADO */}
                <div className="alert alert-light border mb-3">{enunciado}</div>

                {/* ALTERNATIVAS */}
                <form className="questao">
                    {alternativas.map((alt, idx) => {
                        const marcada = selecionada === idx;
                        const isCorreta = idx === corretaIndex;

                        let outline = {};
                        let bg = {};

                        if (open && isCorreta) {
                            outline = {
                                outline: "2px solid rgba(25,135,84,.35)",
                                borderRadius: ".5rem",
                            };
                        }
                        if (open && marcada && !acertou) {
                            outline = {
                                outline: "2px solid rgba(220,53,69,.35)",
                                borderRadius: ".5rem",
                            };
                        }
                        if (open && marcada) {
                            bg = { background: "rgba(13,110,253,.06)", borderRadius: ".5rem" };
                        }

                        return (
                            <div
                                key={idx}
                                className="form-check"
                                style={{
                                    padding: ".5rem",
                                    ...bg,
                                    ...outline,
                                    marginBottom: idx === alternativas.length - 1 ? "0.75rem" : "0.5rem",
                                }}
                            >
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`q${numero}`}
                                    id={`q${numero}${letra(idx).toLowerCase()}`}
                                    checked={marcada}
                                    onChange={() => setSelecionada(idx)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`q${numero}${letra(idx).toLowerCase()}`}
                                >
                                    <strong>{letra(idx)})</strong> {alt}
                                </label>
                            </div>
                        );
                    })}
                </form>

                {/* FEEDBACK */}
                {open && (
                    <div
                        className={
                            "alert questao-feedback " +
                            (selecionada === null ? "alert-info" : acertou ? "alert-success" : "alert-danger")
                        }
                    >
                        {selecionada === null
                            ? "Marque uma alternativa para conferir se você acertou."
                            : acertou
                                ? "✅ Você acertou!"
                                : "❌ Você errou. A alternativa correta foi destacada."}
                    </div>
                )}

                {/* GABARITO + COMENTÁRIO */}
                {open && (
                    <>
                        <div className="alert alert-success">
                            <strong>Gabarito:</strong> alternativa <strong>{String(correta).toUpperCase()}</strong>.
                        </div>

                        <div className="alert alert-secondary">
                            <p className="mb-1">
                                <strong>Comentário:</strong>
                            </p>
                            {comentario}
                        </div>
                    </>
                )}

                <div className="d-flex gap-2 mt-3 flex-wrap">
                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={toggle}>
                        {open ? "Ocultar gabarito" : "Ver gabarito"}
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={limparResposta}
                        disabled={selecionada === null && !open}
                    >
                        Limpar resposta
                    </button>
                </div>
            </div>
        </div>
    );
}
