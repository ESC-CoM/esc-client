import { useState } from 'react';
import { registerMeetingMocks } from 'src/__mocks__/myMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { MyMeetingType } from 'src/types/myMeeting';
import PostCard from 'src/components/shared/Posting';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [registerMeeting, setRegisterMeeting] = useState<MyMeetingType[]>([]);

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...registerMeeting, ...registerMeetingMocks]);
  };

  const getRequestList = () => {
    // 요청 리스트 fetch
    navigate('/mymeeting/register/detail');
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
                onClick={getRequestList}
              />
            );
          }
        )}
      </ul>
    </InfiniteScroll>
  );
}
