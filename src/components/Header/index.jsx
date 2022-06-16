import React from 'react';
import styles from './Header.module.css';
import { BiSearch, BiUser } from 'react-icons/bi';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.burger}>
                <span />
                <span />
                <span />
            </div>
            <h1 className={styles.logo_name}>
                Quizee
            </h1>
            <div className={styles.search_wrap}>
                <input className={styles.search} placeholder='Поиск по тестам'/>
                <BiSearch className={styles.search_icon}/>
            </div>
            <div className={styles.office}>
                <BiUser className={styles.user_icon}/>
            </div>
        </header>
    );
}

export default Header;