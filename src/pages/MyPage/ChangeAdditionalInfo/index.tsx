import { ChangeEventHandler, useEffect } from 'react';
import { MOCK_URL } from '@mocks/data';
import { AiFillCamera } from '@react-icons/all-files/ai/AiFillCamera';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DrinkInput from 'src/components/shared/DrinkInput';
import FooterButton from 'src/components/shared/FooterButton';
import { HeightInput } from 'src/components/shared/HeightInput';
import Input from 'src/components/shared/Input';
import InputWithButton from 'src/components/shared/InputWithButton';
import { PageLayout } from 'src/components/shared/Layout';
import { MBTISelect } from 'src/components/shared/MBTISelect';
import PersonalProfileImage from 'src/components/shared/PersonalProfileImage';
import { WeightInput } from 'src/components/shared/WeightInput';
import { MBTIType } from 'src/types/join';
import { readFileAsURL } from 'src/utils';

import $ from './style.module.scss';

type FormData = {
  profileImageURL: string;
  nickName: string;
  isDuplicationChecked: boolean;
  birthYear: number;
  MBTI: MBTIType;
  height: number;
  weight: number;
  drink: number;
};

const ADDITIONAL_INFO_MOCKS = {
  profileImageURL: MOCK_URL,
  nickName: '블루스',
  birthYear: 2000,
  MBTI: 'ISTJ' as const,
  height: 170,
  weight: 55,
  drink: 0,
};

export default function ChangeAdditionalInfo() {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { height: 165, weight: 60, drink: 0 },
  });
  const navigate = useNavigate();

  useEffect(() => {
    const {
      profileImageURL,
      nickName,
      birthYear,
      MBTI,
      height,
      weight,
      drink,
    } = ADDITIONAL_INFO_MOCKS;
    // TODO: 유저 정보를 받아와서 defaultValues로 설정해야 함.
    setValue('profileImageURL', profileImageURL);
    setValue('nickName', nickName);
    setValue('birthYear', birthYear);
    setValue('MBTI', MBTI);
    setValue('height', height);
    setValue('weight', weight);
    setValue('drink', drink);
  }, []);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate('/mypage');
  });

  const setMBTI = (mbti: MBTIType) => setValue('MBTI', mbti);

  const handleProfileImageChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { files },
  }) => {
    if (!files) return;
    const file = files[0];
    readFileAsURL(file, (url) => setValue('profileImageURL', url));
  };

  const setDrinkValue = (drink: number) => setValue('drink', drink);

  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <form className={$.container} onSubmit={onSubmit}>
        <label className={$['profile-image']} htmlFor="profile-image">
          <PersonalProfileImage
            alt="나의 현재 프로필"
            src={watch('profileImageURL')}
            width={100}
            height={100}
          />
          <AiFillCamera className={$['camera-icon']} />
        </label>
        <input
          className={$['hidden-input']}
          type="file"
          id="profile-image"
          onChange={handleProfileImageChange}
        />
        <InputWithButton
          className={$.input}
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
          className={$.input}
          type="number"
          proptype="register"
          labelErrorMessage={errors.birthYear?.message}
          register={register('birthYear')}
          label="태어난 년도"
          placeholder="년도(4자)"
        />
        <MBTISelect
          className={$.input}
          mbti={watch('MBTI')}
          setMBTI={setMBTI}
        />
        <HeightInput
          className={$.input}
          value={watch('height')}
          register={register('height')}
        />
        <WeightInput
          className={$.input}
          value={watch('weight')}
          register={register('weight')}
        />
        <DrinkInput
          className={$.input}
          value={watch('drink')}
          setValue={setDrinkValue}
        />
        <FooterButton text="변경하기" type="submit" />
      </form>
    </PageLayout>
  );
}
