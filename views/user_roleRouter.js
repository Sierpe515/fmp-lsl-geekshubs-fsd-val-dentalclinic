const user_roleController = require('../controllers/user_roleController');

const router = require('express').Router();

router.post('/user_roles', user_roleController.newUserRole)

module.exports = router;