import { RegisterMeeting } from 'src/components/MyMeeting';
import { PageLayout, InfiniteScroll } from 'src/components/Layout';
import { Header, MyMeetingCategory } from 'src/components/Header';
import { registerMeetingMocks } from 'src/__mocks__/myMeeting';
import { MyMeetingType } from 'src/types/myMeeting';
import { useState } from 'react';

export default function MyMeetingPage() {
  const [registerMeeting, setRegisterMeeting] = useState<MyMeetingType[]>([]);

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...registerMeeting, ...registerMeetingMocks]);
  };

  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0}>
      <Header children={<MyMeetingCategory />} />
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
    </PageLayout>
  );
}
