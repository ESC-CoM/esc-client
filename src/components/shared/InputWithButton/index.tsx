import $ from './style.module.scss';
import cx from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';
import Label from 'src/components/shared/Label';
import ErrorMessage from 'src/components/shared/ErrorMessage';
import { ChangeEventHandler } from 'react';

interface Props {
  className?: string;
  register: UseFormRegisterReturn;
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
            [$['error']]: !!labelErrorMessage,
          })}
          type="text"
          id="inputWithButton"
          autoFocus
          placeholder={placeholder}
          {...register}
          {...(onChange ?? { onChange })}
        />
        <button className={$['btn']} type="button" onClick={handleClickButton}>
          {buttonText}
        </button>
      </div>
      {buttonErrorMessage && <ErrorMessage errorText={buttonErrorMessage} />}
    </div>
  );
}
