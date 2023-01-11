import { useEffect, useState } from 'react';
import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
import { SaparateLine } from 'src/components/Login/atoms';

import styles from './style.module.scss';

type Props = {
  type: 'email' | 'password';
};

type PageData = {
  discription: string;
  secondButtonAction: string;
  url: string;
};

const PAGE_DATA = {
  email: {
    discription: '이메일',
    secondButtonAction: '비밀번호 찾기',
    url: '/find/password',
  },
  password: {
    discription: '비밀번호',
    secondButtonAction: '비밀번호 변경하기',
    url: '/login',
  },
};

export default function FindResult({ type }: Props) {
  const [pageData, setPageData] = useState<PageData>(PAGE_DATA.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (type === 'email') {
      setPageData(PAGE_DATA.email);
      return;
    }
    setPageData(PAGE_DATA.password);
  }, [type]);

  return (
    <div className={styles.container}>
      <div className={styles.demoImage}>demo image</div>
      <p className={styles.discription}>
        회원님의 본인인증 정보로 <br />
        검색된 {pageData.discription}입니다.
      </p>
      <div className={styles.informationContainer}>
        <SaparateLine width={490} className={styles.line} />
        <div className={styles.information}>
          <span className={styles.text}>example@gmail.com</span>
          <span className={styles.text}>가입일 2022 02 02</span>
        </div>
        <SaparateLine width={490} className={styles.line} />
        <div className={styles.buttonContainer}>
          <button
            className={cx(styles.primaryButton, styles.button)}
            type="button"
            aria-label="로그인으로 이동하기"
            onClick={() => navigate('/login')}
          >
            로그인하러 가기
          </button>
          <button
            className={cx(styles.grayButton, styles.button)}
            type="button"
            aria-label={pageData.secondButtonAction}
            onClick={() => navigate(pageData.url)}
          >
            {pageData.secondButtonAction}
          </button>
        </div>
      </div>
    </div>
  );
}
