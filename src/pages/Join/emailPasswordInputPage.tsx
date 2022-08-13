import $ from './style.module.scss';
import { PageLayout } from '../../components/Layout';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useStore from 'src/store/useStore';
import { yupResolver } from '@hookform/resolvers/yup';
import { EmailInput, PasswordInput, NextButton } from '../../components/Join';
import { EmailPasswordYup } from 'src/components/Join/BasicInfo/yup';
import { EmailPasswordType } from 'src/types/join';

const NEXT_PATH = '/join/more1';

export default function EmailPasswordInputPage() {
  const { setJoinInfo } = useStore();
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailPasswordType>({
    resolver: yupResolver(EmailPasswordYup),
  });
  const navigate = useNavigate();
  const [email, isEmailDuplicated, password] = watch([
    'email',
    'isEmailDuplicated',
    'password',
  ]);

  const onSubmit = (data: EmailPasswordType) => {
    const emailPasswordInfo = { email, password };
    setJoinInfo(emailPasswordInfo);
    navigate(NEXT_PATH);
  };

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <section className={$.container}>
        <h1>이메일, 비밀번호를 입력해주세요</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <EmailInput
            isEmailDuplicated={isEmailDuplicated}
            register={register('email')}
            setValue={setValue}
            errors={errors}
          />
          <PasswordInput register={register('password')} errors={errors} />
          <NextButton text={'다음'} />
        </form>
      </section>
    </PageLayout>
  );
}
