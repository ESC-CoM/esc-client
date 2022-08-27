import cx from 'classnames';
import styles from './style.module.scss';

interface Props {
  className: string;
}

function LoginTitle({ className }: Props) {
  return <h1 className={cx(styles.title, className)}>NOVA APERIO</h1>;
}

export default LoginTitle;
