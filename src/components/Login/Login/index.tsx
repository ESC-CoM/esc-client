import { LoginTitle, MainButton } from '../../atoms';
import styles from './style.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './yup';
import EmailInput from '../EmailInput';
import ErrorMessageBox from '../ErrorMessageBox';
import Header from '../Header';
import LoginCheckBoxArea from '../LoginCheckBoxArea';
import LoginToolBox from '../LoginToolBox';
import PasswordInput from '../PasswordInput';
import SocialLoginBox from '../SocialLoginBox';

export interface Inputs {
  email: string;
  password: string;
  isSaveId: boolean;
  isAutoLogin: boolean;
}

function Login() {
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
      <Header />
      <main className={styles.main}>
        <LoginTitle className={styles.title} />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <EmailInput
            register={() => register('email')}
            resetField={() => resetField('email')}
            className={styles.email}
            isValueExists={watch('email') ? true : false}
          />
          <PasswordInput
            register={() => register('password')}
            resetField={() => resetField('password')}
            className={styles.password}
            isValueExists={watch('password') ? true : false}
          />
          <ErrorMessageBox errors={errors} className={styles.error} />
          <LoginCheckBoxArea
            isSaveId={isSaveId}
            isAutoLogin={isAutoLogin}
            setValue={setValue}
          />
          <MainButton
            className={styles.submit}
            buttonType="submit"
            ariaLabel="로그인 버튼"
            textContent="로그인"
            width={490}
            height={45}
            fontSize={26}
          />
        </form>
        <LoginToolBox className={styles.links} />
        <SocialLoginBox className={styles.socialLogin} />
      </main>
    </>
  );
}

export default Login;
