import { useState } from 'react';
import cx from 'classnames';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Label from 'src/components/shared/Label';
import { EmailPasswordType } from 'src/types/join';

import $ from './style.module.scss';

interface Props {
  register: UseFormRegisterReturn;
  errors: FieldErrors<EmailPasswordType>;
}

export default function PasswordInput({ register, errors }: Props) {
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <div className={$['item']}>
      <Label
        textContent="비밀번호"
        fontSize={15}
        htmlFor="password"
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
