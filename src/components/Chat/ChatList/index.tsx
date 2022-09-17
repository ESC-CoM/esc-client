import $ from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import MutiProfile from 'src/components/shared/MultiProfile';
import { useMemo, useRef } from 'react';

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
  const chatListRef = useRef<HTMLLIElement | null>(null);
  const profileList = useMemo(
    () =>
      roomImage
        .map(({ name, imageUrl }) => {
          return {
            alt: name,
            src: imageUrl,
          };
        })
        .slice(0, 3),
    []
  );

  const fetchChatRoom = () => {
    navigate('./room');
  };
  return (
    <li className={$['chat-list']} onClick={() => fetchChatRoom()}>
      <MutiProfile profileList={profileList} parentRef={chatListRef} />
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
