import { useEffect, useState } from "react";

export default function InicioDarshboard() {
    const [userCount, setUserCount] = useState(0)

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("usersdata")) || [];
        setUserCount(users.length);
    }, []);

    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Bienvenido al Panel Administrativo</h1>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-sm ">Usuarios Registrados</h2>
                        <p className="text-2xl font-bold">{userCount}</p>
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-sm ">Productos</h2>
                        <p className="text-2xl font-bold">000</p>
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-sm ">Pedidos</h2>
                        <p className="text-2xl font-bold">0000</p>
                    </div>
                </div>

                <h2>Aca va mas info:bb</h2>
            </div>
        </>
    )
}