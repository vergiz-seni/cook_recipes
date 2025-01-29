const recipeRouter = require('express').Router();
const { Recipe } = require('../../db/models');

recipeRouter.get('/', async (req, res) => {
  try {
    const allRecipes = await Recipe.findAll({ order: [['id', 'DESC']] });
    res.json(allRecipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка на сервере при get запросе' });
  }
});

recipeRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneRecipe = await Recipe.ndByPk(id);
    res.json(oneRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка при get запросе по req.params' });
  }
});

module.exports = recipeRouter;
