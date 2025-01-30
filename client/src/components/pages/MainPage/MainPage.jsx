import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import CookieCard from '../../ui/CookieCard';

function MainPage() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axiosInstance.get('/recipes').then(({ data }) => {
      setCard(data);
    });
  }, []);

  async function addRecipeToFavorites (recipeId) {
      const res = await axiosInstance.post(`/favorites/${recipeId}`)
      console.log(res)
  }

  return (
    <main>
      <div className="mainPage">
        {card?.map((card) => (
          <CookieCard key={card.id} card={card} addRecipeToFavorites={addRecipeToFavorites}></CookieCard>
        ))}
      </div>
      ;
    </main>
  );
}

export default MainPage;
