import style from './style.module.scss';
import { useLocation } from 'react-router-dom';
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
  children?: ReactNode;
}

type MenuType = {
  icon?: JSX.Element;
  url?: string;
  text?: string;
};

const menusLeft: MenuType[] = [
  {
    icon: <IoChevronBackOutline />,
    url: '',
    text: '이전',
  },
  {
    icon: <IoChevronDownOutline />,
    url: '/home',
    text: '과팅',
  },
  {
    icon: <IoChevronDownOutline />,
    url: '/home/personal',
    text: '소개팅',
  },
  {
    url: '/mymeeting',
    text: 'Blue Spring',
  },
];

const menusRight: MenuType[] = [
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

export default function Header({ children }: Props) {
  const location = useLocation();

  return (
    <section className={style.fixed}>
      <header className={style.header}>
        <div className={style.searchbar}>
          {[menusLeft, menusRight].map((menus, index1) => (
            <div
              key={`header-parent-${index1}`}
              className={!index1 ? style.left : style.right}
            >
              {menus.map((menu, index2) => {
                if (location.pathname === menu.url)
                  return (
                    <span key={`header-${index1}-${index2}`}>
                      {!index1 ? menu.text : menu.icon}
                    </span>
                  );
              })}
            </div>
          ))}
        </div>

        <nav className={style.nav}>
          <div>{children}</div>
        </nav>
      </header>
    </section>
  );
}
