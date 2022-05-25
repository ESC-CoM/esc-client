import $ from './style.module.scss';
import cx from 'classnames';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { mbtiList } from '../data';
import { More1Type } from 'src/types/join';

interface Props {
  register: UseFormRegister<More1Type>;
  errors?: FieldError;
}

export default function MbtiInput({ register, errors }: Props) {
  return (
    <div className={$['item']}>
      <label htmlFor="mbti">{errors?.message ?? 'MBTI'}</label>

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
