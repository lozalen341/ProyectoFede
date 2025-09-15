const express = require('express')
const router = express.Router()
const countyStatsController = require('../controllers/countryStatsController')

router.get('/getall/:country_id',countyStatsController.getCountryStats);
router.put('/update/:id',countyStatsController.setCountryStats);
router.delete('/delete/:id',countyStatsController.deleteCountryStats);

module.exports = router;