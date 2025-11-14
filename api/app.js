// 1. Al inicio del archivo, después de tus imports existentes, agrega:
const { specs, swaggerUi } = require('./swagger');

// 2. Después de tus middlewares (express.json(), cors(), etc.), agrega:
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "API Turnos - Documentación"
}));

// 3. En tu console.log cuando inicia el servidor, agrega:
console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);

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