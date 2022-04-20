import { useState } from 'react';
import { PageLayout, InfiniteScroll } from '../../components/Layout';
import Meeting from '../../components/Meeting';
import { MeetingType } from '../../types/meeting';
import { meetingBoardMocks } from '../../__mocks__/meetingBoardMocks';

function MeetingBoardPage() {
  const [meetingList, setMeetingList] = useState<MeetingType[]>([]);

  const fetchMoreMeetingFeeds = () => {
    setMeetingList([...meetingList, ...meetingBoardMocks]);
  };

  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0}>
      <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
        <ul>
          {meetingList.map((meeting, i) => (
            <Meeting key={`meeting-${i}`} meeting={meeting} />
          ))}
        </ul>
      </InfiniteScroll>
    </PageLayout>
  );
}

export default MeetingBoardPage;
