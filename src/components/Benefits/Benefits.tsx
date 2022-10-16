import React from 'react';
import styles from './Benefits.module.scss';

export const Benefits = () => {
    return (
        <section className={styles.benefits}>
            <h2 className={styles.benefits__title}>All the benefits you will get when you shop with us</h2>
            <p className={styles.benefits__p}>Take advantage of everything you can have now by buying your new car at Prime Car</p>
            <div className={styles.benefits__content}>
                <div className={styles.benefits__img}></div>
                <div className={styles.benefits__img}></div>
                <div className={styles.benefits__img}></div>
            </div>
            <span></span>
            <span></span>
        </section>
    )
}