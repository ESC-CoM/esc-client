import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';
import cx from 'classnames';
import { useNavigate } from 'react-router-dom';

import styles from './style.module.scss';

interface Props {
  className: string;
}

function BackButton({ className }: Props) {
  const navigate = useNavigate();

  return (
    <button
      className={cx(styles.button, className)}
      type="button"
      onClick={() => navigate(-1)}
    >
      <IoIosArrowBack className={cx(styles.icon)} />
    </button>
  );
}

export default BackButton;
