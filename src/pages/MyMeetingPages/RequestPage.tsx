import { RequestMeeting } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useDeleteRequestByMe } from 'src/hooks/api/board';
import { useGetMeetingListRequestedByMe } from 'src/hooks/api/board';

export default function RequestPage() {
  const { data, isLoading, isError, getNextPage } =
    useGetMeetingListRequestedByMe({ size: 10 });
  const { mutate: deleteRequest } = useDeleteRequestByMe();

  if (isLoading) return <div>신청한 과팅 목록 불러오는중...</div>;
  if (isError || !data) return <div>신청한 과팅 목록 불러오기 오류</div>;

  const itemList = data?.pages.reduce(
    (acc: res.RequestMeetingListByMeContent[], cur) =>
      (acc = [...acc, ...cur.content]),
    []
  );

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
