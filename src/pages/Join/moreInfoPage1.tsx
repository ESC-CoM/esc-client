import './style.module.scss';
import { PageLayout } from '../../components/Layout';
import useStore from 'src/store/useStore';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  GenderInput,
  BirthInput,
  MbtiInput,
  NextButton,
} from '../../components/Join';
import { More1Type } from 'src/types/join';
import MoreJoinSchema from 'src/components/Join/MoreInfo/yup';

const NEXT_PATH = '/join/more2';

export default function MoreInfoPage1() {
  const { setJoinInfo } = useStore();

  const navigate = useNavigate();
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<More1Type>({
    resolver: yupResolver(MoreJoinSchema),
  });
  const [gender, year, month, day, mbti] = watch([
    'gender',
    'year',
    'month',
    'day',
    'mbti',
  ]);
  const onSubmit = (data: More1Type) => {
    const more1Info = { gender, year, month, day, mbti };
    setJoinInfo(more1Info);
    navigate(NEXT_PATH);
  };

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <section>
        <h1>추가 정보</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <GenderInput
            value={gender}
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
