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
  sex: string;
  year: string;
  month: string;
  day: string;
}

export default function BasicInfo() {
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
  const yearList = Array.from({ length: 10 }, (_, index) => 1995 + index + '');
  const monthList = Array.from({ length: 12 }, (_, index) => 1 + index + '');
  const dayList = Array.from({ length: 31 }, (_, index) => 1 + index + '');
  const onSubmit = (data: UserSchema) => console.log(data);

  return (
    <div className={style.join}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>회원님의 정보를 입력해주세요.</h1>
        <div className={style.item}>
          <label>{errors.email ? errors.email?.message : '이메일'}</label>
          <div>
            <input
              className={style.input}
              type="text"
              placeholder="abc@email.com"
              {...register('email')}
            />
            <button className={style.btn}>중복확인</button>
          </div>
        </div>

        <div className={style.item}>
          <label>
            {errors.password ? errors.password?.message : '비밀번호'}
          </label>
          <div>
            <input
              className={style.input_password}
              type={showPassword ? 'text' : 'password'}
              placeholder="영문, 숫자 포함 8자 이상"
              {...register('password')}
            />
            <div
              className={style.showicon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </div>
          </div>
        </div>

        <div className={style.item}>
          <label>
            {errors.passwordConfirm
              ? errors.passwordConfirm?.message
              : '비밀번호 확인'}
          </label>
          <div>
            <input
              className={style.input_password}
              type="password"
              {...register('passwordConfirm')}
            />
          </div>
        </div>

        <div className={style.item}>
          <label>{errors.sex ? errors.sex?.message : '성별'}</label>
          <div>
            <button
              className={cx(style.sex_btn, {
                [style.active]: getValues('sex') === '남자',
              })}
              onClick={(e) => {
                setValue('sex', '남자');
              }}
            >
              남자
            </button>
            <button
              className={cx(style.sex_btn, {
                [style.active]: getValues('sex') === '여자',
              })}
              onClick={() => {
                setValue('sex', '여자');
              }}
            >
              여자
            </button>
          </div>
        </div>
        <div className={style.item}>
          <label>
            {errors.year || errors.month || errors.day // TODO: 기본 값으로도 required가 만족되는 이슈 해결해야함
              ? errors.year?.message
              : '생년월일'}
          </label>
          <div>
            <select className={style.select_year} {...register('year')}>
              {yearList.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <label className={style.label}>년</label>

            <select className={style.select_month} {...register('month')}>
              {monthList.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <label className={style.label}>월</label>

            <select className={style.select_day} {...register('day')}>
              {dayList.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <label className={style.label}>일</label>
          </div>
        </div>
        <input className={style.next_btn} type="submit" value="다음" />
      </form>
    </div>
  );
}
