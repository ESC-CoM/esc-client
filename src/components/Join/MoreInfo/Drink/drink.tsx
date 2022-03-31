import style from './style.module.scss';
import { useEffect, useState } from 'react';
import { Bottle } from '../../../Icon';
import { adjustDrink } from '../../../../utils/adjustDrink';

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
    adjustDrink(e, index, setIsDrinking, setdrinkDegree);
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
