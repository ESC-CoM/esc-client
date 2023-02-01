import { useCallback, useEffect, useRef } from 'react';

const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

export default function useIntersectObserver<T extends HTMLElement>(
  onIntersect: IntersectHandler,
  customOptions?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  const options = {
    ...defaultOptions,
    ...customOptions,
  };

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref?.current) return;
    const observer = new IntersectionObserver(observerCallback, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, observerCallback, customOptions]);

  return ref;
}
