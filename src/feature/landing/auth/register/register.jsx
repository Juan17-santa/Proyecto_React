import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email:"",
        user:"",
        password:""
    })

    const data = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }))
    }

    function handleRegister(e) {
        e.preventDefault()

        const dataUser = JSON.parse(localStorage.getItem("usersdata")) || []

        dataUser.push(formData)

        localStorage.setItem("usersdata", JSON.stringify(dataUser))

        alert("Usuario registrado exitosamente")
        navigate("/login")
    }

    return ( 
        <>
            <div className="min-h-screen flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl my-6">Registrate</h1>
                <form onSubmit={handleRegister} className="flex flex-col gap-4 w-96 bg-slate-800 p-6 rounded-lg shadow-lg">
                        
                    <label>Correo electronico:</label>
                    <input type="email" className="p-2 rounded-md text-black" name="email" onChange={data} required/>
                        
                    <label>Usuario:</label>
                    <input type="text" className="p-2 rounded-md text-black" name="user" onChange={data} required />
                    
                    <label>Contraseña:</label>
                    <input type="password" className="p-2 rounded-md text-black" name="password" onChange={data} required/>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                        Registrarse
                    </button>
                        <p onClick={()=>{navigate('/login')}} className="text-center text-blue-600 cursor-pointer">¿Ya tienes cuenta? ¡Accede aqui!</p>
                </form>
            </div>
        </>
    )
}