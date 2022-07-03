import http from 'src/common/http';
import { ChatInfo } from 'src/types/chat';

const createChatRoom = (chatInfo: ChatInfo) =>
  http.post(`chatting/room`, chatInfo);

const getChatRoom = (chattingRoomId: string) =>
  http.get(`chatting/room/${chattingRoomId}`);

const ChatService = {
  createChatRoom,
  getChatRoom,
};

export default ChatService;
