import cx from 'classnames';
import styles from './style.module.scss';

interface Props {
  className: string;
  textContent: string;
  htmlFor: string;
  fontSize: number;
}

function Label({ className, textContent, htmlFor, fontSize }: Props) {
  return (
    <label
      className={cx(styles.label, className)}
      htmlFor={htmlFor}
      style={{ fontSize }}
    >
      {textContent}
    </label>
  );
}

export default Label;
