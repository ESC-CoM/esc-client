import Link from 'next/link';
import cx from 'classnames';

import styles from './style.module.scss';

interface Props {
  className: string;
  textContent: string;
  href: string;
}

function GrayLink({ className, textContent, href }: Props) {
  return (
    <Link className={cx(styles.link, className)} href={href}>
      {textContent}
    </Link>
  );
}

export default GrayLink;
