import React, {useEffect, useState} from 'react';
import styles from './FavoritesPage.module.css'
import FavCartComp from "../../ui/FavCartComp/FavCartComp.jsx";
import axios from "axios";
import axiosInstance from "../../../api/axiosInstance.js";
import log from "eslint-plugin-react/lib/util/log.js";

function FavoritesPage(props) {
    const [recipes, setRecipes] = useState([]);
    const [favCount, setFavCount] = useState(0);
    useEffect(() => {
        axiosInstance.get(`/favorites`)
            .then(({data}) => {
                setRecipes(data)
                setFavCount(data.length)
            })
    }, []);
    async function deleteFavRecipe(recipeId) {
        await axiosInstance.delete(`/favorites/${recipeId}`);
        const result = recipes.filter((item) => item.Recipe.id !== recipeId)
        setRecipes(result);
        setFavCount(result.length);
    }

    return (
        <div className={styles.container}>
            {favCount > 0 ? (
                <>
                    <h1 className={styles.title}>Избранные рецепты ({favCount}) :</h1>
                {recipes.map(favRecipe => (
                        <FavCartComp key={favRecipe.id} favRecipe={favRecipe} deleteFavRecipe={deleteFavRecipe}/>
                    ))}
                    </>
            ) : (
                <h1 className={styles.title}>В избранном пусто</h1>
                )}
        </div>
    );
}

export default FavoritesPage;
