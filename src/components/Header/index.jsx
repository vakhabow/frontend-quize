import React from 'react';
import styles from './Header.module.css';
import { BiSearch, BiUser } from 'react-icons/bi';
import Sidebar from '../Sidebar/index';
import { useState } from 'react';

const Header = () => {

    const [close, setClose] = useState(false);

    const handleClose = () => {
        setClose(!close)
    }

    return (
        <header className={styles.header}>
            <div className={styles.burger} onClick={handleClose}>
                <span className={`${styles.burger_line} ${close ? styles.openOne : ''}`}/>
                <span className={`${styles.burger_line} ${close ? styles.openTwo : ''}`}/>
                <span className={`${styles.burger_line} ${close ? styles.openThree : ''}`}/>
            </div>
            <Sidebar close={close}/>
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