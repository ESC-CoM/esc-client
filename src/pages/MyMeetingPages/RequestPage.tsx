import { useState } from 'react';
import { requestMeetingMocks } from 'src/__mocks__/myMeeting';
import { RequestMeeting } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useDeleteRequestByMe } from 'src/hooks/api/board';
import { MyMeetingRequestType } from 'src/types/myMeeting';

export default function RequestPage() {
  const [requestMeeting, setRegisterMeeting] = useState<MyMeetingRequestType[]>(
    []
  );
  const { mutate: deleteRequest } = useDeleteRequestByMe();

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...requestMeeting, ...requestMeetingMocks]);
  };

  return (
    <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
      <ul>
        {requestMeeting.map(
          ({ comment, requestedInfo, date, state }, index) => (
            <RequestMeeting
              key={`${date}-${index}`}
              onDeleteClick={() => deleteRequest(index)}
              {...{ comment, requestedInfo, date, state }}
            />
          )
        )}
      </ul>
    </InfiniteScroll>
  );
}
