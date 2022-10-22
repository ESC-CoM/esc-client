import { ReactNode } from 'react';
import headerChildren from 'src/constants/headerChildren';

import HeaderChildren from '../HeaderChildren';
import $ from './style.module.scss';

interface Props {
  children?: ReactNode;
  customHeader?: ReactNode;
}

export default function Header({ customHeader }: Props) {
  const hasHeaderChildren = (url: string) => location.pathname.match(url);

  return (
    <header className={$.fixed}>
      <div className={$.header}>
        {customHeader ? (
          customHeader
        ) : (
          <>
            <HeaderChildren />
            {headerChildren.map(({ children, url }) => {
              if (hasHeaderChildren(url)) {
                return <nav className={$['nav-bar']}>{children}</nav>;
              }
              return null;
            })}
          </>
        )}
      </div>
    </header>
  );
}
