import $ from './style.module.scss';
import { useEffect, useState } from 'react';
import { Bottle } from '../../../Icon';
import { adjustDrink } from '../../../../utils/adjustDrink';

export type Props = {
  setTotalDrinkNum: (count: number) => void;
};

export default function Drink({ setTotalDrinkNum }: Props) {
  const [drinkNum, setDrinkNum] = useState<number[]>(
    Array.from({ length: 6 }, () => 0)
  );
  const [drinkDegree, setdrinkDegree] = useState<string[]>(
    Array.from({ length: 6 }, () => '')
  );

  useEffect(() => {
    const count = drinkNum.reduce((acc, curr) => acc + curr, 0);
    setTotalDrinkNum(count);
  }, [drinkNum, drinkDegree]);

  const fillBottle = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault();
    adjustDrink(e, index, setDrinkNum, setdrinkDegree);
  };

  return (
    <ul className={$['drink']}>
      {drinkNum.map((_, index) => (
        <li
          className={$['icon']}
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
