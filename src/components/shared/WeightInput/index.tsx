import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import cx from 'classnames';
import Label from 'src/components/shared/Label';

import $ from './style.module.scss';
import weightInfo from './weightInfo';

type Props = {
  className?: string;
  value: number;
  register: UseFormRegisterReturn;
};

export function WeightInput({ className, value, register }: Props) {
  return (
    <div className={cx($.item, className)}>
      <Label textContent="몸무게" fontSize={15} htmlFor="weight" />
      <span className={$.info}>
        {weightInfo.filter((mark) => value == mark.value)[0].label}
      </span>
      <input
        type="range"
        className={$.input}
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
