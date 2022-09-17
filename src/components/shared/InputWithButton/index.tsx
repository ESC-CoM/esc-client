import { ChangeEventHandler } from 'react';
import cx from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';
import ErrorMessage from 'src/components/shared/ErrorMessage';
import Label from 'src/components/shared/Label';

import $ from './style.module.scss';

interface Props {
  className?: string;
  register?: UseFormRegisterReturn;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  onClick: () => void;
  labelText: string;
  buttonText: string;
  labelErrorMessage?: string;
  buttonErrorMessage?: string;
  placeholder?: string;
}

export default function InputWithButton({
  className,
  register,
  onClick,
  onChange,
  value,
  labelErrorMessage,
  buttonErrorMessage,
  labelText,
  buttonText,
  placeholder,
}: Props) {
  const handleClickButton = () => onClick();

  return (
    <div className={className}>
      <Label
        textContent={labelText}
        fontSize={15}
        htmlFor="inputWithButton"
        errorMsg={labelErrorMessage}
      />
      <div className={$['row']}>
        <input
          className={cx($['input'], {
            [$['error']]: labelErrorMessage,
          })}
          type="text"
          id="inputWithButton"
          autoFocus
          {...register}
          {...{ value, onChange, placeholder }}
        />
        <button className={$['btn']} type="button" onClick={handleClickButton}>
          {buttonText}
        </button>
      </div>
      {buttonErrorMessage && <ErrorMessage errorText={buttonErrorMessage} />}
    </div>
  );
}
