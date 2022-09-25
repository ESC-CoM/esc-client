import { useEffect, useState } from 'react';
import cx from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

import $ from './style.module.scss';

const category = [
  { name: '등록한 미팅', path: 'register' },
  { name: '신청한 미팅', path: 'request' },
];

export default function MyMeetingCategory() {
  const [isCategoryActive, setIsCategoryActive] = useState<boolean[]>([
    true,
    false,
    false,
  ]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const keyword = params.get('status');

  const navigateTab = (index1: number) => {
    setIsCategoryActive(
      isCategoryActive.map((_, index2) => (index1 === index2 ? true : false))
    );
    if (index1 === 0) navigate('/mymeeting?status=register');
    else if (index1 === 1) navigate('/mymeeting?status=request');
  };

  useEffect(() => {
    if (keyword === 'request')
      setIsCategoryActive(
        isCategoryActive.map((_, index) => (index === 1 ? true : false))
      );
  }, []);

  return (
    <ul className={$['nav-list']}>
      {category.map(({ name, path }, index) => (
        <li
          key={`nav-item-${index}`}
          className={cx($['nav-item'], {
            [$['item-active']]: isCategoryActive[index] && keyword?.match(path),
          })}
          onClick={() => navigateTab(index)}
        >
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}
