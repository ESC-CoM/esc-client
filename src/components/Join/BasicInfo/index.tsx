import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import JoinSchema from './yup';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';
import cx from 'classnames';
import { useState } from 'react';
import { Term } from '../index';
import { UserSchema } from '../../../types/join';
import { monthList, dayList } from '../../../__mocks__/join';

export default function BasicInfo() {
  const {
    watch,
    register,
    setValue,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: yupResolver(JoinSchema),
  });

  const [
    email,
    phoneNumber,
    authNumber,
    gender,
    isEmailDuplicated,
    isPhoneDuplicated,
    isAuthed,
  ] = watch([
    'email',
    'phoneNumber',
    'authNumber',
    'gender',
    'isEmailDuplicated',
    'isPhoneDuplicated',
    'isAuthed',
  ]);

  const [termsOpen, setTermsOpen] = useState<boolean>(false);
  const [isEncrypted, setIsEncrypted] = useState(false);

  const checkDuplicatedEmail = () => {
    console.log(email);
    setValue('isEmailDuplicated', !isEmailDuplicated);
    setFocus('password');
  };
  const sendPhoneNum = () => {
    console.log(phoneNumber);
    setValue('isPhoneDuplicated', !isPhoneDuplicated);
    setFocus('authNumber');
  };
  const sendAuthNum = () => {
    console.log(authNumber);
    if (isPhoneDuplicated) setValue('isAuthed', !isAuthed);
  };

  // Todo: Modal기능의 useCallback 사용여부 재검토
  const toggleModal = () => {
    setTermsOpen(!termsOpen);
  };

  const onSubmit = (data: UserSchema) => {
    console.log(data);
    if (!isEmailDuplicated || !isPhoneDuplicated || !isAuthed) {
      return;
    }
    if (!termsOpen) setTermsOpen(true);
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>회원님의 정보를 입력해주세요.</h1>

        <div className={style.item}>
          <label htmlFor="email">{errors.email?.message ?? '이메일'}</label>
          <span className={style.required}>*</span>
          <div className={style.row}>
            <input
              className={cx(style.input, {
                [style.error]: errors.email,
              })}
              type="text"
              id="email"
              placeholder="abcd@email.com"
              autoFocus
              {...register('email')}
            />
            <button
              className={style.btn}
              type="button"
              onClick={checkDuplicatedEmail}
            >
              중복확인
            </button>
          </div>
          {errors.isEmailDuplicated &&
            !isEmailDuplicated &&
            errors.isEmailDuplicated?.message}
        </div>

        <div className={style.item}>
          <label htmlFor="password">
            {errors.password?.message ?? '비밀번호'}
          </label>
          <span className={style.required}>*</span>
          <div className={style.row}>
            <input
              className={cx(style.input, {
                [style.error]: errors.password,
              })}
              type={isEncrypted ? 'text' : 'password'}
              id="password"
              placeholder="영문, 숫자 포함 8자 이상"
              {...register('password')}
            />
            <span
              className={style.showicon}
              onClick={() => setIsEncrypted(!isEncrypted)}
            >
              {isEncrypted ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>
        </div>

        <div className={style.item}>
          <label htmlFor="phponeNumber">
            {errors.phoneNumber?.message ?? '휴대폰 번호'}
          </label>
          <span className={style.required}>*</span>
          <div className={style.row}>
            <input
              type="text"
              className={cx(style.input, {
                [style.error]: errors.phoneNumber,
              })}
              placeholder="' - ' 없이 입력해주세요."
              id="phponeNumber"
              {...register('phoneNumber')}
            />
            <button className={style.btn} type="button" onClick={sendPhoneNum}>
              인증번호<br></br>받기
            </button>
          </div>
          {errors.isPhoneDuplicated &&
            !isPhoneDuplicated &&
            errors.isPhoneDuplicated.message}
        </div>

        <div className={style.item}>
          <label htmlFor="authNumber">
            {errors.authNumber?.message ?? '인증번호'}
          </label>
          <span className={style.required}>*</span>
          <div className={style.row}>
            <input
              type="text"
              className={cx(style.input, {
                [style.error]: errors.phoneNumber,
              })}
              id="authNumber"
              {...register('authNumber')}
            />
            <button type="button" className={style.btn} onClick={sendAuthNum}>
              인증하기
            </button>
          </div>
          {errors.isAuthed && !isAuthed && errors.isAuthed.message}
        </div>

        <div className={style.item}>
          <label>{errors.gender?.message ?? '성별'}</label>
          <span className={style.required}>*</span>
          <div className={style.row}>
            <button
              className={cx(style.gender_btn, {
                [style.gender_active]: gender === '남자',
              })}
              onClick={() => setValue('gender', '남자')}
              type="button"
              aria-labelledby="gender"
            >
              남자
            </button>

            <button
              className={cx(style.gender_btn, {
                [style.gender_active]: gender === '여자',
              })}
              onClick={() => setValue('gender', '여자')}
              type="button"
              aria-labelledby="gender"
            >
              여자
            </button>
          </div>
        </div>

        <div className={style.item}>
          <label htmlFor="birthDate">
            {!errors.year && !errors.month && !errors.day
              ? '생년월일'
              : '생년월일을 선택해주세요.'}
          </label>
          <span className={style.required}>*</span>

          <div className={style.row}>
            <input
              type="text"
              className={cx(style.year, {
                [style.error]: errors.year,
              })}
              id="birthDate"
              placeholder="년도(4자)"
              {...register('year')}
            />

            <select
              defaultValue=""
              className={cx(style.col, {
                [style.error]: errors.month,
              })}
              {...register('month')}
            >
              <option disabled value="">
                ---
              </option>
              {monthList.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <span className={style.drop}>
              <IoMdArrowDropdown />
            </span>

            <select
              defaultValue=""
              className={cx(style.col, {
                [style.error]: errors.day,
              })}
              {...register('day')}
            >
              <option disabled value="">
                ---
              </option>
              {dayList.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            <span className={style.drop}>
              <IoMdArrowDropdown />
            </span>
          </div>
        </div>

        <div className={style.footer}>
          <button
            className={style.next_btn}
            type="submit"
            aria-labelledby="next"
          >
            다음
          </button>
        </div>
      </form>
      {termsOpen && <Term toggleModal={toggleModal} onState={termsOpen} />}
    </>
  );
}
