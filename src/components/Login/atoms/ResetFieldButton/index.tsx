import { MdCancel } from '@react-icons/all-files/md/MdCancel';
import cx from 'classnames';

import styles from './style.module.scss';

interface Props {
  className: string;
  ariaLabel: string;
  onClick: () => void;
}

function ResetFieldButton({ className, ariaLabel, onClick }: Props) {
  return (
    <button
      className={cx(styles.button, className)}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <MdCancel />
    </button>
  );
}

export default ResetFieldButton;
