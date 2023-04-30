import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import headerChildren from 'src/constants/headerChildren';

import HeaderChildren from '../HeaderChildren';
import $ from './style.module.scss';

interface Props {
  children?: ReactNode;
  customHeader?: ReactNode;
}

export default function Header({ customHeader }: Props) {
  const router = useRouter();
  const hasHeaderChildren = (url: string) => router.pathname.match(url);

  return (
    <header className={$.fixed}>
      <div className={$.header}>
        {customHeader ? (
          customHeader
        ) : (
          <>
            <HeaderChildren />
            {headerChildren.map(({ children, url }, i) => {
              if (hasHeaderChildren(url)) {
                return (
                  <nav className={$['nav-bar']} key={url + i}>
                    {children}
                  </nav>
                );
              }
              return null;
            })}
          </>
        )}
      </div>
    </header>
  );
}
