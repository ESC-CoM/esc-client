import style from './style.module.scss';
import { useEffect, useState } from 'react';
import { Bottle } from '../../../Icon';

export type Props = {
  onSetDrink: (count: number) => void;
};

const [FULL, HALF] = [
  'M120 354V189c0-31-25-50-25-50l-7.86-76c-2.69-2.3-4.88-5-10.14-5-9 0-9 8-18 8s-9-8-18-8a11.11 11.11 0 0 0-4.68 1L28 139S3 158 3 189v165s-2 27 28 27h61c30 0 28-27 28-27Z',
  'M120 247.74a12.8 12.8 0 0 1-7.68 2.26c-4.91 0-7.31-1.89-9.85-3.89S97.28 242 92 242s-7.91 2.09-10.48 4.11S76.6 250 71.68 250s-7.31-1.89-9.85-3.89S56.61 242 51.35 242s-7.91 2.09-10.47 4.11S35.93 250 31 250s-7.31-1.89-9.86-3.89-5.2-4.11-10.45-4.11A13.8 13.8 0 0 0 3 244.07V354s-2 27 28 27h61c30 0 28-27 28-27Z',
];
const [FPOINT, HPOINT, EPOINT] = [1, 0.5, 0];
const [HALFOFFSETX, FULLOFFSETX] = [13, 25];

export default function Drink({ onSetDrink }: Props) {
  const [isDrinking, setIsDrinking] = useState<Array<number>>(
    Array.from({ length: 6 }, () => 0)
  );
  const [isDegree, setIsDegree] = useState<Array<string>>(
    Array.from({ length: 6 }, () => '')
  );

  useEffect(() => {
    const count = isDrinking.reduce((acc, curr) => acc + curr, 0);
    onSetDrink(count);
  }, [isDrinking, isDegree]);

  const fillBottle = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault();
    const currX = e.nativeEvent.offsetX;
    if (currX <= HALFOFFSETX) {
      setIsDrinking((drinks) =>
        drinks.map((_, idx) => (idx < index ? FPOINT : EPOINT))
      );
      setIsDegree((degree) =>
        degree.map((_, idx) => {
          if (idx < index) return FULL;
          else return '';
        })
      );
    } else if (currX > HALFOFFSETX && currX <= FULLOFFSETX) {
      setIsDrinking((drinks) =>
        drinks.map((_, idx) => {
          if (idx < index) return FPOINT;
          else if (idx === index) return HPOINT;
          else return EPOINT;
        })
      );
      setIsDegree((degree) =>
        degree.map((_, idx) => {
          if (idx < index) return FULL;
          else if (idx === index) return HALF;
          else return '';
        })
      );
    } else if (currX > FULLOFFSETX) {
      setIsDrinking((drinks) =>
        drinks.map((_, idx) => (idx <= index ? FPOINT : EPOINT))
      );
      setIsDegree((degree) =>
        degree.map((_, idx) => {
          if (idx <= index) return FULL;
          else return '';
        })
      );
    }
  };

  return (
    <ul className={style.drink}>
      {isDrinking.map((_, index) => (
        <li
          className={style.icon}
          key={index}
          draggable="true"
          onClick={(e) => fillBottle(e, index)}
          onDragOver={(e) => fillBottle(e, index)}
        >
          <Bottle key={index} degree={isDegree[index]} />
        </li>
      ))}
    </ul>
  );
}
