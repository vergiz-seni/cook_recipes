import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import CookieCard from '../../ui/CookieCard/CookieCard';
import styles from './MainPage.module.css';

function MainPage() {
  const [card, setCard] = useState([]);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    axiosInstance.get('/recipes').then(({ data }) => {
      setCard(data);
    });
  }, []);

  const convertToMinutes = (input) => {
    const hourRegex = /(\d+)\sчас/;
    const minuteRegex = /(\d+)\sминут/;
    const hoursMatch = input.match(hourRegex);
    const minutesMatch = input.match(minuteRegex);
    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;
    const totalMinutes = hours * 60 + minutes;
    return `${totalMinutes} минут.`;
  };

  const sortRecipes = (type) => {
    const sortedRecipes = [...card];
    const timeC = sortedRecipes.map((card) => ({
      ...card,
      cookingTime: convertToMinutes(card.cookingTime),
    }));

    switch (type) {
      case 'time-asc':
        timeC.sort((a, b) => {
          const timeA = parseInt(a.cookingTime);
          const timeB = parseInt(b.cookingTime);
          return timeA - timeB;
        });
        break;
      case 'time-desc':
        timeC.sort((a, b) => {
          const timeA = parseInt(a.cookingTime);
          const timeB = parseInt(b.cookingTime);
          return timeB - timeA;
        });
        break;
      case 'ingredients-asc':
        timeC.sort((a, b) => a.ingredients.length - b.ingredients.length);
        break;
      case 'ingredients-desc':
        timeC.sort((a, b) => b.ingredients.length - a.ingredients.length);
        break;
      default:
        break;
    }
    setCard(() => timeC);
    setSortType(type);
  };

  return (
    <main>
      <div className={styles.container}>
        <label>
          <input
            type="checkbox"
            checked={sortType === 'time-asc'}
            onChange={() => sortRecipes('time-asc')}
          />
          По времени (возрастание)
        </label>
        <label>
          <input
            type="checkbox"
            checked={sortType === 'time-desc'}
            onChange={() => sortRecipes('time-desc')}
          />
          По времени (убывание)
        </label>
        <label>
          <input
            type="checkbox"
            checked={sortType === 'ingredients-asc'}
            onChange={() => sortRecipes('ingredients-asc')}
          />
          По ингредиентам (возрастание)
        </label>
        <label>
          <input
            type="checkbox"
            checked={sortType === 'ingredients-desc'}
            onChange={() => sortRecipes('ingredients-desc')}
          />
          По ингредиентам (убывание)
        </label>
        <div className={styles.mapcard}>
          {card?.map((card) => (
            <CookieCard key={card.id} card={card}></CookieCard>
          ))}
        </div>
      </div>
    </main>
  );
}

export default MainPage;
