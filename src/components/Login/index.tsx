import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdCancel, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import Header from '../Header';
import cx from 'classnames';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './style.module.scss';

type Inputs = {
  email: string;
  password: string;
  isSaveId: boolean;
  isAutoLogin: boolean;
};

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('이메일을 양식을 확인해주세요')
      .required('필수 입력사항입니다.'),
    password: yup.string().required('필수 입력사항입니다.'),
    isSaveId: yup.boolean(),
    isAutoLogin: yup.boolean(),
  })
  .required();

function Login() {
  const [isEncrypted, setIsEncrypted] = useState(true);

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const [isSaveId, isAutoLogin] = watch(['isSaveId', 'isAutoLogin'], {
    isSaveId: false,
    isAutoLogin: false,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>NOVA APERIO</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              placeholder="이메일"
              {...register('email')}
            />
            {watch('email') && (
              <button
                className={styles.button}
                type="button"
                aria-label="delete email input"
                onClick={() => resetField('email')}
              >
                <MdCancel />
              </button>
            )}
          </div>
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email.message}</span>
          )}
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type={isEncrypted ? 'password' : 'text'}
              placeholder="비밀번호"
              {...register('password')}
            />
            {watch('password') && (
              <>
                <button
                  className={cx(styles.button, styles.viewPasswordButton)}
                  type="button"
                  aria-label="show password"
                  onClick={() => setIsEncrypted(!isEncrypted)}
                >
                  {isEncrypted ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
                <button
                  className={styles.button}
                  type="button"
                  aria-label="delete email input"
                  onClick={() => resetField('password')}
                >
                  <MdCancel />
                </button>
              </>
            )}
          </div>
          {errors.password && (
            <span className={styles.errorMessage}>
              {errors.password.message}
            </span>
          )}
          <div className={styles.checkboxContainer}>
            <label className={styles.checkboxLabel} htmlFor="save-id">
              아이디 저장
            </label>
            {isSaveId ? (
              <button
                className={styles.button}
                id="save-id"
                type="button"
                aria-label="아이디 저장하지 않기"
                onClick={() => setValue('isSaveId', false)}
              >
                <MdCheckBox
                  className={cx(styles.checkbox, styles.checkedBox)}
                />
              </button>
            ) : (
              <button
                className={styles.button}
                id="save-id"
                type="button"
                aria-label="아이디 저장하기"
                onClick={() => setValue('isSaveId', true)}
              >
                <MdCheckBoxOutlineBlank className={styles.checkbox} />
              </button>
            )}
            <label
              className={cx(styles.checkboxLabel, styles.autoLoginLabel)}
              htmlFor="auto-login"
            >
              자동 로그인
            </label>
            {isAutoLogin ? (
              <button
                className={styles.button}
                id="auto-login"
                type="button"
                aria-label="자동 로그인 끄기"
                onClick={() => setValue('isAutoLogin', false)}
              >
                <MdCheckBox
                  className={cx(styles.checkbox, styles.checkedBox)}
                />
              </button>
            ) : (
              <button
                className={styles.button}
                id="auto-login"
                type="button"
                aria-label="자동 로그인 켜기"
                onClick={() => setValue('isAutoLogin', true)}
              >
                <MdCheckBoxOutlineBlank className={styles.checkbox} />
              </button>
            )}
          </div>
          <button
            className={styles.submitButton}
            type="submit"
            aria-label="login"
          >
            로그인
          </button>
        </form>
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
