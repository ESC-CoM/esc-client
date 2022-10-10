import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterButton from 'src/components/shared/FooterButton';
import StdCard from 'src/components/shared/Icon/StdCard';
import ImageUploadButton from 'src/components/shared/ImageUploadButton';
import { PageLayout } from 'src/components/shared/Layout';
import ParagraphList from 'src/components/shared/ParagraphList';
import SquareImage from 'src/components/shared/SquareImage';
import { toastError } from 'src/utils/toaster';

import $ from './style.module.scss';

const NEXT_PATH = '/join/welcome';
const SUB_MSG = [
  '모바일 학생증, 실물 학생증 모두 가능해요',
  '관리자 승인까지 최대 1~3일 소요될 수 있어요 🙏',
];

const mockImage = [
  // 테스트 데이터 -> TODO: API 연동 필요
  'https://user-images.githubusercontent.com/63364990/194860375-7685f674-68ea-4b30-a6ab-525a15838389.jpeg',
  'https://user-images.githubusercontent.com/63364990/194861047-b16cdfff-68e3-40c2-b5b7-f19a1fae0ce1.jpeg',
  'https://user-images.githubusercontent.com/63364990/194861182-05b04b85-e9ad-463b-b244-4088c45d7ff6.jpeg',
];

export default function StdCardUploadPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [stdCardImgURL, setStdCardImgURL] = useState('');

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    console.log(selectedImage);
    setStdCardImgURL(mockImage[2]);
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
        <ParagraphList contents={SUB_MSG} fontSize={12} />
        <ImageUploadButton
          inputRef={fileInputRef}
          buttonText="학생증 업로드"
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
