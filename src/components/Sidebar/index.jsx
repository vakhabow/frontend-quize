import React from 'react';
import styles from './Sidebar.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTests } from "../../feateures/testsSlice";
import { fetchCategories } from "../../feateures/testsSlice";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = ({ close }) => {

    const { id } = useParams();

    const categories = useSelector((state) => state.test.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchTests());
      }, [dispatch, id]);

    return (
        <aside className={`${styles.rightbar} ${close ? styles.switch : ''}`}>
            <ul className={styles.category_wrap}>
                {categories?.map((item) => {
                    return (
                        <li className={styles.category_name}>{item.title}</li>
                    )
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;