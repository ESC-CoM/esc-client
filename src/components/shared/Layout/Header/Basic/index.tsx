import { ReactNode } from 'react';

import HeaderChildren from '../HeaderChildren';
import $ from './style.module.scss';

interface Props {
  children?: ReactNode;
  customHeader?: ReactNode;
}

export default function Header({ children, customHeader }: Props) {
  return (
    <header className={$['fixed']}>
      <div className={$['header']}>
        {customHeader ? (
          customHeader
        ) : (
          <>
            <HeaderChildren />
            <nav className={$['nav-bar']}>{children}</nav>
          </>
        )}
      </div>
    </header>
  );
}
