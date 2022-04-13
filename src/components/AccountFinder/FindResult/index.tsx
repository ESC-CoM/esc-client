import { useNavigate } from 'react-router-dom';
import {
  BorderButton,
  Header,
  MainButton,
  SaparateLine,
} from 'src/components/atoms';
import styles from './style.module.scss';

type Props = {
  findType: 'email' | 'password';
};

type PageData = {
  discription: string;
  secondButtonAction: string;
  url: string;
};

export default function FindResult({ findType }: Props) {
  const navigate = useNavigate();

  let pageData: PageData;

  if (findType === 'email')
    pageData = {
      discription: '이메일',
      secondButtonAction: '비밀번호 찾기',
      url: '/find/password',
    };
  else
    pageData = {
      discription: '비밀번호',
      secondButtonAction: '비밀번호 변경하기',
      url: '/login',
    };

  return (
    <div className={styles.container}>
      <Header title="아이디 찾기" />
      <div className={styles.demoImage}>demo image</div>
      <p className={styles.discription}>
        회원님의 본인인증 정보로 <br />
        검색된 {pageData.discription}입니다.
      </p>
      <div className={styles.layoutContainer}>
        <div className={styles.informationContainer}>
          <SaparateLine width={490} className={styles.line} />
          <div className={styles.information}>
            <span className={styles.text}>example@gmail.com</span>
            <span className={styles.text}>가입일 2022 02 02</span>
          </div>
          <SaparateLine width={490} className={styles.line} />
        </div>
        <div className={styles.buttonContainer}>
          <MainButton
            className={styles.button}
            buttonType={'button'}
            ariaLabel="로그인으로 이동하기"
            textContent="로그인하러 가기"
            onClick={() => navigate('/login')}
          />
          <BorderButton
            className={styles.button}
            buttonType={'button'}
            ariaLabel={pageData.secondButtonAction}
            textContent={pageData.secondButtonAction}
            onClick={() => navigate(pageData.url)}
          />
        </div>
      </div>
    </div>
  );
}
