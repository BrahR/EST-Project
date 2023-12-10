import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "@/views/admin/Dashboard";
import Departement from "@/views/admin/department/ListDepartements";
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
        </Route>
        <Route path="/test" element={<TableData/>} />
      </Routes>
    </BrowserRouter>
  );
}
