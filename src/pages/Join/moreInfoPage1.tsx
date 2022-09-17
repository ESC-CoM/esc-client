import $ from './style.module.scss';
import { PageLayout } from '../../components/shared/Layout';
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
import InputWithButton from 'src/components/shared/InputWithButton';

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
  const [nickName, gender, year, mbti] = watch([
    'nickName',
    'gender',
    'year',
    'mbti',
  ]);
  const onSubmit = (data: More1Type) => {
    const more1Info = { nickName, gender, year, mbti };
    setJoinInfo(more1Info);
    navigate(NEXT_PATH);
  };

  const handleDuplicationButtonClick = () =>
    setValue('isDuplicationChecked', true);

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <section className={$.container}>
        <h1>추가 정보</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWithButton
            className={$['input-with-button']}
            register={register('nickName')}
            onClick={handleDuplicationButtonClick}
            labelErrorMessage={errors.nickName?.message}
            buttonErrorMessage={errors.isDuplicationChecked?.message}
            labelText="별명"
            buttonText="중복 확인"
            placeholder="최소 2자, 최대 10자"
          />
          <GenderInput
            value={gender}
            setValue={setValue}
            errors={errors.gender}
          />
          <BirthInput register={register} errorMessage={errors.year?.message} />
          <MbtiInput mbti={mbti} setValue={setValue} errors={errors.mbti} />
          <NextButton text={'다음'} />
        </form>
      </section>
    </PageLayout>
  );
}
