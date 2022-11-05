import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { friendMocks } from 'src/__mocks__/friendMocks';
import { MeetingApplyTemplate } from 'src/components/shared/Templates';
import { useCreateMeetingQuery } from 'src/hooks/api/home';
import { FriendType } from 'src/types/meeting';

const NEXT_PATH = '/mymeeting?status=register';

export default function MeetingRegisterPage() {
  const navigate = useNavigate();

  const [friendFetchData, setFriendFetchData] = useState<FriendType[]>([]);
  const [addedFriendList, setAddedFriendList] = useState<number[]>([]);
  const title = '함께하고 싶다는 의사를 어필해주세요!';

  useEffect(() => {
    // TODO: fetch Data
    setFriendFetchData(
      friendMocks.map(({ src, name }) => {
        return {
          src,
          name,
        };
      })
    );
  }, []);

  const { data, mutate } = useCreateMeetingQuery();

  const handleClickBtn = (data: req.CreateMeeting) => {
    mutate(data, {
      onSuccess: () => {
        navigate(NEXT_PATH);
      },
    });
  };

  return (
    <MeetingApplyTemplate
      setAddedFriendList={(friendsIDs) => setAddedFriendList(friendsIDs)}
      {...{ title, friendFetchData, addedFriendList, handleClickBtn }}
    />
  );
}
