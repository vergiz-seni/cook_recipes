'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Favorite}) {
      this.hasMany(Favorite, {foreignKey: 'recipeId'});
    }
  }
  Recipe.init({
    title: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    cookingTime: DataTypes.STRING,
    img: DataTypes.STRING,
    recipe: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
