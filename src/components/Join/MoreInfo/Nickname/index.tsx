import $ from './style.module.scss';
import cx from 'classnames';
import {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
  UseFormSetValue,
} from 'react-hook-form';
import { More1Type } from 'src/types/join';
import { memo } from 'react';

interface Props {
  watch: UseFormWatch<More1Type>;
  register: UseFormRegister<More1Type>;
  setValue: UseFormSetValue<More1Type>;
  errors: FieldErrors<More1Type>;
}

export function Nickname({ watch, register, setValue, errors }: Props) {
  const isNicknameDuplicated = watch('isNicknameDuplicated', false);

  const checkDuplication = () => {
    // api
    setValue('isNicknameDuplicated', true);
  };

  return (
    <div className={$['item']}>
      <label htmlFor="nickName">{errors.nickName?.message ?? '별명'}</label>
      <div className={$['row']}>
        <input
          type="text"
          className={cx($['input'], {
            [$['error']]: errors?.nickName,
          })}
          id="nickName"
          {...register('nickName')}
          placeholder={'최소 2자, 최대 10자'}
        />
        <button className={$['btn']} type="button" onClick={checkDuplication}>
          중복확인
        </button>
      </div>
      <span className={$['error-msg']}>
        {!isNicknameDuplicated && errors.isNicknameDuplicated?.message}
      </span>
    </div>
  );
}

export default memo(Nickname);
