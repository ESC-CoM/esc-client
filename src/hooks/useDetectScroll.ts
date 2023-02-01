import { useEffect, useState } from 'react';
import { debounce, throttle } from 'src/lib';

export default function useDetectScroll(ref: React.RefObject<HTMLElement>) {
  const [isMove, setMove] = useState(false);
  const handleScrollMove = debounce(setMove, 700);
  useEffect(() => {
    const curRef = ref.current;
    const threshold = 0;
    let prevScroll: number;
    if (curRef) {
      prevScroll = curRef.scrollTop;
    }

    const isMoreThanThres = (curScroll: number) =>
      Math.abs(curScroll - prevScroll) > threshold;

    const updateScrollDir = () => {
      const curRef = ref.current;
      let curScroll: number;

      if (curRef) {
        curScroll = curRef.scrollTop;
        console.log(curScroll);
        if (isMoreThanThres(curScroll)) {
          setMove(true);
          handleScrollMove(false);
          prevScroll = curScroll > 0 ? curScroll : 0;
        }
      }
    };
    console.log(curRef);
    if (curRef)
      curRef.addEventListener('scroll', throttle(updateScrollDir, 300));
    return () => {
      if (curRef)
        curRef.removeEventListener('scroll', throttle(updateScrollDir, 300));
    };
  }, []);
  return isMove;
}
