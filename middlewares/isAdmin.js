const isAdmin = (req, res, next) => {
    try {
      const isAdmin = req.roleId.includes('admin')
      if (!isAdmin) {
        return res.status.send('es viernes');
      }
      next()
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = isAdmin;