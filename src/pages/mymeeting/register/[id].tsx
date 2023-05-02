import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { registerMeetingMocks } from '@mocks/data';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getRequestListForMeetingRegisteredByMe } from 'src/api/board';
import { PostCard, RequestedList } from 'src/components/MyMeeting';
import AsyncWrapper from 'src/components/shared/AsyncWrapper';
import ErrorFallback from 'src/components/shared/ErrorFallback';
import { InfiniteScroll, PageLayout } from 'src/components/shared/Layout';
import Spinner from 'src/components/shared/Spinner';
import { queryKey } from 'src/constants/queryKey';
import {
  usePatchAllowRequest,
  usePatchRejectRequest,
} from 'src/hooks/api/board';
import { useGetRequestListForMeetingRegisteredByMe } from 'src/hooks/api/board';

const { id, kind, title, message, registerParticipants, createdAt } =
  registerMeetingMocks[0];
const detailInfo = { badge: kind, title, content: message, date: createdAt };

export default function RegisterDetailPage({ id }: { id: string }) {
  const router = useRouter();
  const boardId = +id;

  const { mutate: allowRequest } = usePatchAllowRequest(boardId);
  const { mutate: rejectRequest } = usePatchRejectRequest(boardId);
  const { itemList, getNextPage } = useGetRequestListForMeetingRegisteredByMe({
    boardId,
    params: { size: 7 },
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
              {itemList?.map((item, index) => (
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

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const queryClient = new QueryClient();
  const id = params?.id || '0';
  const boardId = +id;

  await queryClient.fetchInfiniteQuery(
    queryKey.requestListForMeetingRegisteredByMe(boardId),
    () =>
      getRequestListForMeetingRegisteredByMe({
        boardId,
        params: { size: 7 }, // TODO: 테스트를 위해 9개 중 7개만 불러오도록 설정
      })
  );

  return {
    props: {
      id,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
