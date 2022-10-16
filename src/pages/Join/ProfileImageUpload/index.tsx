import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterButton from 'src/components/shared/FooterButton';
import ImageUploadButton from 'src/components/shared/ImageUploadButton';
import { PageLayout } from 'src/components/shared/Layout';
import PersonalProfileImage from 'src/components/shared/PersonalProfileImage';
import { useUploadProfileImage } from 'src/hooks/api/join';
import useStore from 'src/store/useStore';
import getFormData from 'src/utils/getFormData';
import { toastError } from 'src/utils/toaster';

import $ from './style.module.scss';

const NEXT_PATH = '/join/student-card';

export default function ProfileImageUploadPage() {
  const { userInfo, setJoinInfo } = useStore();
  const { profileImage } = userInfo;
  const { mutate } = useUploadProfileImage();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onUploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;

    if (files) {
      const formData = getFormData(files);
      mutate(formData, {
        onSuccess: ({ data }) => {
          setJoinInfo({ profileImage: data });
        },
      });
    }
  };

  const handleClickButton = () => {
    fileInputRef?.current?.click();
  };

  const handleOnSubmit = () => {
    if (profileImage) navigate(NEXT_PATH);
    else toastError({ message: '프로필 사진을 업로드해주세요' });
  };

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <section className={$.container}>
        <h1>프로필 사진을 설정해주세요</h1>
        <PersonalProfileImage
          alt=""
          src={profileImage}
          width={120}
          height={120}
        />
        <ImageUploadButton
          className={$['upload-button']}
          inputRef={fileInputRef}
          buttonText="사진 업로드"
          onChange={onUploadImg}
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
