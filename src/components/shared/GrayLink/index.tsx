import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './style.module.scss';

interface Props {
  className: string;
  textContent: string;
  href: string;
}

function GrayLink({ className, textContent, href }: Props) {
  return (
    <Link className={cx(styles.link, className)} to={href}>
      {textContent}
    </Link>
  );
}

export default GrayLink;
