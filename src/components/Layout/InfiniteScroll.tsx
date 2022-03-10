import { useEffect, useRef, ReactNode } from 'react';
import { useIntersectObserver } from '../../hooks';

interface Props {
  children: ReactNode;
  trigger: () => void;
  pageNumber?: number;
  totalPageCount?: number;
  isLoaded?: boolean;
}

export default function InfiniteScroll(props: Props) {
  const { trigger, pageNumber, totalPageCount, isLoaded } = props;

  const target = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectObserver<HTMLDivElement>(
    { threshold: 1 },
    target
  );

  useEffect(() => {
    if (isIntersecting) trigger();
  }, [isIntersecting]);

  return (
    <>
      {props.children}
      <div ref={target} />
    </>
  );
}
