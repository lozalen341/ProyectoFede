const db = require('../config/db')

exports.createUser = async(name, lastname, email, type, password)=>{
    const [rows] = await db.query(
        'INSERT INTO `users` (`id_user`, `name`, `lastname`, `email`, `type`, `password`) VALUES (NULL, ?, ?, ?, ?, ?)',
        [name, lastname, email, type, password])
    return rows;
}

exports.getAll = async()=>{
    const [rows] = await db.query('SELECT * FROM users')
    return rows;
}

exports.updateUser = async(id, datos)=>{
    const campos = []
    const params = []

    if(datos.name != undefined && datos.name != null){
        campos.push("name=?")
        params.push(datos.name)
    }
    
    if(datos.lastname != undefined && datos.lastname != null){
        campos.push("lastname=?")
        params.push(datos.lastname)
    }
    if(datos.email != undefined && datos.email != null){
        campos.push("email=?")
        params.push(datos.email)
    }
    
    if(datos.type != undefined && datos.type != null){
        campos.push("type=?")
        params.push(datos.type)
    }
    
    if(datos.password != undefined && datos.password != null){
        campos.push("password=?")
        params.push(datos.password)
    }

    const sql = `UPDATE users SET ${campos.join(", ")} WHERE id_user = ?`;
    params.push(id)

    const [rows] = await db.query(sql, params);
    return rows;
}

exports.deleteUser = async(id_user)=>{
    const [rows] = await db.query('DELETE FROM users WHERE id_user = ?', [id_user])
    return rows;
}

exports.login = async(email)=>{
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
}