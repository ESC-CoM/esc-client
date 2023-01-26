import { useState } from 'react';
import { applyMeetingMocks } from '@mocks/data';
import { RequestMeeting } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { MyMeetingRequestType } from 'src/types/myMeeting';

export default function RequestPage() {
  const [requestMeeting, setRegisterMeeting] = useState<MyMeetingRequestType[]>(
    []
  );

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...requestMeeting, ...applyMeetingMocks]);
  };

  return (
    <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
      <ul>
        {requestMeeting.map(
          ({ id, comment, requestedInfo, date, state }, index) => (
            <RequestMeeting
              key={`${date}-${index}`}
              {...{ id, comment, requestedInfo, date, state }}
            />
          )
        )}
      </ul>
    </InfiniteScroll>
  );
}
