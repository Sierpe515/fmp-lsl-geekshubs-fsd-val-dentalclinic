const { User_Role } = require('../models');

const user_roleController = {};

user_roleController.newUserRole = async(req, res) => {

    const { user_id, role_id } = req.body;

    const newUserRole = {
        user_id,
        role_id
    }

    // Guardar la informacion
    const userRole = await User_Role.create(newUserRole)

    return res.json(userRole)
}

module.exports = user_roleController;