import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EmailPasswordYup } from 'src/components/Join/BasicInfo/yup';
import FooterButton from 'src/components/shared/FooterButton';
import InputWithButton from 'src/components/shared/InputWithButton';
import PasswordInput from 'src/components/shared/PasswordInput';
import { useEmailDuplicateQuery } from 'src/hooks/api/join';
import useStore from 'src/store/useStore';
import { EmailPasswordType } from 'src/types/join';

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
  const [email, setEmail] = useState('');

  const onSubmit = (data: EmailPasswordType) => {
    if (data.email !== email) {
      return alert('이메일 중복확인을 해주세요.'); // TODO: 토스트 메세지로 변경
    }

    setJoinInfo(data);
    navigate(NEXT_PATH);
  };

  const { isSuccess, isError } = useEmailDuplicateQuery(email);

  const handleDuplicationCheckButton = () => {
    setEmail(watch('email'));
  };

  useEffect(() => {
    if (isSuccess) {
      setValue('isDuplicationChecked', true);
      setJoinInfo({ email: watch('email') });
    }
    if (isError) {
      setValue('isDuplicationChecked', false);
    }
  }, [isSuccess, isError]);

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <section className={$.container}>
        <h1>이메일, 비밀번호를 입력해주세요</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWithButton
            type="email"
            proptype="register"
            className={$['input-with-button']}
            register={register('email')}
            onClick={handleDuplicationCheckButton}
            label="이메일"
            buttonText="중복 확인"
            labelErrorMessage={errors.email?.message}
            buttonErrorMessage={errors.isDuplicationChecked?.message}
          />
          {isSuccess && <span className={$.msg}>사용 가능한 이메일입니다</span>}
          {isError && (
            <span className={$.msg}>이미 사용 중인 이메일입니다</span>
          )}

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
