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
    console.log(req.params);

    const oneRecipe = await Recipe.findOne({ where: { id } });
    console.log(oneRecipe);

    if (!oneRecipe) {
      return res.status(404).json({ message: 'Рецепт не найден' });
    }

    res.status(200).json(oneRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка при get запросе по req.params' });
  }
});

module.exports = recipeRouter;
