import React from 'react';
import styles from './About.module.scss';

export const About = () => {
    return (
        <section className={styles.about}>
            <h2 className={styles.about__title}>about us</h2>
            <div className={styles.about__content}>
                <div className={styles.about__text}>
                    <p>We pride ourselves at being able to get our customer into the car that they want, and more importantly, at they price they are looking for.</p>
                    <p>  We maintain outstanding customer service by listening to our customers and making sure that we meet their needs. Even if you don't buy from us, we will offer free advice on whe to look for when buying a used car or truck.</p>
                    <p> Our philosophy is to accomodate you, the customer, with outstanding service while providing you the highest quality automobile needs at wholesale prices.</p>
                </div>
                <div className={styles.about__img}></div></div>
        </section>
    )
}