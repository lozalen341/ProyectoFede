const express = require("express");
require("dotenv").config();
const checkApiKey = require('./middleware/checkApikey')
const continentRoutes = require('./routes/continentRoutes')
const countryRoutes = require('./routes/countryRoutes')
const countryStatRoutes = require('./routes/countryStatsRoutes')
const languageRoutes = require('./routes/languageRoutes')
const regionRoutes = require('./routes/regionRoutes')



const api = express();
api.use(express.json())
api.use(checkApiKey)

api.use('/api/continent', continentRoutes)
api.use('/api/country', countryRoutes)
api.use('/api/country-stat', countryStatRoutes)
api.use('/api/language', languageRoutes)
api.use('/api/region', regionRoutes)


module.exports = api;