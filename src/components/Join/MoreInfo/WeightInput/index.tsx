import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Label from 'src/components/shared/Label';

import { weightInfo } from '../data';
import $ from './style.module.scss';

interface Props {
  value: number;
  register: UseFormRegisterReturn;
}

export function WeightInput({ value, register }: Props) {
  return (
    <div className={$['item']}>
      <Label textContent="몸무게" fontSize={15} htmlFor="weight" />

      <span className={$['info']}>
        {weightInfo.filter((mark) => value == mark.value)[0].label}
      </span>
      <input
        type="range"
        className={$['input']}
        id="weight"
        min="35"
        max="90"
        step="5"
        {...register}
      />
    </div>
  );
}

export default memo(WeightInput);
