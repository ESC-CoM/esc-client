import { ChangeEventHandler, useRef } from 'react';
import cx from 'classnames';
import FooterButton from 'src/components/shared/FooterButton';
import StdCard from 'src/components/shared/Icon/StdCard';
import ImageUploadButton from 'src/components/shared/ImageUploadButton';
import { PageLayout } from 'src/components/shared/Layout';
import ParagraphList from 'src/components/shared/ParagraphList';
import SquareImage from 'src/components/shared/SquareImage';

import $ from './style.module.scss';

type Props = {
  className?: string;
  subMessage: string[];
  studentCardImageURL: string;
  onUploadStudentCardImage: ChangeEventHandler<HTMLInputElement>;
  onSumbmit: () => void;
};

export default function StudentCardUpload({
  className,
  subMessage,
  studentCardImageURL,
  onUploadStudentCardImage,
  onSumbmit,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickButton = () => {
    fileInputRef?.current?.click();
  };

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <section className={cx($.container, className)}>
        <h1>학생증 인증이 필요해요</h1>
        {studentCardImageURL ? (
          <SquareImage
            src={studentCardImageURL}
            alt="학생증"
            width={300}
            height={400}
            margin="0 0 20px 0"
          />
        ) : (
          <StdCard width={300} />
        )}
        <ParagraphList contents={subMessage} fontSize={14} />
        <ImageUploadButton
          className={$['upload-button']}
          inputRef={fileInputRef}
          buttonText={studentCardImageURL ? '다시 업로드' : '학생증 업로드'}
          onChange={onUploadStudentCardImage}
          onClick={handleClickButton}
        />
        <FooterButton text="인증하기" type="submit" onClick={onSumbmit} />
      </section>
    </PageLayout>
  );
}
