import $ from './style.module.scss';
import cx from 'classnames';
import { UseFormWatch, UseFormSetValue, FieldError } from 'react-hook-form';
import { MoreSchema } from 'src/types/join';

interface Props {
  watch: UseFormWatch<MoreSchema>;
  setValue: UseFormSetValue<MoreSchema>;
  errors?: FieldError;
}

export default function GenderInput({ watch, setValue, errors }: Props) {
  const gender = watch('gender');

  return (
    <div className={$['item']}>
      <label>{errors?.message ?? '성별'}</label>
      <div className={$['row']}>
        <button
          className={cx($['gender-btn'], {
            [$['gender-active']]: gender === '남자',
          })}
          onClick={() => setValue('gender', '남자')}
          type="button"
          aria-labelledby="gender"
        >
          남자
        </button>

        <button
          className={cx($['gender-btn'], {
            [$['gender-active']]: gender === '여자',
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
