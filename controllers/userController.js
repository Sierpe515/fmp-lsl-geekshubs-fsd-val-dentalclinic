const { User } = require('../models');

const userController = {};

userController.hola = async(req, res) => {
    return res.json('hola')
}


module.exports = userController;