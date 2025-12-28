import { useState } from "react";
import NivelamentoCard from "../nivelamento/NivelamentoCard.jsx";

function letra(idx) {
    return String.fromCharCode(65 + idx); // 0->A, 1->B...
}

export default function QuestoesInterativas({ titulo = "Questões", questoes = [] }) {
    return (
        <>
            <NivelamentoCard title={titulo}>
                <p className="mb-0 text-muted">
                    Marque a alternativa, clique em <strong>Corrigir</strong>, abra o{" "}
                    <strong>Gabarito comentado</strong> e use <strong>Limpar</strong>.
                </p>
            </NivelamentoCard>

            {questoes.map((q) => (
                <Questao key={q.numero} q={q} />
            ))}
        </>
    );
}

function Questao({ q }) {
    const [marcada, setMarcada] = useState("");
    const [corrigida, setCorrigida] = useState(false);
    const [mostrar, setMostrar] = useState(false);

    const correta = q.correta;
    const ok = corrigida && marcada === correta;
    const no = corrigida && marcada && marcada !== correta;

    function limpar() {
        setMarcada("");
        setCorrigida(false);
        setMostrar(false);
    }

    return (
        <NivelamentoCard title={`Questão ${q.numero}`}>
            <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                <span className="badge text-bg-light border">{q.fonte}</span>
            </div>

            <div className="mb-3">{q.enunciado}</div>

            <div className="quiz-options">
                {q.alternativas.map((alt, idx) => {
                    const L = letra(idx);
                    const active = marcada === L;
                    const correct = corrigida && active && ok;
                    const wrong = corrigida && active && no;

                    return (
                        <label
                            key={L}
                            className={[
                                "quiz-option",
                                active ? "is-active" : "",
                                correct ? "is-correct" : "",
                                wrong ? "is-wrong" : "",
                            ].join(" ")}
                        >
                            <input
                                type="radio"
                                name={`q-${q.numero}`}
                                checked={marcada === L}
                                onChange={() => setMarcada(L)}
                            />
                            <span className="me-2 fw-bold">{L})</span>
                            <span>{alt}</span>
                        </label>
                    );
                })}
            </div>

            <div className="d-flex flex-wrap gap-2 mt-3">
                <button className="btn cc-btn-cafe btn-sm" type="button" onClick={() => setCorrigida(true)}>
                    Corrigir
                </button>

                <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => setMostrar((v) => !v)}>
                    Gabarito comentado
                </button>

                <button className="btn btn-outline-danger btn-sm" type="button" onClick={limpar}>
                    Limpar
                </button>
            </div>

            {corrigida && (
                <div className="quiz-feedback mt-3 show" aria-live="polite">
                    {!marcada ? (
                        <strong>Selecione uma alternativa</strong>
                    ) : ok ? (
                        <>
                            ✅ <strong>Correto!</strong> ({marcada})
                        </>
                    ) : (
                        <>
                            ❌ <strong>Incorreto.</strong> Você marcou <strong>{marcada}</strong>. Correta:{" "}
                            <strong>{correta}</strong>.
                        </>
                    )}
                </div>
            )}

            {mostrar && (
                <div className="tip-box mt-3">
                    <strong>Gabarito: {correta}</strong>
                    <br />
                    <br />
                    {q.comentario}
                </div>
            )}

            {/* estilos iguais (padrão) */}
            <style>{`
        .quiz-options{ display:grid; gap:.55rem; }
        .quiz-option{
          display:flex; gap:.6rem; align-items:flex-start;
          padding:.7rem .8rem;
          border:1px solid rgba(0,0,0,.12);
          border-radius:.85rem;
          cursor:pointer;
          user-select:none;
          background: #fff;
        }
        .quiz-option input{ margin-top:.2rem; }
        .quiz-option.is-active{ border-color: rgba(0,0,0,.22); }
        .quiz-option.is-correct{
          border-color: rgba(25,135,84,.55);
          box-shadow: 0 0 0 .2rem rgba(25,135,84,.10);
        }
        .quiz-option.is-wrong{
          border-color: rgba(220,53,69,.55);
          box-shadow: 0 0 0 .2rem rgba(220,53,69,.10);
        }
        .quiz-feedback{
          padding:.75rem .9rem;
          border-radius:.85rem;
          border:1px solid rgba(0,0,0,.12);
          background: #fff;
        }
      `}</style>
        </NivelamentoCard>
    );
}
