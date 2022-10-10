import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterButton from 'src/components/shared/FooterButton';
import ImageUploadButton from 'src/components/shared/ImageUploadButton';
import { PageLayout } from 'src/components/shared/Layout';
import PersonalProfileImage from 'src/components/shared/PersonalProfileImage';
import { toastError } from 'src/utils/toaster';

import $ from './style.module.scss';

const NEXT_PATH = '/join/student-card';

export default function ProfileImageUploadPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImg, setProfileImg] = useState('');

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImageList = e.target.files;
    console.log(selectedImageList);
    setProfileImg(
      'https://t1.daumcdn.net/news/202009/22/xportsnews/20200922111443330clnu.jpg'
    );
  };

  const handleClickButton = () => {
    fileInputRef?.current?.click();
  };

  const handleOnSubmit = () => {
    if (profileImg) navigate(NEXT_PATH);
    else toastError({ message: '프로필 사진을 업로드해주세요' });
  };

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <section className={$.container}>
        <h1>프로필 사진을 설정해주세요</h1>
        <PersonalProfileImage
          alt=""
          src={profileImg}
          width={120}
          height={120}
        />
        <ImageUploadButton
          inputRef={fileInputRef}
          buttonText="사진 업로드"
          onChange={addImage}
          onClick={handleClickButton}
        />
        <FooterButton
          text="다음"
          type="submit"
          onClick={() => handleOnSubmit()}
        />
      </section>
    </PageLayout>
  );
}
