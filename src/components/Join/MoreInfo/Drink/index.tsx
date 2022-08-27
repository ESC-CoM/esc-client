import $ from './style.module.scss';
import { memo, useEffect, useState } from 'react';
import { Bottle } from 'src/components/Icon';
import { adjustDrink } from 'src/utils';
import { UseFormSetValue } from 'react-hook-form';
import { More2Type } from 'src/types/join';
import { Label } from 'src/components/Join';

interface Props {
  value: number;
  setValue: UseFormSetValue<More2Type>;
}

export function Drink({ value, setValue }: Props) {
  const [drinkNum, setDrinkNum] = useState<number[]>(
    Array.from({ length: 6 }, () => 0)
  );
  const [drinkDegree, setdrinkDegree] = useState<string[]>(
    Array.from({ length: 6 }, () => '')
  );

  useEffect(() => {
    const count = drinkNum.reduce((acc, curr) => acc + curr, 0);
    setValue('drink', count);
  }, [drinkNum, drinkDegree]);

  const fillBottle = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault();
    adjustDrink(e, index, setDrinkNum, setdrinkDegree);
  };

  return (
    <div className={$['item']}>
      <Label label={'주량'} />

      <div className={$['row']}>
        {drinkNum.map((_, index) => (
          <span
            className={$['icon']}
            key={index}
            draggable="true"
            onClick={(e) => fillBottle(e, index)}
            onDragOver={(e) => fillBottle(e, index)}
          >
            <Bottle key={index} degree={drinkDegree[index]} />
          </span>
        ))}

        <span className={$['info']}>{value ? `${value}병` : '못마셔요'}</span>
      </div>
    </div>
  );
}

export default memo(Drink);
