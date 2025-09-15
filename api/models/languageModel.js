const db = require('../config/db')

exports.getAllLanguages = async () =>{
    const [rows] = await db.query('SELECT * FROM languages')
    return rows;
}
exports.updateLanguages = async(idModif, newName)=>{
    const [rows] = await db.query('UPDATE languages SET language = ? WHERE language_id = ?',[newName, idModif]);
    return rows;
}
exports.deleteLanguages = async(id)=>{
    const [rows] = await db.query('DELETE FROM languages WHERE language_id = ?',[id])
    return rows;
}