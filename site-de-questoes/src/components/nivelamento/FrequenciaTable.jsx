import React, { useMemo } from "react";

/**
 * props:
 * - title?: string
 * - data: Array<{ x: number|string, fi?: number, fr?: number }>
 * - N?: number (necessário se vier apenas fr)
 * - show: { fi?: boolean, fr?: boolean, Fi?: boolean, FrAcum?: boolean }
 * - medianViz?: { enabled?: boolean, maxBadges?: number }
 * - valueLabel?: string (ex.: "Idade")
 */
export default function FrequenciaTable({
    title = "Distribuição de Frequência",
    data,
    N,
    show = { fi: true, fr: false, Fi: true, FrAcum: false },
    medianViz = { enabled: true, maxBadges: 40 },
    valueLabel = "Valor",
}) {
    const normalized = useMemo(() => {
        // ordena por x se for número; se for string, mantém ordem original
        const sorted = [...data].sort((a, b) => {
            if (typeof a.x === "number" && typeof b.x === "number") return a.x - b.x;
            return 0;
        });

        // calcula N e fi/fr quando faltar
        let totalN = 0;

        // Se tem fi em todos, N é soma fi
        const allHaveFi = sorted.every((d) => typeof d.fi === "number");
        const allHaveFr = sorted.every((d) => typeof d.fr === "number");

        if (allHaveFi) {
            totalN = sorted.reduce((acc, d) => acc + (d.fi || 0), 0);
        } else if (allHaveFr) {
            if (typeof N !== "number") {
                // sem N, não dá pra recuperar fi; usa N=1 para manter coerência (mas não gera fi)
                totalN = 1;
            } else {
                totalN = N;
            }
        } else {
            // caso misto: tenta calcular o que der
            totalN =
                typeof N === "number"
                    ? N
                    : sorted.reduce((acc, d) => acc + (d.fi || 0), 0) || 1;
        }

        let acumFi = 0;
        let acumFr = 0;

        return sorted.map((d) => {
            let fi = d.fi;
            let fr = d.fr;

            // se só veio fr e temos N, estimar fi
            if (typeof fi !== "number" && typeof fr === "number" && typeof totalN === "number") {
                fi = Math.round(fr * totalN);
            }

            // se só veio fi, calcular fr
            if (typeof fr !== "number" && typeof fi === "number" && totalN > 0) {
                fr = fi / totalN;
            }

            if (typeof fi === "number") acumFi += fi;
            if (typeof fr === "number") acumFr += fr;

            return {
                x: d.x,
                fi,
                fr,
                Fi: typeof fi === "number" ? acumFi : undefined,
                FrAcum: typeof fr === "number" ? acumFr : undefined,
            };
        });
    }, [data, N]);

    const totalFi = useMemo(() => {
        const sum = normalized.reduce((acc, d) => acc + (typeof d.fi === "number" ? d.fi : 0), 0);
        return sum || (typeof N === "number" ? N : 0);
    }, [normalized, N]);

    // Mediana: só calcula com fi inteiro e total conhecido
    const medianInfo = useMemo(() => {
        const hasFi = normalized.every((d) => typeof d.fi === "number");
        if (!hasFi || totalFi <= 0) return null;

        const n = totalFi;
        const pos1 = Math.floor((n + 1) / 2); // para ímpar: pos1==pos2; para par, pos1 é a n/2
        const pos2 = n % 2 === 0 ? pos1 + 1 : pos1;

        // encontra valores nas posições pos1 e pos2 usando Fi
        const findValueAtPos = (pos) => {
            const row = normalized.find((d) => typeof d.Fi === "number" && d.Fi >= pos);
            return row ? row.x : null;
        };

        const v1 = findValueAtPos(pos1);
        const v2 = findValueAtPos(pos2);

        return { n, pos1, pos2, v1, v2 };
    }, [normalized, totalFi]);

    const showBadges =
        medianViz?.enabled &&
        medianInfo &&
        medianInfo.n <= (medianViz?.maxBadges ?? 40) &&
        normalized.every((d) => Number.isInteger(d.fi));

    const badges = useMemo(() => {
        if (!showBadges || !medianInfo) return [];
        const arr = [];
        let idx = 1;
        for (const row of normalized) {
            const count = row.fi || 0;
            for (let k = 0; k < count; k++) {
                arr.push({ pos: idx, value: row.x });
                idx += 1;
            }
        }
        return arr;
    }, [showBadges, normalized, medianInfo]);

    return (
        <div>
            <h6 className="fw-bold mb-3">
                <i className="bi bi-table me-2"></i>
                {title}
            </h6>

            <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>{valueLabel}</th>
                            {show.fi && <th>Frequência absoluta (fi)</th>}
                            {show.fr && <th>Frequência relativa (Fr)</th>}
                            {show.Fi && <th>Frequência acumulada (Fi)</th>}
                            {show.FrAcum && <th>Fr acumulada</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {normalized.map((row, i) => (
                            <tr key={`${row.x}-${i}`}>
                                <td>{row.x}</td>
                                {show.fi && <td>{typeof row.fi === "number" ? row.fi : "—"}</td>}
                                {show.fr && (
                                    <td>
                                        {typeof row.fr === "number"
                                            ? `${(row.fr * 100).toFixed(1).replace(".", ",")}%`
                                            : "—"}
                                    </td>
                                )}
                                {show.Fi && <td>{typeof row.Fi === "number" ? row.Fi : "—"}</td>}
                                {show.FrAcum && (
                                    <td>
                                        {typeof row.FrAcum === "number"
                                            ? `${(row.FrAcum * 100).toFixed(1).replace(".", ",")}%`
                                            : "—"}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="table-light">
                            <th>Total</th>
                            {show.fi && <th>{totalFi || "—"}</th>}
                            {show.fr && <th>{totalFi ? "100,0%" : "—"}</th>}
                            {show.Fi && <th>—</th>}
                            {show.FrAcum && <th>—</th>}
                        </tr>
                    </tfoot>
                </table>
            </div>

            {medianViz?.enabled && medianInfo && (
                <div className="alert alert-light border mt-3">
                    <strong>Mediana (usando a frequência acumulada):</strong>

                    <p className="mt-2 mb-2">
                        Total de dados: <strong>{medianInfo.n}</strong>. As posições centrais são{" "}
                        <strong>{medianInfo.pos1}ª</strong>
                        {medianInfo.pos2 !== medianInfo.pos1 ? (
                            <>
                                {" "}e <strong>{medianInfo.pos2}ª</strong>
                            </>
                        ) : null}
                        .
                    </p>

                    <p className="mb-2">
                        Pela coluna <strong>Fi</strong>, identificamos:
                        {" "}
                        <strong>{medianInfo.pos1}ª</strong> posição → <strong>{String(medianInfo.v1)}</strong>
                        {medianInfo.pos2 !== medianInfo.pos1 ? (
                            <>
                                {" "}e <strong>{medianInfo.pos2}ª</strong> posição →{" "}
                                <strong>{String(medianInfo.v2)}</strong>
                            </>
                        ) : null}
                        .
                    </p>

                    {showBadges && (
                        <div className="p-3 bg-white border rounded">
                            <strong>Fila de posições:</strong>
                            <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
                                {badges.map((b) => {
                                    const isMiddle =
                                        b.pos === medianInfo.pos1 || b.pos === medianInfo.pos2;
                                    return (
                                        <span
                                            key={b.pos}
                                            className={`badge ${isMiddle ? "bg-success" : "bg-secondary"}`}
                                        >
                                            {b.pos}ª<br />
                                            {String(b.value)}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
