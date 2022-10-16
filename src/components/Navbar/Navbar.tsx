import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import styles from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <h3 className={styles.navbar__subtitle}>prime car</h3>
                <nav>
                    <ul className={styles.navbar__menu}>
                        <li className={styles.navbar__menu_item}>
                            <a href="#" className={styles.navbar__menu_link}>Home</a>
                        </li>
                        <li className={styles.navbar__menu_item}>
                            <a href="#" className={styles.navbar__menu_link}>About</a>
                        </li>
                        <li className={styles.navbar__menu_item}>
                            <a href="#" className={styles.navbar__menu_link}>Benefits</a>
                        </li>
                        <li className={styles.navbar__menu_item}>
                            <a href="#" className={styles.navbar__menu_link}>Cars</a>
                        </li>
                        <li className={styles.navbar__menu_item}>
                            <a href="#" className={styles.navbar__menu_link}>Contact</a>
                        </li>
                    </ul>
                </nav>
                <button className={styles.navbar__btn}>Contact Us</button>
            </div>
            <div className={styles.navbar__text}>
                <h2 className={styles.navbar__title}>More economy, same speed</h2>
                <p className={styles.navbar__paragraph}>The most beloved cars of the moment for those who want to ride in style without spending too much</p>
                <button className={styles.navbar__btn}>Discover <BsArrowUpRight className={styles.navbar__icon} /></button>

            </div>
        </>
    )
}