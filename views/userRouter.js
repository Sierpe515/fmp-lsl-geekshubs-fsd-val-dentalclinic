const userController = require('../controllers/userController');
const isAdmin = require('../middlewares/isAdmin');
const verifyToken = require('../middlewares/verifyToken');

const router = require('express').Router();

router.get('/getApp', verifyToken, userController.getAppointment);
router.get('/getAppAdm', verifyToken, isAdmin, userController.getAppointmentAdmin);


module.exports = router;