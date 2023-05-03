import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { registerMeetingMocks } from '@mocks/data';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getRequestListForMeetingRegisteredByMe } from 'src/api/board';
import { PostCard } from 'src/components/MyMeeting';
import RegisterMeetingDetail from 'src/components/MyMeeting/RegisterMeetingDetail';
import AsyncWrapper from 'src/components/shared/AsyncWrapper';
import ErrorFallback from 'src/components/shared/ErrorFallback';
import { PageLayout } from 'src/components/shared/Layout';
import Spinner from 'src/components/shared/Spinner';
import { queryKey } from 'src/constants/queryKey';

const { kind, title, message, registerParticipants, createdAt } =
  registerMeetingMocks[0];
const detailInfo = { badge: kind, title, content: message, date: createdAt };

export default function RegisterDetailPage({ boardId }: { boardId: number }) {
  const router = useRouter();

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

  const getProfileInfo = () => router.push('/home/detail/' + boardId);

  return (
    <PageLayout isNeedFooter={true} headerHeight={84}>
      <>
        <PostCard
          className="detail"
          profileList={profileList}
          textInfo={detailInfo}
          onClick={getProfileInfo}
        />
        <AsyncWrapper
          errorFallback={ErrorFallback}
          suspenseFallback={<Spinner />}
        >
          <RegisterMeetingDetail boardId={boardId} />
        </AsyncWrapper>
      </>
    </PageLayout>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const queryClient = new QueryClient();
  const boardId = +(params?.id as string) || 0;

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
      boardId,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
