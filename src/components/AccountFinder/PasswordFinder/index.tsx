import { ChangeEvent, useState } from 'react';

import Authentication from '../Authentication';
import styles from './style.module.scss';

type AuthenticationType = 'email' | 'phone';

export default function PasswrodFinder() {
  const [authenticationMethod, setAuthenticationMethod] =
    useState<AuthenticationType>('email');

  function handleRadioButton({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setAuthenticationMethod(value as AuthenticationType);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>비밀번호 찾는 방법을 선택해주세요.</h1>
      <div className={styles.buttonContainer}>
        <input
          className={styles.radioButton}
          type="radio"
          id="find-by-email"
          value="email"
          defaultChecked
          name="findMethod"
          onChange={handleRadioButton}
        />
        <label htmlFor="find-by-email" className={styles.radioLabel}>
          이메일
        </label>
        <input
          className={styles.radioButton}
          type="radio"
          id="find-by-phone"
          value="phone"
          name="findMethod"
          onChange={handleRadioButton}
        />
        <label htmlFor="find-by-phone" className={styles.radioLabel}>
          휴대폰
        </label>
      </div>
      <Authentication
        type={authenticationMethod}
        className={styles.authentication}
      />
    </div>
  );
}
