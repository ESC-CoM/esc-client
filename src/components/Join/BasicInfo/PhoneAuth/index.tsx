import { ChangeEventHandler, useState } from 'react';
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetFocus,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import InputWithButton from 'src/components/shared/InputWithButton';
import InputWithTimer from 'src/components/shared/InputWithTimer';
import { usePhoneQuery } from 'src/hooks/api/join';
import useStore from 'src/store/useStore';
import { PhoneAuthType } from 'src/types/join';
import { insertAutoHyphen } from 'src/utils';

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
  const { setJoinInfo } = useStore();
  const phoneNumber = watch('phoneNumber');
  const [btnClickcount, setBtnClickCount] = useState(0);
  const [phone, setPhone] = useState('');
  const { data } = usePhoneQuery(phone, btnClickcount);

  const sendPhoneNum = () => {
    if (phoneNumber.length === 13) {
      setPhone(phoneNumber);
      setJoinInfo({ phoneNumber });
      setValue('isReceivedAuthNum', true);
      setFocus('authNumber');
      setBtnClickCount((prev) => prev + 1);
    }
  };

  const handlePhoneNumberChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    insertAutoHyphen({
      phoneNumber: value,
      setPhoneNumber: (number) => setValue('phoneNumber', number),
    });
  };

  return (
    <section className={$['phone-auth']}>
      <h1>휴대폰 인증을 해주세요</h1>
      <InputWithButton
        type="text"
        proptype="controlled"
        className={$['input-with-button']}
        onClick={sendPhoneNum}
        onChange={handlePhoneNumberChange}
        value={phoneNumber}
        labelErrorMessage={errors.phoneNumber?.message}
        buttonErrorMessage={errors.isReceivedAuthNum?.message}
        label="휴대폰 번호"
        buttonText={btnClickcount > 0 ? '다시 받기' : '인증번호 받기'}
      />
      <InputWithTimer
        type="number"
        className={$['auth-number-input']}
        proptype="register"
        register={register('authNumber')}
        label="인증번호"
        labelErrorMessage={errors.authNumber?.message}
        bottomErrorMessage={errors.isAuthed?.message}
      />
    </section>
  );
}
