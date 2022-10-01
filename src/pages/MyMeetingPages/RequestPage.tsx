import { useState } from 'react';
import { requestMeetingMocks } from 'src/__mocks__/myMeeting';
import { RequestMeeting } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { MyMeetingRequestType } from 'src/types/myMeeting';

export default function RequestPage() {
  const [requestMeeting, setRegisterMeeting] = useState<MyMeetingRequestType[]>(
    []
  );

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...requestMeeting, ...requestMeetingMocks]);
  };

  return (
    <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
      <ul>
        {requestMeeting.map(
          ({ boardId, title, requestedInfo, date, state }, index) => (
            <RequestMeeting
              key={`${date}-${index}`}
              {...{ boardId, title, requestedInfo, date, state }}
            />
          )
        )}
      </ul>
    </InfiniteScroll>
  );
}
