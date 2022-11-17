import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PhoneYup } from 'src/components/Join/BasicInfo/yup';
import FooterButton from 'src/components/shared/FooterButton';
import { useAuthNumQuery } from 'src/hooks/api/join';
import useStore from 'src/store/useStore';
import { PhoneAuthType } from 'src/types/join';
import { toastError } from 'src/utils/toaster';

import { PhoneAuth } from '../../components/Join';
import { PageLayout } from '../../components/shared/Layout';

const NEXT_PATH = '/join/email';

export default function PhoneAuthPage() {
  const { userInfo } = useStore();
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
  const [authNumber, isPhoneDuplicated, isAuthed] = watch([
    'authNumber',
    'isReceivedAuthNum',
    'isAuthed',
  ]);

  const [authNum, setAuthNum] = useState(0);
  const { isSuccess } = useAuthNumQuery(authNum);

  const sendAuthNum = () => {
    if (isPhoneDuplicated) {
      setAuthNum(+authNumber);
      setValue('isAuthed', true);
    }
  };

  const onSubmit = (data: PhoneAuthType) => {
    const { phoneNumber, authNumber } = data;

    if (phoneNumber !== userInfo.phoneNumber) {
      const message = '휴대폰 인증이 필요합니다.';
      toastError({ message });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(NEXT_PATH);
    }
  }, [isSuccess]);

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
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
          type={isAuthed ? 'submit' : 'button'}
          onClick={sendAuthNum}
        />
      </form>
    </PageLayout>
  );
}
