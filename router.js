const router = require('express').Router();

const authController = require('./controllers/authController.js');
const roleController = require('./controllers/roleController.js');
const user_roleController = require('./controllers/user_roleController');
const appointmentController = require('./controllers/appointmentController');
const userController = require('./controllers/userController');

const authRoutes = require('./views/authRouter');
const roleRoutes =  require('./views/roleRouter');
const user_roleRoutes =  require('./views/user_roleRouter');
const appointmentRoutes = require('./views/appointmentRouter');
const userRoutes = require('./views/userRouter');

router.use('/', authRoutes);
router.use('/', roleRoutes);
router.use('/', user_roleRoutes);
router.use('/', appointmentRoutes);
router.use('/', userRoutes);

module.exports = router;