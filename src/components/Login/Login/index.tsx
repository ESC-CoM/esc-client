import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Logo, LogoOnlyIcon } from 'src/components/shared/Icon';
import { useLogin } from 'src/hooks/api/auth';

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

  const handleClickSubmit = () => handleSubmit(onSubmit);

  return (
    <>
      <div className={$.container}>
        <div className={$['logo-container']}>
          <Logo width={250} />
        </div>
        <form className={$.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={$['email-input']}
            type="text"
            placeholder="이메일"
            {...register('email')}
          />
          <input
            className={$['password-input']}
            type="text"
            placeholder="비밀번호"
            {...register('password')}
          />
          <button
            className={$['submit-button']}
            type="submit"
            aria-label="로그인 버튼"
            onClick={handleClickSubmit}
          >
            <LogoOnlyIcon className={$['button-logo']} width={17} />
            로그인
          </button>
          <ErrorMessageBox errors={errors} className={$.error} />
          <LoginCheckBoxArea
            className={$.checkbox}
            isSaveId={isSaveId}
            isAutoLogin={isAutoLogin}
            setValue={setValue}
          />
        </form>
        <LoginToolBox className={$.links} />
        {/* <SocialLoginBox className={$.socialLogin} /> */}
      </div>
    </>
  );
}
