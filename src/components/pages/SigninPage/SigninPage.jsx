import React, { useState } from "react";
import styles from "./SigninPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../../feateures/authSlice";
import { Link } from "react-router-dom";

const SigninPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Заполните поле");
  const [passwordError, setPasswordError] = useState("Заполните поле");

  const signingIn = useSelector((state) => state.auth.signingIn);

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
      if (!e.target.value) {
        setEmailError("Заполните поле");
      }
    } else {
      setEmailError("");
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Пароль должен быть длинeе 6 символов");
      if (!e.target.value) {
        setPasswordError("Заполните поле");
      }
    } else if (e.target.value.length > 14) {
      setPasswordError("Пароль не должен быть длинее 14 символов");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = () => {
    dispatch(doLogin({ login, password }));
    setLogin("");
    setPassword("");
  };

  const blurHandle = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div className={styles.signin__page}>
      <div className={styles.auth__form}>
        <div className={styles.auth__form__wrap}>
          <div className={styles.auth__form__title}>Вход</div>
          <div className={styles.sign__up}>
            <input
              onBlur={(e) => blurHandle(e)}
              className={styles.email__input}
              name="email"
              type="text"
              placeholder="Email"
              value={login}
              onChange={(e) => handleChangeLogin(e)}
            />
            {emailDirty && emailError && (
              <div className={styles.emailError}>{emailError}</div>
            )}
            <input
            onBlur={(e) => blurHandle(e)}
              className={styles.password__input}
              name="password"
              type="Password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => handleChangePassword(e)}
            />
            {passwordDirty && passwordError && (
              <div className={styles.passwordError}>{passwordError}</div>
            )}
            <button
              className={styles.register__button}
              onClick={handleSubmit}
              disabled={signingIn}
            >
              <span>Войти</span>
            </button>
            <Link to="/signup" className={styles.auth__href}>
              Регистрация
            </Link>
          </div>
          <div className={styles.auth__form__social}>
            <a href="a">
              <img
                src="https://thumb.tildacdn.com/tild3863-3136-4436-b238-313961306133/-/format/webp/image.png"
                alt="a"
              />
            </a>
          </div>
          <div className={styles.profile__terms}>
            Регистрируясь, вы соглашаетесь с
            <a href="a"> пользовательским соглашением</a> и даёте согласие на
            обработку <a href="a">персональных данных.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
