import { MdCheckBox } from '@react-icons/all-files/md/MdCheckBox';
import { MdCheckBoxOutlineBlank } from '@react-icons/all-files/md/MdCheckBoxOutlineBlank';
import cx from 'classnames';

import styles from './style.module.scss';

interface Props {
  isChecked: boolean;
  className: string;
  ariaLabelForChecked: string;
  ariaLabelForUnchecked: string;
  id: string;
  onClickForChecked: () => void;
  onClickForUnchecked: () => void;
}

function CheckBox({
  isChecked,
  className,
  id,
  ariaLabelForChecked,
  ariaLabelForUnchecked,
  onClickForChecked,
  onClickForUnchecked,
}: Props) {
  if (isChecked)
    return (
      <button
        className={cx(styles.button, className)}
        id={id}
        type="button"
        aria-label={ariaLabelForChecked}
        onClick={onClickForChecked}
      >
        <MdCheckBox className={cx(styles.checkbox, styles.checkedBox)} />
      </button>
    );
  return (
    <button
      className={cx(styles.button, className)}
      id={id}
      type="button"
      aria-label={ariaLabelForUnchecked}
      onClick={onClickForUnchecked}
    >
      <MdCheckBoxOutlineBlank className={styles.checkbox} />
    </button>
  );
}

export default CheckBox;
