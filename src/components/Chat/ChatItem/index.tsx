import { useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MutiProfile from 'src/components/shared/MultiProfile';

import $ from './style.module.scss';

interface Props {
  boardId: number;
  roomImage: {
    name: string;
    imageUrl: string;
  }[];
  title: string;
  content: string;
  time: string;
  count: string;
}

export default function ChatItem({
  boardId,
  roomImage,
  title,
  content,
  time,
  count,
}: Props) {
  const navigate = useNavigate();
  const chatItemRef = useRef<HTMLLIElement | null>(null);
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
    navigate(`./room/${boardId}`);
  };

  return (
    <li className={$['chat-item']} onClick={() => fetchChatRoom()}>
      <MutiProfile profileList={profileList} parentRef={chatItemRef} />
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
