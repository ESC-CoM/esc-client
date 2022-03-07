import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import JoinSchema from './yup';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import cx from 'classnames';
import { useState } from 'react';

interface UserSchema {
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: number;
  authNumber: number;
  sex: string;
  year: string;
  month: string;
  day: string;
}

export default function BasicJoin() {
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: yupResolver(JoinSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const monthList = Array.from({ length: 12 }, (_, index) => 1 + index + '월');
  const dayList = Array.from({ length: 31 }, (_, index) => 1 + index + '일');

  const onAuthSending = (phoneNumber: number) => {
    console.log(phoneNumber);
  };
  const onAuthEntering = (authNumber: number) => {
    console.log(authNumber);
  };

  const onSubmit = (data: UserSchema) => console.log(data);

  return (
    <div className={style.join}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>회원님의 정보를 입력해주세요.</h1>
        <div className={style.item}>
          <label htmlFor="email">
            {errors.email ? errors.email?.message : '이메일'}
          </label>
          <div className={style.row}>
            <input
              className={cx(style.input, {
                [style.error]: errors.email,
              })}
              type="text"
              id="email"
              placeholder="abc@email.com"
              {...register('email')}
            />
            <button className={style.btn}>중복확인</button>
          </div>
        </div>

        <div className={style.item}>
          <label htmlFor="password">
            {errors.password ? errors.password?.message : '비밀번호'}
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
          <label htmlFor="passwordConfirm">
            {errors.passwordConfirm
              ? errors.passwordConfirm?.message
              : '비밀번호 확인'}
          </label>
          <div className={style.row}>
            <input
              className={cx(style.input_password, {
                [style.error]: errors.passwordConfirm,
              })}
              type={showPassword ? 'text' : 'password'}
              id="passwordConfirm"
              placeholder="영문, 숫자 포함 8자 이상"
              {...register('passwordConfirm')}
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
            {errors.phoneNumber ? errors.phoneNumber?.message : '휴대폰 번호'}
          </label>
          <div className={style.row}>
            <input
              type="text"
              className={style.input}
              placeholder="01011112222"
              id="phponeNumber"
              {...register('phoneNumber')}
            />
            <button
              className={style.btn}
              type="button"
              onClick={() => {
                onAuthSending(getValues('phoneNumber'));
              }}
            >
              인증번호 받기
            </button>
          </div>
        </div>
        <div className={style.item}>
          <label htmlFor="authNumber">
            {errors.authNumber ? errors.authNumber?.message : '인증번호'}
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
                onAuthEntering(getValues('authNumber'));
              }}
            >
              인증하기
            </button>
          </div>
        </div>

        <div className={style.item}>
          <label>{errors.sex ? errors.sex?.message : '성별'}</label>
          <div className={style.row}>
            <button
              className={cx(style.sex_btn, {
                [style.sex_active]: getValues('sex') === '남자',
              })}
              onClick={() => {
                setValue('sex', '남자');
              }}
              aria-labelledby="sex"
            >
              남자
            </button>
            <button
              className={cx(style.sex_btn, {
                [style.sex_active]: getValues('sex') === '여자',
              })}
              onClick={() => {
                setValue('sex', '여자');
              }}
              aria-labelledby="sex"
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
              className={cx(style.month, {
                [style.error]: getValues('month') === '---',
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
            <select
              defaultValue=""
              className={cx(style.day, {
                [style.error]: getValues('day') === '---',
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
          </div>
        </div>

        <div className={style.item}>
          <label htmlFor="">키, 몸무게</label>
          <div className={style.row}>
            {/* Todo : cm, kg 보여주도록 변경할 것 */}
            <input type="text" className={style.input} />
            <span className={style.unit}>cm</span>
            <input type="text" className={style.input} />
            <span className={style.unit}>kg</span>
          </div>
        </div>

        <div className={style.item}>
          <label htmlFor="">MBTI</label>
          <div className={style.row}>
            <input type="text" className={style.input} placeholder="예) ISFP" />
          </div>
        </div>

        <input className={style.next_btn} type="submit" value="다음" />
      </form>
    </div>
  );
}
