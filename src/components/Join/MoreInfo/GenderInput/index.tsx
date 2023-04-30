import { memo } from 'react';
import { FieldError, UseFormSetValue } from 'react-hook-form';
import cx from 'classnames';
import Label from 'src/components/shared/Label';
import { gender } from 'src/constants/config';
import { More1Type } from 'src/types/join';

import $ from './style.module.scss';

interface Props {
  value: string;
  setValue: UseFormSetValue<More1Type>;
  errors?: FieldError;
}

export function GenderInput({ value, setValue, errors }: Props) {
  return (
    <div className={$.item}>
      <Label
        textContent="성별"
        fontSize={15}
        htmlFor="birthDate"
        errorMsg={errors?.message}
      />

      <div className={$.row}>
        <button
          className={cx($['gender-btn'], {
            [$['gender-active']]: value === 'men',
          })}
          onClick={() => setValue('gender', gender.men)}
          type="button"
          aria-labelledby="gender"
        >
          남자
        </button>

        <button
          className={cx($['gender-btn'], {
            [$['gender-active']]: value === 'women',
          })}
          onClick={() => setValue('gender', gender.women)}
          type="button"
          aria-labelledby="gender"
        >
          여자
        </button>
      </div>
    </div>
  );
}

export default memo(GenderInput);
