import $ from './style.module.scss';
import cx from 'classnames';
import {
  UseFormRegisterReturn,
  UseFormSetValue,
  FieldErrors,
} from 'react-hook-form';
import { EmailPasswordType } from 'src/types/join';

interface Props {
  isEmailDuplicated: boolean;
  register: UseFormRegisterReturn;
  setValue: UseFormSetValue<EmailPasswordType>;
  errors: FieldErrors<EmailPasswordType>;
}

export default function EmailInput({
  isEmailDuplicated,
  register,
  setValue,
  errors,
}: Props) {
  const checkDuplicatedEmail = () => {
    setValue('isEmailDuplicated', true);
  };

  return (
    <div className={$['item']}>
      <label htmlFor="email">{errors.email?.message ?? '이메일'}</label>
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

      <span className={$['error-msg']}>
        {!isEmailDuplicated && errors.isEmailDuplicated?.message}
      </span>
    </div>
  );
}
