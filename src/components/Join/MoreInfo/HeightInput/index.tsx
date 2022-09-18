import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Label from 'src/components/shared/Label';

import { heightInfo } from '../data';
import $ from './style.module.scss';

interface Props {
  value: number;
  register: UseFormRegisterReturn;
}

export function HeightInput({ value, register }: Props) {
  return (
    <div className={$['item']}>
      <Label textContent="키" fontSize={15} htmlFor="height" />

      <span className={$['info']}>
        {heightInfo.filter((mark) => value == mark.value)[0].label}
      </span>
      <input
        type="range"
        className={$['input']}
        id="height"
        min="145"
        max="190"
        step="5"
        {...register}
      />
    </div>
  );
}

export default memo(HeightInput);
