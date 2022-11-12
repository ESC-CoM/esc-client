import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { friendMocks } from 'src/__mocks__/friendMocks';
import { MeetingApplyTemplate } from 'src/components/shared/Templates';
import { useRequestMeetingQuery } from 'src/hooks/api/home';
import { FriendType } from 'src/types/meeting';

const NEXT_PATH = '/mymeeting?status=request';

export default function MeetingApplyPage() {
  const navigate = useNavigate();
  const { boardId } = useParams();

  const [friendFetchData, setFriendFetchData] = useState<FriendType[]>([]);
  const [addedFriendList, setAddedFriendList] = useState<number[]>([]);
  const title = '함께하고 싶다는 의사를 어필해주세요!';

  useEffect(() => {
    // TODO: fetch Data
    setFriendFetchData(
      friendMocks.map(({ profile, nickName }) => {
        return {
          src: profile,
          name: nickName,
        };
      })
    );
  }, []);

  const { data, mutate } = useRequestMeetingQuery();

  const handleClickBtn = (data: req.CreateMeeting) => {
    const { title, content, participants } = data;
    const body = { title, message: content, participants };

    mutate(
      { boardId: +(boardId || 0), body },
      {
        onSuccess: () => {
          navigate(NEXT_PATH);
        },
      }
    );
  };

  return (
    <MeetingApplyTemplate
      isApply
      setAddedFriendList={(friendsIDs) => setAddedFriendList(friendsIDs)}
      {...{ title, friendFetchData, addedFriendList, handleClickBtn }}
    />
  );
}
