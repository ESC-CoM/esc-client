import { useNavigate } from 'react-router-dom';
import PostCard from 'src/components/MyMeeting/PostCard';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useGetMeetingListRegisteredByMeQuery } from 'src/hooks/api/board';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { itemList, getNextPage } = useGetMeetingListRegisteredByMeQuery({
    size: 10,
  });

  const getRequestList = (boardId: number) =>
    navigate(`/mymeeting/detail?status=register&boardId=${boardId}`);

  return (
    <InfiniteScroll trigger={getNextPage}>
      <ul>
        {itemList?.map(
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
