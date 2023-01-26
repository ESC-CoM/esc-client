import { useState } from 'react';
import { registerMeetingMocks } from '@mocks/data';
import { useNavigate } from 'react-router-dom';
import PostCard from 'src/components/MyMeeting/PostCard';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { MyMeetingType } from 'src/types/myMeeting';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [registerMeeting, setRegisterMeeting] = useState<MyMeetingType[]>([]);

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...registerMeeting, ...registerMeetingMocks]);
  };

  const getRequestList = () => {
    // 요청 리스트 fetch
    navigate('/mymeeting/detail?status=register');
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
