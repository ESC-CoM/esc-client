import './style.module.scss';
import { PageLayout } from '../../components/Layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import EmailInput from '../../components/Join/BasicInfo/EmailInput';
import PasswordInput from '../../components/Join/BasicInfo/PasswordInput';
import BaiscJoinSchema from 'src/components/Join/BasicInfo/yup';
import NextButton from 'src/components/Join/NextButton';
import { useNavigate } from 'react-router-dom';
import useStore from 'src/store/useStore';

export type EmailPassword = {
  email: string;
  isEmailDuplicated: boolean;
  password: string;
};

const NEXT_PATH = '/join/more';

export default function EmailPasswordInputPage() {
  const { setBasicInfo } = useStore();
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailPassword>({
    resolver: yupResolver(BaiscJoinSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: EmailPassword) => {
    const { isEmailDuplicated } = data;
    if (isEmailDuplicated && !errors.password) {
      setBasicInfo({ email: watch('email'), password: watch('password') });
      navigate(NEXT_PATH);
    }
  };

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <section>
        <h1>이메일, 비밀번호를 입력해주세요</h1>
        <form onSubmit={handleSubmit(() => onSubmit(watch()))}>
          <EmailInput
            watch={watch}
            register={register}
            setValue={setValue}
            errors={errors}
          />
          <PasswordInput register={register} errors={errors} />
          <NextButton text={'다음'} onClick={() => onSubmit(watch())} />
        </form>
      </section>
    </PageLayout>
  );
}
