import $ from './style.module.scss';
import { FaUserFriends } from 'react-icons/fa';

interface Props {
  title: string;
  friends: string[];
}

export default function RegisterMeeting({ title, friends }: Props) {
  return (
    <li className={$['my-meeting']}>
      <div className={$['my-meeting-info']}>
        <span className={$['title']}>{title}</span>
        <span className={$['icon']}>
          <FaUserFriends />
        </span>
      </div>

      <ul className={$['profile-img-list']}>
        {friends.map((friendsImg, index) => (
          <li className={$['profile-img']} key={index}>
            <img src={friendsImg} alt="friends" />
          </li>
        ))}
      </ul>
    </li>
  );
}
