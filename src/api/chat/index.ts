import { http } from 'src/api/core';

const createChatRoom = async ({
  boardId,
  body,
}: req.CreateChatRoom): Promise<res.CreateChatRoom> => {
  const response = await http.post(`/board/${boardId}/chat`, body);
  return response.data;
};

export { createChatRoom };
