import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import cx from 'classnames';

import styles from '../styles/components/Navbar.module.css';
import navbarData from '../data/navbarData.json';

export default function Navbar() {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    function toggleSidebar() {
        setIsSidebarActive(!isSidebarActive);
    }

    return (
        <>
            <header className={styles.navbar}>
                <button type='button' className={styles.menuBars} onClick={toggleSidebar}>
                    <FaIcons.FaBars />
                </button>

                <div className={styles.brand}>
                    <a href='#'>La Bella</a>
                </div>
            </header>

            <nav className={isSidebarActive ? cx(styles.nav, styles.active) : styles.nav}>
                <ul className={styles.navbarItems}>
                    <li className={styles.navbarToggle}>
                        <a href='#' onClick={toggleSidebar}>Início</a>

                        <button type='button' className={styles.menuClose} onClick={toggleSidebar}>
                            <AiIcons.AiOutlineClose />
                        </button>
                    </li>

                    {navbarData.map((item, index) => {
                        return (
                            <li key={index} className={styles.navItem}>
                                <a href={`#${item.path}`} onClick={toggleSidebar}>{item.title}</a>
                            </li>

                        );
                    })}
                </ul>
            </nav>
        </>
    )
}