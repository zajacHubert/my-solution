import React, { useCallback, useEffect, useState } from 'react';
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import { Navbar } from '../Navbar/Navbar';
import styles from './Header.module.scss';

export const Header = () => {

    const [width, setWitdth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = useCallback(() => {
        setWitdth(window.innerWidth);
        setIsMobile(Number(width) < 768);
    }, [window.innerWidth]);

    useEffect(() => {
        window.addEventListener('resize', handleResize, false);
    }, [handleResize]);
    return (
        <header className={styles.header}>
            {isMobile ? <MobileNavbar /> : <Navbar />}
        </header>
    )
}