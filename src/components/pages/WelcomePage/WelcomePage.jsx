import React, {useState} from "react";
import Footer from "../../Footer/index";
import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Header from "../../Header";

const WelcomePage = () => {
  const navigate = useNavigate();
  const [inputType, setInputType] = useState(true);

  const hadleShowPassword = () => {
    setInputType(!inputType);
  }

  const handleClick = () => {
    navigate("/tests");
  };

  const handleSignIn = () => {
    navigate('/signin')
  }

  return (
    <>
    <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.info}>
            <div className={styles.img_wrap}>
              <img src="/img/table.png" alt="/img/table.png" />
            </div>
            <div className={styles.info_wrap}>
              <h1>Онлайн викторины: образовательные, IQ</h1>
              <p>
                Как стать лучше, если не знаешь своих недостатков и преимуществ?
              </p>
              <button onClick={handleClick}>Перейти к тестам</button>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.info}>
            <div className={styles.info_wrap}>
              <h1>Психологические тесты</h1>
              <p>
                «Кто я?», «Что со мной происходит?» — воспользуйтесь
                инструментами, разберитесь в себе и окружающих. Соберите свой
                психологический портрет личности. Профессиональные тесты дадут
                точный результат.
              </p>
            </div>
            <div className={styles.img_wrap}>
              <img src="/img/img2.png" alt="img/img2.png" />
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.info}>
            <div className={`${styles.img_wrap} ${styles.better}`}>
              <img src="/img/img4.png" alt="/img/img4.png" />
            </div>
            <div className={styles.info_wrap}>
              <h1>Тесты на эрудицию и знания</h1>
              <p>
                Школьные тесты – проверят базовые знания. Загадки и головоломки
                – протестируют логику. Интеллектуальные и IQ тесты – оценят
                максимальные возможности мозга. Карьерные помогут совершить
                правильный выбор профессии.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
            <div className={styles.register_form}>
                <div className={`${styles.first_footer_img} ${styles.first}`}>
                    <img src="/img/img5.png" alt="/img/img5.png" />
                </div>
                <div className={styles.auth}>
                    <h1 style={{color: 'rgb(10, 106, 52)'}}>
                        Бесплатная регистрация
                    </h1>
                    <input placeholder="Email"/>
                    <input placeholder="Пароль" type={inputType ? 'password' : 'text'}/>
                    <span style={{position: 'relative'}}>
                        {!inputType ? <AiFillEye className={styles.eye_icon} onClick={hadleShowPassword}/>
                        : <AiFillEyeInvisible className={styles.eye_icon} onClick={hadleShowPassword}/>
                        }
                    </span>
                    <button>
                        Зарегистрироваться
                    </button>
                    <span style={{fontSize: '14px', fontWeight: 'regular', position: 'relative'}}>
                        <span className={styles.signIn} onClick={handleSignIn}>Войти</span>
                        <span style={{color: 'black'}}>Регистрируясь вы соглашаетесь</span> <span style={{color: '#16C6A6', cursor: 'pointer'}}>на обработку персональных данных</span>
                    </span>
                </div>
                <div className={`${styles.first_footer_img} ${styles.second}`}>
                    <img src="/img/regimg.png" alt="/img/regimg.png" />
                </div>
            </div>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default WelcomePage;
