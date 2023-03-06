const isDoctor = (req, res, next) => {
    try {
      const isDoctor = req.roleId.includes('doctor')
      if (!isDoctor) {
        return res.status.send(
          {
                success: false,
                message: 'Wrong Credentials',
            }
          );
      }
      next()
    } catch (error) {
        return res.status(500).json(
          {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        );
    }
}
module.exports = isDoctor;