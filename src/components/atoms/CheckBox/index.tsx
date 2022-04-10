import cx from 'classnames';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
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
