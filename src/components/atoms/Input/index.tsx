import cx from 'classnames';
import styles from './style.module.scss';

interface Props {
  className: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  register: () => void;
}

function Input({ className, type, placeholder, register }: Props) {
  return (
    <input
      className={cx(className, styles.input)}
      type={type}
      placeholder={placeholder}
      {...register()}
    />
  );
}

export default Input;
