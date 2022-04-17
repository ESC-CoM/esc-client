import { Header, LoginTitle } from '../../atoms';
import styles from './style.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './yup';
import EmailInput from '../EmailInput';
import ErrorMessageBox from '../ErrorMessageBox';
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
      <div className={styles.container}>
        <Header />
        <LoginTitle className={styles.title} />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <EmailInput
            className={styles.email}
            register={() => register('email')}
            resetField={() => resetField('email')}
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
            className={styles.checkbox}
            isSaveId={isSaveId}
            isAutoLogin={isAutoLogin}
            setValue={setValue}
          />
          <button
            className={styles.submit}
            type="submit"
            aria-label="로그인 버튼"
            onClick={() => handleSubmit(onSubmit)}
          >
            로그인
          </button>
        </form>
        <LoginToolBox className={styles.links} />
        <SocialLoginBox className={styles.socialLogin} />
      </div>
    </>
  );
}
