import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()

        const dataUser = JSON.parse(localStorage.getItem("usersdata")) || []

        const userFound = dataUser.find((u) => u.user === user && u.password === password)

        if (userFound) {
            alert("Inicio de sesión exitoso")
            navigate("/Dashboard")
        } else {
            alert("Usuario o contraseña incorrectos")
        }
    }

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl mb-6">Login</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-4 w-96 bg-slate-800 p-6 rounded-lg shadow-lg">
                    <label>Usuario:</label>
                    <input type="text" className="p-2 rounded-md text-black" onChange={(e)=> { setUser(e.target.value)}} required/>
                    
                    <label>Contraseña:</label>
                    <input type="password" className="p-2 rounded-md text-black" onChange={(e)=> { setPassword(e.target.value)}} required/>
                    
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                        Acceder
                    </button>
                    <p onClick={()=>{navigate('/register')}} className="text-center text-blue-600 cursor-pointer">¿No tienes cuenta? ¡Click Aqui!</p>
                </form>
            </div>
        </>
    )
}