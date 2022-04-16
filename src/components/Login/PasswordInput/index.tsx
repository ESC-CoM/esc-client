import { useState } from 'react';
import cx from 'classnames';
import styles from './style.module.scss';
import { Input, ViewPasswordButton, ResetFieldButton } from '../../atoms';

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
    <div className={cx(styles.container, className)}>
      <Input
        className=""
        placeholder="비밀번호"
        type={isEncrypted ? 'password' : 'text'}
        register={register}
      />
      {isValueExists && (
        <>
          <ViewPasswordButton
            className={styles.view}
            isEncrypted={isEncrypted}
            onClick={() => setIsEncrypted(!isEncrypted)}
          />
          <ResetFieldButton
            className={styles.delete}
            ariaLabel="비밀번호 입력 초기화하기"
            onClick={resetField}
          />
        </>
      )}
    </div>
  );
}

export default PasswordInput;
