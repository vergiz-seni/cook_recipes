import React from 'react';
import styles from './FavoritesPage.module.css'
import FavCartComp from "../../ui/FavCartComp/FavCartComp.jsx";

function FavoritesPage(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Избранные рецепты:</h1>
            <FavCartComp />

        </div>
    );
}

export default FavoritesPage;
