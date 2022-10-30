import { http } from '../core';

export const getMeetingListRequestedByMe = async (
  params?: req.BoardRequestedByMe
): Promise<res.BoardRequestedByMeSuccess> => {
  const { data } = await http.get('api/board/request/me', {
    params,
  });

  return data;
};
