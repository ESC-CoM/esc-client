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
    <div className={$['request-meeting-info']}>
      <ul className={$['image-list']}>
        {profileImg.map((imgUri, index) => (
          <li
            key={`profile-img-${imgUri}-${index}`}
            className={$['profile-img']}
          >
            <img src={imgUri} alt="profile-img" />
          </li>
        ))}
      </ul>

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
    </div>
  );
}
