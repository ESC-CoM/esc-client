import { RegisterMeeting } from 'src/components/MyMeeting';
import { PageLayout } from 'src/components/Layout';
import { Header, MyMeetingCategory } from 'src/components/Header';
import { registerMeeting } from 'src/__mocks__/myMeeting';

export default function MyMeetingPage() {
  return (
    <PageLayout isNeedFooter={true}>
      <Header children={<MyMeetingCategory />} />
      <ul>
        {registerMeeting.map(({ title, content, friends, date }, index) => (
          <li key={`register-meeting-${index}`}>
            <RegisterMeeting
              title={title}
              content={content}
              friends={friends}
              date={date}
            />
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
