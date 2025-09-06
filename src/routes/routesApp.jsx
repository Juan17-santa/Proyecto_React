import { Route, Routes } from "react-router-dom";
import Landing from "../feature/landing/landing";
import InicioHome from "../feature/landing/pages/inicioHome/inicioHome";
import ProductosHome from "../feature/landing/pages/productosHome/productosHome";
import ServiciosHome from "../feature/landing/pages/serviciosHome/serviciosHome";
import ContactanosHome from "../feature/landing/pages/contactanosHome/contactanosHome";
import Login from "../feature/landing/pages/auth/login";
import Register from "../feature/landing/pages/auth/register";

import Dashboard from "../feature/dashboard/dashboard";
import InicioDarshboard from "../feature/dashboard/inicioDashboard/inicioDashboard";
import UsuariosDashboard from "../feature/dashboard/usuariosDashboard/usuariosDashboard";
import ProductosDashboard from "../feature/dashboard/productosDashboard/productosDashboard";
import PedidosDashboard from "../feature/dashboard/pedidosDashboard/pedidosDashboard";

export default function RoutesApp() {
  return (
    <>
      <Routes>
        {/* Rutas de la landing */}
        <Route path="/" element={<Landing />}>
          <Route index element={<InicioHome />} />
          <Route path="/productosHome" element={<ProductosHome />} />
          <Route path="/serviciosHome" element={<ServiciosHome />} />
          <Route path="/contactanosHome" element={<ContactanosHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Rutas del dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<InicioDarshboard />} />
          <Route path="usuarios" element={<UsuariosDashboard />} />
          <Route path="productos" element={<ProductosDashboard />} />
          <Route path="pedidos" element={<PedidosDashboard />} />
        </Route>
      </Routes>
    </>
  )
}