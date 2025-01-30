import React from 'react';
import {Link} from "react-router-dom";
import styles from './NavBar.module.css'

function NavBar({logoutHandler, user}) {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Link className={styles.navlink} to="/home">Recipes</Link>
                {user.status !== 'logged' ? (
                    <>
                        <Link className={styles.navlink} to="/login">Login</Link>
                    <Link className={styles.navlink} to="/register">Register</Link>
                        </>
                ) : null}
            </div>
            {user.status === 'logged' ? (
                <>
                    <button onClick={logoutHandler}>Logout</button>
                    <p className={styles.navlink}>{user.status === 'logged' ? user.data.name : 'Гость'}</p>
                </>
            ) : null}

        </div>
    );
}

export default NavBar;
