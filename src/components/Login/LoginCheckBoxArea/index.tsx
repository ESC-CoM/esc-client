import cx from 'classnames';
import { UseFormSetValue } from 'react-hook-form';
import { Label, CheckBox } from '../../atoms';
import { Inputs } from '../Login';
import $ from './style.module.scss';

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
    <div className={cx($.container, className)}>
      <Label
        className=""
        textContent="아이디 저장"
        htmlFor="save-id"
        fontSize={22}
      />
      <CheckBox
        isChecked={isSaveId}
        className={$.checkBox}
        id="save-id"
        ariaLabelForChecked="아이디 저장하지 않기"
        ariaLabelForUnchecked="아이디 저장하기"
        onClickForChecked={() => setValue('isSaveId', false)}
        onClickForUnchecked={() => setValue('isSaveId', true)}
      />
      <Label
        className={$.rightLabel}
        textContent="자동 로그인"
        htmlFor="auto-login"
        fontSize={22}
      />
      <CheckBox
        isChecked={isAutoLogin}
        className={$.checkBox}
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
