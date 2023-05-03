import { RequestedList } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import {
  usePatchAllowRequest,
  usePatchRejectRequest,
} from 'src/hooks/api/board';
import { useGetRequestListForMeetingRegisteredByMe } from 'src/hooks/api/board';

export default function RegisterMeetingDetail({
  boardId,
}: {
  boardId: number;
}) {
  const { mutate: allowRequest } = usePatchAllowRequest(boardId);
  const { mutate: rejectRequest } = usePatchRejectRequest(boardId);
  const { itemList, getNextPage } = useGetRequestListForMeetingRegisteredByMe({
    boardId,
    params: { size: 7 },
  });

  return (
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
  );
}
