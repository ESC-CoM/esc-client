import $ from './style.module.scss';
import { MyMeetingRequestType } from 'src/types/myMeeting';

export default function RequestMeeting({
  comment,
  profileImg,
  date,
  state,
}: MyMeetingRequestType) {
  return (
    <li className={$['request-meeting-info']}>
      <div className={$['image-list']}>
        {profileImg.map((imgUri, index) => (
          <img key={`${imgUri}-${index}`} src={imgUri} alt="profile-img" />
        ))}
      </div>

      <div className={$['info']}>
        <span className={$['title']}>{comment}</span>
        {state && <span className={$['state']}>거절됨</span>}
        <div>
          <span className={$['date']}>{date}</span>
        </div>
      </div>

      <div className={$['cancel-btn']}>
        <button className={$['btn']}>신청 취소하기</button>
      </div>
    </li>
  );
}
