import React, { useState } from "react";
import styles from "./SignupPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { createUser } from "../../../feateures/authSlice";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Заполните поле");
  const [passwordError, setPasswordError] = useState("Заполните поле");
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const signingUp = useSelector((state) => state.auth.signingUp);
  const error = useSelector((state) => state.auth.error);

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
      setPasswordError("Пароль должен быть длиннeе 6 символов");
      if (!e.target.value) {
        setPasswordError("Заполните поле");
      }
    } else if (e.target.value.length > 14) {
      setPasswordError("Пароль не должен быть длиннее 14 символов");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = () => {
    dispatch(createUser({ login, password })).unwrap().then(() => navigate('/signin')).catch(() => console.log(123));
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

  const handlePasswordType = () => {
    setHiddenPassword(!hiddenPassword);
  };

  return (
    <div className={styles.signup__page}>
      <div className={styles.auth__form}>
        <div className={styles.auth__form__wrap}>
          <div className={styles.auth__form__title}>Регистрация</div>
          {error}
          <div className={styles.sign__up}>
            {error ? <div>Ytdsvhbsv</div> : ""}
            {console.log(error)}
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
            <div className={styles.input__type__wrapper}>
              <input
                onBlur={(e) => blurHandle(e)}
                className={styles.password__input}
                name="password"
                type={hiddenPassword ? "password" : "text"}
                placeholder="Пароль"
                value={password}
                onChange={(e) => handleChangePassword(e)}
              />
              <div className={styles.eyeBtn} onClick={handlePasswordType}>
                {hiddenPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>
            {passwordDirty && passwordError && (
              <div className={styles.passwordError}>{passwordError}</div>
            )}
            <button
              className={styles.register__button}
              onClick={handleSubmit}
              disabled={signingUp}
            >
              <span>Регистрация</span>
            </button>
            <Link to="/signin" className={styles.auth__href}>
              Авторизация
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

export default SignupPage;
