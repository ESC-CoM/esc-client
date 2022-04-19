import cx from 'classnames';
import { FieldError } from 'react-hook-form';
import { ErrorMessage } from '../../atoms';
import styles from './style.module.scss';

interface Props {
  className: string;
  errors: {
    email?: FieldError;
    password?: FieldError;
    isSaveId?: FieldError;
    isAutoLogin?: FieldError;
  };
}

function ErrorMessageBox({ className, errors }: Props) {
  return (
    <div className={cx(styles.container, className)}>
      {errors.email && <ErrorMessage errorText={errors.email.message} />}
      {!errors.email && errors.password && (
        <ErrorMessage errorText={errors.password.message} />
      )}
    </div>
  );
}

export default ErrorMessageBox;
