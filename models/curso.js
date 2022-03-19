'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    
    static associate(models) {
      
    }
  }
  Curso.init({
    name: DataTypes.STRING,
    matricula: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};