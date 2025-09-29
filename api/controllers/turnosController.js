const Turnos = require("../models/turnosModel");

exports.getAllTurnos = async (req, res) => {
    try {
        const turnos = await Turnos.getAll()

        res.json({ok: true, user: turnos})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.getAllById = async (req, res) => {
    try {
        const id_user = req.params.id_user
        const turnos = await Turnos.getById(id_user)

        res.json({ok: true, user: turnos})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.createTurno = async (req, res) => {
    try {
        let { id_user, dateCreated, deliveryTime, status, description } = req.body;

        const create = await Turnos.createTurno(

            id_user,
            dateCreated,
            deliveryTime,
            status,
            description
        )
        res.json({ok: true, user: create})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.updateTurno = async (req, res) => {
    try {
        const id_ticket = req.params.id
        const datos = req.body

        const update = await Turnos.updateTurno(id_ticket, datos)
        res.json({ok: true, user: update})

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.deleteTurno = async (req, res) => {
    try {
        const id_ticket = req.params.id_ticket
        const deleteTurn = await Turnos.deleteTurno(id_ticket)

        res.json({ok: true, user: deleteTurn})

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}