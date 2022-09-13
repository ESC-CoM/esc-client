import { useState } from 'react';
import { useEffect } from 'react';
import cx from 'classnames';
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetFocus,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import ErrorMessage from 'src/components/shared/ErrorMessage';
import Label from 'src/components/shared/Label';
import { PhoneAuthType } from 'src/types/join';
import { insertAutoHyphen } from 'src/utils';

import AuthTimer from './authTimer';
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
  const [phoneNumber, isReceivedAuthNum, isAuthed] = watch(
    ['phoneNumber', 'isReceivedAuthNum', 'isAuthed'],
    { phoneNumber: '', isReceivedAuthNum: false, isAuthed: false }
  );
  const [sendCount, setSendCount] = useState(0);

  const sendPhoneNum = () => {
    setSendCount(sendCount + 1);
    setValue('isReceivedAuthNum', true);

    setFocus('authNumber');
  };

  const handleNumber = (e: React.FormEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b -]{0,13}$/;
    const currValue = e.currentTarget.value;
    if (regex.test(currValue)) {
      setValue('phoneNumber', currValue);
    }
  };

  useEffect(() => {
    insertAutoHyphen({ phoneNumber, setValue });
  }, [phoneNumber]);

  return (
    <section className={$['phone-auth']}>
      <h1>휴대폰 인증을 해주세요</h1>

      <div className={$['item']}>
        <Label
          textContent="휴대폰 번호"
          fontSize={15}
          htmlFor="phoneNumber"
          errorMsg={errors.phoneNumber?.message}
        />

        <div className={$['row']}>
          <input
            type="text"
            className={cx($['input'], {
              [$['error']]: errors.phoneNumber,
            })}
            id="phoneNumber"
            {...register('phoneNumber')}
            value={phoneNumber}
            onChange={handleNumber}
          />
          <button className={$['btn']} type="button" onClick={sendPhoneNum}>
            {sendCount > 0 ? '다시 받기' : '인증번호 받기'}
          </button>
        </div>

        {!isReceivedAuthNum && (
          <ErrorMessage errorText={errors.isReceivedAuthNum?.message} />
        )}
      </div>

      <div className={$['item']}>
        <label htmlFor="authNumber">
          {errors.authNumber?.message ?? '인증번호'}
        </label>
        <div className={$['row']}>
          <input
            type="text"
            className={cx($['input'], {
              [$['error']]: errors.phoneNumber,
            })}
            id="authNumber"
            {...register('authNumber')}
          />
          <span className={$['timer']}>
            <AuthTimer />
          </span>
        </div>
        {!isAuthed && <ErrorMessage errorText={errors.isAuthed?.message} />}
      </div>
    </section>
  );
}
