import { Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import Header from '../Header';
import cx from 'classnames';
import styles from './style.module.scss';

function Login() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>NOVA APERIO</h1>
        <form action="submit">
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" placeholder="이메일" />
            <button
              className={styles.button}
              type="button"
              aria-label="delete email input"
            >
              <MdCancel />
            </button>
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호"
            />
            <button
              className={cx(styles.button, styles.viewPasswordButton)}
              type="button"
              aria-label="show password"
            >
              <AiFillEye />
            </button>
            <button
              className={styles.button}
              type="button"
              aria-label="delete email input"
            >
              <MdCancel />
            </button>
          </div>
        </form>
        <div className={styles.checkboxContainer}>
          <label className={styles.checkboxLabel} htmlFor="save-id">
            <span>아이디 저장</span>
            <input className={styles.checkbox} type="checkbox" id="save-id" />
          </label>
          <label className={styles.checkboxLabel} htmlFor="auto-login">
            <span>자동 로그인</span>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="auto-login"
            />
          </label>
        </div>
        <button
          className={styles.submitButton}
          type="submit"
          aria-label="login"
        >
          로그인
        </button>
        <hr className={styles.separateLine}></hr>
        <div className={styles.linkContainer}>
          <Link className={styles.link} to="">
            아이디 찾기
          </Link>
          <Link className={styles.link} to="">
            비밀번호 찾기
          </Link>
          <Link className={styles.link} to="">
            회원가입
          </Link>
        </div>
        <div className={styles.socialLoginContainer}>
          <button
            className={styles.socialLoginButton}
            type="button"
            aria-label="login with Kakao"
          >
            카카오
          </button>
          <button
            className={styles.socialLoginButton}
            type="button"
            aria-label="login with Naver"
          >
            네이버
          </button>
          <button
            className={styles.socialLoginButton}
            type="button"
            aria-label="login with Google"
          >
            구글
          </button>
        </div>
      </main>
    </>
  );
}

export default Login;
