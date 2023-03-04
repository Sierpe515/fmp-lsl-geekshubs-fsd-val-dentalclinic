const { Role } = require('../models');

const roleController = {};

roleController.newPrivilege = async(req, res) => {

    try {
        const { privilege } = req.body;

        const newPrivilege = {
            privilege
        }

        // Guardar la informacion
        const role = await Role.create(newPrivilege)

        return res.json({
            success: true,
            message: "Role created successfully",
            role: role
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        )
    }
}

module.exports = roleController;