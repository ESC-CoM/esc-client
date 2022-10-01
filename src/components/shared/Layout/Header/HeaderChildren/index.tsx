import React from 'react';
import { useLocation } from 'react-router-dom';
import headerMenus from 'src/constants/headerMenus';

import $ from './style.module.scss';

export default function HeaderChildren() {
  const location = useLocation();

  const isStringUrl = (url?: string | string[], isPathBeIncluded?: boolean) => {
    return (
      typeof url === 'string' &&
      (location.pathname === url ||
        (isPathBeIncluded && url && location.pathname.match(url)))
    );
  };

  const isStringArrUrl = (urlArr?: string | string[]) => {
    return (
      typeof urlArr !== 'string' &&
      urlArr?.every((url) => location.pathname.includes(url))
    );
  };

  return (
    <nav className={$['fixed-bar']}>
      {headerMenus.map((menus, index1) => (
        <div
          key={`header-parent-${index1}`}
          className={!index1 ? $.left : $.right}
        >
          {menus.map((menu, index2) => {
            if (
              isStringUrl(menu.url, menu.isPathBeIncluded) ||
              isStringArrUrl(menu.url)
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
    </nav>
  );
}
