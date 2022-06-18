import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ close }) => {
    return (
        <aside className={`${styles.rightbar} ${close ? styles.switch : ''}`}>
            
        </aside>
    );
};

export default Sidebar;