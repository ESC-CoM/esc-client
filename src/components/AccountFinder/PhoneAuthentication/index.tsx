import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Input, MainButton } from 'src/components/atoms';
import styles from './style.module.scss';

type Props = {
  className: string;
  findType: 'email' | 'password';
};

export default function PhoneAuthentication({ className, findType }: Props) {
  const navigate = useNavigate();

  return (
    <div className={cx(styles.container, className)}>
      <p className={styles.discription}>
        본인 명의 휴대전화로
        <br />
        {findType === 'email' ? '아이디' : '비밀번호'}를 찾을 수 있습니다.
      </p>
      <div className={styles.inputContainer}>
        <Input
          className={styles.emailInput}
          type="text"
          placeholder="010-1234-5678"
          register={() => console.log('hi')}
        />
        <MainButton
          className={styles.emailAuthButton}
          buttonType={'button'}
          ariaLabel={''}
          textContent="인증"
          onClick={() => console.log('hi')}
        />
      </div>
      <Input
        className={styles.authNumberInput}
        type="text"
        placeholder="인증번호 6자리"
        register={() => console.log('hi')}
      />
      <MainButton
        className={styles.submit}
        buttonType="submit"
        ariaLabel={''}
        textContent="확인"
        onClick={() => navigate('./confirm')}
      />
    </div>
  );
}
