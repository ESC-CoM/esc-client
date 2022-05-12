import $ from './style.module.scss';
import cx from 'classnames';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { EmailPassword } from 'src/pages/Join/emailPasswordInputPage';

interface Props {
  register: UseFormRegister<EmailPassword>;
  errors: FieldErrors<EmailPassword>;
}

export default function PasswordInput({ register, errors }: Props) {
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <div className={$['item']}>
      <label htmlFor="password">{errors.password?.message ?? '비밀번호'}</label>

      <div className={$['row']}>
        <input
          className={cx($['input'], {
            [$['error']]: errors.password,
          })}
          type={isEncrypted ? 'text' : 'password'}
          id="password"
          placeholder="영문, 숫자 포함 8자 이상"
          {...register('password')}
        />
        <span
          className={$['encrypt-icon']}
          onClick={() => setIsEncrypted(!isEncrypted)}
        >
          {isEncrypted ? <IoEyeOff /> : <IoEye />}
        </span>
      </div>
    </div>
  );
}
