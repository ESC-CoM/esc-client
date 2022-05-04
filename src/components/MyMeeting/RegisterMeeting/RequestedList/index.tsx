import $ from './style.module.scss';

interface Props {
  comment: string;
  profileImg: string[];
  date: string;
}

export default function RequestedList({ comment, profileImg, date }: Props) {
  return (
    <li className={$['requested-info']}>
      <ul className={$['info-list']}>
        {profileImg.map((imgUri, index) => (
          <li key={`profile-img-${index}`} className={$['profile-img']}>
            <img src={imgUri} alt="profile-img" />
          </li>
        ))}
      </ul>

      <div className={$['info']}>
        <span className={$['comment']}>{comment}</span>
        <span className={$['date']}>{date}</span>
      </div>

      <div className={$['request-btn']}>
        <button className={$['btn']}>수락</button>
        <button className={$['btn']}>거절</button>
      </div>
    </li>
  );
}
