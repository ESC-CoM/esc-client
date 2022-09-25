import { ChangeEventHandler } from 'react';
import cx from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';

import Input from '../Input';
import AuthTimer from './AuthTimer';
import $ from './style.module.scss';

type DefaultProps = {
  className?: string;
  label: string;
  placeholder?: string;
  labelErrorMessage?: string;
  bottomErrorMessage?: string;
};

type RegisterProps = {
  proptype: 'register';
  register: () => UseFormRegisterReturn;
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
  labelErrorMessage,
  bottomErrorMessage,
  ...props
}: Props) {
  return (
    <div className={cx($['auth-number-input-container'], className)}>
      {props.proptype === 'register' ? (
        <Input
          proptype="register"
          register={props.register}
          {...{ label, labelErrorMessage, bottomErrorMessage, placeholder }}
        />
      ) : (
        <Input
          proptype="controlled"
          value={props.value}
          onChange={props.onChange}
          {...{ label, labelErrorMessage, bottomErrorMessage, placeholder }}
        />
      )}
      <AuthTimer className={$.timer} />
    </div>
  );
}
