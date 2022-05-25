import { Header, LoginTitle } from '../../atoms';
import $ from './style.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './yup';
import EmailInput from '../EmailInput';
import ErrorMessageBox from '../ErrorMessageBox';
import LoginCheckBoxArea from '../LoginCheckBoxArea';
import LoginToolBox from '../LoginToolBox';
import PasswordInput from '../PasswordInput';
import KakaoLogin from '../KakaoLogin';

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
    resetField,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const [isSaveId, isAutoLogin] = watch(['isSaveId', 'isAutoLogin'], {
    isSaveId: false,
    isAutoLogin: false,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className={$.container}>
        <Header />
        <LoginTitle className={$.title} />
        <form className={$.form} onSubmit={handleSubmit(onSubmit)}>
          <EmailInput
            className={$.email}
            register={() => register('email')}
            resetField={() => resetField('email')}
            isValueExists={watch('email') ? true : false}
          />
          <PasswordInput
            register={() => register('password')}
            resetField={() => resetField('password')}
            className={$.password}
            isValueExists={watch('password') ? true : false}
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
        <KakaoLogin className={$['kakao-login']} />
      </div>
    </>
  );
}
