import { ChangeEventHandler } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import ErrorMessage from 'src/components/shared/ErrorMessage';

import Input from '../Input';
import $ from './style.module.scss';

type DefaultProps = {
  className?: string;
  label: string;
  buttonText: string;
  labelErrorMessage?: string;
  buttonErrorMessage?: string;
  placeholder?: string;
  onClick: () => void;
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

export default function InputWithButton({
  className,
  onClick,
  labelErrorMessage,
  buttonErrorMessage,
  label,
  buttonText,
  placeholder,
  ...props
}: Props) {
  const handleClickButton = () => onClick();

  return (
    <div className={className}>
      <div className={$.row}>
        <Input {...{ label, placeholder, labelErrorMessage, ...props }} />
        <button className={$.btn} type="button" onClick={handleClickButton}>
          {buttonText}
        </button>
      </div>
      {buttonErrorMessage && <ErrorMessage errorText={buttonErrorMessage} />}
    </div>
  );
}
