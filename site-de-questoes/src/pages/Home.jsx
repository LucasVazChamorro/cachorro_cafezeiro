import LandingNavbar from "../components/nav/LandingNavbar.jsx";
import HomeFooter from "../components/footer/HomeFooter.jsx";
import { Link } from "react-router-dom";
import {
    JournalText,
    Stopwatch,
    BarChartLine,
    Check2Square,
    PlayCircle,
    ArrowRightCircle,
} from "react-bootstrap-icons";

function SectionTitle({ kicker, title, subtitle }) {
    return (
        <div className="mb-3">
            {kicker ? <div className="text-muted small mb-1">{kicker}</div> : null}
            <h2 className="h3 fw-bold mb-1">{title}</h2>
            {subtitle ? <div className="text-muted">{subtitle}</div> : null}
        </div>
    );
}

function FeatureCard({ Icon, title, children }) {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-2">
                    <Icon size={20} />
                    <h5 className="mb-0">{title}</h5>
                </div>
                <p className="text-muted mb-0">{children}</p>
            </div>
        </div>
    );
}

function PlanCard({ title, price, badge, features, highlight, ctaLabel, ctaHref }) {
    return (
        <div className={`card h-100 shadow-sm ${highlight ? "border-primary" : ""}`}>
            <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between">
                    <h3 className="h5 fw-bold mb-0">{title}</h3>
                    {badge ? <span className="badge text-bg-light border">{badge}</span> : null}
                </div>

                <div className="mt-3">
                    <div className="display-6 fw-bold">{price}</div>
                    <div className="text-muted small">por mês</div>
                </div>

                <ul className="mt-3 mb-4">
                    {features.map((f, idx) => (
                        <li key={idx} className="mb-1">
                            {f}
                        </li>
                    ))}
                </ul>

                <a
                    href={ctaHref}
                    className={`btn w-100 ${highlight ? "cc-btn-cafe" : "btn-outline-secondary"}`}
                >
                    {ctaLabel}
                </a>

            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <LandingNavbar />

            <main>
                {/* HERO */}
                <section id="inicio" className="py-5">
                    <div className="container">
                        <div className="row align-items-center g-4">
                            <div className="col-lg-7">
                                <span className="badge text-bg-light border mb-3">
                                    Questões de TI • Banco do Brasil
                                </span>

                                <h1 className="display-5 fw-bold mb-3">
                                    Cachorro Cafezeiro — seu painel de estudos
                                </h1>

                                <p className="lead text-muted mb-4">
                                    Nivelamentos, resumos e questões no padrão Cesgranrio/Vunesp.
                                    Estude com método e acompanhe seu progresso.
                                </p>

                                <div className="d-flex gap-2 flex-wrap">
                                    <Link to="/dashboard" className="btn cc-btn-cafe btn-lg">
                                        Acessar painel
                                    </Link>

                                    <a href="#como-funciona" className="btn btn-outline-secondary btn-lg">
                                        Ver como funciona
                                    </a>
                                </div>

                                <div className="mt-3 small text-muted">
                                    Comece pelo nivelamento do tópico e finalize com questões comentadas.
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="card border-0 shadow-sm">
                                    <div className="cc-logo-wrap cc-logo-wrap--hero mx-auto">
                                        <img
                                            src="/logo.png"
                                            alt="Cachorro Cafezeiro"
                                            className="img-fluid cc-logo cc-logo--hero"
                                            style={{ width: "100%", maxWidth: 360 }}
                                        />

                                        <div className="mt-3 text-muted small">
                                            Seu “café” diário de TI: conteúdo direto + prática.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENEFÍCIOS */}
                <section id="beneficios" className="py-4">
                    <div className="container">
                        <SectionTitle
                            kicker="Por que usar?"
                            title="Benefícios"
                            subtitle="Tudo pensado para você estudar com foco e constância."
                        />

                        <div className="row g-3">
                            <div className="col-md-4">
                                <FeatureCard Icon={JournalText} title="Questões focadas em TI">
                                    Filtros por matéria, tópico, subtópico e banca. Treino direcionado no que mais cai.
                                </FeatureCard>
                            </div>

                            <div className="col-md-4">
                                <FeatureCard Icon={Stopwatch} title="Simulados cronometrados">
                                    Rotina de prova com tempo e revisão. Você mede evolução sem achismo.
                                </FeatureCard>
                            </div>

                            <div className="col-md-4">
                                <FeatureCard Icon={BarChartLine} title="Dashboard do aluno">
                                    Acompanhe acertos/erros por assunto, revise fraquezas e consolide pontos fortes.
                                </FeatureCard>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMO FUNCIONA */}
                <section id="como-funciona" className="py-4">
                    <div className="container">
                        <SectionTitle
                            kicker="Mão na massa"
                            title="Como funciona na prática"
                            subtitle="Fluxo simples: entendimento → exemplos → questões."
                        />

                        <div className="row g-3">
                            <div className="col-md-4">
                                <FeatureCard Icon={PlayCircle} title="1) Nivelamento">
                                    Leia o resumo do tópico e veja o conteúdo no formato que a banca gosta.
                                </FeatureCard>
                            </div>

                            <div className="col-md-4">
                                <FeatureCard Icon={Check2Square} title="2) Questões interativas">
                                    Marque alternativa, veja gabarito comentado e use “limpar resposta” para treinar.
                                </FeatureCard>
                            </div>

                            <div className="col-md-4">
                                <FeatureCard Icon={ArrowRightCircle} title="3) Revisão no dashboard">
                                    Volte nas questões erradas e foque em tópicos com maior incidência.
                                </FeatureCard>
                            </div>
                        </div>

                        <div className="mt-3">
                            <Link to="/ti/big-data" className="btn btn-outline-secondary">
                                Ver exemplo: Big Data
                            </Link>
                        </div>
                    </div>
                </section>

                {/* PLANOS */}
                <section id="planos" className="py-5">
                    <div className="container">
                        <SectionTitle
                            kicker="Acesso"
                            title="Escolha seu plano"
                            subtitle="Comece no gratuito e evolua quando sentir necessidade."
                        />

                        <div className="row g-3">
                            <div className="col-md-6">
                                <PlanCard
                                    title="Gratuito"
                                    price="R$ 0"
                                    badge="Começar"
                                    highlight={false}
                                    features={[
                                        "Acesso a alguns nivelamentos",
                                        "Questões selecionadas",
                                        "Progresso básico",
                                    ]}
                                    ctaLabel="Criar conta grátis"
                                    ctaHref="#planos"
                                />
                            </div>

                            <div className="col-md-6">
                                <PlanCard
                                    title="Café Forte"
                                    price="R$ 19,90"
                                    badge="Mais recomendado"
                                    highlight={true}
                                    features={[
                                        "Todos os nivelamentos",
                                        "Banco completo de questões",
                                        "Dashboard avançado",
                                        "Revisão por erros",
                                    ]}
                                    ctaLabel="Quero o Café Forte"
                                    ctaHref="#planos"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                
            </main>

            <HomeFooter />
        </>
    );
}
