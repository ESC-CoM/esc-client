import React, { useEffect, useState } from 'react';

const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

export default function useIntersectObserver<T extends Element>(
  customOptions?: IntersectionObserverInit,
  target?: React.RefObject<T>,
  callback?: (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => void
) {
  const [isIntersect, setIntersect] = useState(false);

  const options = {
    ...defaultOptions,
    ...customOptions,
  };

  const observer = new IntersectionObserver(
    callback
      ? callback
      : (entries: IntersectionObserverEntry[]) => {
          setIntersect(entries[0].isIntersecting);
        },
    options
  );

  useEffect(() => {
    console.log(observer.thresholds[0]);
    if (target?.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [target]);

  if (!callback) return isIntersect;
}
