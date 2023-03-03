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

        return res.json(appointment)
    } catch (error) {
        return res.status(500).send(error.message)
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

        return res.json(appointment)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = appointmentController;