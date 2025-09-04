import { useEffect, useState } from "react"
import { MdToggleOn } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";

export default function UsuariosDashboard() {
    const [usuarios, setUsuarios] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("usersdata")) || [];
        setUsuarios(data);
    }, []);

    const [formData, setFormData] = useState({
        email: "",
        user: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function formUsuarios(e) {
        e.preventDefault()

        const dataUser = JSON.parse(localStorage.getItem("usersdata")) || []

        dataUser.push(formData)

        localStorage.setItem("usersdata", JSON.stringify(dataUser))

        alert("Usuario registrado exitosamente")
        setIsOpen(false)
        setUsuarios(dataUser)
    }

    return (
        <>
            <div className="min-h-screen p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <p className="text-2xl font-bold mb-6">Gestión de usuarios registrados</p>
                    <button onClick={() => setIsOpen(true)}
                        className="bg-green-500 hover:bg-green-600 transition px-3 py-2 rounded font-semibold text-white">
                        Nuevo usuario
                    </button>
                </div>

                <div className="bg-white p-4 shadow">
                    <h2 className="text-sm ">Usuarios Registrados</h2>
                    <p className="text-2xl font-bold">{usuarios.length}</p>
                </div>

                <div>
                    <table className="w-full bg-white border text-left mt-6">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">#</th>
                                <th className="border px-4 py-2">Correo Electrónico</th>
                                <th className="border px-4 py-2">Usuario</th>
                                <th className="border px-4 py-2">Contraseña</th>
                                <th className="border px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-4 py-2">{usuario.email}</td>
                                    <td className="border px-4 py-2">{usuario.user}</td>
                                    <td className="border px-4 py-2 flex items-center justify-between">{usuario.password} <FaEyeSlash /></td>
                                    <td className="border px-4 py-2">
                                        <MdToggleOn className="text-2xl text-gray-500 cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white border rounded-2xl shadow-lg w-96 p-6">
                        <h2 className="text-xl font-bold mb-4">Registrar nuevo usuario</h2>
                        <form className="flex flex-col gap-3" onSubmit={formUsuarios}>
                            <input type="email" placeholder="Correo electrónico" className="border p-2 rounded" name="email" onChange={handleChange} />
                            <input type="text" placeholder="Usuario" className="border p-2 rounded" name="user" onChange={handleChange} />
                            <input type="password" placeholder="Contraseña" className="border p-2 rounded" name="password" onChange={handleChange} />

                            <div className="flex justify-end gap-3 mt-4">
                                <button type="button" onClick={() => setIsOpen(false)}
                                    className="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded text-white">
                                    Cancelar
                                </button>
                                <button type="submit"
                                    className="bg-green-500 hover:bg-green-600 px-3 py-2 rounded text-white">
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </>
    )
}