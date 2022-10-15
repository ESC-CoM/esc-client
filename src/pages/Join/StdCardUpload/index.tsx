import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterButton from 'src/components/shared/FooterButton';
import StdCard from 'src/components/shared/Icon/StdCard';
import ImageUploadButton from 'src/components/shared/ImageUploadButton';
import { PageLayout } from 'src/components/shared/Layout';
import ParagraphList from 'src/components/shared/ParagraphList';
import SquareImage from 'src/components/shared/SquareImage';
import { useUploadStdCard } from 'src/hooks/api/join';
import useStore from 'src/store/useStore';
import getFormData from 'src/utils/getFormData';
import { toastError } from 'src/utils/toaster';

import $ from './style.module.scss';

const NEXT_PATH = '/join/welcome';
const SUB_MSG = [
  '모바일 학생증, 실물 학생증 모두 가능해요',
  '관리자 승인까지 최대 1~3일 소요될 수 있어요 🙏',
];

export default function StdCardUploadPage() {
  const { setJoinInfo } = useStore();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [stdCardImgURL, setStdCardImgURL] = useState('');
  const { mutate } = useUploadStdCard();

  const onUploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;

    if (files) {
      const formData = getFormData(files);
      mutate(formData, {
        onSuccess: ({ data }) => {
          const { uuid, image } = data;
          setStdCardImgURL(image);
          setJoinInfo({ studentIdAuthenticationKey: uuid });
        },
      });
    }
  };

  const handleClickButton = () => {
    fileInputRef?.current?.click();
  };

  const handleOnSubmit = () => {
    if (stdCardImgURL) navigate(NEXT_PATH);
    else toastError({ message: '학생증 사진을 업로드해주세요' });
  };

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <section className={$.container}>
        <h1>학생증 인증이 필요해요</h1>
        {stdCardImgURL ? (
          <SquareImage
            src={stdCardImgURL}
            alt="학생증"
            width={300}
            height={400}
            margin="0 0 20px 0"
          />
        ) : (
          <StdCard width={300} />
        )}
        <ParagraphList contents={SUB_MSG} fontSize={14} />
        <ImageUploadButton
          className={$['upload-button']}
          inputRef={fileInputRef}
          buttonText={stdCardImgURL ? '다시 업로드' : '학생증 업로드'}
          onChange={onUploadImg}
          onClick={handleClickButton}
        />
        <FooterButton text="인증하기" type="submit" onClick={handleOnSubmit} />
      </section>
    </PageLayout>
  );
}
