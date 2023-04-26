import { RequestMeeting } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useDeleteRequestByMe } from 'src/hooks/api/board';
import { useGetMeetingListRequestedByMe } from 'src/hooks/api/board';

export default function RequestPage() {
  const { itemList, getNextPage } = useGetMeetingListRequestedByMe({
    size: 10,
  });
  const { mutate: deleteRequest } = useDeleteRequestByMe();

  return (
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
  );
}
