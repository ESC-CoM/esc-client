import { ChangeEventHandler } from 'react';
import cx from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';

import ErrorMessage from '../ErrorMessage';
import $ from './style.module.scss';

type DefaultProps = {
  className?: string;
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
  labelErrorMessage,
  bottomErrorMessage,
  ...props
}: Props) {
  return (
    <div className={className}>
      <label className={$.label} htmlFor="auth-number">
        {labelErrorMessage ?? '인증번호'}
      </label>
      <input
        className={cx($.input, {
          [$.error]: labelErrorMessage || bottomErrorMessage,
        })}
        type="text"
        id="auth-number"
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
