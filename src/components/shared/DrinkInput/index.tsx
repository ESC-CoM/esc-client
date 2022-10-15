import { memo, useEffect, useState } from 'react';
import { Bottle } from 'src/components/shared/Icon';
import Label from 'src/components/shared/Label';
import { adjustDrink } from 'src/utils';

import $ from './style.module.scss';

type Props = {
  className?: string;
  value: number;
  setValue: (value: number) => void;
};

export function DrinkInput({ className, value, setValue }: Props) {
  const [drinkNum, setDrinkNum] = useState<number[]>(
    Array.from({ length: 6 }, () => 0)
  );
  const [drinkDegree, setdrinkDegree] = useState<string[]>(
    Array.from({ length: 6 }, () => '')
  );

  useEffect(() => {
    const count = drinkNum.reduce((acc, curr) => acc + curr, 0);
    setValue(count);
  }, [drinkNum, drinkDegree]);

  const fillBottle = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault();
    adjustDrink(e, index, setDrinkNum, setdrinkDegree);
  };

  return (
    <div className={className}>
      <Label textContent="주량" fontSize={15} htmlFor="drink" />
      <div className={$.row}>
        {drinkNum.map((_, index) => (
          <span
            className={$.icon}
            key={index}
            draggable="true"
            onClick={(e) => fillBottle(e, index)}
            onDragOver={(e) => fillBottle(e, index)}
          >
            <Bottle key={index} degree={drinkDegree[index]} />
          </span>
        ))}
        <span className={$.info}>{value ? `${value}병` : '못마셔요'}</span>
      </div>
    </div>
  );
}

export default memo(DrinkInput);
