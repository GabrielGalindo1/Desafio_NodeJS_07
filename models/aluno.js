'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    
    static associate(models) {
     
    }
  }
  Aluno.init({
    name: DataTypes.STRING,
    grade: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};