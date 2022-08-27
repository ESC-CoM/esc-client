import $ from './style.module.scss';
import { heightInfo } from '../data';
import { UseFormRegisterReturn } from 'react-hook-form';
import { memo } from 'react';
import { Label } from 'src/components/Join';

interface Props {
  value: number;
  register: UseFormRegisterReturn;
}

export function HeightInput({ value, register }: Props) {
  return (
    <div className={$['item']}>
      <Label label={'키'} htmlFor={'height'} />

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
