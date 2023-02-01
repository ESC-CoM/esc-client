import { useEffect, useState } from 'react';
import useDetectScroll from 'src/hooks/useDetectScroll';

export const useFloatingAnimation = (ref: React.RefObject<HTMLElement>) => {
  const [isDown, setIsDown] = useState(false);
  const isScrollMove = useDetectScroll(ref);

  useEffect(() => {
    if (isScrollMove) {
      setIsDown(true);
    } else {
      setIsDown(false);
    }
    return () => {
      isScrollMove;
    };
  }, [isScrollMove]);

  return isDown;
};
