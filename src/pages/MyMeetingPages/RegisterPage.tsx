import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerMeetingMocks } from 'src/__mocks__/myMeeting';
import PostCard from 'src/components/MyMeeting/PostCard';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { MyMeetingType } from 'src/types/myMeeting';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [registerMeeting, setRegisterMeeting] = useState<MyMeetingType[]>([]);

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...registerMeeting, ...registerMeetingMocks]);
  };

  const getRequestList = (boardId: number) => {
    // 요청 리스트 fetch
    navigate(`/mymeeting/detail?status=register?boardId=${boardId}`);
  };

  return (
    <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
      <ul>
        {registerMeeting.map(
          ({ kind, title, content, friends, date }, index) => {
            const profileList = friends.map(({ nickName, src }) => ({
              alt: nickName,
              src,
            }));
            const textInfo = { badge: kind, title, content, date };
            return (
              <PostCard
                key={`${date}-${index}`}
                profileList={profileList}
                textInfo={textInfo}
                onClick={() => getRequestList(0)}
              />
            );
          }
        )}
      </ul>
    </InfiniteScroll>
  );
}
