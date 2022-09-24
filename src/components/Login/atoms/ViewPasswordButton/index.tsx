import { AiFillEye } from '@react-icons/all-files/ai/AiFillEye';
import { AiFillEyeInvisible } from '@react-icons/all-files/ai/AiFillEyeInvisible';
import cx from 'classnames';

import styles from './style.module.scss';

interface Props {
  className: string;
  isEncrypted: boolean;
  onClick: () => void;
}

function ViewPasswordButton({ className, isEncrypted, onClick }: Props) {
  return (
    <button
      className={cx(styles.button, className)}
      type="button"
      aria-label="show password"
      onClick={onClick}
    >
      {isEncrypted ? <AiFillEyeInvisible /> : <AiFillEye />}
    </button>
  );
}

export default ViewPasswordButton;
