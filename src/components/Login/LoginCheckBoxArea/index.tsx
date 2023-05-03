import { UseFormSetValue } from 'react-hook-form';
import cx from 'classnames';

import { CheckBox, Label } from '../atoms';
import { Inputs } from '../Login';
import styles from './style.module.scss';

interface Props {
  isSaveId: boolean;
  isAutoLogin: boolean;
  className?: string;
  setValue: UseFormSetValue<Inputs>;
}

function LoginCheckBoxArea({
  isSaveId,
  isAutoLogin,
  setValue,
  className,
}: Props) {
  return (
    <div className={cx(styles.container, className)}>
      <Label
        className=""
        textContent="아이디 저장"
        htmlFor="save-id"
        fontSize={17}
      />
      <CheckBox
        isChecked={isSaveId}
        className={styles.checkBox}
        id="save-id"
        ariaLabelForChecked="아이디 저장하지 않기"
        ariaLabelForUnchecked="아이디 저장하기"
        onClickForChecked={() => setValue('isSaveId', false)}
        onClickForUnchecked={() => setValue('isSaveId', true)}
      />
      <Label
        className={styles.rightLabel}
        textContent="자동 로그인"
        htmlFor="auto-login"
        fontSize={17}
      />
      <CheckBox
        isChecked={isAutoLogin}
        className={styles.checkBox}
        id="auto-login"
        ariaLabelForChecked="자동 로그인 쓰기"
        ariaLabelForUnchecked="자동 로그인 켜기"
        onClickForChecked={() => setValue('isAutoLogin', false)}
        onClickForUnchecked={() => setValue('isAutoLogin', true)}
      />
    </div>
  );
}

export default LoginCheckBoxArea;
