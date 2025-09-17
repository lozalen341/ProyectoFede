const express = require('express')
const router = express.Router()
const TurnosController = require('../controllers/turnosController')

router.get('/getall', TurnosController.getAllTurnos)

module.exports = router