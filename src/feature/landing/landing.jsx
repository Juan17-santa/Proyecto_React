import { Outlet, Link, useNavigate } from "react-router-dom";
import { Footer } from "./components/footer";
import Navbar from "./components/navbar";

export default function Landing() {
    const navigate = useNavigate()
  return (
    <>
        <Navbar />
        <main className="min-h-screen bg-slate-700">
            <Outlet />
        </main>
        <Footer />
    </>
  );
}