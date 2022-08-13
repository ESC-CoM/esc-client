import { useState } from 'react';
import { PageLayout, InfiniteScroll } from 'src/components/Layout';
import HomeMeeting from 'src/components/HomeMeeting';
import { MeetingType } from 'src/types/meeting';
import { meetingBoardMocks } from 'src/__mocks__/meetingBoardMocks';

function MeetingBoardPage() {
  const [meetingList, setMeetingList] = useState<MeetingType[]>([]);

  const fetchMoreMeetingFeeds = () => {
    setMeetingList([...meetingList, ...meetingBoardMocks]);
  };

  return (
    <PageLayout isNeedFooter={true} headerHeight={44}>
      <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
        <ul>
          {meetingList.map((meeting, i) => (
            <HomeMeeting key={`meeting-${i}`} meeting={meeting} />
          ))}
        </ul>
      </InfiniteScroll>
    </PageLayout>
  );
}

export default MeetingBoardPage;
