import cx from 'classnames';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

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
