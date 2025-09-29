const Users = require("../models/userModel");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


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

        const saltRounds = 10
        const hashedPassword  = await bcrypt.hash(password, saltRounds)

        const create = await Users.createUser(
            name,
            lastname,
            email,
            type,
            hashedPassword
        );

        res.json({ok: true, user: create});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const user = await Users.getAll();
        res.json({ok: true, user: user});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) =>{
    try {
        const id_user = req.params.id
        const user = await Users.getById(id_user);
        res.json({ok: true, user: user})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const id_user = req.params.id;
        const datos = req.body;
        let { type } = req.body;

        if (type != undefined && type != null) {
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
        res.json({ok: true, user: update});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.changePsw = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const id = req.params.id;

        const user = await Users.getById(id);

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const valid = await bcrypt.compare(currentPassword, user[0].password);
        if (!valid) {
            return res.status(401).json({ error: "La contraseña actual es incorrecta" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await Users.changePsw(id, hashedPassword);

        res.json({ ok: true, message: "Contraseña actualizada" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const id_user = req.params.id;
        const deleteUsr = await Users.deleteUser(id_user);
        res.json({ok: true, user: deleteUsr});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: "Es necesario el email y la contraseña" })
        }

        const user = await Users.login(email)

        if (!user) {
            return res.status(401).json({ error: "Usuario no encontrado" })
        }

        const valid = await bcrypt.compare(password, user.password) 
        if (!valid) {
            return res.status(401).json({ error: "Contraseña incorrecta" })
        }

        const token = jwt.sign(
            {id: user.id_user, email: user.email, type: user.type},
            process.env.JWT_SECRET,
            { expiresIn: "1d"}
        )

        res.json({ message: "Login exitoso", token, user: {id: user.id_user, email: user.email, type: user.type}})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}