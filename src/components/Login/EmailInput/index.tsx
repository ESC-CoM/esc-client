import cx from 'classnames';
import { Input, ResetFieldButton } from '../../atoms';
import styles from './style.module.scss';

interface Props {
  register: () => void;
  resetField: () => void;
  className?: string;
  isValueExists: boolean;
}

function EmailInput({ register, resetField, className, isValueExists }: Props) {
  return (
    <div className={cx(styles.container, className)}>
      <Input
        className=""
        placeholder="이메일"
        type="text"
        register={register}
      />
      {isValueExists && (
        <ResetFieldButton
          className={styles.delete}
          ariaLabel={'이메일 입력 초기화하기'}
          onClick={resetField}
        />
      )}
    </div>
  );
}

export default EmailInput;
