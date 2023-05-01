import { useRouter } from 'next/router';
import { MeetingApplyTemplate } from 'src/components/shared/Templates';
import { useRequestMeetingQuery } from 'src/hooks/api/home';

const NEXT_PATH = '/mymeeting?status=request';

export default function MeetingApplyPage() {
  const router = useRouter();
  const { id: boardId } = router.query;

  const title = '함께하고 싶다는 의사를 어필해주세요!';

  const { mutate } = useRequestMeetingQuery();

  const handleClickBtn = (data: req.CreateMeeting) => {
    const { title, content, participants } = data;
    const body = { title, message: content, participants };

    mutate(
      { boardId: +(boardId || 0), body },
      {
        onSuccess: () => {
          router.push(NEXT_PATH);
        },
      }
    );
  };

  return <MeetingApplyTemplate isApply {...{ title, handleClickBtn }} />;
}
