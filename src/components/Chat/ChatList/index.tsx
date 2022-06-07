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
      <div className={$['pri-info']}>
        <strong>{title}</strong>
        <span>{content}</span>
      </div>
      <div className={$['more-info']}>
        <time>{time}</time>
        <span className={$.count}>{count}</span>
      </div>
    </li>
  );
}
