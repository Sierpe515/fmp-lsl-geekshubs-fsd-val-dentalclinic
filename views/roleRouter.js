const roleController = require('../controllers/roleController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

const router = require('express').Router();

router.post('/roles', verifyToken, isAdmin, roleController.newPrivilege)

module.exports = router;