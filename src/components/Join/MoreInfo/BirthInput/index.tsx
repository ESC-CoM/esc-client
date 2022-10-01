import { memo } from 'react';
import cx from 'classnames';
import { UseFormRegister } from 'react-hook-form';
import Label from 'src/components/shared/Label';
import { More1Type } from 'src/types/join';

import $ from './style.module.scss';

interface Props {
  register: UseFormRegister<More1Type>;
  errorMessage?: string;
}

export function BirthInput({ register, errorMessage }: Props) {
  return (
    <div className={$.item}>
      <Label
        textContent="태어난 연도"
        fontSize={15}
        htmlFor="birthDate"
        errorMsg={errorMessage}
      />

      <div className={$.row}>
        <span
          className={cx($.year, {
            [$.error]: errorMessage,
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
