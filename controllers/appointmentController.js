const { Appointment, User, Service } = require('../models');

const appointmentController = {};

appointmentController.createAppointment = async(req, res) => {
    try {
        const { user_id, service_id, date, hour, employee_id } = req.body;
        const userId = req.userId;

        const newAppointment = {
            user_id: userId,
            service_id, 
            date, 
            hour, 
            employee_id
        }

        const appointment = await Appointment.create(newAppointment)

        return res.json(
            {
                success: true,
                message: "Registered appointment successfully",
                appointment: appointment
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
};

appointmentController.createAppointmentAdmin = async(req, res) => {
    try {
        const { user_id, service_id, date, hour, employee_id } = req.body;

        const newAppointment = {
            user_id,
            service_id, 
            date, 
            hour, 
            employee_id
        }

        const appointment = await Appointment.create(newAppointment)

        return res.json({
            success: true,
            message: "Registered appointment successfully",
            appointment: appointment
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
};

appointmentController.deleteAppointmentById = async(req, res) => {
    try {
        const appointmentId = req.params.id;

        const deleteAppointment = await Appointment.destroy(
      
            {
                where: {
                    user_id: req.userId,
                    id: appointmentId
                }
            },
        )

        return res.json(
            {
                success: true,
                message: "Appointment cancel successfully",
                appointment: deleteAppointment
            }
        );
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

appointmentController.deleteAppointmentByAdm = async(req, res) => {
    try {
        const appointmentId = req.params.id;

        const deleteAppointment = await Appointment.destroy(
      
            {
                where: {
                    id: appointmentId
                }
            },
        )

        return res.json(
            {
                success: true,
                message: "Appointment cancel successfully",
                appointment: deleteAppointment
            }
        );
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


module.exports = appointmentController;