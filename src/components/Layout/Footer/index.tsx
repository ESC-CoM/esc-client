import style from './style.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  IoHomeOutline,
  IoHome,
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipses,
  IoPersonOutline,
  IoPerson,
} from 'react-icons/io5';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import cx from 'classnames';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    {
      icon: <IoHomeOutline />,
      active: <IoHome />,
      text: '홈',
      url: '/home',
    },
    {
      icon: <BsSuitHeart />,
      active: <BsSuitHeartFill />,
      text: 'MY 과팅',
      url: '/mymeeting',
    },
    {
      icon: <IoChatbubbleEllipsesOutline />,
      active: <IoChatbubbleEllipses />,
      text: '과팅챗',
      url: '/chat',
    },
    {
      icon: <IoPersonOutline />,
      active: <IoPerson />,
      text: '내 정보',
      url: '/mypage',
    },
  ];

  const handleClick = (url: string) => navigate(url);

  return (
    <footer className={style.footer}>
      <div className={style.menus}>
        {menus.map((menu) => (
          <div
            className={cx(style.menu, {
              [style.active]: location.pathname === menu.url, // 나중에 정규표현식으로 교체
            })}
            key={menu.text}
            onClick={() => handleClick(menu.url)}
          >
            <div className={style.icon}>
              {location.pathname === menu.url ? menu.active : menu.icon}
            </div>
            <span className={style.text}>{menu.text}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
