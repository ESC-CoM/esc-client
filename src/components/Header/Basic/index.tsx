import $ from './style.module.scss';
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
import { Logo } from 'src/components/Icon';

interface Props {
  children?: ReactNode;
}

type MenuType = {
  icon?: JSX.Element;
  text?: string;
  url?: string;
};

const menusLeft: MenuType[] = [
  {
    icon: <IoChevronBackOutline />,
    text: '이전',
    url: '',
  },
  {
    icon: <IoChevronDownOutline />,
    text: '과팅',
    url: '/home',
  },
  {
    icon: <IoChevronDownOutline />,
    text: '소개팅',
    url: '/home/personal',
  },
  {
    icon: <Logo />,
    text: 'Blue Spring',
    url: '/mymeeting',
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
    <section className={$['fixed']}>
      <header className={$['header']}>
        <div className={$['fixed-bar']}>
          {[menusLeft, menusRight].map((menus, index1) => (
            <div
              key={`header-parent-${index1}`}
              className={!index1 ? $['left'] : $['right']}
            >
              {menus.map((menu, index2) => {
                if (location.pathname === menu.url)
                  return (
                    <span key={`header-${index1}-${index2}`}>
                      {!index1 ? menu.icon : menu.icon}
                    </span>
                  );
              })}
            </div>
          ))}
        </div>

        <nav className={$['nav-bar']}>{children}</nav>
      </header>
    </section>
  );
}
