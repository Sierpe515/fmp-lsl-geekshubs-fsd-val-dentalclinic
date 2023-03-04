const userController = require('../controllers/userController');

const router = require('express').Router();

router.get('/hola', userController.hola);
// router.post('/login', authController.login);

module.exports = router;