const express = require("express");
require("dotenv").config();
const checkApiKey = require('./middleware/checkApikey')

const api = express();
api.use(express.json())
api.use(checkApiKey)

module.exports = api;