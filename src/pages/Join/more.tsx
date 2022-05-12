import './style.module.scss';
import { PageLayout } from '../../components/Layout';
import GenderInput from '../../components/Join/MoreInfo/GenderInput';
import BirthInput from '../../components/Join/MoreInfo/BirthInput';
import MbtiInput from '../../components/Join/MoreInfo//MbtiInput';
import NextButton from 'src/components/Join/NextButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MoreSchema } from 'src/types/join';
import MoreJoinSchema from 'src/components/Join/MoreInfo/yup';
import useStore from 'src/store/useStore';
import { useNavigate } from 'react-router-dom';

const NEXT_PATH = '/';

function MoreInfoPage() {
  const { setBasicInfo, basicInfo } = useStore();
  console.log(basicInfo);
  const navigate = useNavigate();
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<MoreSchema>({
    resolver: yupResolver(MoreJoinSchema),
  });
  const onSubmit = (data: MoreSchema) => {
    setBasicInfo(watch());
    navigate(NEXT_PATH);
    //   if (!termsOpen) {
    //     setTermsOpen(true);
    //   }
  };

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <section>
        <h1>추가 정보</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <GenderInput
            watch={watch}
            setValue={setValue}
            errors={errors.gender}
          />
          <BirthInput register={register} errors={errors} />
          <MbtiInput register={register} errors={errors.mbti} />
          <NextButton text={'다음'} />
        </form>
      </section>
    </PageLayout>
  );
}

export default MoreInfoPage;
