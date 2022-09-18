import { useState } from 'react';
import { registerMeetingMocks } from 'src/__mocks__/myMeeting';
import { RegisterMeeting } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { MyMeetingType } from 'src/types/myMeeting';

export default function RegisterPage() {
  const [registerMeeting, setRegisterMeeting] = useState<MyMeetingType[]>([]);

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...registerMeeting, ...registerMeetingMocks]);
  };

  return (
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
  );
}
