export default function ContactanosLanding() {

    const handleContacto = (e) => {
        e.preventDefault()
        alert('Mensaje enviado, pronto nos contactaremos contigo')
        e.target.reset()
    }

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl mb-6">Contactanos</h1>
                <form onSubmit={handleContacto} className="flex flex-col gap-4 w-96 bg-slate-800 p-6 rounded-lg shadow-lg">
                    <label>Nombre:</label>
                    <input type="text" className="p-2 rounded-md text-black" required />

                    <label>Correo:</label>
                    <input type="email" className="p-2 rounded-md text-black" required />

                    <label>Mensaje:</label>
                    <textarea className="p-2 rounded-md text-black" required></textarea>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                        Enviar
                    </button>
                </form>

            </div>
        </>
    )
}