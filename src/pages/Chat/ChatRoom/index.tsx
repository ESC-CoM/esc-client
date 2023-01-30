import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { MessageInput, MessageList } from 'src/components/Chat';
import { PageLayout } from 'src/components/shared/Layout';
import { Chat } from 'src/types/chat';

import $ from './style.module.scss';

export const socket = () => io('http://localhost:8080');

export default function ChatRoomPage() {
  const profileRef = useRef<HTMLDivElement>(null);
  const [albums, setAlbums] = useState<FileList | null>();
  const [chatList, setChatList] = useState<Chat[]>([
    {
      sender: {
        id: 'other',
        name: '환영해요',
        imagePath: '',
      },
      content: '채팅방이 생성되었어요! 첫번재 메세지를 보내보세요',
      date: '오후 12:25',
    },
  ]);

  useEffect(() => {
    socket().on('board-chat', (data: Chat) => {
      setChatList((prev) => [...prev, data]);
    });
  }, []);

  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <MessageList {...{ profileRef, chatList }} />
      <div className={$['msg-input']}>
        <MessageInput setAlbums={setAlbums} />
      </div>
    </PageLayout>
  );
}
