const express = require("express");
require("dotenv").config();
const checkApiKey = require('./middleware/checkApikey')
const usersRoutes = require('./routes/userRoutes')

const api = express();
api.use(express.json())
api.use(checkApiKey)

api.use('/', usersRoutes)


module.exports = api;