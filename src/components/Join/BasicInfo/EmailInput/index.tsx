import $ from './style.module.scss';
import cx from 'classnames';
import {
  UseFormWatch,
  UseFormRegister,
  UseFormSetValue,
  FieldErrors,
} from 'react-hook-form';
import { EmailPassword } from 'src/pages/Join/emailPasswordInputPage';

interface Props {
  watch: UseFormWatch<EmailPassword>;
  register: UseFormRegister<EmailPassword>;
  setValue: UseFormSetValue<EmailPassword>;
  errors: FieldErrors<EmailPassword>;
}

export default function EmailInput({
  watch,
  register,
  setValue,
  errors,
}: Props) {
  const isEmailDuplicated = watch('isEmailDuplicated', false);
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
          {...register('email')}
        />
        <button
          className={$['btn']}
          type="button"
          onClick={checkDuplicatedEmail}
        >
          중복확인
        </button>
      </div>
      {!isEmailDuplicated && errors.isEmailDuplicated?.message}
    </div>
  );
}
