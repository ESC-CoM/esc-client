import { http } from '../core';

export const getMeetingListRegisteredByMe = async (
  params?: req.BoardListRegisteredByMe
): Promise<res.BoardListRegisteredByMe> => {
  const {
    data: { data },
  } = await http.get('api/board/me', {
    params,
  });

  return data;
};
