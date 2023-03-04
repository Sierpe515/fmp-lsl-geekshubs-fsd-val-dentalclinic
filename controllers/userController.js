const { User, Service, Appointment, Employee } = require('../models');

const userController = {};

userController.getAppointment = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                where: { 
                    user_id: req.userId 
                },
                include: [
                    {
                        model: Employee,
                        attributes: {
                            exclude: ["id", "user_id", "nif", "birth_date", "direction", "collegiate_number", "schedule", "createdAt", "updatedAt"]
                        },
                        include: {
                            model: User,
                            attributes: {
                                exclude: ["id", "nif", "birth_date", "direction","password", "role_id", "createdAt", "updatedAt"]
                            },
                        }
                    },
                ],
                attributes: {
                    exclude: ["id", "employee_id", "user_id", "doctor_id", "service_id"]
                }
            }
        )
        return res.json(userAppointment)
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

userController.getAppointmentAdmin = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                include: [
                    {
                        model: Employee,
                        attributes: {
                            exclude: ["id", "user_id", "nif", "birth_date", "direction", "collegiate_number", "schedule", "createdAt", "updatedAt"]
                        },
                        include: {
                            model: User,
                            attributes: {
                                exclude: ["id", "nif", "birth_date", "direction","password", "role_id", "createdAt", "updatedAt"]
                            },
                        }
                    },
                ],
                attributes: {
                    exclude: ["id", "employee_id", "user_id", "doctor_id", "service_id"]
                }
            }
            
        )
        // if (!userAppointment) {
        //     return res.send('Wrong Credentials')
        // }
        return res.json(userAppointment)
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


module.exports = userController;