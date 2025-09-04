import { useNavigate } from "react-router-dom"

export default function InicioLanding() {
    const navigate = useNavigate()
    return (
        <>
            <section className="flex min-h-screen p-6">
                {/* Columna izquierda */}
                <div className="flex-1 flex flex-col justify-center items-center gap-4 text-white">
                    <h1 className="text-5xl font-bold text-center mb-4">
                        Bienvenidos a<span className="text-yellow-400"> suministros eléctricar</span>
                    </h1>
                    <p className="text-center text-xl mb-2">
                        Todo en bombillas, lámparas, luces LED, cables y más.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-yellow-400 hover:bg-yellow-500 transition text-black px-4 py-2 rounded-md" onClick={()=>{navigate('/productosHome')  }}>
                            Ver catálogo
                        </button>
                        <button className="border px-4 py-2 rounded-md" onClick={()=>{navigate('/contactanosHome')}}>
                            Contáctanos
                        </button>
                    </div>
                </div>

                {/* Columna derecha */}
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="/logo.png"
                        className="w-80 rounded-3xl shadow-lg"
                    />
                </div>
            </section>
        </>
    )
}