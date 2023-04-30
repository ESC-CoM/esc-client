import { useRouter } from 'next/router';
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';
import cx from 'classnames';

import styles from './style.module.scss';

interface Props {
  className: string;
}

function BackButton({ className }: Props) {
  const router = useRouter();

  return (
    <button
      className={cx(styles.button, className)}
      type="button"
      onClick={() => router.back()}
    >
      <IoIosArrowBack className={cx(styles.icon)} />
    </button>
  );
}

export default BackButton;
