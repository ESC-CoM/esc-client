import { PageLayout } from '../../components/Layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PhoneAuth from '../../components/Join/BasicInfo/PhoneAuth';
import BaiscJoinSchema from 'src/components/Join/BasicInfo/yup';
import { PhoneAuthType } from 'src/types/join';
import { useNavigate } from 'react-router-dom';

const NEXT_PATH = '/join/basic/email';

export default function PhoneAuthPage() {
  const {
    watch,
    register,
    setValue,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneAuthType>({
    resolver: yupResolver(BaiscJoinSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data: PhoneAuthType) => {
    const { isAuthed } = data;
    if (isAuthed) navigate(NEXT_PATH);
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
          onClick={onSubmit}
        />
      </form>
    </PageLayout>
  );
}
