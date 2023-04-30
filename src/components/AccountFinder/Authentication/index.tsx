import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import cx from 'classnames';

import styles from './style.module.scss';

type Props = {
  className: string;
  type: 'email' | 'phone';
};

type PageData = {
  discription: { first: string; second: string };
  labelText: string;
  placeholder: string;
};

const PAGE_DATA = {
  email: {
    discription: {
      first: '가입시 입력했던 이메일과 같아야',
      second: '인증번호를 받을 수 있습니다.',
    },
    labelText: '이메일',
    placeholder: 'abcd@email.com',
  },
  password: {
    discription: {
      first: '본인 명의 휴대전화로',
      second: '비밀번호를 찾을 수 있습니다.',
    },
    labelText: '휴대폰 번호',
    placeholder: "' - ' 없이 입력해주세요.",
  },
};

export default function Authentication({ className, type }: Props) {
  const [pageData, setPageData] = useState<PageData>(PAGE_DATA.email);
  const router = useRouter();

  useEffect(() => {
    if (type === 'email') {
      setPageData(PAGE_DATA.email);
      return;
    }
    setPageData(PAGE_DATA.password);
  }, [type]);

  return (
    <div className={cx(styles.container, className)}>
      <p className={styles.discription}>
        {pageData.discription.first}
        <br />
        {pageData.discription.second}
      </p>
      <div className={styles.labelContainer}>
        <label htmlFor="auth">{pageData.labelText}</label>
        <span className={styles.star}>*</span>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder={pageData.placeholder}
            id="auth"
          />
          <button
            className={styles.authButton}
            type={'button'}
            aria-label="인증번호 받기"
            onClick={() => console.log('hi')}
          >
            인증번호
            <br />
            받기
          </button>
        </div>
      </div>
      <div className={styles.labelContainer}>
        <label>인증번호</label>
        <span className={styles.star}>*</span>
        <input className={styles.authNumberInput} type="text" />
      </div>
      <button
        className={styles.submit}
        type="submit"
        aria-label="인증하기"
        onClick={() => router.push('./confirm')}
      >
        인증하기
      </button>
    </div>
  );
}
