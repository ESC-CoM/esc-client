import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentCardUpload } from 'src/components/shared/Templates';
import { useRegister, useUploadStdCard } from 'src/hooks/api/join';
import useStore from 'src/store/useStore';
import changeKeyName from 'src/utils/changeKeyName';
import getFormData from 'src/utils/getFormData';
import { toastError } from 'src/utils/toaster';

const NEXT_PATH = '/join/welcome';
const SUB_MSG = [
  '모바일 학생증, 실물 학생증 모두 가능해요',
  '관리자 승인까지 최대 1~3일 소요될 수 있어요 🙏',
];

export default function StudentCardUploadPage() {
  const { userInfo, setJoinInfo } = useStore();
  const navigate = useNavigate();
  const { mutate } = useUploadStdCard();
  const { mutate: registerMutate } = useRegister();
  const [stdCardImgURL, setStdCardImgURL] = useState('');

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

  const handleOnSubmit = () => {
    if (!stdCardImgURL)
      return toastError({ message: '학생증 사진을 업로드해주세요' });

    const userData = changeKeyName(userInfo);
    registerMutate(userData, {
      onSuccess: () => {
        navigate(NEXT_PATH);
      },
    });
  };

  return (
    <StudentCardUpload
      subMessage={SUB_MSG}
      onUploadStudentCardImage={onUploadImg}
      onSumbmit={handleOnSubmit}
      studentCardImageURL={stdCardImgURL}
    />
  );
}
