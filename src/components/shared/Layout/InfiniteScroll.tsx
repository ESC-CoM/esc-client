import { ReactNode } from 'react';

import { useIntersectObserver } from '../../../hooks';

type Props = {
  children: ReactNode;
  trigger: () => void;
  pageNumber?: number;
  totalPageCount?: number;
  isLoaded?: boolean;
};

export default function InfiniteScroll(props: Props) {
  const { trigger } = props;

  const onIntersect = (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ): void => {
    observer.unobserve(entry.target);
    trigger();
  };

  const observerRef = useIntersectObserver<HTMLDivElement>(onIntersect, {
    threshold: 1,
  });

  return (
    <>
      {props.children}
      <div ref={observerRef} style={{ height: '1px' }} />
    </>
  );
}
