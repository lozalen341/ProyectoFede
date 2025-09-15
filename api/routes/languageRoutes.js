const express = require('express')
const router = express.Router()
const languageController = require('../controllers/languageController')

router.get('/getall',languageController.getAlllanguages);
router.put('/update/:id', languageController.setlanguages);
router.delete('/delete/:id',languageController.deletelanguages);


module.exports = router;