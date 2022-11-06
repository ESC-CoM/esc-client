import { StudentCardUpload } from 'src/components/shared/Templates';

const DESCRIPTIONS = [
  '모바일 학생증, 실물 학생증 모두 가능해요',
  '관리자 승인까지 최대 1~3일 소요될 수 있어요 🙏',
];

export default function StudentCardUploadPage() {
  return (
    <StudentCardUpload
      subMessage={DESCRIPTIONS}
      onUploadStudentCardImage={() => console.log()}
      onSumbmit={() => console.log()}
      studentCardImageURL={''}
    />
  );
}
