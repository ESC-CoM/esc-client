import { memo } from 'react';
import cx from 'classnames';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Label from 'src/components/shared/Label';
import { More1Type } from 'src/types/join';

import $ from './style.module.scss';

interface Props {
  register: UseFormRegister<More1Type>;
  errors: FieldErrors<More1Type>;
}

export function BirthInput({ register, errors }: Props) {
  return (
    <div className={$['item']}>
      <Label
        textContent="태어난 연도"
        fontSize={15}
        htmlFor="birthDate"
        errorMsg={errors.year?.message}
      />

      <div className={$['row']}>
        <span
          className={cx($['year'], {
            [$['error']]: errors.year,
          })}
        >
          <input
            type="text"
            id="birthDate"
            placeholder="년도(4자)"
            {...register('year')}
          />
        </span>
      </div>
    </div>
  );
}

export default memo(BirthInput);
