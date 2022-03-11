import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import styles from './style.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="">
        <IoIosArrowBack className={styles.backIcon} />
      </Link>
    </header>
  );
}

export default Header;
