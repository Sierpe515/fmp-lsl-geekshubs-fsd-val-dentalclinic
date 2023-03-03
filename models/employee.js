'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(
        models.User, {
        foreignKey: 'user_id'
        }
      );

      Employee.belongsTo(
        models.Specialty, {
          foreignKey: 'specialty_id'
        }
      );

      Employee.hasMany(
        models.Appointment, {
          foreignKey: 'employee_id'
        }
      )
    }
  }
  Employee.init({
    user_id: DataTypes.INTEGER,
    specialty_id: DataTypes.INTEGER,
    collegiate_number: DataTypes.STRING,
    schedule: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};