import { ForwardedRef, forwardRef, ReactNode, useEffect } from 'react';
import Header from 'src/components/shared/Layout/Header/Basic';

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
  const footerHeight = isNeedFooter ? 55 : 0;

  useEffect(() => {
    window.document.body.style.overflow = 'hidden';

    return () => {
      window.document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      {!customHeader && <Header />}
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
