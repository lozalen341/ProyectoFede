const express = require('express')
const router = express.Router()
const UsersController =  require('../controllers/userController')

router.post('/create', UsersController.createUser);
router.get('/getall', UsersController.getAllUsers);
router.put('/update/:id', UsersController.updateUser);
router.delete('/delete/:id', UsersController.deleteUser);

router.post('/login', UsersController.login);




module.exports = router;
