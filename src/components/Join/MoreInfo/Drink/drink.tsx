import style from './style.module.scss';
import { useEffect, useState } from 'react';
import { Bottle } from '../../../Icon';
import {
  full,
  half,
  f_point,
  h_point,
  e_point,
  half_offset_x,
  full_offset_x,
} from './data';

export type Props = {
  setDrinkNum: (count: number) => void;
};

export default function Drink({ setDrinkNum }: Props) {
  const [isDrinking, setIsDrinking] = useState<Array<number>>(
    Array.from({ length: 6 }, () => 0)
  );
  const [drinkDegree, setdrinkDegree] = useState<Array<string>>(
    Array.from({ length: 6 }, () => '')
  );

  useEffect(() => {
    const count = isDrinking.reduce((acc, curr) => acc + curr, 0);
    setDrinkNum(count);
  }, [isDrinking, drinkDegree]);

  const fillBottle = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault();
    const currX = e.nativeEvent.offsetX;
    if (currX <= half_offset_x) {
      setIsDrinking((drinks) =>
        drinks.map((_, idx) => (idx < index ? f_point : e_point))
      );
      setdrinkDegree((degree) =>
        degree.map((_, idx) => {
          if (idx < index) return full;
          else return '';
        })
      );
      return;
    }
    if (currX > half_offset_x && currX <= full_offset_x) {
      setIsDrinking((drinks) =>
        drinks.map((_, idx) => {
          if (idx < index) return f_point;
          if (idx === index) return h_point;
          return e_point;
        })
      );
      setdrinkDegree((degree) =>
        degree.map((_, idx) => {
          if (idx < index) return full;
          if (idx === index) return half;
          return '';
        })
      );
      return;
    }
    if (currX > full_offset_x) {
      setIsDrinking((drinks) =>
        drinks.map((_, idx) => (idx <= index ? f_point : e_point))
      );
      setdrinkDegree((degree) =>
        degree.map((_, idx) => {
          if (idx <= index) return full;
          return '';
        })
      );
      return;
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
          <Bottle key={index} degree={drinkDegree[index]} />
        </li>
      ))}
    </ul>
  );
}
