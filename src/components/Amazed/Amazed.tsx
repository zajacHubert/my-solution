import React from 'react';
import styles from './Amazed.module.scss';

export const Amazed = () => {
    return (
        <section className={styles.amazed}>
            <div className={styles.amazed__desc}>
                <h2 className={styles.amazed__title}>Be amazed by the power</h2>
                <p className={styles.amazed__p}>Speed and economy together in one place, use and abuse your car's potential.</p>
            </div>
            <div className={styles.amazed__img}>
                <div className={styles.amazed__star1}></div>
                <div className={styles.amazed__star2}></div>
            </div>
        </section>
    )
}