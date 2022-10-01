import ChatService from 'src/services/chat';

const createChatRoom = async (boardId: number, boardInfo: res.BoardInfo) => {
  return await ChatService.createChatRoom(boardId, boardInfo);
};

const ChatApi = {
  createChatRoom,
};
export default ChatApi;
