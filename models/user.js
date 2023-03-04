'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(
        models.Role,
        {
          through: 'User_Roles',
          foreignKey: 'user_id'
        },
      );
      
      User.hasMany(models.Appointment, {
        foreignKey: 'user_id'
      })

      User.hasMany(models.Employee, {
        foreignKey: 'user_id'
      })

      // User.belongsToMany(
      //   models.Service,
      //   {
      //     through: 'Appointments',
      //     foreignKey: 'user_id',
      //     // as: "citas"
      //   }
      // )
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    nif: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    direction: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};