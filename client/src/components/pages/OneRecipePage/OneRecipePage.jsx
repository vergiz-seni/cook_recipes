import React, { useEffect, useState } from 'react';
import styles from './OneRecipePage.module.css';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';

function OneRecipePage() {
  const [oneRecipe, setOneResipe] = useState({
    title,
    cookingTime,
    img,
    ingredients,
    recipe,
  });
  console.log(oneRecipe);

  const { recipId } = useParams();
  console.log(recipId);

  useEffect(() => {
    axiosInstance.get(`/onerecipes/${recipId}`).then(({ data }) => setOneResipe(data));
  }, []);

  return <div>{oneRecipe.title}</div>;
}

export default OneRecipePage;
