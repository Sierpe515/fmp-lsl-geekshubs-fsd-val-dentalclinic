const isAdmin = (req, res, next) => {
    try {
      const isAdmin = req.roleId.includes('admin')
      if (!isAdmin) {
        return res.status.json(
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
        )
    }
}
module.exports = isAdmin;