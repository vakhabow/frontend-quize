import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ close }) => {
    return (
        <aside className={`${styles.rightbar} ${close ? styles.switch : ''}`}>
            <ul>
                <li>Тесты</li>
            </ul>
        </aside>
    );
};

export default Sidebar;