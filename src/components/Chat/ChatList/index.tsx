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
    <li onClick={() => fetchChatRoom()}>
      <ProfileImage imagePath={roomImage} />
      <div className={$['chat-info']}>
        <div>
          <strong>{title}</strong>
          <time>{time}</time>
        </div>
        <div>
          <span>{content}</span>
          <span>{count}</span>
        </div>
      </div>
    </li>
  );
}
