import { useSelector } from 'react-redux';
import styles from './Profile.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { profileFetch } from '../../../feateures/profileSlice';

const Favorites = () => {

  const user = useSelector((state) => state.profile.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileFetch())
  }, [dispatch])

  return (
    <div className={styles.favorites}>
      {user?.favoriteTest?.map((item) => {
        return (
          <p key={item._id}>{item.testName}</p>
        )
      })}
    </div>
  );
};

export default Favorites;