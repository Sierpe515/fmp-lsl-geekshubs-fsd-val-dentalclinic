const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

const router = require('express').Router();

router.post('/app', verifyToken, appointmentController.createAppointment);
router.post('/appAdmin', verifyToken, isAdmin, appointmentController.createAppointmentAdmin);
router.delete('/cancelApp/:id', verifyToken, appointmentController.deleteAppointmentById);
router.delete('/cancelAppAdm/:id', verifyToken, isAdmin, appointmentController.deleteAppointmentByAdm);

module.exports = router;