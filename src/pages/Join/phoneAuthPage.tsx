import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PhoneYup } from 'src/components/Join/BasicInfo/yup';
import FooterButton from 'src/components/shared/FooterButton';
import { usePhoneStore } from 'src/store/usePhoneStore';
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
  // const { isSuccess } = useAuthNumQuery(authNum);

  const sendAuthNum = () => {
    if (isPhoneDuplicated) {
      setAuthNum(+authNumber);
      setValue('isAuthed', true);
    }
  };

  const { authCode } = usePhoneStore();

  const onSubmit = (data: PhoneAuthType) => {
    const { phoneNumber, authNumber } = data;

    if (phoneNumber !== userInfo.phoneNumber) {
      const message = '휴대폰 인증이 필요합니다.';
      toastError({ message });
    }
  };

  useEffect(() => {
    console.log(authCode && +authCode === authNum);
    if (authCode && +authCode === authNum) {
      // TODO: 임시로 지정, 추후에 백엔드에서 수정하면 제거할 것
      navigate(NEXT_PATH);
    }
  }, [authCode, authNum]);

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
