import { IoIosArrowBack } from 'react-icons/io';
import { AiFillEye } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import classNames from 'classnames';
import styles from './style.module.scss';

function Login() {
  return (
    <>
      <header className={styles.header}>
        <a href="">
          <IoIosArrowBack className={styles.backIcon} />
        </a>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>NOVA APERIO</h1>
        <form action="submit">
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" placeholder="이메일" />
            <button className={styles.button} type="button">
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
              className={classNames(styles.button, styles.viewPasswordButton)}
              type="button"
            >
              <AiFillEye />
            </button>
            <button className={styles.button} type="button">
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
        <button className={styles.submitButton} type="submit">
          로그인
        </button>
        <div className={styles.separateLine}></div>
        <div className={styles.linkContainer}>
          <a className={styles.link} href="">
            아이디 찾기
          </a>
          <a className={styles.link} href="">
            비밀번호 찾기
          </a>
          <a className={styles.link} href="">
            회원가입
          </a>
        </div>
        <div className={styles.socialLoginContainer}>
          <button className={styles.socialLoginButton}>카카오</button>
          <button className={styles.socialLoginButton}>네이버</button>
          <button className={styles.socialLoginButton}>구글</button>
        </div>
      </main>
    </>
  );
}

export default Login;
