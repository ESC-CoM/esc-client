import $ from './style.module.scss';

interface Props {
  comment: string;
  profileImg: string[];
  date: string;
}

export default function RequestMeeting({ comment, profileImg, date }: Props) {
  return (
    <li className={$['request-meeting-info']}>
      <ul className={$['info-list']}>
        {profileImg.map((imgUri, index) => (
          <li key={`profile-img-${index}`} className={$['profile-img']}>
            <img src={imgUri} alt="profile-img" />
          </li>
        ))}

        <li className={$['info']}>
          <span className={$['title']}>{comment}</span>
          <span className={$['date']}>{date}</span>
        </li>

        <li className={$['request-btn']}>
          <button className={$['btn']}>재요청</button>
        </li>
      </ul>
    </li>
  );
}
