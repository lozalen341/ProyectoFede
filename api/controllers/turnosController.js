const Turnos = require("../models/turnosModel");

exports.getAllTurnos = async (req, res) =>{
    try {
        const turno = await Turnos.getAll()

        res.json(turno)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}