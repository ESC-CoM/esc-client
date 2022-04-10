import cx from 'classnames';
import styles from './style.module.scss';

interface Props {
  className: string;
  type: string;
  placeholder?: string;
  width: number;
  height: number;
  register: () => void;
}

function Input({
  className,
  type,
  placeholder,
  register,
  width,
  height,
}: Props) {
  return (
    <input
      className={cx(className, styles.input)}
      style={{ width: `${width}px`, height: `${height}px` }}
      type={type}
      placeholder={placeholder}
      {...register()}
    />
  );
}

export default Input;
