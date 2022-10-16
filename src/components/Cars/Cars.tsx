import React from 'react';
import styles from './Cars.module.scss';

export const Cars = () => {
    return (
        <section className={styles.cars}>
            <h2 className={styles.cars__title}>The cars that are hot right now</h2>
            <p className={styles.cars__paragraph}>Buy yours and be the most stylish in the neighborhood</p>
            <div className={styles.cars__content}>
                <div className={styles.cars__img}></div>
                <div className={styles.cars__img}>
                    <h3 className={styles.cars__subtitle}>Tesla Model 3</h3>
                    <p className={styles.cars__p}>Disruptive, avant-garde, futuristic, innovative.</p>
                    <button className={styles.cars__btn}>Contact</button>
                </div>
                <div className={styles.cars__img}></div>
                <div className={styles.cars__img}></div>
                <div className={styles.cars__img}></div>
                <div className={styles.cars__img}></div>
                <div className={styles.cars__img}></div>
                <div className={styles.cars__img}></div>
                <div className={styles.cars__img}></div>
            </div>
        </section>
    )
}