const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/userController')

router.post('/register', UsersController.createUser);
router.post('/login', UsersController.login);

router.get('/getall', UsersController.getAllUsers);
router.put('/update/:id', UsersController.updateUser);
router.delete('/delete/:id', UsersController.deleteUser);





module.exports = router;
