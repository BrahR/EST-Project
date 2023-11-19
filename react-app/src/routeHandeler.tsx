import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./login"
import Dashboard from "./admin/dashboard"


export default function RouteHandeler() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}