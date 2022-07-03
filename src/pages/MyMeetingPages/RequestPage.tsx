import { useState } from 'react';
import { PageLayout, InfiniteScroll } from 'src/components/Layout';
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
    <PageLayout isNeedFooter={true} headerHeight={84}>
      <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
        <ul>
          {requestMeeting.map(({ comment, profileImg, date, state }, index) => (
            <RequestMeeting
              key={`${profileImg}-${index}`}
              {...{ comment, profileImg, date, state }}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </PageLayout>
  );
}
