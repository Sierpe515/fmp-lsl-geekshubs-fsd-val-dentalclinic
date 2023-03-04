const userController = require('../controllers/userController');
const isAdmin = require('../middlewares/isAdmin');
const isDoctor = require('../middlewares/isDoctor');
const verifyToken = require('../middlewares/verifyToken');

const router = require('express').Router();

router.get('/getApp', verifyToken, userController.getAppointment);
router.get('/getAppAdm', verifyToken, isAdmin, userController.getAppointmentAdmin);
router.get('/getAppDoc', verifyToken, isDoctor, userController.getAppointmentDoctor);


module.exports = router;