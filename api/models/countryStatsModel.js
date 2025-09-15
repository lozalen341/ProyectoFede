const db = require('../config/db')

exports.getCountryStats = async (country_id) =>{
    const [rows] = await db.query('SELECT * FROM country_stats WHERE country_id = ?',[country_id])
    return rows;
}
exports.updateCountryStats = async(idModif, newName)=>{
    const [rows] = await db.query('UPDATE country_stats SET population = ? WHERE country_id = ?',[newName, idModif]);
    return rows;
}
exports.deleteCountryStats = async(id)=>{
    const [rows] = await db.query('DELETE FROM country_stats WHERE country_id = ?',[id])
    return rows;
}