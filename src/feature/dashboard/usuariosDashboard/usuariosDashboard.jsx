import { useEffect, useState } from "react"
import { MdToggleOn } from "react-icons/md";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { UsuariosServices } from "./services/usuariosServices";

export default function UsuariosDashboard() {
    const [usuarios, setUsuarios] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [emailExists, setEmailExists] = useState(false)

    useEffect(() => {
        setUsuarios(UsuariosServices.listUsers())
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

        const createUser = UsuariosServices.createUsers(formData)
        setUsuarios(createUser)

        alert("Usuario registrado exitosamente")
        setIsOpen(false)
    }

    function deleteRegisters() {
        alert("Se eliminaran todos los registros")
        localStorage.removeItem("usersdata")
        setUsuarios([])
    }

    function onblurUsers(e) {
        const { value } = e.target;
        const users = UsuariosServices.listUsers();

        const existe = users.some((user) =>
            user.email === value
        )

        if (existe) {
            alert("El correo ya existe")
        }

        setEmailExists(existe)

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
                                    <td className="border px-4 py-2 flex justify-between">
                                        {showPassword ? usuario.password : "••••••"}
                                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <MdToggleOn className="text-2xl text-gray-500 cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="px-3 py-2 bg-red-600 text-white rounded mt-4" onClick={deleteRegisters}>Borrar registros</button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white border rounded-2xl shadow-lg w-96 p-6">
                        <h2 className="text-xl font-bold mb-4">Registrar nuevo usuario</h2>
                        <form className="flex flex-col gap-3" onSubmit={formUsuarios}>
                            <input type="email" placeholder="Correo electrónico" className="border p-2 rounded" name="email" onChange={handleChange} onBlur={onblurUsers} />
                            <input type="text" placeholder="Usuario" className="border p-2 rounded" name="user" onChange={handleChange} disabled={emailExists}/>
                            <div className="flex items-center gap-2">
                                <input
                                    placeholder="Contraseña"
                                    className="border p-2 rounded flex-1"
                                    name="password"
                                    onChange={handleChange}
                                    disabled={emailExists}
                                    type={showPassword ? 'text' : 'password'}
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="px-2">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            <div className="flex justify-end gap-3 mt-4">
                                <button type="button" onClick={() => setIsOpen(false)}
                                    className="bg-gray-400 hover:bg-gray-500 px-3 py-2 rounded text-white">
                                    Cancelar
                                </button>
                                {!emailExists ? (
                                    <button type="submit" className="bg-green-500 hover:bg-green-600 px-3 py-2 rounded text-white">
                                        Guardar
                                    </button>
                                ) : (
                                    <button type="button" disabled className="bg-gray-400 px-3 py-2 rounded text-white cursor-not-allowed">
                                        Guardar
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </>
    )
}