import { Route, Routes } from 'react-router-dom';

import { ChatListPage, ChatRoomPage } from '../pages/Chat';

function ChatRoute() {
  return (
    <Routes>
      <Route index element={<ChatListPage />} />
      <Route path="room" element={<ChatRoomPage />} />
    </Routes>
  );
}

export default ChatRoute;
