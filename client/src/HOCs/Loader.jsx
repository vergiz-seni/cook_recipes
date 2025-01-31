import React from 'react';
import {tailChase } from 'ldrs'
tailChase.register()
import styles from './Loader.module.css'

function Loader({isLoading, children}) {
    return isLoading ? (
        <div className={styles.container}>
            <l-tail-chase
                size="100"
                speed="1.75"
                color="black"
            ></l-tail-chase>
        </div>
    ) : (
        children
    );
}

export default Loader;
