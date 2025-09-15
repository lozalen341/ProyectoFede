const express = require('express')
const router = express.Router()
const countryRoutes =  require('../controllers/countryController')

router.get('/getall', countryRoutes.getAllCountries);
router.put('/update/:id',countryRoutes.setCountries);
router.delete('/delete/:id',countryRoutes.deleteCountries);

module.exports = router;