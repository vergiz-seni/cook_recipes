import React, {useEffect, useState} from 'react';
import styles from './FavoritesPage.module.css'
import FavCartComp from "../../ui/FavCartComp/FavCartComp.jsx";
import axios from "axios";
import axiosInstance from "../../../api/axiosInstance.js";
import log from "eslint-plugin-react/lib/util/log.js";

function FavoritesPage(props) {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        axiosInstance.get(`/favorites`)
            .then(({data}) => setRecipes(data))
    }, []);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Избранные рецепты:</h1>
            {recipes.map(favRecipe => (
                <FavCartComp key={favRecipe.id} favRecipe={favRecipe} />
            ))}

        </div>
    );
}

export default FavoritesPage;
