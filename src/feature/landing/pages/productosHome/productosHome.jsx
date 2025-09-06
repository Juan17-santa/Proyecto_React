import { useNavigate } from "react-router-dom"

export default function ProductosHome() {
    const navigate = useNavigate()

    return (
        <>
            <h1 className="text-3xl flex justify-center pt-6 text-white font-semibold">¡Nuestros productos mas vendidos!</h1>
            <div className="grid grid-cols-3 gap-8 p-16 min-h-screen">
                {/* Producto 1 */}
                <div className="flex flex-col items-center justify-center p-4 bg-slate-800 text-white rounded-lg gap-1">
                    <h2 className="font-semibold text-xl">Lamparas Colgantes</h2>
                    <img src="/producto1.jpg" className="w-44 h-32 my-2 rounded-lg" />
                    <p>Precio: $35.000</p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 mt-2 rounded-lg font-semibold" onClick={()=>{navigate('/login')}}>
                        Comprar
                    </button>
                </div>

                {/* Producto 2 */}
                <div className="flex flex-col items-center justify-center p-4 bg-slate-800 text-white rounded-lg gap-1">
                    <h2 className="font-semibold text-xl">Luces led</h2>
                    <img src="/producto2.jpg" className="w-44 h-32 my-2 rounded-lg" />
                    <p>Precio: $30.000</p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 mt-2 rounded-lg font-semibold" onClick={()=>{navigate('/login')}}>
                        Comprar
                    </button>
                </div>

                {/* Producto 3 */}
                <div className="flex flex-col items-center justify-center p-4 bg-slate-800 text-white rounded-lg gap-1">
                    <h2 className="font-semibold text-xl">Bombilla</h2>
                    <img src="/producto3.jpg" className="w-44 h-32 my-2 rounded-lg" />
                    <p>Precio: $10.000</p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 mt-2 rounded-lg font-semibold" onClick={()=>{navigate('/login')}}>
                        Comprar
                    </button>
                </div>

                {/* Producto 4 */}
                <div className="flex flex-col items-center justify-center p-4 bg-slate-800 text-white rounded-lg gap-1">
                    <h2 className="font-semibold text-xl">Interruptor</h2>
                    <img src="/producto4.jpg" className="w-44 h-32 my-2 rounded-lg" />
                    <p>Precio: $10.000</p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 mt-2 rounded-lg font-semibold" onClick={()=>{navigate('/login')}}>
                        Comprar
                    </button>
                </div>

                {/* Producto 5 */}
                <div className="flex flex-col items-center justify-center p-4 bg-slate-800 text-white rounded-lg gap-1">
                    <h2 className="font-semibold text-xl">Regleta electrica</h2>
                    <img src="/producto5.jpg" className="w-44 h-32 my-2 rounded-lg" />
                    <p>Precio: $15.000</p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 mt-2 rounded-lg font-semibold" onClick={()=>{navigate('/login')}}>
                        Comprar
                    </button>
                </div>

                {/* Producto 6 */}
                <div className="flex flex-col items-center justify-center p-4 bg-slate-800 text-white rounded-lg gap-1">
                    <h2 className="font-semibold text-xl">Bombillas inteligentes</h2>
                    <img src="/producto6.jpg" className="w-44 h-32 my-2 rounded-lg" />
                    <p>Precio: $20.000</p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 mt-2 rounded-lg font-semibold" onClick={()=>{navigate('/login')}}>
                        Comprar
                    </button>
                </div>
            </div>
        </>
    )
}