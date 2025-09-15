const express = require('express')
const router = express.Router()
const regionController = require('../controllers/regionController')

router.get('/getall',regionController.getAllRegions);
router.put('/update/:id',regionController.setRegion);
router.delete('/delete/:id',regionController.deleteRegion);


module.exports = router;