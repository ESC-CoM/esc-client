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

export default function Header() {
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
  ];

  const menusRight = [
    {
      icon: <IoNotificationsOutline />,
      url: '/home',
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
    <header className={style.header}>
      <div className={style.menus_left}>
        {menusLeft.map((menu) => (
          <div key={menu.url} onClick={() => handleClick(menu.url)}>
            <div className={style.icon}>
              {location.pathname === menu.url ? (
                <div>
                  <p>
                    {menu.text}
                    {menu.icon}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className={style.menus_right}>
        {menusRight.map((menu) => (
          <div key={menu.url} onClick={() => handleClick(menu.url)}>
            <div className={style.icon}>
              {location.pathname.match(menu.url) ? menu.icon : null}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
