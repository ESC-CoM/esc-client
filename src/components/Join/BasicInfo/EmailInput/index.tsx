import cx from 'classnames';
import {
  FieldErrors,
  UseFormRegisterReturn,
  UseFormSetValue,
} from 'react-hook-form';
import ErrorMessage from 'src/components/shared/ErrorMessage';
import Label from 'src/components/shared/Label';
import { EmailPasswordType } from 'src/types/join';

import $ from './style.module.scss';

interface Props {
  isDuplicationChecked: boolean;
  register: UseFormRegisterReturn;
  setValue: UseFormSetValue<EmailPasswordType>;
  errors: FieldErrors<EmailPasswordType>;
}

export default function EmailInput({
  isDuplicationChecked,
  register,
  setValue,
  errors,
}: Props) {
  const checkDuplicatedEmail = () => {
    setValue('isDuplicationChecked', true);
  };

  return (
    <div className={$['item']}>
      <Label
        textContent="이메일"
        fontSize={15}
        htmlFor="email"
        errorMsg={errors.email?.message}
      />

      <div className={$['row']}>
        <input
          className={cx($['input'], {
            [$['error']]: errors.email,
          })}
          type="text"
          id="email"
          autoFocus
          {...register}
        />
        <button
          className={$['btn']}
          type="button"
          onClick={checkDuplicatedEmail}
        >
          중복확인
        </button>
      </div>

      {!isDuplicationChecked && (
        <ErrorMessage errorText={errors.isDuplicationChecked?.message} />
      )}
    </div>
  );
}
