import { useRouter } from 'next/router';
import { MeetingApplyTemplate } from 'src/components/shared/Templates';
import { useCreateMeetingQuery } from 'src/hooks/api/home';

const NEXT_PATH = '/mymeeting/register';

export default function MeetingRegisterPage() {
  const router = useRouter();

  const title = '함께하고 싶다는 의사를 어필해주세요!';

  const { mutate } = useCreateMeetingQuery();

  const handleClickBtn = (data: req.CreateMeeting) => {
    mutate(data, {
      onSuccess: () => {
        router.push(NEXT_PATH);
      },
    });
  };

  return <MeetingApplyTemplate {...{ title, handleClickBtn }} />;
}
