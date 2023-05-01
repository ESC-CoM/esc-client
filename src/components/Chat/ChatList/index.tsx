import { useRouter } from 'next/router';
import { useMemo } from 'react';
import MutiProfile from 'src/components/shared/MultiProfile';

import $ from './style.module.scss';

interface Props {
  id: number;
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
  id,
  roomImage,
  title,
  content,
  time,
  count,
}: Props) {
  const router = useRouter();
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
    router.push('/chat/' + id);
  };
  return (
    <li className={$['chat-list']} onClick={() => fetchChatRoom()}>
      <MutiProfile profileList={profileList} />
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
