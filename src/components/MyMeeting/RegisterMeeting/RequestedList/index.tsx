import $ from './style.module.scss';

interface Props {
  title: string;
  content: string;
  profileImg: string[];
  date: string;
}

export default function RequestedList({
  title,
  content,
  profileImg,
  date,
}: Props) {
  return (
    <li className={$['request-meeting']}>
      <div className={$['request-meeting-info']}>
        <span className={$['title']}>{title}</span>
        <span className={$['date']}>{date}</span>
      </div>

      <ul className={$['profile-img-list']}>
        {profileImg.map((imgUri, index) => (
          <li key={`profile-img-${index}`} className={$['profile-img']}>
            <img src={imgUri} alt="profile-img" />
          </li>
        ))}
      </ul>

      <span className={$['content']}>{content}</span>

      <div className={$['request-btn']}>
        <button className={$['btn']}>수락</button>
        <button className={$['btn']}>거절</button>
      </div>
    </li>
  );
}
