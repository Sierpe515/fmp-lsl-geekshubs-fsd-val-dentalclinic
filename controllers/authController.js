const { User, Role, User_Role } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const authController = {};

authController.register = async(req, res) => {
    try {
        const { name, surname, email, password } = req.body;

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const newUser = {
            name: name,
            surname: surname,
            email: email,
            password: encryptedPassword
        }

        const user = await User.create(newUser);

        await User_Role.create({
            user_id: user.id,
            role_id: 3
        })

        // const transporter = nodemailer.createTransport({
        //     service: 'Gmail',
        //     auth: {
        //         user: 'falsedentalclinic@gmx.es',
        //         pass: process.env.PASS_NM
        //     }
        // })

        // const mailOptions = {
        //     from: 'False Dental Clinic',
        //     to: email,
        //     subject: 'Registered successfully',
        //     Text: 'Thank you for registering at our dental clinic. But we are sorry to inform you that it is not a real clinic. This is a database project. Greetings.'
        // }

        // transporter.sendMail(mailOptions, function(error, info){
        //     if (error){
        //         console.log(error);
        //         res.send(500, error.message);
        //     } else {
        //         console.log("Email sent");
        //         res.status(200).json(req.body);
        //     }
        // });

        return res.json(
            {
                success: true,
                message: "Registered user successfully",
                user: user
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

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne(
            {
                where: {
                    email: email
                },
                include: [Role]
            }
        );

        if (!user) {
            return res.send('Unfortunately we do not recognise those details')
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.send('Unfortunately we do not recognise those details')
        }

        const userRole = user.Roles
        const token = jwt.sign(
            { 
                userId: user.id,
                email: user.email,
                roleId: userRole.map((role) => role.privilege)
            }, 
            'secreto',
            { expiresIn: '2h'}
        );

        return res.json(
            {
                success: true,
                message: "Login successfully",
                token: token
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

module.exports = authController;