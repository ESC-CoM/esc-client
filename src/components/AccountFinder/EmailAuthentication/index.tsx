import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Input, MainButton } from 'src/components/atoms';
import styles from './style.module.scss';

type Props = {
  className: string;
};

export default function EmailAuthentication({ className }: Props) {
  const navigate = useNavigate();

  return (
    <div className={cx(styles.container, className)}>
      <p className={styles.discription}>
        가입시 입력했던 이메일과 같아야
        <br />
        인증번호를 받을 수 있습니다.
      </p>
      <div className={styles.inputContainer}>
        <Input
          className={styles.emailInput}
          type="text"
          placeholder="example@example.com"
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
