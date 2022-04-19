import Footer from '../Footer';
import { useEffect, ReactNode } from 'react';
import style from './style.module.scss';

interface Props {
  isNeedFooter: boolean;
  children: ReactNode;
  decreaseHeight: number;
}

export default function PageLayout({
  isNeedFooter,
  children,
  decreaseHeight = 0,
}: Props) {
  const footerHeight = isNeedFooter ? 54 : 0;

  useEffect(() => {
    window.document.body.style.overflow = 'hidden';

    return () => {
      window.document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      <main
        className={style.layout}
        style={{
          maxHeight: `calc(100vh - ${footerHeight + decreaseHeight}px)`,
        }}
      >
        <div className={style.body}>{children}</div>
      </main>
      {isNeedFooter && <Footer />}
    </>
  );
}
