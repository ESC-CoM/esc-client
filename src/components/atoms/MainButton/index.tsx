import cx from 'classnames';
import styles from './style.module.scss';

interface Props {
  className: string;
  buttonType: 'button' | 'submit' | 'reset';
  ariaLabel: string;
  textContent: string;
  width: number;
  height: number;
  fontSize: number;
}

function MainButton({
  className,
  buttonType,
  ariaLabel,
  textContent,
  width,
  height,
  fontSize,
}: Props) {
  return (
    <button
      className={cx(styles.button, className)}
      style={{ width, height, fontSize }}
      type={buttonType}
      aria-label={ariaLabel}
    >
      {textContent}
    </button>
  );
}

export default MainButton;
