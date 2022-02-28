import { PageLayout } from '../components/Layout';
import Meeting from '../components/Meeting';
import { meetingBoardMocks } from '../__mocks__/meetingBoardMocks';

function MeetingBoardPage() {
  return (
    <PageLayout decreaseHeight={0}>
      <ul>
        {meetingBoardMocks.map((meeting, i) => (
          <Meeting key={meeting.kind + i} meeting={meeting} />
        ))}
      </ul>
    </PageLayout>
  );
}

export default MeetingBoardPage;
