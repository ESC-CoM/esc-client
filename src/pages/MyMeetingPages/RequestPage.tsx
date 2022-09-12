import { useState } from 'react';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { RequestMeeting } from 'src/components/MyMeeting';
import { MyMeetingRequestType } from 'src/types/myMeeting';
import { requestMeetingMocks } from 'src/__mocks__/myMeeting';

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
