import { PageLayout } from '../../components/shared/Layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PhoneAuth } from '../../components/Join';
import { PhoneYup } from 'src/components/Join/BasicInfo/yup';
import { useNavigate } from 'react-router-dom';
import { PhoneAuthType } from 'src/types/join';
import useStore from 'src/store/useStore';
import FooterButton from 'src/components/shared/FooterButton';

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
    defaultValues: { phoneNumber: '', isAuthed: false },
  });
  const navigate = useNavigate();
  const [isPhoneDuplicated, isAuthed] = watch([
    'isReceivedAuthNum',
    'isAuthed',
  ]);

  const sendAuthNum = () => {
    if (isPhoneDuplicated) {
      setValue('isAuthed', true);
    }
  };
  const onSubmit = (data: PhoneAuthType) => {
    const { phoneNumber, authNumber } = data;
    setJoinInfo({ phoneNumber, authNumber });
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
        <FooterButton
          text={isAuthed ? '다음' : '인증하기'}
          type="submit"
          onClick={sendAuthNum}
        />
      </form>
    </PageLayout>
  );
}
