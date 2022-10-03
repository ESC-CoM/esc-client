import { useForm } from 'react-hook-form';
import FooterButton from 'src/components/shared/FooterButton';
import { HeightInput } from 'src/components/shared/HeightInput';
import Input from 'src/components/shared/Input';
import InputWithButton from 'src/components/shared/InputWithButton';
import { PageLayout } from 'src/components/shared/Layout';
import { MBTISelect } from 'src/components/shared/MBTISelect';
import { WeightInput } from 'src/components/shared/WeightInput';
import MBTI_LIST from 'src/constants/MBTI';

import $ from './style.module.scss';

type FormData = {
  nickName: string;
  isDuplicationChecked: boolean;
  birthYear: number;
  MBTI: typeof MBTI_LIST[number];
  height: number;
  weight: number;
  drink: number;
};

export default function ChangeAdditionalInfo() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { height: 165, weight: 60, drink: 0 },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  const setMBTI = (mbti: string) => console.log(mbti);

  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <form className={$.container} onSubmit={onSubmit}>
        <InputWithButton
          type="text"
          proptype="register"
          register={register('nickName')}
          onClick={() => console.log('clicked')}
          labelErrorMessage={errors.nickName?.message}
          buttonErrorMessage={errors.isDuplicationChecked?.message}
          label="별명"
          buttonText="중복 확인"
          placeholder="최소 2자, 최대 10자"
        />
        <Input
          type="number"
          proptype="register"
          labelErrorMessage={errors.birthYear?.message}
          register={register('birthYear')}
          label="태어난 년도"
          placeholder="년도(4자)"
        />
        <MBTISelect mbti="" setMBTI={setMBTI} />
        <HeightInput value={watch('height')} register={register('height')} />
        <WeightInput value={watch('weight')} register={register('weight')} />
        <FooterButton text="변경하기" type="submit" />
      </form>
    </PageLayout>
  );
}
