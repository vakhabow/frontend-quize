import React from 'react';
import styles from './Profile.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { profilePatch } from '../../../feateures/profileSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = () => {

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.user);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');

  const handleExit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate('/signin');
  };

  useEffect(() => {
    setName(profile.name)
    setSurName(profile.surname)
  }, [profile.name, profile.surname])

  const handleEditNames = () => {
    dispatch(profilePatch({
      name,
      surname
    }));
  }

  return (
    <>
    <div className={styles.edit_wrap}>
      <input placeholder='Имя' value={name} onChange={(e) => setName(e.target.value)}/>
      <input placeholder='Фамилия' value={surname} onChange={(e) => setSurName(e.target.value)}/>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '230px', margin: 'auto'}}>
      <button onClick={handleEditNames}>
        Изменить
      </button>
      <button onClick={handleExit}>
        Выйти
      </button>
      </div>
    </div>
    </>
  );
};

export default Edit;