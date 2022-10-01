import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EmailPasswordYup } from 'src/components/Join/BasicInfo/yup';
import FooterButton from 'src/components/shared/FooterButton';
import InputWithButton from 'src/components/shared/InputWithButton';
import PasswordInput from 'src/components/shared/PasswordInput';
import useStore from 'src/store/useStore';
import { EmailPasswordType } from 'src/types/join';

import { PageLayout } from '../../components/shared/Layout';
import $ from './style.module.scss';

const NEXT_PATH = '/join/more1';

export default function EmailPasswordInputPage() {
  const { setJoinInfo } = useStore();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailPasswordType>({
    resolver: yupResolver(EmailPasswordYup),
  });
  const navigate = useNavigate();

  const onSubmit = (data: EmailPasswordType) => {
    const { email, password } = data;
    setJoinInfo({ email, password });
    navigate(NEXT_PATH);
  };

  const handleDuplicationCheckButton = () =>
    setValue('isDuplicationChecked', true);

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <section className={$.container}>
        <h1>이메일, 비밀번호를 입력해주세요</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWithButton
            proptype="register"
            className={$['input-with-button']}
            register={register('email')}
            onClick={handleDuplicationCheckButton}
            label="이메일"
            buttonText="중복 확인"
            labelErrorMessage={errors.email?.message}
            buttonErrorMessage={errors.isDuplicationChecked?.message}
          />
          <PasswordInput
            label="비밀번호"
            id="password"
            proptype="register"
            className={$.input}
            register={register('password')}
            errorMessage={errors.password?.message}
          />
          <FooterButton text="다음" type="submit" />
        </form>
      </section>
    </PageLayout>
  );
}
