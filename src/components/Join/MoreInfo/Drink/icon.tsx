import { HalfBottle } from '../../../Icon';
import React, { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

export type Props = {
  index: number;
  drinks: Array<number>;
  setIsDrinking: Dispatch<SetStateAction<number[]>>;
};

export default function Icon({ index, drinks, setIsDrinking }: Props) {
  const [isDegree, setIsDegree] = useState<string>('');

  const onDrag = (e: React.MouseEvent<HTMLElement>): void => {
    if (index === 0 || drinks[index - 1] === 1) {
      if (e.nativeEvent.offsetX <= 13) {
        setIsDegree('');
        setIsDrinking((drink) =>
          drink.map((value, idx) => (idx === index ? 0 : value))
        );
      } else if (e.nativeEvent.offsetX > 13 && e.nativeEvent.offsetX <= 25) {
        setIsDegree(
          'M120 247.74a12.8 12.8 0 0 1-7.68 2.26c-4.91 0-7.31-1.89-9.85-3.89S97.28 242 92 242s-7.91 2.09-10.48 4.11S76.6 250 71.68 250s-7.31-1.89-9.85-3.89S56.61 242 51.35 242s-7.91 2.09-10.47 4.11S35.93 250 31 250s-7.31-1.89-9.86-3.89-5.2-4.11-10.45-4.11A13.8 13.8 0 0 0 3 244.07V354s-2 27 28 27h61c30 0 28-27 28-27Z'
        );
        setIsDrinking((drink) =>
          drink.map((value, idx) => (idx === index ? 0.5 : value))
        );
      } else if (e.nativeEvent.offsetX > 25) {
        setIsDegree(
          'M120 354V189c0-31-25-50-25-50l-7.86-76c-2.69-2.3-4.88-5-10.14-5-9 0-9 8-18 8s-9-8-18-8a11.11 11.11 0 0 0-4.68 1L28 139S3 158 3 189v165s-2 27 28 27h61c30 0 28-27 28-27Z'
        );
        setIsDrinking((drink) =>
          drink.map((value, idx) => (idx === index ? 1 : value))
        );
      }
    }
  };

  return (
    <span draggable="true" onDragOver={onDrag}>
      <HalfBottle degree={isDegree} />
    </span>
  );
}
