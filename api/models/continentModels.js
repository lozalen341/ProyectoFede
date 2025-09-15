const db = require('../config/db')

exports.getAll = async()=>{
    const [rows] = await db.query('SELECT * FROM continents')
    return rows;
}
exports.updateContinent = async(idModif, newName)=>{
    const [rows] = await db.query('UPDATE continents SET name = ? WHERE continent_id = ?',[newName, idModif]);
    return rows;
}
exports.deleteContinent = async(idDel)=>{
    const [rows] = await db.query('DELETE FROM continents WHERE continent_id = ?', [idDel]);
    return rows;
}