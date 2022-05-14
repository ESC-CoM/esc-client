import $ from './style.module.scss';
import cx from 'classnames';
import {
  UseFormWatch,
  UseFormRegister,
  UseFormSetValue,
  UseFormSetFocus,
  FieldErrors,
} from 'react-hook-form';
import useStore from 'src/store/useStore';
import { NextButton } from '../../index';
import { useState } from 'react';
import AuthTimer from './authTimer';
import { useEffect } from 'react';
import { PhoneAuthType } from 'src/types/join';

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
  const [phoneNumber, isPhoneDuplicated, isAuthed] = watch(
    ['phoneNumber', 'isPhoneDuplicated', 'isAuthed'],
    { phoneNumber: '', isPhoneDuplicated: false, isAuthed: false }
  );
  const [sendCount, setSendCount] = useState(0);

  const sendPhoneNum = () => {
    setSendCount(sendCount + 1);
    setValue('isPhoneDuplicated', true);

    setFocus('authNumber');
  };

  const sendAuthNum = () => {
    if (isPhoneDuplicated) {
      setValue('isAuthed', true);
    }
  };

  const handleNumber = (e: React.FormEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b -]{0,13}$/;
    const currValue = e.currentTarget.value;
    if (regex.test(currValue)) {
      setValue('phoneNumber', currValue);
    }
  };

  useEffect(() => {
    if (phoneNumber.length === 4) {
      setValue(
        'phoneNumber',
        phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{1})/, '$1-$2')
      );
      return;
    }
    if (phoneNumber.length === 10) {
      setValue(
        'phoneNumber',
        phoneNumber
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{2})/, '$1-$2-$3')
      );
      return;
    }
    if (phoneNumber.length === 13) {
      setValue(
        'phoneNumber',
        phoneNumber
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      );
      return;
    }
  }, [phoneNumber]);

  return (
    <section>
      <h1>휴대폰 인증을 해주세요</h1>

      <div className={$['item']}>
        <label htmlFor="phponeNumber">
          {errors.phoneNumber?.message ?? '휴대폰 번호'}
        </label>
        <div className={$['row']}>
          <input
            type="text"
            className={cx($['input'], {
              [$['error']]: errors.phoneNumber,
            })}
            id="phponeNumber"
            {...register('phoneNumber')}
            value={phoneNumber}
            onChange={handleNumber}
          />
          <button className={$['btn']} type="button" onClick={sendPhoneNum}>
            {sendCount > 0 ? '다시 받기' : '인증번호 받기'}
          </button>
        </div>
        {!isPhoneDuplicated && errors.isPhoneDuplicated?.message}
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

        {!isAuthed && errors.isAuthed?.message}
      </div>
      {/* <NextButton text={'인증하기'} onClick={sendAuthNum} /> */}
    </section>
  );
}
