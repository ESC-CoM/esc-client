import { memo } from 'react';
import cx from 'classnames';
import { FieldError, UseFormSetValue } from 'react-hook-form';
import Label from 'src/components/shared/Label';
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
            [$['gender-active']]: value === '남자',
          })}
          onClick={() => setValue('gender', '남자')}
          type="button"
          aria-labelledby="gender"
        >
          남자
        </button>

        <button
          className={cx($['gender-btn'], {
            [$['gender-active']]: value === '여자',
          })}
          onClick={() => setValue('gender', '여자')}
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
