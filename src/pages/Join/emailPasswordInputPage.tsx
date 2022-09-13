import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EmailPasswordYup } from 'src/components/Join/BasicInfo/yup';
import useStore from 'src/store/useStore';
import { EmailPasswordType } from 'src/types/join';

import { EmailInput, NextButton, PasswordInput } from '../../components/Join';
import { PageLayout } from '../../components/shared/Layout';
import $ from './style.module.scss';

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
  const [email, isDuplicationChecked, password] = watch([
    'email',
    'isDuplicationChecked',
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
            isDuplicationChecked={isDuplicationChecked}
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
