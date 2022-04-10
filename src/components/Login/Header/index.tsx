import { BackButton } from '../../atoms';
import styles from './style.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <BackButton link="" className={styles.icon} fontSize={23} />
    </header>
  );
}

export default Header;
