import React from 'react';
import styles from './FavCardComp.module.css'

function FavCartComp({favRecipe}) {
    return (
        <div className={styles.container}>
            <h3>Фото</h3>
            <div className={styles.desc}>
                <h3>{favRecipe.Recipe.title}</h3>
                <h3>Рецепт:</h3>
                <p>{favRecipe.Recipe.recipe}</p>
                <button className={styles.btn}>Удалить из избранного</button>
            </div>
        </div>
    );
}

export default FavCartComp;
