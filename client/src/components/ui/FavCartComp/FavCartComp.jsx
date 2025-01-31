import React from 'react';
import styles from './FavCardComp.module.css'
import axiosInstance from "../../../api/axiosInstance.js";

function FavCartComp({favRecipe, deleteFavRecipe}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
            <div className={styles.content}>
                <img src={favRecipe.Recipe.img} alt="error" className={styles.img}/>
                <div className={styles.desc}>
                    <h1 className={styles.title}>{favRecipe.Recipe.title}</h1>
                    <p className={styles.subtitle}>Рецепт блюда:</p>
                    {favRecipe.Recipe.recipe.map((step) => (
                        <p className={styles.step}>{step}</p>
                    ))}
                </div>
            </div>
            <button className={styles.delFav} onClick={() => deleteFavRecipe(favRecipe.Recipe.id)}>Удалить из избранного</button>
            </div>
        </div>
    );
}

export default FavCartComp;
