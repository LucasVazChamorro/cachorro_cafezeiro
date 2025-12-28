import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    Cpu,
    Calculator,
    BarChartLine,
    HouseDoor,
    Speedometer2,
    JournalText,
    ChevronDown,
    ListCheck,
    Bullseye
} from "react-bootstrap-icons";

function cx(...classes) {
    return classes.filter(Boolean).join(" ");
}

function SideItem({ to, icon: Icon, children }) {
    return (
        <li className="nav-item">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    cx(
                        "nav-link d-flex align-items-center gap-2 px-2 py-2 rounded",
                        isActive && "fw-bold bg-light"
                    )
                }
            >
                <Icon size={16} />
                <span>{children}</span>
            </NavLink>
        </li>
    );
}

function CollapsibleGroup({ title, icon: Icon, isOpen, onToggle, children }) {
    return (
        <div className="mb-3">
            <button
                type="button"
                onClick={onToggle}
                className={cx(
                    "btn w-100 text-start d-flex align-items-center justify-content-between px-2 py-2 rounded",
                    "border-0"
                )}
                style={{ background: "transparent" }}
            >
                <span className="d-flex align-items-center gap-2 fw-bold">
                    <Icon size={16} />
                    {title}
                </span>
                <ChevronDown
                    size={16}
                    style={{
                        transition: "transform 180ms ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                />
            </button>

            <div
                style={{
                    display: isOpen ? "block" : "none",
                    paddingLeft: 10,
                    marginTop: 6,
                }}
            >
                <ul className="nav flex-column">{children}</ul>
            </div>
        </div>
    );
}

export default function Sidebar() {
    const { pathname } = useLocation();

    const [openTI, setOpenTI] = useState(true);
    const [openEst, setOpenEst] = useState(true);
    const [openMat, setOpenMat] = useState(false);

    // Abrir automaticamente o grupo conforme a rota atual
    useEffect(() => {
        if (pathname.startsWith("/ti/")) setOpenTI(true);
        if (pathname.startsWith("/estatistica/")) setOpenEst(true);
        if (pathname.startsWith("/matematica/")) setOpenMat(true);
    }, [pathname]);

    return (
        <aside className="border-end bg-white" style={{ width: 290, minHeight: "100vh" }}>
            {/* Topo */}
            <div className="p-3 border-bottom">
                <div className="d-flex align-items-center gap-2">
                    <img
                        src="/logo2.png"
                        alt="Cachorro Cafezeiro"
                        width="36"
                        height="36"
                        style={{ borderRadius: 10, objectFit: "contain" }}
                    />
                    <div>
                        <div className="fw-bold">Cachorro Cafezeiro</div>
                        <div className="text-muted small">Painel de estudos</div>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <nav className="p-3">
                {/* Geral */}
                <div className="mb-3">
                    <div className="fw-bold mb-2 d-flex align-items-center gap-2">
                        <HouseDoor size={16} />
                        Geral
                    </div>
                    <ul className="nav flex-column">
                        <SideItem to="/dashboard" icon={Speedometer2}>
                            Dashboard
                        </SideItem>
                    </ul>
                </div>

                {/* Nivelamentos */}
                <div className="fw-bold mb-2 d-flex align-items-center gap-2">
                    <JournalText size={16} />
                    Nivelamentos
                </div>

                <CollapsibleGroup
                    title="Tecnologia da Informação"
                    icon={Cpu}
                    isOpen={openTI}
                    onToggle={() => setOpenTI((v) => !v)}
                >
                    <SideItem to="/ti/big-data" icon={Cpu}>
                        Big Data
                    </SideItem>
                    <SideItem to="/ti/data-warehouse" icon={Cpu}>
                        Data Warehouse
                    </SideItem>
                </CollapsibleGroup>

                <CollapsibleGroup
                    title="Probabilidade e Estatística"
                    icon={BarChartLine}
                    isOpen={openEst}
                    onToggle={() => setOpenEst((v) => !v)}
                >
                    <SideItem to="/estatistica/nocoes" icon={BarChartLine}>
                        Noções de Estatística
                    </SideItem>
                    <SideItem
                        to="/estatistica/medidas-tendencia-central"
                        icon={Bullseye}
                    >
                        Medidas de Tendência Central
                    </SideItem>
                </CollapsibleGroup>

                <CollapsibleGroup
                    title="Matemática"
                    icon={Calculator}
                    isOpen={openMat}
                    onToggle={() => setOpenMat((v) => !v)}
                >
                    <SideItem to="/matematica/regra-de-tres" icon={Calculator}>
                        Regra de três simples
                    </SideItem>
                </CollapsibleGroup>

                {/* Banco de questões (futuro) */}
                <div className="mt-4">
                    <div className="fw-bold mb-2 d-flex align-items-center gap-2">
                        <ListCheck size={16} />
                        Questões
                    </div>
                    <ul className="nav flex-column">
                        <SideItem to="/questoes" icon={ListCheck}>
                            Banco de Questões
                        </SideItem>
                    </ul>

                    <div className="text-muted small mt-2">
                        *Rotas “Banco de Questões” e “Regra de três” podem ser criadas depois.
                    </div>
                </div>
            </nav>
        </aside>
    );
}
