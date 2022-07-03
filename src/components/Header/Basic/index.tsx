import $ from './style.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import headerMenus from 'src/constants/headerMenus';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function Header({ children }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <header className={$['fixed']}>
      <div className={$['header']}>
        <nav className={$['fixed-bar']}>
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
                      <span onClick={() => menu.goto && goToPage(menu.goto)}>
                        {menu.icon}
                      </span>
                      {menu.text && <em>{menu.text}</em>}
                    </React.Fragment>
                  );
              })}
            </div>
          ))}
        </nav>

        <nav className={$['nav-bar']}>{children}</nav>
      </div>
    </header>
  );
}
