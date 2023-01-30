import { RequestMeeting } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useGetMeetingListRegisteredByMe } from 'src/hooks/api/board';

export default function RequestPage() {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useGetMeetingListRegisteredByMe({ size: 10 });

  if (isLoading) return <div>신청한 과팅 목록 불러오는중...</div>;
  if (isError || !data) return <div>신청한 과팅 목록 불러오기 오류</div>;

  const items = data?.pages;
  const itemList = items?.reduce(
    (acc: res.RequestMeetingListByMeContent[], cur) =>
      (acc = [...acc, ...cur.content]),
    []
  );

  const getNextPage = () => {
    if (hasNextPage) fetchNextPage();
  };

  return (
    <InfiniteScroll trigger={getNextPage}>
      <ul>
        {/* TODO: 데이터 잘 불러와지는지, 페이지네이션 잘 되는지 콘솔로 확인 후에 UI에 반영하기. */}
        {itemList.map((item, index) => (
          <RequestMeeting
            key={`${item.updatedAt}-${index}`}
            {...{
              boardId: item.boardId,
              title: item.title,
              requestParticipants: item.requestParticipants,
              updatedAt: item.updatedAt,
              participantStatus: item.participantStatus,
            }}
          />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
