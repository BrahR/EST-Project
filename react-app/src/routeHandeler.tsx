import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "@/admin/dashboard";
import Departement from "@/admin/departement/departements";
import Login from "@/views/login";

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
