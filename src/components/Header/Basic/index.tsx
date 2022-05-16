import $ from './style.module.scss';
import { useLocation } from 'react-router-dom';
import {
  IoCloseOutline,
  IoChevronBackOutline,
  IoChevronDownOutline,
  IoNotificationsOutline,
  IoSearchOutline,
  IoPeopleOutline,
  IoReorderThreeOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import React, { ReactNode } from 'react';
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
    icon: <IoCloseOutline />,
    text: '과팅 신청하기',
    url: '/home/register',
  },
  {
    icon: <Logo />,
    text: '',
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
                    <React.Fragment key={`header-${index1}-${index2}`}>
                      <span>{menu.icon}</span>
                      <em>{menu.text}</em>
                    </React.Fragment>
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
