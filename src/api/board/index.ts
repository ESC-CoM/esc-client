import { http } from '../core';

export const deleteRequestByMe = async (
  id: number
): Promise<res.RequestByMe> => {
  const response = await http.delete(`/api/board/request/${id}`);
  return response.data;
};
