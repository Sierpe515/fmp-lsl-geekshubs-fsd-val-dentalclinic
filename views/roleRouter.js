const roleController = require('../controllers/roleController');

const router = require('express').Router();

router.post('/roles', roleController.newPrivilege)

module.exports = router;