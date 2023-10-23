'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    static associate(models) {}
  }
  todo.init(
    {
      title: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'todo',
    }
  );
  return todo;
};
