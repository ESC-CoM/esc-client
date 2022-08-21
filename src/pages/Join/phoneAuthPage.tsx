import { PageLayout } from '../../components/Layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NextButton, PhoneAuth } from '../../components/Join';
import { PhoneYup } from 'src/components/Join/BasicInfo/yup';
import { useNavigate } from 'react-router-dom';
import { PhoneAuthType } from 'src/types/join';
import useStore from 'src/store/useStore';

const NEXT_PATH = '/join/email';

export default function PhoneAuthPage() {
  const { setJoinInfo } = useStore();
  const {
    watch,
    register,
    setValue,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneAuthType>({
    resolver: yupResolver(PhoneYup),
  });
  const navigate = useNavigate();
  const [phoneNumber, isPhoneDuplicated, authNumber, isAuthed] = watch([
    'phoneNumber',
    'isPhoneDuplicated',
    'authNumber',
    'isAuthed',
  ]);

  const sendAuthNum = () => {
    if (isPhoneDuplicated) {
      setValue('isAuthed', true);
    }
  };
  const onSubmit = (data: PhoneAuthType) => {
    const PhoneInfo = { phoneNumber, authNumber };
    setJoinInfo(PhoneInfo);
    navigate(NEXT_PATH);
  };

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PhoneAuth
          watch={watch}
          register={register}
          setValue={setValue}
          setFocus={setFocus}
          errors={errors}
        />
        <NextButton
          text={isAuthed ? '다음' : '인증하기'}
          onClick={sendAuthNum}
        />
      </form>
    </PageLayout>
  );
}
