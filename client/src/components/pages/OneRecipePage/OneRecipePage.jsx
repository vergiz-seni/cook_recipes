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
      <div className={styles.recipeContainer}>
        <Card className={styles.recipeCard}>
          <Card.Img
            className={styles.recipeImg}
            variant="top"
            src={oneRecipe.img}
          />
          <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.title}>
              {oneRecipe.title}
            </Card.Title>
            <Card.Text>
              <strong>Время приготовления:</strong> {oneRecipe.cookingTime}
            </Card.Text>
            <Card.Text className={styles.ingredients}>
              <strong>Ингредиенты:</strong>{oneRecipe.ingredients}
            </Card.Text>
            <strong>Рецепт:</strong>
            <Card.Text className={styles.recipe}>
              <ul>
                {oneRecipe.recipe.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
  );
}

export default OneRecipePage;
