import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "@/views/admin/Dashboard";
import Departement from "./views/admin/department/ListDepartements";
import Filiere from "@/views/admin/filiere/ListFilieres";
import Module from "@/views/admin/module/ListModules";
import Element from "@/views/admin/element/ListElement"
import Login from "@/views/Login";
import DashboardLayout from "@/components/admin/DashboardLayout";
import TableData from "@/components/TableData";

export default function RouteHandeler() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/departement" element={<Departement />} />
          <Route path="/chef-departement" element={<div>chef dep</div>} />
          <Route path="/enseignant" element={<div>enseignant</div>} />
          <Route path="/filiere" element={<Filiere/>} />
          <Route path="/module" element={<Module />} />
          <Route path="/element-module" element={<Element />} />
        </Route>
        <Route path="/test" element={<TableData />} />
      </Routes>
    </BrowserRouter>
  );
}
