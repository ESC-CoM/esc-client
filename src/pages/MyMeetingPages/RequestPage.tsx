import { RequestMeeting } from 'src/components/MyMeeting';
import { requestMeeting } from 'src/__mocks__/myMeeting';

export default function RequestPage() {
  return (
    <ul>
      {requestMeeting.map(({ comment, profileImg, date, state }, index) => (
        <li key={`request-meeting-info-${index}`}>
          <RequestMeeting
            comment={comment}
            profileImg={profileImg}
            date={date}
            state={state}
          />
        </li>
      ))}
    </ul>
  );
}
