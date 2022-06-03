import { RegisterMeeting } from 'src/components/MyMeeting';
import { registerMeeting } from 'src/__mocks__/myMeeting';

export default function RegisterPage() {
  return (
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
  );
}
