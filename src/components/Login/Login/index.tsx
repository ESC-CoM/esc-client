import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from 'src/components/shared/Input';
import { useLogin } from 'src/hooks/api/auth';

import { LoginTitle } from '../atoms';
import ErrorMessageBox from '../ErrorMessageBox';
import LoginCheckBoxArea from '../LoginCheckBoxArea';
import LoginToolBox from '../LoginToolBox';
import $ from './style.module.scss';
import schema from './yup';

export interface Inputs {
  email: string;
  password: string;
  isSaveId: boolean;
  isAutoLogin: boolean;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const { mutate } = useLogin();

  const [isSaveId, isAutoLogin] = watch(['isSaveId', 'isAutoLogin'], {
    isSaveId: false,
    isAutoLogin: false,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  return (
    <>
      <div className={$.container}>
        <LoginTitle className={$.title} />
        <form className={$.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            className={$.email}
            proptype="register"
            label="이메일"
            placeholder="sample@email.com"
            register={register('email')}
          />
          <Input
            type="password"
            className={$.password}
            proptype="register"
            label="비밀번호"
            register={register('password')}
          />
          <ErrorMessageBox errors={errors} className={$.error} />
          <LoginCheckBoxArea
            className={$.checkbox}
            isSaveId={isSaveId}
            isAutoLogin={isAutoLogin}
            setValue={setValue}
          />
          <button
            className={$.submit}
            type="submit"
            aria-label="로그인 버튼"
            onClick={() => handleSubmit(onSubmit)}
          >
            로그인
          </button>
        </form>
        <LoginToolBox className={$.links} />
        {/* <SocialLoginBox className={$.socialLogin} /> */}
      </div>
    </>
  );
}
