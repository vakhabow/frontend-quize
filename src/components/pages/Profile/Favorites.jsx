import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

const Favorites = () => {

  const user = useSelector((state) => state.profile.user);

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