const { Role } = require('../models');

const roleController = {};

roleController.newPrivilege = async(req, res) => {

    const { privilege } = req.body;

    const newPrivilege = {
        privilege
    }

    // Guardar la informacion
    const role = await Role.create(newPrivilege)

    return res.json(role)
}

module.exports = roleController;