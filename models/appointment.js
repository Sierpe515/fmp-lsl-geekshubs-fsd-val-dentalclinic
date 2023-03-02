'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.User, {
        foreignKey: 'user_id'
      })

      Appointment.belongsTo(models.Service, {
        foreignKey: 'service_id'
      })

      Appointment.belongsTo(models.Employee, {
        foreignKey: 'employee_id'
      });
    }
  }
  Appointment.init({
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    hour: DataTypes.STRING,
    employee_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};