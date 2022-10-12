import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/shared/Button';
import FooterButton from 'src/components/shared/FooterButton';
import { PageLayout } from 'src/components/shared/Layout';
import PersonalProfileImage from 'src/components/shared/PersonalProfileImage';

import $ from './style.module.scss';

const NEXT_PATH = '/join/welcome';

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
    navigate(NEXT_PATH);
  };

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <section className={$.container}>
        <h1>프로필 사진을 설정해주세요</h1>
        <PersonalProfileImage src={profileImg} width={120} height={120} />
        <label htmlFor="input-file" className={$['file-label']}>
          <input
            className={$['input-file']}
            type="file"
            ref={fileInputRef}
            onChange={addImage}
            accept="image/*"
            id="input-file"
          />
          <Button
            width="100px"
            contentText="사진 업로드"
            onClick={handleClickButton}
          />
        </label>
        <FooterButton
          text="다음"
          type="submit"
          onClick={() => handleOnSubmit()}
        />
      </section>
    </PageLayout>
  );
}
