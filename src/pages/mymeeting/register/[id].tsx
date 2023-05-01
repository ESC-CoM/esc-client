import { useRouter } from 'next/router';
import { useMemo } from 'react';
import {
  registerMeetingMocks,
  requestListForMeetingRegisteredMocks,
} from '@mocks/data';
import { PostCard, RequestedList } from 'src/components/MyMeeting';
import AsyncWrapper from 'src/components/shared/AsyncWrapper';
import ErrorFallback from 'src/components/shared/ErrorFallback';
import { InfiniteScroll, PageLayout } from 'src/components/shared/Layout';
import Spinner from 'src/components/shared/Spinner';
import {
  usePatchAllowRequest,
  usePatchRejectRequest,
} from 'src/hooks/api/board';
import { useGetRequestListForMeetingRegisteredByMe } from 'src/hooks/api/board';

const { id, kind, title, message, registerParticipants, createdAt } =
  registerMeetingMocks[0];
const detailInfo = { badge: kind, title, content: message, date: createdAt };

export default function RegisterDetailPage() {
  const router = useRouter();
  const boardId = +id;

  const { mutate: allowRequest } = usePatchAllowRequest(boardId);
  const { mutate: rejectRequest } = usePatchRejectRequest(boardId);
  const { itemList, getNextPage } = useGetRequestListForMeetingRegisteredByMe({
    boardId,
    params: { size: 10 },
  });

  const profileList = useMemo(
    () =>
      registerParticipants
        .map(({ profileImage, nickname }) => ({
          src: profileImage,
          alt: nickname,
        }))
        .slice(0, 3),
    []
  );

  const getProfileInfo = () => router.push('/home/detail/' + id);

  return (
    <PageLayout isNeedFooter={true} headerHeight={84}>
      <AsyncWrapper
        errorFallback={ErrorFallback}
        suspenseFallback={<Spinner />}
      >
        <>
          <PostCard
            className="detail"
            profileList={profileList}
            textInfo={detailInfo}
            onClick={getProfileInfo}
          />

          <InfiniteScroll trigger={getNextPage}>
            <ul>
              {requestListForMeetingRegisteredMocks?.map((item, index) => (
                <RequestedList
                  key={`requested-list-${index}`}
                  {...{
                    requestBoardId: item.requestBoardId,
                    title: item.title,
                    requestParticipants: item.requestParticipants,
                    createdAt: item.createdAt,
                    onAllowClick: () => allowRequest(item.requestBoardId),
                    onRejectClick: () => rejectRequest(item.requestBoardId),
                  }}
                />
              ))}
            </ul>
          </InfiniteScroll>
        </>
      </AsyncWrapper>
    </PageLayout>
  );
}

// export async function getServerSideProps({
//   params,
// }: GetServerSidePropsContext) {
//   const queryClient = new QueryClient();
//   const id = params?.id || '0';
//   const boardId = +id;

//   await queryClient.fetchInfiniteQuery(
//     queryKey.requestListForMeetingRegisteredByMe(boardId),
//     () =>
//       getRequestListForMeetingRegisteredByMe({
//         boardId,
//         params: { size: 10 },
//       })
//   );

//   return {
//     props: {
//       id,
//     },
//   };
// }
