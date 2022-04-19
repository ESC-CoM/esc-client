import React, { useEffect, useState } from 'react';

const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

export default function useIntersectObserver<T extends Element>(
  customOptions?: IntersectionObserverInit,
  target?: React.RefObject<T>
): boolean {
  const options = {
    ...defaultOptions,
    customOptions,
  };
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      setIntersect(entries[0].isIntersecting);
    },
    options
  );

  const [ isIntersect, setIntersect ] = useState(false);
  useEffect(() => {
    if (target?.current) observer.observe(target.current);
    return () => {
      observer.disconnect();
    };
  }, [ observer, target ]);
  
  return isIntersect;
}
