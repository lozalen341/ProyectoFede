const express = require('express')
const router = express.Router()
const contienentsController =  require('../controllers/continentController')

router.get('/getall', contienentsController.getAllContinents);
router.put('/update/:id',contienentsController.setContinents);
router.delete('/delete/:id', contienentsController.deleteContinents);

module.exports = router;
