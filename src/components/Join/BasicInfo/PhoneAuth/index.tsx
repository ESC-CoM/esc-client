import { ChangeEventHandler, useState } from 'react';
import { useEffect } from 'react';
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetFocus,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import Input from 'src/components/shared/Input';
import InputWithButton from 'src/components/shared/InputWithButton';
import { PhoneAuthType } from 'src/types/join';
import { insertAutoHyphen } from 'src/utils';

import AuthTimer from '../AuthTimer';
import $ from './style.module.scss';

interface Props {
  watch: UseFormWatch<PhoneAuthType>;
  register: UseFormRegister<PhoneAuthType>;
  setValue: UseFormSetValue<PhoneAuthType>;
  setFocus: UseFormSetFocus<PhoneAuthType>;
  errors: FieldErrors<PhoneAuthType>;
}

export default function PhoneAuth({
  watch,
  register,
  setValue,
  setFocus,
  errors,
}: Props) {
  const phoneNumber = watch('phoneNumber');
  const [sendCount, setSendCount] = useState(0);

  const sendPhoneNum = () => {
    setSendCount(sendCount + 1);
    setValue('isReceivedAuthNum', true);

    setFocus('authNumber');
    console.log('clicked');
  };

  const handlePhoneNumberChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(value)) {
      setValue('phoneNumber', value);
    }
  };

  useEffect(() => {
    if (phoneNumber) {
      insertAutoHyphen({ phoneNumber, setValue });
    }
  }, [phoneNumber]);

  return (
    <section className={$['phone-auth']}>
      <h1>휴대폰 인증을 해주세요</h1>
      <InputWithButton
        className={$['input-with-button']}
        onClick={sendPhoneNum}
        onChange={handlePhoneNumberChange}
        value={phoneNumber}
        labelErrorMessage={errors.phoneNumber?.message}
        buttonErrorMessage={errors.isReceivedAuthNum?.message}
        labelText="휴대폰 번호"
        buttonText={sendCount > 0 ? '다시 받기' : '인증번호 받기'}
      />
      <div className={$['auth-number-input-container']}>
        <Input
          className={$['auth-number-input']}
          label="인증번호"
          proptype="register"
          register={() => register('authNumber')}
          labelErrorMessage={errors.authNumber?.message}
          bottomErrorMessage={errors.isAuthed?.message}
        />
        <AuthTimer className={$.timer} />
      </div>
    </section>
  );
}
