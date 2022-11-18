import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  LayoutPage,
} from "pages";
import ProtectedRoute from "./ProtectedRoute";
import { AdmMessagePage, AdmMessageStorePage } from "pages/Adm";
const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/adm" element={<ProtectedRoute />}>
          <Route path="message" element={<AdmMessagePage />} />
          <Route path="message/:id" element={<AdmMessageStorePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Rotas;
