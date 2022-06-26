import $ from './style.module.scss';
import { heightInfo } from '../data';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  value: number;
  register: UseFormRegisterReturn;
}

export default function HeightInput({ value, register }: Props) {
  return (
    <div className={$['item']}>
      <label htmlFor="height">키</label>

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
