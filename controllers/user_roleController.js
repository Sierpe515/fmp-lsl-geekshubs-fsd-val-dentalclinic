const { User_Role } = require('../models');

const user_roleController = {};

user_roleController.newUserRole = async(req, res) => {

    try {
        const { user_id, role_id } = req.body;

        const newUserRole = {
            user_id,
            role_id
        }

        // Guardar la informacion
        const userRole = await User_Role.create(newUserRole)

        return res.json(
            {
                success: true,
                message: "Registered role successfully",
                userRole: userRole
            }
        )
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

module.exports = user_roleController;