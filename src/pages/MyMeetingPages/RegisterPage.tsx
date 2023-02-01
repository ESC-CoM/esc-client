import { useNavigate } from 'react-router-dom';
import PostCard from 'src/components/MyMeeting/PostCard';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useGetMeetingListRegisteredByMeQuery } from 'src/hooks/api/board';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useGetMeetingListRegisteredByMeQuery({ page: 0, size: 10 });

  if (isLoading) return <div>로딩중</div>;
  if (!data || isError) return <div>오류 발생</div>;

  const itemList = data?.pages.reduce(
    (acc: res.BoardListRegisteredByMeContent[], cur) =>
      (acc = [...acc, ...cur.content]),
    []
  );

  const getRequestList = (boardId: number) => {
    navigate(`/mymeeting/detail?status=register&boardId=${boardId}`);
  };

  const getNextPage = () => {
    if (hasNextPage) fetchNextPage();
  };

  return (
    <InfiniteScroll trigger={getNextPage}>
      <ul>
        {itemList.map(
          ({ id, kind, title, message, registerParticipants, createdAt }) => {
            const profileList = registerParticipants.map((participant) => ({
              alt: participant.nickname,
              src: participant.profileImage,
            }));
            const textInfo = {
              badge: kind,
              title,
              content: message,
              date: createdAt,
            };
            return (
              <PostCard
                key={id}
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
