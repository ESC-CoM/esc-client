import { useState } from 'react';
import { ChangeEventHandler } from 'react';
import { IoEye } from '@react-icons/all-files/io5/IoEye';
import { IoEyeOff } from '@react-icons/all-files/io5/IoEyeOff';
import cx from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';
import Label from 'src/components/shared/Label';

import $ from './style.module.scss';

type DefaultProps = {
  className?: string;
  placeholder?: string;
  errorMessage?: string;
  label: string;
};

type RegisterProps = {
  proptype: 'register';
  register: UseFormRegisterReturn;
} & DefaultProps;

type ControlledProps = {
  proptype: 'controlled';
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & DefaultProps;

type Props = RegisterProps | ControlledProps;
export default function PasswordInput({
  className,
  label,
  errorMessage,
  placeholder,
  ...props
}: Props) {
  const [isEncrypted, setIsEncrypted] = useState(false);

  const handleEyeButtonClick = () => setIsEncrypted((pre) => !pre);

  return (
    <div className={className}>
      <Label
        textContent={label}
        fontSize={15}
        htmlFor="password"
        errorMsg={errorMessage}
      />
      <div className={$['input-container']}>
        <input
          className={cx($.input, {
            [$.error]: errorMessage,
          })}
          placeholder={placeholder}
          type={isEncrypted ? 'text' : 'password'}
          id="password"
          {...(props.proptype === 'register' && props.register)}
          {...(props.proptype === 'controlled' && props)}
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
