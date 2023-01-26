
import Authentication from '../Authentication';
import styles from './style.module.scss';

export default function EmailFinder() {
  return (
    <div className={styles.container}>
      <Authentication className={styles.authentication} type="phone" />
    </div>
  );
}
