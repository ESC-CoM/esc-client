import $ from './style.module.scss';
import cx from 'classnames';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';
import { EmailPasswordType } from 'src/types/join';
import { Label } from 'src/components/Join';

interface Props {
  register: UseFormRegisterReturn;
  errors: FieldErrors<EmailPasswordType>;
}

export default function PasswordInput({ register, errors }: Props) {
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <div className={$['item']}>
      <Label
        label={'비밀번호'}
        htmlFor={'password'}
        errorMsg={errors.password?.message}
      />

      <div className={$['row']}>
        <input
          className={cx($['input'], {
            [$['error']]: errors.password?.message,
          })}
          type={isEncrypted ? 'text' : 'password'}
          id="password"
          placeholder="영문, 숫자 포함 8자 이상"
          {...register}
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
