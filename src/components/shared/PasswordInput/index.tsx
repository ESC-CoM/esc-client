import { useState } from 'react';
import { IoEye } from '@react-icons/all-files/io5/IoEye';
import { IoEyeOff } from '@react-icons/all-files/io5/IoEyeOff';
import cx from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';
import Label from 'src/components/shared/Label';

import $ from './style.module.scss';

interface Props {
  className?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}
export default function PasswordInput({
  className,
  register,
  errorMessage,
}: Props) {
  const [isEncrypted, setIsEncrypted] = useState(false);

  const handleEyeButtonClick = () => setIsEncrypted((pre) => !pre);

  return (
    <div className={className}>
      <Label
        textContent="비밀번호"
        fontSize={15}
        htmlFor="password"
        errorMsg={errorMessage}
      />
      <div className={$['input-container']}>
        <input
          className={cx($.input, {
            [$.error]: errorMessage,
          })}
          type={isEncrypted ? 'text' : 'password'}
          id="password"
          placeholder="영문, 숫자 포함 8자 이상"
          {...register}
        />
        <button
          type="button"
          className={$['eye-button']}
          onClick={handleEyeButtonClick}
        >
          {isEncrypted ? <IoEyeOff /> : <IoEye />}
        </button>
      </div>
    </div>
  );
}
