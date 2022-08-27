import $ from './style.module.scss';
import cx from 'classnames';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { mbtiList } from '../data';
import { More1Type } from 'src/types/join';
import { memo } from 'react';
import { Label } from 'src/components/Join';

interface Props {
  register: UseFormRegister<More1Type>;
  errors?: FieldError;
}

export function MbtiInput({ register, errors }: Props) {
  return (
    <div className={$['item']}>
      <Label label={'MBTI'} errorMsg={errors?.message} />

      <select
        className={cx($[''], {
          [$['error']]: errors?.message,
        })}
        defaultValue=""
        {...register('mbti')}
      >
        <option disabled value="">
          --- 선택 ---
        </option>
        {mbtiList.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default memo(MbtiInput);
