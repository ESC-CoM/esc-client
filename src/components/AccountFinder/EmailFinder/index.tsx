import { Header } from 'src/components/atoms';
import PhoneAuthentication from '../PhoneAuthentication';
import styles from './style.module.scss';

export default function EmailFinder() {
  return (
    <div className={styles.container}>
      <Header title="아이디 찾기" />
      <PhoneAuthentication
        className={styles.authenticationBox}
        findType="email"
      />
    </div>
  );
}
