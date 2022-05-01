import $ from './style.module.scss';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

const category = [
  { name: '등록한 미팅', path: 'register' },
  { name: '신청한 미팅', path: 'request' },
  { name: '매칭된 미팅', path: 'matching' },
];

export default function MyMeetingCategory() {
  const [isCategoryActive, setIsCategoryActive] = useState<boolean[]>([
    true,
    false,
    false,
  ]);
  const navigate = useNavigate();
  const location = useLocation();
  const currPath = location.pathname;

  const navigateTab = (index1: number) => {
    setIsCategoryActive(
      isCategoryActive.map((_, index2) => (index1 === index2 ? true : false))
    );
    if (index1 === 0) navigate('/mymeeting/register-basic');
    else if (index1 === 1) navigate('/mymeeting/request-basic');
    else if (index1 === 2) navigate('/mymeeting/matching-basic');
  };

  useEffect(() => {
    if (currPath === '/mymeeting/request-basic')
      setIsCategoryActive(
        isCategoryActive.map((_, index) => (index === 1 ? true : false))
      );
    else if (currPath === '/mymeeting/matching-basic')
      setIsCategoryActive(
        isCategoryActive.map((_, index) => (index === 2 ? true : false))
      );
  }, []);

  return (
    <ul className={$['nav-list']}>
      {category.map(({ name, path }, index) => (
        <li
          key={`nav-item-${index}`}
          className={cx($['nav-item'], {
            [$['item-active']]: isCategoryActive[index] && currPath.match(path),
          })}
          onClick={() => navigateTab(index)}
        >
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}
