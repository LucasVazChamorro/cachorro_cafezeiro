import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import BigData from "./pages/BigData.jsx";
import DataWarehouse from "./pages/DataWarehouse.jsx";
import NocoesEstatistica from "./pages/NocoesEstatistica.jsx";
import MedidasTendenciaCentral from "./pages/MedidasTendenciaCentral.jsx";

import SiteLayout from "./layouts/SiteLayout.jsx";

export default function App() {
  return (
    <Routes>
      {/* Home sem sidebar */}
      <Route path="/" element={<Home />} />

      {/* Tudo abaixo com sidebar */}
      <Route element={<SiteLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ti/big-data" element={<BigData />} />
        <Route path="/ti/data-warehouse" element={<DataWarehouse />} />
        <Route path="/estatistica/nocoes" element={<NocoesEstatistica />} />
        <Route
          path="/estatistica/medidas-tendencia-central"
          element={<MedidasTendenciaCentral />}
        />
      </Route>
    </Routes>
  );
}
