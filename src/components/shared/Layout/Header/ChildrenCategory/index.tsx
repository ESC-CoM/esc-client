import Link from 'next/link';
import cx from 'classnames';
import { useSearch } from 'src/hooks';

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
  const keyword = useSearch(target);

  return (
    <ul className={$['nav-list']}>
      {category.map(({ name, path, to }, index) => (
        <li
          key={`nav-item-${index}`}
          className={cx($['nav-item'], {
            [$['item-active']]: keyword?.match(path),
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
