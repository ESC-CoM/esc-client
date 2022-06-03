import { useState } from 'react';
import { InfiniteScroll } from 'src/components/Layout';
import { RegisterMeeting } from 'src/components/MyMeeting';
import { registerMeetingMocks } from 'src/__mocks__/myMeeting';
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
            title={title}
            content={content}
            friends={friends}
            date={date}
          />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
