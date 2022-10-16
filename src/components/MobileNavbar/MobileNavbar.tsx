import React from 'react';
import styles from './MobileNavbar.module.scss';
import { BsArrowUpRight } from 'react-icons/bs';

export const MobileNavbar = () => {
    return (
        <nav>
            <div className={styles.navbar}>
                <div className={`${styles.container} ${styles['nav-container']}`}>
                    <input className={styles.checkbox} type="checkbox" name="" id="" />
                    <div className={`${styles['hamburger-lines']}`}>
                        <span className={`${styles.line} ${styles.line1}`}></span>
                        <span className={`${styles.line} ${styles.line2}`}></span>
                        <span className={`${styles.line} ${styles.line3}`}></span>
                    </div >
                    <h3 className={styles.navbar__subtitle}>prime car</h3>
                    <div className={styles['menu-items']}>
                        <li> <a href="#">Home</a></li >
                        <li><a href="#">About</a></li>
                        <li><a href="#">Benefits</a></li>
                        <li><a href="#">Cars</a></li>
                    </div >

                </div >
                <div className={styles.navbar__text}>
                    <h2 className={styles.navbar__title}>More economy, same speed</h2>
                    <p className={styles.navbar__paragraph}>The most beloved cars of the moment for those who want to ride in style without spending too much</p>
                    <button className={styles.navbar__btn}>Discover <BsArrowUpRight className={styles.navbar__icon} /></button>

                </div>
            </div >

        </nav >


    )
}