import $ from './style.module.scss';
import cx from 'classnames';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { More1Type } from 'src/types/join';
import { memo } from 'react';
import { Label } from 'src/components/Join';

interface Props {
  register: UseFormRegister<More1Type>;
  errors: FieldErrors<More1Type>;
}

export function BirthInput({ register, errors }: Props) {
  return (
    <div className={$['item']}>
      <Label
        label={'태어난 연도'}
        htmlFor={'birthDate'}
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
