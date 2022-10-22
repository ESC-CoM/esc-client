import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { useSearch } from 'src/hooks';

import $ from './style.module.scss';

const category = [
  { name: '친구리스트', path: 'myfriends', to: '/friends/list?kind=myfriends' },
  { name: '요청리스트', path: 'request', to: '/friends/list?kind=request' },
];

export default function FriendsTab() {
  const keyword = useSearch('kind');

  return (
    <ul className={$['nav-list']}>
      {category.map(({ name, path, to }, index) => (
        <li
          key={`nav-item-${index}`}
          className={cx($['nav-item'], {
            [$['item-active']]: keyword?.match(path),
          })}
        >
          <NavLink to={to}>
            <span className={$['path-name']}>{name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
