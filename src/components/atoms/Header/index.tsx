import BackButton from '../BackButton';
import styles from './style.module.scss';

type Props = {
  title?: string;
};

function Header({ title }: Props) {
  return (
    <header className={styles.header}>
      <BackButton className={styles.back} />
      <span className={styles.title}>{title ? title : ''}</span>
    </header>
  );
}

export default Header;
