import { Route, Routes } from "react-router-dom";
import Landing from "../feature/landing/landing";
import InicioLanding from "../feature/landing/feature/inicioLanding/inicioLanding";
import ProductosLanding from "../feature/landing/feature/productosLanding/productosLanding";
import ServiciosLanding from "../feature/landing/feature/serviciosLanding/serviciosLanding";
import ContactanosLanding from "../feature/landing/feature/contactanosLanding/contactanosLanding";
import Login from "../feature/landing/auth/login/login";
import Register from "../feature/landing/auth/register/register";

import Dashboard from "../feature/dashboard/dashboard";
import InicioDarshboard from "../feature/dashboard/inicioDashboard/inicioDashboard";
import UsuariosDashboard from "../feature/dashboard/usuariosDashboard/usuariosDashboard";

export default function RoutesApp() {
  return (
    <>
        <Routes>
            {/* Landing */}
            <Route element={<Landing />}>
                <Route path="/" element={<InicioLanding />} />
                <Route path="/productosHome" element={<ProductosLanding />} />
                <Route path="/serviciosHome" element={<ServiciosLanding />} />
                <Route path="/contactanosHome" element={<ContactanosLanding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            {/* Dashboard */}
            <Route element={<Dashboard />}>
                <Route path="/dashboard" element={<InicioDarshboard />} />
                <Route path="/dashboard/usuarios" element={<UsuariosDashboard />} />
            </Route>
        </Routes>
    </>
  )
}