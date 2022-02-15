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

function Basic() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: yupResolver(JoinSchema),
  });
  const onSubmit = (data: UserSchema) => console.log(data);

  return (
    <div>
      <h1>회원님의 정보를 입력해주세요.</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">이메일</label>
        <p>{errors.email?.message}</p>
        <input type="text" {...register('email')} />

        <label htmlFor="">비밀번호</label>
        <p>{errors.password?.message}</p>
        <input type="password" {...register('password')} />

        <label htmlFor="">비밀번호 확인</label>
        <p>{errors.passwordConfirm?.message}</p>
        <input type="password" {...register('passwordConfirm')} />

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

        <label htmlFor="">생년월일</label>
        <select {...register('year')}>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2000">2001</option>
          <option value="2000">2002</option>
          <option value="2000">2003</option>
          <option value="2000">2004</option>
        </select>
        <select {...register('month')}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select {...register('day')}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Basic;
