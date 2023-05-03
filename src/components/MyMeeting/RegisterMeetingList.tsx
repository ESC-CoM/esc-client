import { useRouter } from 'next/router';
import PostCard from 'src/components/MyMeeting/PostCard';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useGetMeetingListRegisteredByMeQuery } from 'src/hooks/api/board';

export default function RegisterMeetingList() {
  const router = useRouter();
  const { itemList, getNextPage } = useGetMeetingListRegisteredByMeQuery({
    size: 8,
  });

  const getRequestList = (boardId: number) =>
    router.push(`/mymeeting/register/${boardId}`);
  if (!itemList) return null;

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
