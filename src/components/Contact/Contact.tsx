import React, { ChangeEvent, useState } from 'react';
import styles from './Contact.module.scss';

export const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.contact__content}>
                <div className={styles.contact__text}>
                    <h2 className={styles.contact__title}>Contact us</h2>
                    <p className={styles.contact__p}>To find out more information about cars and quotes, fill out the form on the side or contact us by phone. </p>
                </div>
                <form className={styles.contact__form}>
                    <input type="text" placeholder='Your Name' className={styles.contact__input} />
                    <input type="text" placeholder='Your Email' className={styles.contact__input} />
                    <input type="text" placeholder='Phone Number' className={styles.contact__input} />
                    <input type="text" placeholder='Country' className={styles.contact__input} />
                    <input type="text" placeholder='Message' className={styles.contact__input} />
                    <button className={styles.contact__btn}>Submit</button>
                </form>
            </div>
            <div className={styles.contact__map}>
                <div className={styles.contact__vector}></div>
            </div>
        </section>
    )
}