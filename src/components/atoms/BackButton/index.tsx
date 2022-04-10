import cx from 'classnames';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

interface Props {
  link: string;
  className: string;
  fontSize: number;
}

function BackButton({ link, className, fontSize }: Props) {
  return (
    <Link to={link}>
      <IoIosArrowBack
        className={cx(styles.icon, className)}
        style={{ fontSize: `${fontSize}px` }}
      />
    </Link>
  );
}

export default BackButton;
