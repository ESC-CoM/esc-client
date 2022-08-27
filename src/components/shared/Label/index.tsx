import cx from 'classnames';
import styles from './style.module.scss';

interface Props {
  className?: string;
  textContent: string;
  htmlFor: string;
  fontSize: number;
  errorMsg?: string;
}

function Label({ className, textContent, htmlFor, fontSize, errorMsg }: Props) {
  return (
    <label
      className={cx(styles.label, className)}
      htmlFor={htmlFor}
      style={{ fontSize }}
    >
      {textContent || errorMsg}
    </label>
  );
}

export default Label;
