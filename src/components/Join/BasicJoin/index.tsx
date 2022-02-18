import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import JoinSchema from './yup';

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
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: yupResolver(JoinSchema),
  });

  const yearList = Array.from({ length: 10 }, (_, index) => 1995 + index);
  const monthList = Array.from({ length: 12 }, (_, index) => 1 + index);
  const dayList = Array.from({ length: 31 }, (_, index) => 1 + index);
  const onSubmit = (data: UserSchema) => console.log(data);

  return (
    <div>
      <h1>회원님의 정보를 입력해주세요.</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">이메일</label>
          <p>{errors.email?.message}</p>
          <input
            type="text"
            placeholder="abc@email.com"
            {...register('email')}
          />
          <button>중복확인</button>
        </div>

        <div>
          <label htmlFor="">비밀번호</label>
          <p>{errors.password?.message}</p>
          <input
            type="password"
            placeholder="영문, 숫자 포함 8자 이상"
            {...register('password')}
          />
        </div>

        <div>
          <label htmlFor="">비밀번호 확인</label>
          <p>{errors.passwordConfirm?.message}</p>
          <input type="password" {...register('passwordConfirm')} />
        </div>

        <div>
          <label htmlFor="">성별</label>
          <button
            onClick={() => {
              setValue('sex', '남');
            }}
          >
            남
          </button>
          <button
            onClick={() => {
              setValue('sex', '여');
            }}
          >
            여
          </button>
        </div>
        <div>
          <label htmlFor="">생년월일</label>
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
        <input type="submit" />
      </form>
    </div>
  );
}
