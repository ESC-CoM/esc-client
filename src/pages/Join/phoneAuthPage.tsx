import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PhoneYup } from 'src/components/Join/BasicInfo/yup';
import FooterButton from 'src/components/shared/FooterButton';
import useStore from 'src/store/useStore';
import { PhoneAuthType } from 'src/types/join';

import { PhoneAuth } from '../../components/Join';
import { PageLayout } from '../../components/shared/Layout';

const NEXT_PATH = '/join/email';

export default function PhoneAuthPage() {
  const { userInfo, setJoinInfo } = useStore();
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

    if (phoneNumber !== userInfo.phoneNumber) {
      return alert('휴대폰 인증이 필요합니다'); // TODO: 토스트 메세지
    }
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
