import { ForwardedRef, forwardRef, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'src/components/shared/Layout/Header/Basic';
import headerChildren from 'src/constants/headerChildren';

import Footer from '../Footer';
import style from './style.module.scss';

interface Props {
  isNeedFooter: boolean;
  children: ReactNode;
  headerHeight?: number;
  decreaseHeight?: number;
  customHeader?: React.ReactNode;
}

function PageLayout(
  layoutProps: Props,
  ref: ForwardedRef<HTMLDivElement> | null
) {
  const { isNeedFooter, children, customHeader } = layoutProps;
  const { headerHeight = 0, decreaseHeight = 0 } = layoutProps;
  const location = useLocation();
  const hasHeaderChildren = (url: string) => location.pathname.match(url);
  const footerHeight = isNeedFooter ? 55 : 0;

  useEffect(() => {
    window.document.body.style.overflow = 'hidden';

    return () => {
      window.document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      {!customHeader &&
        headerHeight > 0 &&
        headerChildren.map(({ children, url }) => {
          if (hasHeaderChildren(url))
            return <Header key={url} children={children} />;
          return <Header key={url} />;
        })}
      {customHeader && <Header {...{ customHeader }} />}

      <main
        className={style.layout}
        ref={ref}
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
export default forwardRef(PageLayout);
