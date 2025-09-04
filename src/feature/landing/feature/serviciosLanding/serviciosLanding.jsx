export default function ServiciosLanding() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center p-10">
                <h2 className="text-3xl font-bold mb-6 text-white">Nuestros Servicios</h2>

                <div className="flex flex-col gap-6 mt-6">

                    <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:scale-105 transition">
                        <h3 className="font-semibold text-lg mb-2">Mantenimiento</h3>
                        <p className="text-gray-600">
                            Reparaciones, optimización y soporte especializado para tus equipos.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:scale-105 transition">
                        <h3 className="font-semibold text-lg mb-2">Transporte</h3>
                        <p className="text-gray-600">
                            Servicio de envíos rápidos y seguros a cualquier parte del país.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:scale-105 transition">
                        <h3 className="font-semibold text-lg mb-2">Atención 24/7</h3>
                        <p className="text-gray-600">
                            Soporte al cliente disponible en todo momento para ayudarte.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}