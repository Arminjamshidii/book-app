import React from 'react';
import styles from "./layout.module.css"

const Layouts = ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                <h1 >
                    Book App
                </h1>
                <p>with react js</p>
            </header>
            {children}
            <footer className={styles.footer}>develop with armin &#x1F499;</footer>
        </>
    );
};

export default Layouts;

