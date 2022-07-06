import $ from './style.module.scss';
import ProfileImage from '../ProfileImage';
import { useNavigate } from 'react-router-dom';

interface Props {
  roomImage: string;
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
  const fetchChatRoom = () => {
    navigate('./room');
  };
  return (
    <li className={$['chat-list']} onClick={() => fetchChatRoom()}>
      <ProfileImage altValue={title} imagePath={roomImage} />
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
