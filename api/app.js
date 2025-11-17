const express = require("express");
require("dotenv").config();
const checkApiKey = require('./middleware/checkApikey');
const usersRoutes = require('./routes/userRoutes');
const turnosRoutes = require('./routes/turnosRoutes');

// Si vas a usar Swagger:
// const { specs, swaggerUi } = require('./swagger');

const api = express();

api.use(express.json());
api.use(checkApiKey);

// Rutas
api.use('/user', usersRoutes);
api.use('/turnos', turnosRoutes);

// Documentación Swagger
// api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
//   explorer: true,
//   customCss: '.swagger-ui .topbar { display: none }',
//   customSiteTitle: "API Turnos - Documentación"
// }));

const PORT = process.env.PORT || 3000;
api.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
});

module.exports = api;
