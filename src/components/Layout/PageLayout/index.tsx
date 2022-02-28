import Footer from '../Footer';
import { useEffect, ReactNode } from 'react';
import style from './style.module.scss';

interface Props {
  children: ReactNode;
  decreaseHeight: number;
}

export default function PageLayout({ children, decreaseHeight = 0 }: Props) {
  const footerHeight = 54;

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
      <Footer />
    </>
  );
}
