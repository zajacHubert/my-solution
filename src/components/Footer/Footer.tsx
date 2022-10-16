import React from 'react';
import styles from './Footer.module.scss';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';




export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.content__item}>
                    <h2 className={styles.footer__title}>Prime Car</h2>
                </div>
                <div className={styles.content__item}>
                    <h3 className={styles.footer__subtitle}>Where are we</h3>
                    <ul className={styles.footer__list}>
                        <li>Georgia</li>
                        <li>Texas</li>
                        <li>California</li>
                        <li>Virginia</li>
                        <li>Colorado</li>
                        <li>Pennsylvania</li>
                        <li>Massachusetts</li>
                    </ul>
                </div>
                <div className={styles.content__item}>
                    <h3 className={styles.footer__subtitle}>Quick links</h3>
                    <ul className={styles.footer__list}>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={styles.content__item}>
                    <h3 className={styles.footer__subtitle}>Email Us</h3>
                    <ul className={styles.footer__list}>
                        <li>contact@primecar.com</li>
                    </ul>
                </div>
                <div className={styles.content__item}>
                    <h3 className={styles.footer__subtitle}>Call Us</h3>
                    <ul className={styles.footer__list}>
                        <li>+999-9-999-9999</li>
                        <li>+111-11-111-1111</li>
                        <li><BsFacebook className={styles.footer__icon} /><BsLinkedin className={styles.footer__icon} /><BsInstagram className={styles.footer__icon} /></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer__end}>
                <p className={styles.footer__p}>
                    <span>Privacy policy</span>
                    <span>Term and conditions</span>
                </p>
                <p className={styles.footer__p}>
                    Copyright © 2022 Prime Car. All Rights Reserved
                </p>
            </div>
        </footer>
    )
}