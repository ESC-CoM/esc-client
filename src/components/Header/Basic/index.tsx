import style from './style.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  IoChevronBackOutline,
  IoChevronDownOutline,
  IoNotificationsOutline,
  IoSearchOutline,
  IoPeopleOutline,
  IoReorderThreeOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Header({ children }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const menusLeft = [
    {
      icon: <IoChevronBackOutline />,
      url: '이전', // 임시 url
    },
    {
      icon: <IoChevronDownOutline />,
      url: '/home/mtm',
      text: '과팅',
    },
    {
      icon: <IoChevronDownOutline />,
      url: '/home/oto',
      text: '소개팅',
    },
    {
      url: '/mymeeting',
      text: 'Blue Spring',
    },
  ];

  const menusRight = [
    {
      icon: <IoNotificationsOutline />,
      url: '/mymeeting',
    },
    {
      icon: <IoSearchOutline />,
      url: '/home',
    },
    {
      icon: <IoPeopleOutline />,
      url: '/mypage',
    },
    {
      icon: <IoReorderThreeOutline />,
      url: '/chat',
    },
    {
      icon: <IoSettingsOutline />,
      url: '/mypage',
    },
  ];

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <section className={style.fixed}>
      <header className={style.header}>
        <div className={style.searchbar}>
          <div className={style.left}>
            {menusLeft.map((menu) => (
              <span key={menu.url} onClick={() => handleClick(menu.url)}>
                {location.pathname === menu.url ? (
                  <span>{menu.text}</span>
                ) : null}
              </span>
            ))}
          </div>
          <div className={style.right}>
            {menusRight.map((menu) => (
              <span key={menu.url} onClick={() => handleClick(menu.url)}>
                {location.pathname.match(menu.url) ? menu.icon : null}
              </span>
            ))}
          </div>
        </div>
        <nav className={style.nav}>
          <div>{children}</div>
        </nav>
      </header>
    </section>
  );
}
