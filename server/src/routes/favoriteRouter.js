const {verifyAccessToken} = require("../middlewares/verifyTokens");
const favoriteRouter = require('express').Router()
const {Favorite, Recipe} = require('../../db/models');

favoriteRouter.get('/', verifyAccessToken, async (req, res) => {
 try {
  const currUserId = res.locals.user.id
  const result = await Favorite.findAll({
   where: {
    userId: currUserId
   },
   include: [
    {
     model: Recipe,
     attributes: ['id', 'title', 'ingredients', 'cookingTime', 'img', 'recipe'],
    }
   ],
  });
  res.json(result);
 } catch (error) {
  console.log(error);
  res.status(400).send({error: error});
 }
})

favoriteRouter.route('/:recipeId').post(verifyAccessToken, async (req, res) => {
 try{
  const {recipeId} = req.params;
  const userId = res.locals.user.id;
  const target = await Favorite.findOne({
   where: {
    recipeId: recipeId,
    userId: userId
   }
  })

  if (target) {
   res.status(400).json({error: 'Товар уже добавлен в корзину'})
  } else {
   const result = await Favorite.create({recipeId, userId});
   res.status(200).send(result);

  }
 } catch(err){
  console.log(err)
  res.status(500).send({error: err});
 }
}).delete(verifyAccessToken, async (req, res) => {
 try{
  const {recipeId} = req.params;
  const userId = res.locals.user.id;
  await Favorite.destroy({
   where: {
    userId: userId,
    recipeId: recipeId
   }
  });
  res.sendStatus(204)
 } catch (e) {
  res.status(500).send({error: e});
 }
})

favoriteRouter.get('/all', async (req, res) => {
 const result = await Favorite.findAll();
 res.json(result);
})


 module.exports = favoriteRouter
