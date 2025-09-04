import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate()
  return (
    <>
        <nav className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold cursor-pointer" onClick={()=>{navigate('/')}}>Electro<span className="text-yellow-500">Soft</span></h1>
            </div>
            <div className="flex gap-4 mr-4">
                <Link className="hover:bg-blue-700 p-2 rounded-lg transition" to="/">Inicio</Link>
                <Link className="hover:bg-blue-700 p-2 rounded-lg transition" to="/productosHome">Productos</Link>
                <Link className="hover:bg-blue-700 p-2 rounded-lg transition" to="/serviciosHome">Servicios</Link>
                <Link className="hover:bg-blue-700 p-2 rounded-lg transition" to="/contactanosHome">Contactanos</Link>
                <Link className="hover:bg-blue-700 p-2 rounded-lg transition" to="/login">Login</Link>
            </div>
        </nav>
        <main className="min-h-screen bg-slate-700">
            <Outlet />
        </main> 
    </>
  );
}