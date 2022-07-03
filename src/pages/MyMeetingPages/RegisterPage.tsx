import { useState } from 'react';
import { InfiniteScroll, PageLayout } from 'src/components/Layout';
import { RegisterMeeting } from 'src/components/MyMeeting';
import { registerMeetingMocks } from 'src/__mocks__/myMeeting';
import { MyMeetingType } from 'src/types/myMeeting';

export default function RegisterPage() {
  const [registerMeeting, setRegisterMeeting] = useState<MyMeetingType[]>([]);

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...registerMeeting, ...registerMeetingMocks]);
  };

  return (
    <PageLayout isNeedFooter={true} headerHeight={84}>
      <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
        <ul>
          {registerMeeting.map(({ title, content, friends, date }, index) => (
            <RegisterMeeting
              key={`${date}-${index}`}
              {...{ title, content, friends, date }}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </PageLayout>
  );
}
