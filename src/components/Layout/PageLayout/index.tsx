import Footer from '../Footer';
import { useEffect, ReactNode } from 'react';
import style from './style.module.scss';
import Header from 'src/components/Header/Basic';
import { useLocation } from 'react-router-dom';
import headerChildren from 'src/constants/headerChildren';

interface Props {
  isNeedFooter: boolean;
  children: ReactNode;
  headerHeight?: number;
  decreaseHeight?: number;
}

export default function PageLayout({
  isNeedFooter,
  children,
  headerHeight = 0,
  decreaseHeight = 0,
}: Props) {
  const location = useLocation();
  const footerHeight = isNeedFooter ? 55 : 0;

  useEffect(() => {
    window.document.body.style.overflow = 'hidden';

    return () => {
      window.document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      {headerHeight > 0 &&
        headerChildren.map(({ children, url }) => {
          if (location.pathname.match(url))
            return <Header key={url} children={children} />;
          return <Header key={url} />;
        })}
      <main
        className={style.layout}
        style={{
          maxHeight: `calc(100vh - ${
            headerHeight + footerHeight + decreaseHeight
          }px)`,
        }}
      >
        <div className={style.body}>{children}</div>
      </main>
      {isNeedFooter && <Footer />}
    </>
  );
}
