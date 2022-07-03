import { ChatInfo } from 'src/types/chat';
import ChatService from 'src/services/ChatService';

export const createChatRoom = async (chatInfo: ChatInfo) => {
  try {
    const res = await ChatService.createChatRoom(chatInfo);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getChatRoom = async (chattingRoomId: string) => {
  try {
    const res = await ChatService.getChatRoom(chattingRoomId);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
