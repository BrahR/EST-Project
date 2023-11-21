import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "@/views/admin/Dashboard";
import Departement from "@/admin/departement/departements";
import Login from "@/views/Login";

export default function RouteHandeler() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Departement */}
        <Route path="/deparetement" element={<Departement />} />
      </Routes>
    </BrowserRouter>
  );
}
