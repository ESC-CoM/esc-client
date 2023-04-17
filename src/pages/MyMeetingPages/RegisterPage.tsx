import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostCard from 'src/components/MyMeeting/PostCard';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useGetMeetingListRegisteredByMeQuery } from 'src/hooks/api/borad';
import { MyMeetingType } from 'src/types/myMeeting';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [registerMeeting, setRegisterMeeting] = useState<MyMeetingType[]>([]);
  const {
    data: registeredMeetingData,
    fetchNextPage,
    isLoading: isRegisteredMeetingLoading,
    isError: isRegisteredMeetingError,
  } = useGetMeetingListRegisteredByMeQuery({ page: 0, size: 10 });

  if (isRegisteredMeetingLoading) return <div>로딩중</div>;
  if (registeredMeetingData === undefined || isRegisteredMeetingError)
    return <div>오류 발생</div>;

  console.log(registeredMeetingData);

  const getRequestList = (boardId: number) => {
    // 요청 리스트 fetch
    navigate(`/mymeeting/detail?status=register&boardId=${boardId}`);
  };

  return (
    <InfiniteScroll trigger={fetchNextPage}>
      <ul>
        {registerMeeting.map(
          ({ id, kind, title, content, friends, date }, index) => {
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
                onClick={() => getRequestList(id)}
              />
            );
          }
        )}
      </ul>
    </InfiniteScroll>
  );
}
