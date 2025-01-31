import React from 'react';
import {Link} from "react-router-dom";
import styles from './NavBar.module.css'

function NavBar({logoutHandler, user}) {
    return (
        <div className={styles.container}>
           <h1 className={styles.title}>👨‍🍳</h1>
            <div>
                {user.status === 'logged' ? (
                    <div className={styles.nav}>
                        <Link to="/home" className={styles.navlink}>Рецепты</Link>
                        <Link to="/favorites" className={styles.navlink}>Избранные</Link>
                    </div>
                ) : (
                    <Link to="/home" className={styles.navlink}>Рецепты</Link>
                )}
            </div>
            <div className={styles.staticRight}>
                {user.status === 'logged' ? (
                    <>
                        <button onClick={logoutHandler} className={styles.logoutBtn}>⬅️</button>
                        <h1 className={styles.h1tag}>{user.data.name}</h1>
                    </>
                ) : (
                    <Link to="/login" className={styles.navlink}>Войти</Link>
                )}
            </div>
        </div>
    );
}

export default NavBar;
