const db = require('../config/db')

exports.getAll = async()=>{
    const [rows] = await db.query('SELECT * FROM tickets')
    return rows;
}