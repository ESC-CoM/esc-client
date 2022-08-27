import $ from './style.module.scss';
import cx from 'classnames';
import { UseFormSetValue, FieldError } from 'react-hook-form';
import { More1Type } from 'src/types/join';
import { memo } from 'react';
import { Label } from 'src/components/Join';

interface Props {
  value: string;
  setValue: UseFormSetValue<More1Type>;
  errors?: FieldError;
}

export function GenderInput({ value, setValue, errors }: Props) {
  return (
    <div className={$['item']}>
      <Label label={'성별'} errorMsg={errors?.message} />

      <div className={$['row']}>
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
