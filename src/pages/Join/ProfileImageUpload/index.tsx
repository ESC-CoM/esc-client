import React, { useRef, useState } from 'react';
import Button from 'src/components/shared/Button';
import { PageLayout } from 'src/components/shared/Layout';
import PersonalProfileImage from 'src/components/shared/PersonalProfileImage';

import $ from './style.module.scss';

export default function ProfileImageUploadPage() {
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

  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <section className={$.container}>
        <PersonalProfileImage
          alt=""
          src={profileImg}
          width={120}
          height={120}
        />
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
            contentText="이미지 첨부"
            onClick={handleClickButton}
          />
        </label>
      </section>
    </PageLayout>
  );
}
