import http from 'src/common/http';

const createChatRoom = (boardId: number, boardInfo: res.BoardInfo) =>
  http.post(`board/${boardId}/chat`, boardInfo);

const ChatService = {
  createChatRoom,
};
export default ChatService;
