import { useRouter } from 'next/router';
import PostCard from 'src/components/MyMeeting/PostCard';
import AsyncWrapper from 'src/components/shared/AsyncWrapper';
import ErrorFallback from 'src/components/shared/ErrorFallback';
import { InfiniteScroll, PageLayout } from 'src/components/shared/Layout';
import Spinner from 'src/components/shared/Spinner';
import { useGetMeetingListRegisteredByMeQuery } from 'src/hooks/api/board';

export default function RegisterPage() {
  const router = useRouter();
  const { itemList, getNextPage } = useGetMeetingListRegisteredByMeQuery({
    size: 8,
  });

  const getRequestList = (boardId: number) =>
    router.push(`/mymeeting/register/${boardId}`);

  return (
    <PageLayout isNeedFooter={true} headerHeight={84}>
      <AsyncWrapper
        errorFallback={ErrorFallback}
        suspenseFallback={<Spinner />}
      >
        <InfiniteScroll trigger={getNextPage}>
          <ul>
            {itemList?.map(
              ({
                id,
                kind,
                title,
                message,
                registerParticipants,
                createdAt,
              }) => {
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
      </AsyncWrapper>
    </PageLayout>
  );
}
