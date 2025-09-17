const Users = require("../models/userModel");

exports.createUser = async (req, res) => {
    try {
        let { name, lastname, email, type, password } = req.body;

        if (type === "user") {
            type = 1;
        } else if (type === "admin") {
            type = 0;
        } else {
            return res.status(400).json({ error: "El tipo de usuario no es válido" });
        }

        const create = await Users.createUser(
            name,
            lastname,
            email,
            type,
            password
        );

        // console.log(user)
        res.json(create);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const user = await Users.getAll();
        // console.log(user)
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const id_user = req.params.id;
        const datos = req.body;
        let { type } = req.body;

        if(type != undefined && type != null){
            if (type === "user") {
                type = 1;
            } else if (type === "admin") {
                type = 0;
            } else {
                return res.status(400).json({ error: "El tipo de usuario no es válido" });
            }

            datos.type = type;
        }

        const update = await Users.updateUser(id_user, datos);
        // console.log(user)
        res.json(update);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const id_user = req.params.id;
        const deleteUsr = await Users.deleteUser(id_user);
        // console.log(user)
        res.json(deleteUsr);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) =>{
    try {
        const {email, password} = req.body

        if(!email || !password){
            return res.status(400).json({error: "Es necesario el email y la contraseña"})
        }

        const user = await Users.login(email)

        if(!user){
            return res.status(401).json({error: "Usuario no encontrado"})
        }

        if(user.password != password){
            return res.status(401).json({error: "Contraseña incorrecta"})
        }

        res.json({message: "Login exitoso", user})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}