const db = require('../config/db')

exports.getAllCountries = async () =>{
    const [rows] = await db.query('SELECT * FROM countries')
    return rows;
}
exports.updateCountry = async(idModif, newName)=>{
    const [rows] = await db.query('UPDATE countries SET name = ? WHERE country_id = ?',[newName, idModif]);
    return rows;
}
exports.deleteCountry = async(id)=>{
    const [rows] = await db.query('DELETE FROM countries WHERE country_id = ?',[id])
    return rows;
}
