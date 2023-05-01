import { RequestMeeting } from 'src/components/MyMeeting';
import AsyncWrapper from 'src/components/shared/AsyncWrapper';
import ErrorFallback from 'src/components/shared/ErrorFallback';
import { InfiniteScroll, PageLayout } from 'src/components/shared/Layout';
import Spinner from 'src/components/shared/Spinner';
import { useDeleteRequestByMe } from 'src/hooks/api/board';
import { useGetMeetingListRequestedByMe } from 'src/hooks/api/board';

export default function RequestPage() {
  const { itemList, getNextPage } = useGetMeetingListRequestedByMe({
    size: 2,
  });
  const { mutate: deleteRequest } = useDeleteRequestByMe();

  return (
    <PageLayout isNeedFooter={true} headerHeight={84}>
      <AsyncWrapper
        errorFallback={ErrorFallback}
        suspenseFallback={<Spinner />}
      >
        <InfiniteScroll trigger={getNextPage}>
          <ul>
            {itemList?.map((item) => (
              <RequestMeeting
                key={item.boardId}
                {...{
                  boardId: item.boardId,
                  title: item.title,
                  requestParticipants: item.requestParticipants,
                  createdAt: item.createdAt,
                  participantStatus: item.participantStatus,
                  onDeleteClick: () => deleteRequest(item.boardId),
                }}
              />
            ))}
          </ul>
        </InfiniteScroll>
      </AsyncWrapper>
    </PageLayout>
  );
}
