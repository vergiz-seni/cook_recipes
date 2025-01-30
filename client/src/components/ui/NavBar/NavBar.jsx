import React from 'react';
import {Link} from "react-router-dom";
import styles from './NavBar.module.css'

function NavBar({logoutHandler, user}) {
    console.log(user);
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Link className={styles.navlink} to="/home">Recipes</Link>
                <Link className={styles.navlink} to="/favorites">Избранные</Link>
                {user.status !== 'logged' ? (
                    <>
                        <Link className={styles.navlink} to="/login">Login</Link>
                    <Link className={styles.navlink} to="/register">Register</Link>
                        </>
                ) : null}
            {user.status === 'logged' ? (
                <>
                    <button onClick={logoutHandler} className={styles.favBtn}>Logout</button>
                    <p className={styles.navlink}>{user.status === 'logged' ? user.data.name : 'Гость'}</p>
                </>
            ) : null}
            </div>
        </div>
    );
}

export default NavBar;
