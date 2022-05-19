import $ from './style.module.scss';
import { useLocation } from 'react-router-dom';
import headerMenus from 'src/constants/headerMenus';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function Header({ children }: Props) {
  const location = useLocation();

  return (
    <section className={$['fixed']}>
      <header className={$['header']}>
        <div className={$['fixed-bar']}>
          {headerMenus.map((menus, index1) => (
            <div
              key={`header-parent-${index1}`}
              className={!index1 ? $['left'] : $['right']}
            >
              {menus.map((menu, index2) => {
                if (
                  location.pathname === menu.url ||
                  (menu.isPathBeIncluded &&
                    menu.url &&
                    location.pathname.match(menu.url))
                )
                  return (
                    <React.Fragment key={`header-${index1}-${index2}`}>
                      <span>{menu.icon}</span>
                      {menu.text && <em>{menu.text}</em>}
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
