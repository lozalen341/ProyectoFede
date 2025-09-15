const db = require('../config/db')

exports.getAllRegions = async () =>{
    const [rows] = await db.query('SELECT * FROM regions')
    return rows;
}
exports.updateRegions = async(idModif, newName)=>{
    const [rows] = await db.query('UPDATE regions SET name = ? WHERE region_id = ?',[newName, idModif]);
    return rows;
}
exports.deleteRegions = async(id)=>{
    const [rows] = await db.query('DELETE FROM regions WHERE region_id = ?',[id])
    return rows;
}