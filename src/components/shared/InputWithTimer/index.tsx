import { ChangeEventHandler } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import cx from 'classnames';

import Input from '../Input';
import AuthTimer from './AuthTimer';
import $ from './style.module.scss';

type DefaultProps = {
  className?: string;
  label: string;
  placeholder?: string;
  labelErrorMessage?: string;
  type: string;
  bottomErrorMessage?: string;
};

type RegisterProps = {
  proptype: 'register';
  register: UseFormRegisterReturn;
} & DefaultProps;

type ControlledProps = {
  proptype: 'controlled';
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & DefaultProps;

type Props = RegisterProps | ControlledProps;

export default function InputWithTimer({
  className,
  label,
  placeholder,
  type,
  labelErrorMessage,
  bottomErrorMessage,
  ...props
}: Props) {
  return (
    <div className={cx($['auth-number-input-container'], className)}>
      <Input
        {...{
          type,
          label,
          placeholder,
          labelErrorMessage,
          bottomErrorMessage,
          ...props,
        }}
      />
      <AuthTimer className={$.timer} />
    </div>
  );
}
