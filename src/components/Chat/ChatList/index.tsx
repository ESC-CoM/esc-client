import $ from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import ProfileImage from 'src/components/ProfileImage';

interface Props {
  roomImage: {
    name: string;
    imageUrl: string;
  }[];
  title: string;
  content: string;
  time: string;
  count: string;
}

export default function ChatList({
  roomImage,
  title,
  content,
  time,
  count,
}: Props) {
  const navigate = useNavigate();

  const profileList = roomImage
    .map(({ name, imageUrl }) => {
      return {
        altValue: name,
        imageUrl: imageUrl,
      };
    })
    .slice(0, 3);
  const profileLen = profileList.length;

  const getProfileClassName = () => {
    if (profileLen === 2) return 'double';
    else if (profileLen === 3) return 'triple';
    else return 'single';
  };

  const fetchChatRoom = () => {
    navigate('./room');
  };
  return (
    <li className={$['chat-list']} onClick={() => fetchChatRoom()}>
      <ProfileImage
        profileList={profileList}
        className={getProfileClassName()}
      />
      <div className={$['chat-info']}>
        <div className={$['main-info']}>
          <strong>{title}</strong>
          <span className={$.content}>{content}</span>
        </div>
        <div className={$['more-info']}>
          <time>{time}</time>
          <span className={$.count}>{count}</span>
        </div>
      </div>
    </li>
  );
}
