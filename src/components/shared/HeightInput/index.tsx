import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import cx from 'classnames';
import Label from 'src/components/shared/Label';

import heightInfo from './heightInfo';
import $ from './style.module.scss';

type Props = {
  className?: string;
  value: number;
  register: UseFormRegisterReturn;
};

export function HeightInput({ className, value, register }: Props) {
  return (
    <div className={cx($.item, className)}>
      <Label textContent="키" fontSize={15} htmlFor="height" />
      <span className={$.info}>
        {heightInfo.filter((mark) => value == mark.value)[0].label}
      </span>
      <input
        type="range"
        className={$.input}
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
