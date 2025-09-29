const express = require('express')
const router = express.Router()
const TurnosController = require('../controllers/turnosController')

router.get('/getall', TurnosController.getAllTurnos)
router.get('/getById/:id_user', TurnosController.getAllById)
router.post('/create', TurnosController.createTurno)
router.put('/update/:id', TurnosController.updateTurno)
router.delete('/delete/:id_ticket', TurnosController.deleteTurno)

module.exports = router 