import { useState } from 'react';
import cx from 'classnames';
import $ from './style.module.scss';
import { ViewPasswordButton, ResetFieldButton } from '../../atoms';

interface Props {
  register: () => void;
  resetField: () => void;
  className: string;
  isValueExists: boolean;
}

function PasswordInput({
  register,
  resetField,
  className,
  isValueExists,
}: Props) {
  const [isEncrypted, setIsEncrypted] = useState(true);

  return (
    <div className={cx($.container, className)}>
      <input
        className={$.input}
        placeholder="비밀번호"
        type={isEncrypted ? 'password' : 'text'}
        {...register()}
      />
      {isValueExists && (
        <>
          <ViewPasswordButton
            className={$.view}
            isEncrypted={isEncrypted}
            onClick={() => setIsEncrypted(!isEncrypted)}
          />
          <ResetFieldButton
            className={$.delete}
            ariaLabel="비밀번호 입력 초기화하기"
            onClick={resetField}
          />
        </>
      )}
    </div>
  );
}

export default PasswordInput;
