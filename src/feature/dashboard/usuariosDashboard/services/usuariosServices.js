export const UsuariosServices = {
    createUsers(usuario) {
        const data = JSON.parse(localStorage.getItem("usersdata")) || [];
        data.push(usuario);
        localStorage.setItem("usersdata", JSON.stringify(data));
        return data;
    },

    listUsers() {
        const data = JSON.parse(localStorage.getItem("usersdata")) || [];
        return data;
    },

    updateUsers() {

    },

    deleteUsers() {

    },
}