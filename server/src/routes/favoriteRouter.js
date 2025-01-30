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
     attributes: ['title', 'ingredients', 'cookingTime', 'img', 'recipe'],
    }
   ],
  });
  res.json(result);
 } catch (error) {
  console.log(error);
  res.status(400).send({error: error});
 }
})

favoriteRouter.post('/:recipeId', verifyAccessToken, async (req, res) => {
 try{
  const {recipeId} = req.params;
  const userId = res.locals.user.id;
  const result = await Favorite.create({recipeId, userId});
  res.status(200).send(result);
 } catch(err){
  console.log(err)
  res.status(500).send({error: err});
 }
})


 module.exports = favoriteRouter
