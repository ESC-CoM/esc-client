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
  type: string;
  htmlFor?: string; // TODO: optional
  labelErrorMessage?: string;
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

export default function Input({
  className,
  label,
  placeholder,
  type,
  htmlFor,
  labelErrorMessage,
  bottomErrorMessage,
  ...props
}: Props) {
  return (
    <div className={cx($['input-wrapper'], className)}>
      <Label
        textContent={labelErrorMessage || label}
        htmlFor={htmlFor}
        fontSize={15}
      />
      <input
        className={cx($.input, {
          [$.error]: labelErrorMessage || bottomErrorMessage,
        })}
        id={htmlFor}
        {...{ placeholder, type }}
        {...(props.proptype === 'register' && props.register)}
        {...(props.proptype === 'controlled' && {
          value: props.value,
          onChange: props.onChange,
        })}
      />
      {bottomErrorMessage && <ErrorMessage errorText={bottomErrorMessage} />}
    </div>
  );
}
