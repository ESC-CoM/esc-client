import cx from 'classnames';

import styles from './style.module.scss';

interface Props {
  width: number;
  className?: string;
}

function SaparateLine({ width, className }: Props) {
  return <hr className={cx(styles.line, className)} style={{ width }}></hr>;
}

export default SaparateLine;
