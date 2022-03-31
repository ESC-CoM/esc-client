import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import JoinSchema from './yup';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';
import cx from 'classnames';
import { useState, useCallback } from 'react';
import { Term } from '../index';
import { UserInfos } from '../../../types/join';

export default function BasicInfo() {
  const {
    watch,
    register,
    setValue,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfos>({
    resolver: yupResolver(JoinSchema),
  });

  const [termsOpen, setTermsOpen] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const monthList = Array.from({ length: 12 }, (_, index) => 1 + index + '월');
  const dayList = Array.from({ length: 31 }, (_, index) => 1 + index + '일');

  const isEmailDuplicated = (email: string) => {
    console.log(email);
    setFocus('password');
  };
  const sendPhoneNum = (phoneNumber: number) => {
    console.log(phoneNumber);
    setFocus('authNumber');
  };
  const sendAuthNum = (authNumber: number) => {
    console.log(authNumber);
  };

  const onClickToggleModal = useCallback(() => {
    setTermsOpen(!termsOpen);
  }, [termsOpen]);

  const onSubmit = (data: UserInfos) => {
    console.log(data);
    setTermsOpen(true);
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>회원님의 정보를 입력해주세요.</h1>
        <div className={style.item}>
          <label htmlFor="email">{errors.email?.message ?? '이메일'}</label>
          <div className={style.row}>
            <input
              className={cx(style.input, {
                [style.error]: errors.email,
              })}
              type="text"
              id="email"
              placeholder="abc@email.com"
              autoFocus
              {...register('email')}
            />
            <button
              className={style.btn}
              type="button"
              onClick={() => isEmailDuplicated(watch('email'))}
            >
              중복확인
            </button>
          </div>
        </div>

        <div className={style.item}>
          <label htmlFor="password">
            {errors.password?.message ?? '비밀번호'}
          </label>
          <div className={style.row}>
            <input
              className={cx(style.input_password, {
                [style.error]: errors.password,
              })}
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="영문, 숫자 포함 8자 이상"
              {...register('password')}
            />
            <span
              className={style.showicon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>
        </div>

        <div className={style.item}>
          <label htmlFor="phponeNumber">
            {errors.phoneNumber?.message ?? '휴대폰 번호'}
          </label>
          <div className={style.row}>
            <input
              type="text"
              className={style.input}
              placeholder="' - ' 없이 입력"
              id="phponeNumber"
              {...register('phoneNumber')}
            />
            <button
              className={style.btn}
              type="button"
              onClick={() => {
                sendPhoneNum(watch('phoneNumber'));
              }}
            >
              인증번호<br></br>받기
            </button>
          </div>
        </div>
        <div className={style.item}>
          <label htmlFor="authNumber">
            {errors.authNumber?.message ?? '인증번호'}
          </label>
          <div className={style.row}>
            <input
              type="text"
              className={style.input}
              placeholder="인증번호를 입력하세요."
              id="authNumber"
              {...register('authNumber')}
            />
            <button
              type="button"
              className={style.btn}
              onClick={() => {
                sendAuthNum(watch('authNumber'));
              }}
            >
              인증하기
            </button>
          </div>
        </div>

        <div className={style.item}>
          <label>{errors.gender?.message ?? '성별'}</label>
          <div className={style.row}>
            <button
              className={cx(style.gender_btn, {
                [style.gender_active]: watch('gender') === '남자',
              })}
              onClick={() => {
                setValue('gender', '남자');
              }}
              type="button"
              aria-labelledby="gender"
            >
              남자
            </button>
            <button
              className={cx(style.gender_btn, {
                [style.gender_active]: watch('gender') === '여자',
              })}
              onClick={() => {
                setValue('gender', '여자');
              }}
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
          <div className={style.row}>
            <input
              type="text"
              className={cx(style.year, {
                [style.error]: errors.year,
              })}
              id="birthDate"
              placeholder="년(4자)"
              {...register('year')}
            />
            <select
              defaultValue=""
              className={cx(style.col, {
                [style.error]: watch('month') === '---',
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
                [style.error]: watch('day') === '---',
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

        <button className={style.next_btn} type="submit" aria-labelledby="next">
          다음
        </button>
      </form>
      {termsOpen && (
        <Term onClickToggleModal={onClickToggleModal} onState={termsOpen} />
      )}
    </>
  );
}
