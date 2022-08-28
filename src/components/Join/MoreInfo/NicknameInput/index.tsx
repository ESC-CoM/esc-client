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
import Label from 'src/components/shared/Label';
import ErrorMessage from 'src/components/shared/ErrorMessage';

interface Props {
  watch: UseFormWatch<More1Type>;
  register: UseFormRegister<More1Type>;
  setValue: UseFormSetValue<More1Type>;
  errors: FieldErrors<More1Type>;
}

export function NicknameInput({ watch, register, setValue, errors }: Props) {
  const isDuplicationChecked = watch('isDuplicationChecked', false);

  const checkDuplication = () => {
    // api
    setValue('isDuplicationChecked', true);
  };

  return (
    <div className={$['item']}>
      <Label
        textContent="별명"
        fontSize={15}
        htmlFor="nickName"
        errorMsg={errors.nickName?.message}
      />

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
      {!isDuplicationChecked && (
        <ErrorMessage errorText={errors.isDuplicationChecked?.message} />
      )}
    </div>
  );
}

export default memo(NicknameInput);
