import "../assets/css/dashboard.css";
import { BarChartLine, Check2Circle, LightningCharge } from "react-bootstrap-icons";

function formatBR(dt) {
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dt.getDate())}/${pad(dt.getMonth() + 1)}/${dt.getFullYear()} • ${pad(
        dt.getHours()
    )}:${pad(dt.getMinutes())}`;
}

export default function Dashboard() {
    const lastUpdate = formatBR(new Date());

    // (por enquanto) dados mockados — depois vem do backend
    const metrics = [
        { label: "Questões respondidas", value: "248", sub: "+12 hoje" },
        {
            label: "Taxa de acertos",
            value: "78%",
            valueClass: "text-success",
            progress: 78,
            meta: "Meta: 85%",
        },
        { label: "Questões em TI", value: "195", sub: "Banco de Dados, Redes, Segurança…" },
        { label: "Simulados realizados", value: "7", sub: "Média: 71% de acertos" },
    ];

    const desempenho = [
        { label: "Banco de Dados (SQL)", value: 82 },
        { label: "Redes de Computadores", value: 74 },
        { label: "Segurança da Informação", value: 69 },
        { label: "Desenvolvimento / Programação", value: 81 },
    ];

    const sessoes = [
        { data: "12/03/2025", modo: "Simulado", questoes: 20, acertos: 16, perc: 80, badge: "success" },
        { data: "11/03/2025", modo: "Treino por assunto", questoes: 15, acertos: 10, perc: 67, badge: "warning" },
        { data: "10/03/2025", modo: "Revisão de erros", questoes: 12, acertos: 9, perc: 75, badge: "success" },
        { data: "09/03/2025", modo: "Simulado", questoes: 20, acertos: 13, perc: 65, badge: "danger" },
    ];

    const errosRecentes = [
        { titulo: "JOINs (INNER/LEFT/RIGHT)", sub: "Banco de Dados • 6 erros nos últimos 7 dias" },
        { titulo: "Modelo OSI x TCP/IP", sub: "Redes • 5 erros nos últimos 7 dias" },
        { titulo: "Criptografia simétrica/assimétrica", sub: "Segurança • 4 erros nos últimos 7 dias" },
    ];

    return (
        <>
            <main className="py-4">
                <div className="container">
                    {/* HEADER DO DASHBOARD */}
                    <section className="dashboard-header mb-4">
                        <div>
                            <h1 className="h3 fw-bold mb-1 d-flex align-items-center gap-2">
                                <BarChartLine />
                                Dashboard do Aluno
                            </h1>
                            <p className="text-muted mb-0">
                                Visão geral do seu desempenho nas questões de TI para o Banco do Brasil.
                            </p>
                        </div>

                        <div className="text-end">
                            <span className="badge bg-primary-subtle text-primary-emphasis rounded-pill">
                                Última atualização: {lastUpdate}
                            </span>
                        </div>
                    </section>

                    {/* CARDS RESUMO */}
                    <section className="row g-3 mb-4">
                        {metrics.map((m, idx) => (
                            <div key={idx} className="col-12 col-sm-6 col-xl-3">
                                <div className="card metric-card h-100">
                                    <div className="card-body">
                                        <p className="metric-label">{m.label}</p>
                                        <p className={`metric-value ${m.valueClass || ""}`}>{m.value}</p>

                                        {typeof m.progress === "number" ? (
                                            <>
                                                <div className="progress progress-cc mt-2">
                                                    <div
                                                        className="progress-bar progress-bar-cc"
                                                        style={{ width: `${m.progress}%` }}
                                                    />
                                                </div>
                                                <p className="metric-sub text-muted mt-1">{m.meta}</p>
                                            </>
                                        ) : (
                                            <p className="metric-sub text-muted">{m.sub}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* LINHA 2 */}
                    <section className="row g-4 mb-4">
                        {/* Desempenho por matéria */}
                        <div className="col-12 col-lg-6">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="h5 fw-bold mb-3 d-flex align-items-center gap-2">
                                        <Check2Circle />
                                        Desempenho por matéria
                                    </h2>

                                    {desempenho.map((d, idx) => (
                                        <div className={idx === desempenho.length - 1 ? "" : "mb-3"} key={idx}>
                                            <div className="d-flex justify-content-between mb-1">
                                                <span>{d.label}</span>
                                                <span className="text-muted">{d.value}%</span>
                                            </div>
                                            <div className="progress progress-cc">
                                                <div className="progress-bar progress-bar-cc" style={{ width: `${d.value}%` }} />
                                            </div>
                                        </div>
                                    ))}

                                    <p className="small text-muted mt-3 mb-0">
                                        Dica: concentre sua revisão nos assuntos com barras abaixo de 75%.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Últimas sessões */}
                        <div className="col-12 col-lg-6">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="h5 fw-bold mb-3 d-flex align-items-center gap-2">
                                        <LightningCharge />
                                        Últimas sessões de estudo
                                    </h2>

                                    <div className="table-responsive">
                                        <table className="table table-sm align-middle mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Data</th>
                                                    <th>Modo</th>
                                                    <th>Questões</th>
                                                    <th>Acertos</th>
                                                    <th>Desempenho</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sessoes.map((s, idx) => (
                                                    <tr key={idx}>
                                                        <td>{s.data}</td>
                                                        <td>{s.modo}</td>
                                                        <td>{s.questoes}</td>
                                                        <td>{s.acertos}</td>
                                                        <td>
                                                            <span className={`badge bg-${s.badge}-subtle text-${s.badge}-emphasis`}>
                                                                {s.perc}%
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="small text-muted mt-3 mb-0">
                                        Futuro: estes dados virão do seu histórico real de questões e simulados.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ERROS RECENTES */}
                    <section>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="h5 fw-bold mb-3">Assuntos com mais erros recentes</h2>

                                <div className="row g-3">
                                    {errosRecentes.map((t, idx) => (
                                        <div key={idx} className="col-12 col-md-4">
                                            <div className="topic-pill">
                                                <p className="topic-title mb-1">{t.titulo}</p>
                                                <p className="topic-sub mb-0 text-muted">{t.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <p className="small text-muted mt-3 mb-0">
                                    Ideia de funcionalidade: botão “Treinar este assunto” para abrir uma lista filtrada de questões.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="py-4 footer-cc mt-4">
                <div className="container text-center small">
                    <div className="mb-2">© {new Date().getFullYear()} Cachorro Cafezeiro — Todos os direitos reservados.</div>
                    <div className="muted">Política de Privacidade • Termos</div>
                </div>
            </footer>
        </>
    );
}
