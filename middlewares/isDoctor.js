const isDoctor = (req, res, next) => {
    try {
      const isDoctor = req.roleId.includes('doctor')
      if (!isDoctor) {
        return res.status.send('Wrong Credentials');
      }
      next()
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = isDoctor;