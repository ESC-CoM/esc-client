import { ChangeEventHandler } from 'react';
import cx from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';

import ErrorMessage from '../ErrorMessage';
import Label from '../Label';
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

export default function Input({
  className,
  label,
  placeholder,
  labelErrorMessage,
  bottomErrorMessage,
  ...props
}: Props) {
  return (
    <div className={className}>
      <Label
        textContent={labelErrorMessage || label}
        htmlFor="auth-number"
        fontSize={15}
      />
      <input
        className={cx($.input, {
          [$.error]: labelErrorMessage || bottomErrorMessage,
        })}
        type="text"
        id="auth-number"
        placeholder={placeholder}
        {...(props.proptype === 'register' && props.register())}
        {...(props.proptype === 'controlled' && {
          value: props.value,
          onChange: props.onChange,
        })}
      />
      {bottomErrorMessage && <ErrorMessage errorText={bottomErrorMessage} />}
    </div>
  );
}
