import $ from './style.module.scss';

interface Props {
  comment: string;
  profileImg: string[];
  date: string;
  state: boolean;
}

export default function RequestMeeting({
  comment,
  profileImg,
  date,
  state,
}: Props) {
  return (
    // <li className={$['request-meeting-info']}>
    <ul className={$['info-list']}>
      {profileImg.map((imgUri, index) => (
        <li key={`profile-img-${imgUri}-${index}`} className={$['profile-img']}>
          <img src={imgUri} alt="profile-img" />
        </li>
      ))}

      <li className={$['info']}>
        <span className={$['title']}>{comment}</span>
        {state && <span className={$['state']}>거절됨</span>}
        <div>
          <span className={$['date']}>{date}</span>
        </div>
      </li>

      <li className={$['request-btn']}>
        <button className={$['btn']}>신청 취소하기</button>
      </li>
    </ul>
    // </li>
  );
}
