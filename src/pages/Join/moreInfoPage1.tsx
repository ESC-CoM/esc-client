import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import MoreJoinSchema from 'src/components/Join/MoreInfo/yup';
import FooterButton from 'src/components/shared/FooterButton';
import Input from 'src/components/shared/Input';
import InputWithButton from 'src/components/shared/InputWithButton';
import useStore from 'src/store/useStore';
import { More1Type } from 'src/types/join';

import { GenderInput, MbtiInput } from '../../components/Join';
import { PageLayout } from '../../components/shared/Layout';
import $ from './style.module.scss';

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
            proptype="register"
            className={$.input}
            register={register('nickName')}
            onClick={handleDuplicationButtonClick}
            labelErrorMessage={errors.nickName?.message}
            buttonErrorMessage={errors.isDuplicationChecked?.message}
            label="별명"
            buttonText="중복 확인"
            placeholder="최소 2자, 최대 10자"
          />
          <GenderInput
            value={gender}
            setValue={setValue}
            errors={errors.gender}
          />
          <Input
            className={$.input}
            proptype="register"
            placeholder="년도(4자)"
            labelErrorMessage={errors.year?.message}
            register={register('year')}
            label="태어난 년도"
          />
          <MbtiInput mbti={mbti} setValue={setValue} errors={errors.mbti} />
          <FooterButton text="다음" type="submit" />
        </form>
      </section>
    </PageLayout>
  );
}
