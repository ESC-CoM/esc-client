import Footer from '../Footer';
import { useEffect, ReactNode } from 'react';
import style from './style.module.scss';

interface Props {
  children: ReactNode;
  decreaseHeight: number;
}

export default function PageLayout({ children, decreaseHeight = 0 }: Props) {
  const footerHeight = 87;

  useEffect(() => {
    window.document.body.style.overflow = 'hidden';

    return () => {
      window.document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <section className={style.layout}>
      <div
        className={style.body}
        style={{
          maxHeight: `calc(100vh - ${footerHeight + decreaseHeight}px)`,
        }}
      >
        {children}
      </div>
      <Footer />
    </section>
  );
}
