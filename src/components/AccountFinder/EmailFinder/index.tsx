import { Header } from 'src/components/atoms';
import Authentication from '../Authentication';
import styles from './style.module.scss';

export default function EmailFinder() {
  return (
    <div className={styles.container}>
      <Header title="아이디 찾기" />
      <Authentication className={styles.authentication} type="phone" />
    </div>
  );
}
