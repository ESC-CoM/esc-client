import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import JoinSchema from './yup';
import cx from 'classnames';

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
  const yearList = Array.from({ length: 10 }, (_, index) => 1995 + index + '');
  const monthList = Array.from({ length: 12 }, (_, index) => 1 + index + '');
  const dayList = Array.from({ length: 31 }, (_, index) => 1 + index + '');
  const onSubmit = (data: UserSchema) => console.log(data);

  return (
    <div className={style.join}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>회원님의 정보를 입력해주세요.</h1>
        <div className={style.form_item}>
          <label>{errors.email ? errors.email?.message : '이메일'}</label>
          <input
            // className={style.form_item_input}
            type="text"
            placeholder="abc@email.com"
            {...register('email')}
          />
          <button className={style.form_item_btn}>중복확인</button>
        </div>

        <div className={style.form_item}>
          <label>
            {errors.password ? errors.password?.message : '비밀번호'}
          </label>
          <input
            className={style.form_item_input}
            type="password"
            placeholder="영문, 숫자 포함 8자 이상"
            {...register('password')}
          />
        </div>

        <div className={style.form_item}>
          <label>
            {errors.passwordConfirm
              ? errors.passwordConfirm?.message
              : '비밀번호 확인'}
          </label>
          <input
            className={style.form_item_input}
            type="password"
            {...register('passwordConfirm')}
          />
        </div>

        <div className={style.form_item}>
          <label>{errors.sex ? errors.sex?.message : '성별'}</label>
          <button
            className={cx(style.sex_btn, {
              [style.active]: getValues('sex') === '남자',
            })}
            onClick={() => {
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
        <div className={style.form_item}>
          <label>
            {errors.year || errors.month || errors.day // TODO: 기본 값으로도 required가 만족되는 이슈 해결해야함
              ? errors.year?.message
              : '생년월일'}
          </label>
          <select {...register('year')}>
            {yearList.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select {...register('month')}>
            {monthList.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select {...register('day')}>
            {dayList.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <input className={style.next_btn} type="submit" value="다음" />
      </form>
    </div>
  );
}
