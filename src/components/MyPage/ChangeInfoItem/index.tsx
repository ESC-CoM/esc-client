import { Link } from 'react-router-dom';

import $ from './style.module.scss';

type Props = {
  className?: string;
  title: string;
  value: string;
  href: string;
};

export default function ChangeInfoItem({
  className,
  title,
  value,
  href,
}: Props) {
  return (
    <div className={className}>
      <h1 className={$['information-name']}>{title}</h1>
      <div className={$['information-box']}>
        <span className={$['information']}>{value}</span>
        <Link className={$['change-link']} to={href}>
          변경
        </Link>
      </div>
    </div>
  );
}
