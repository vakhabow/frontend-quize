import React from "react";
import styles from "./Footer.module.css";
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebook } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_info}>
        <h1 className={styles.footer_logo_name}>Quizee</h1>
        <p>Квизи — интерактивные тесты онлайн, бесплатно. © 2022 «Квизи»</p>
        <div className={styles.icons}>
          <BsWhatsapp />
          <AiOutlineInstagram />
          <AiOutlineYoutube />
          <AiOutlineTwitter />
          <GrFacebook />
        </div>
      </div>
      <div className={styles.lists_wrap}>
      <ul className={styles.list}>
        <li>О нас</li>
        <li>Как это работает</li>
        <li>Отзывы</li>
        <li>Продукты</li>
        <li>Вопросы и ответы</li>
        <li>Идеи викторин</li>
        <li>Партнерская программа</li>
      </ul>
      <ul className={styles.list}>
        <li>Наши партнеры</li>
        <li>Блог</li>
        <li>Поддержка</li>
        <li>Условия использования</li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
