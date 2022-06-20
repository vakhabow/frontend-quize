import React from 'react';
import styles from './Header.module.css';
import { BiSearch, BiUser } from 'react-icons/bi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { profileFetch } from '../../feateures/profileSlice';
import { useDispatch } from 'react-redux';
import Sidebar from '../Sidebar';

const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.profile.user);

    useEffect(() => {
        dispatch(profileFetch());
      }, [dispatch]);

    const [close, setClose] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        setClose(!close);
    }

    const handleProfile = () => {
        navigate(`/profile/edit`);
    }

    return (
        <header className={styles.header}>
            <div className={styles.burger} onClick={handleClose}>
                <span className={`${styles.burger_line} ${close ? styles.openOne : ''}`}/>
                <span className={`${styles.burger_line} ${close ? styles.openTwo : ''}`}/>
                <span className={`${styles.burger_line} ${close ? styles.openThree : ''}`}/>
            </div>
            <Sidebar close={close}/>
            <h1 className={styles.logo_name} onClick={() => navigate('/tests')}>
                Quizee
            </h1>
            <div className={styles.search_wrap}>
                <input className={styles.search} placeholder='Поиск по тестам'/>
                <BiSearch className={styles.search_icon}/>
            </div>
            <div className={styles.office} onClick={handleProfile}>
                {!user.avatar ? <BiUser className={styles.user_icon}/> : 
                <img src={`/images/${user.avatar}`} alt={user.avatar}/>
                }
            </div>
        </header>
    );
}

export default Header;