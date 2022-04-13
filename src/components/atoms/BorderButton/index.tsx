import cx from 'classnames';
import styles from './style.module.scss';

interface Props {
  className: string;
  buttonType: 'button' | 'submit' | 'reset';
  ariaLabel: string;
  textContent: string;
  onClick: () => void;
}

function BorderButton({
  className,
  buttonType,
  ariaLabel,
  textContent,
  onClick,
}: Props) {
  return (
    <button
      className={cx(styles.button, className)}
      type={buttonType}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {textContent}
    </button>
  );
}

export default BorderButton;
