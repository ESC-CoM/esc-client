import $ from './style.module.scss';
import { FaUserFriends } from 'react-icons/fa';

interface Props {
  title: string;
  content: string;
  friends: string[];
  date: string;
}

export default function RegisterMeeting({
  title,
  content,
  friends,
  date,
}: Props) {
  return (
    <li className={$['my-meeting']}>
      <div className={$['my-meeting-info']}>
        <span className={$['title']}>{title}</span>
        <span className={$['content']}>{content}</span>
        <span className={$['date']}>{date}</span>
      </div>

      <ul className={$['profile-img-list']}>
        <span className={$['icon']}>
          <FaUserFriends />
        </span>
        {friends.map((friendsImg, index) => (
          <li className={$['profile-img']} key={index}>
            <img src={friendsImg} alt="friends" />
          </li>
        ))}
      </ul>
    </li>
  );
}
