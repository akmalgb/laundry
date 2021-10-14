'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  transactions.init({
    id: DataTypes.INTEGER,
    member_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    date_limit: DataTypes.DATE,
    pay_day: DataTypes.DATE,
    status: DataTypes.INTEGER,
    paid: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};