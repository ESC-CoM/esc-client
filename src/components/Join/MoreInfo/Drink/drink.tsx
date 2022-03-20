import style from './style.module.scss';
import { useEffect, useState } from 'react';
import Icon from './icon';

export type Props = {
  onSetDrink: (count: number) => void;
};

export default function Drink({ onSetDrink }: Props) {
  const [isDrinking, setIsDrinking] = useState<Array<number>>(
    Array.from({ length: 5 }, () => 0)
  );

  useEffect(() => {
    const count = isDrinking.reduce((acc, curr) => acc + curr, 0);
    onSetDrink(count);
  }, isDrinking);

  return (
    <>
      <div className={style.drink}>
        {isDrinking.map((_, index) => (
          <Icon
            key={index}
            index={index}
            drinks={isDrinking}
            setIsDrinking={setIsDrinking}
          />
        ))}
      </div>
    </>
  );
}
