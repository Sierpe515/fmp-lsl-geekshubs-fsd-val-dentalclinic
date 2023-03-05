const user_roleController = require('../controllers/user_roleController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

const router = require('express').Router();

router.post('/user_roles', verifyToken, isAdmin, user_roleController.newUserRole)

module.exports = router;