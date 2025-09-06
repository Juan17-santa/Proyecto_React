import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate()

    const handleLogout = () => {
        // ↓↓↓ Esto es para cerrar la sesion y poder hacer las rutas privadas cuando me enseñen ↓↓↓
        // localStorage.removeItem('token');
        navigate('/login')
    }

    return (
        <>
            <div className="bg-slate-700 text-white p-3 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Bienvenido</h1>
                </div>
                <div className="flex gap-4 mr-4">
                    <button type="button" className="border rounded-lg px-3 py-1 hover:bg-slate-600 transition" onClick={handleLogout}>Cerrar Sesion</button>
                </div>
            </div>
            <div className="flex min-h-screen">
                {/* Menu lateral */}
                <div className="w-1/5 bg-slate-700 text-white p-4">
                    <h2 className="text-xl font-bold mb-6">Panel Administrador</h2>
                    <ul className="flex flex-col gap-1">
                        <li><Link to="/dashboard" className="block px-2 py-1 rounded hover:bg-slate-800 transition cursor-pointer">Inicio</Link></li>
                        <li><Link to="/dashboard/usuarios" className=" block px-2 py-1 rounded hover:bg-slate-800 transition cursor-pointer">Usuarios</Link></li>
                        <li><Link to="/dashboard/productos"className="block px-2 py-1 rounded hover:bg-slate-800 transition cursor-pointer">Productos</Link></li>
                        <li><Link to="/dashboard/pedidos"className="block px-2 py-1 rounded hover:bg-slate-800 transition cursor-pointer">Pedidos</Link></li>
                        <li><Link className="block px-2 py-1 rounded hover:bg-slate-800 transition cursor-pointer">Configuración</Link></li>
                    </ul>
                </div>

                {/* Contenido */}
                <main className="w-4/5 bg-gray-100 p-6">
                    <Outlet />
                </main>
            </div>
        </>
    )
}