import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

import $ from './style.module.scss';

type Props = {
  target: string;
  category: {
    name: string;
    path: string;
    to: string;
  }[];
};

export default function ChildrenCategory({ target, category }: Props) {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <ul className={$['nav-list']}>
      {category.map(({ name, path, to }, index) => (
        <li
          key={`nav-item-${index}`}
          className={cx($['nav-item'], {
            [$['item-active']]: pathname?.match(path),
          })}
        >
          <Link href={to}>
            <span className={$['path-name']}>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
