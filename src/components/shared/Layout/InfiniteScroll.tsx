import { ReactNode } from 'react';
import { useIntersect } from 'src/hooks';

type Props = {
  children: ReactNode;
  trigger: () => void;
  pageNumber?: number;
  totalPageCount?: number;
  isLoaded?: boolean;
};

export default function InfiniteScroll(props: Props) {
  const { children, trigger } = props;

  const onIntersect = (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ): void => {
    observer.unobserve(entry.target);
    trigger();
  };

  const observerRef = useIntersect<HTMLDivElement>(onIntersect, {
    threshold: 1,
  });

  return (
    <>
      {children}
      <div ref={observerRef} style={{ height: '1px' }} />
    </>
  );
}
