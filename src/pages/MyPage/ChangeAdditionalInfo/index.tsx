import { ChangeEventHandler, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MOCK_URL } from 'src/__mocks__/mypageMocks';
import FooterButton from 'src/components/shared/FooterButton';
import { HeightInput } from 'src/components/shared/HeightInput';
import Input from 'src/components/shared/Input';
import InputWithButton from 'src/components/shared/InputWithButton';
import { PageLayout } from 'src/components/shared/Layout';
import { MBTISelect } from 'src/components/shared/MBTISelect';
import PersonalProfileImage from 'src/components/shared/PersonalProfileImage';
import { WeightInput } from 'src/components/shared/WeightInput';
import { MBTIType } from 'src/types/join';

import $ from './style.module.scss';
type FormData = {
  nickName: string;
  isDuplicationChecked: boolean;
  birthYear: number;
  MBTI: MBTIType;
  height: number;
  weight: number;
  drink: number;
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
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => setProfileImage(MOCK_URL), []);

  const onSubmit = handleSubmit((data) => console.log(data));

  const setMBTI = (mbti: MBTIType) => setValue('MBTI', mbti);

  const handleProfileImageChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { files },
  }) => {
    if (!files) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = ({ target }) => {
      if (!target?.result) return;
      setProfileImage(target.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <form className={$.container} onSubmit={onSubmit}>
        <label className={$['profile-image']} htmlFor="profile-image">
          <PersonalProfileImage
            userName="프로필"
            src={profileImage}
            width={100}
            height={100}
          />
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
        <FooterButton text="변경하기" type="submit" />
      </form>
    </PageLayout>
  );
}
