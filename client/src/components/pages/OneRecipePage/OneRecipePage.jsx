import React, { useEffect, useState } from 'react';
import styles from './OneRecipePage.module.css';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';
import Card from 'react-bootstrap/Card';

function OneRecipePage() {
  const [oneRecipe, setOneResipe] = useState({
    title: '',
    cookingTime: '',
    img: '',
    ingredients: [],
    recipe: [],
  });

  const { recipeId } = useParams();

  useEffect(() => {
    axiosInstance.get(`/recipes/${recipeId}`).then((res) => setOneResipe(res.data));
  }, [recipeId]);

  return (
    <div className={styles.recipeCardContent}>
      <div className={styles.recipeContainer}>
        <Card style={{ width: '50rem' }} className={styles.recipeCard}>
          <Card.Img
            className={styles.recipeImg}
            variant="top"
            src={oneRecipe.img}
            style={{ height: '400px', width: '600px' }}
          />
          <Card.Body>
            <Card.Title>
              <strong>Название:</strong> {oneRecipe.title}
            </Card.Title>
            <Card.Text>
              <strong>Время приготовления:</strong> {oneRecipe.cookingTime}
            </Card.Text>
            <Card.Text>
              <strong>Ингредиенты:</strong> {oneRecipe.ingredients}
            </Card.Text>
            <Card.Text>
              <strong>Рецепт:</strong>
              <ul>
                {oneRecipe.recipe.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default OneRecipePage;
