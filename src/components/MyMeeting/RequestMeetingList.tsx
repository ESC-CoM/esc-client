import { useDeleteRequestByMe } from 'src/hooks/api/board';
import { useGetMeetingListRequestedByMe } from 'src/hooks/api/board';

import { InfiniteScroll } from '../shared/Layout';
import RequestMeeting from './RequestMeeting';

export default function RequestMeetingList() {
  const { itemList, getNextPage } = useGetMeetingListRequestedByMe({
    size: 2,
  });
  const { mutate: deleteRequest } = useDeleteRequestByMe();

  if (!itemList) return null;

  return (
    <InfiniteScroll trigger={getNextPage}>
      <ul>
        {itemList.map((item) => (
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
