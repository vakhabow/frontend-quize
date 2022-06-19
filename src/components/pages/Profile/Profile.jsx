import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { profileFetch, profileAvatar } from "../../../feateures/profileSlice";
import { FaRegUser } from "react-icons/fa";
import { IoMdCamera } from "react-icons/io";
import styles from "./Profile.module.css";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from '../../Header';

const Profile = () => {
  const profile = useSelector((state) => state.profile.user);
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(false);

  useEffect(() => {
    dispatch(profileFetch());
  }, [dispatch]);

  const handleAvatar = (e) => {
    dispatch(profileAvatar(e))
  }
  

  return (
    <>
    <Header />
    <div className={styles.profile_supreme}>
      <div className={styles.profile_wrap}>
        <label htmlFor="file">
        <div
          className={`${styles.img_wrap}`}
          onMouseEnter={() => setPhoto(true)}
          onMouseLeave={() => setPhoto(false)}
        >
          {!profile.avatar ? <FaRegUser
            className={`${styles.user_icon} ${photo ? styles.blur : ""}`}
          /> : 
          <img src={`/images/${profile.avatar}`} alt={profile.avatar} />
          }
          {photo && <IoMdCamera className={styles.camera} />}
        </div>
        </label>
        <h1
          style={{ color: "white", fontFamily: "sans-serif", fontSize: "50px" }}
        >
          {!profile.name ? profile.login : profile.name}
        </h1>
        <h1
        style={{ color: "white", fontFamily: "sans-serif", fontSize: "50px" }}
        >
            {!profile.surname ? '' : profile.surname}
        </h1>
        <div className={styles.links}>
        <NavLink to='/profile/favorites' className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Избранные</NavLink>
        <NavLink to='/profile/edit' className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Личный кабинет</NavLink>
        <NavLink to='/profile/completed' className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Выполненные тесты</NavLink>
        </div>
        <Outlet />
      </div>
      <input type="file" id='file' onChange={(e) => handleAvatar(e?.target.files[0])} style={{display: 'none'}}/>
    </div>
    </>
  );
};

export default Profile;
