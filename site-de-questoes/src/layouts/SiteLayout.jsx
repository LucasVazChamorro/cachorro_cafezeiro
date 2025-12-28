import { Outlet } from "react-router-dom";
import Sidebar from "../components/nav/Sidebar";

export default function SiteLayout() {
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Conteúdo */}
            <div className="flex-fill" style={{ minWidth: 0 }}>
                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
