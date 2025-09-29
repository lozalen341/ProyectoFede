const express = require("express");
require("dotenv").config();
const checkApiKey = require('./middleware/checkApikey')
const usersRoutes = require('./routes/userRoutes')
const turnosRoutes = require('./routes/turnosRoutes')

const api = express();
api.use(express.json())
api.use(checkApiKey)

api.use('/user', usersRoutes)
api.use('/turnos', turnosRoutes)

module.exports = api;