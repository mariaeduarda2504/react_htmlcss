import { Routes, Route } from "react-router-dom";
import { PedidosPage, HomePage, LayoutPage } from "pages";

const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
