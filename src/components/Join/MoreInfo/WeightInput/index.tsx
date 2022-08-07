import $ from './style.module.scss';
import { weightInfo } from '../data';
import { UseFormRegisterReturn } from 'react-hook-form';
import { memo } from 'react';

interface Props {
  value: number;
  register: UseFormRegisterReturn;
}

export function WeightInput({ value, register }: Props) {
  return (
    <div className={$['item']}>
      <label htmlFor="weight">몸무게</label>

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
