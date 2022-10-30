import { useState } from 'react';
import { RequestMeeting } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useGetMeetingListRegisteredByMe } from 'src/hooks/api/board';
import { MyMeetingRequestType } from 'src/types/myMeeting';

export default function RequestPage() {
  const {
    data: meetingList,
    isLoading: isMeetingListLoading,
    isError: isMeetingListError,
    fetchNextPage,
  } = useGetMeetingListRegisteredByMe({ page: 0, size: 10 });
  const [requestMeeting, setRegisterMeeting] = useState<MyMeetingRequestType[]>(
    []
  );

  if (isMeetingListLoading) return <div>신청한 과팅 목록 불러오는중...</div>;
  if (isMeetingListError || !meetingList)
    return <div>신청한 과팅 목록 불러오기 오류</div>;

  return (
    <InfiniteScroll trigger={fetchNextPage}>
      <ul>
        {/* TODO: 데이터 잘 불러와지는지, 페이지네이션 잘 되는지 콘솔로 확인 후에 UI에 반영하기. */}
        {requestMeeting.map(
          ({ comment, requestedInfo, date, state }, index) => (
            <RequestMeeting
              key={`${date}-${index}`}
              {...{ comment, requestedInfo, date, state }}
            />
          )
        )}
      </ul>
    </InfiniteScroll>
  );
}
