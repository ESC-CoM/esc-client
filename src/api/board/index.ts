import { http } from '../core';

export const getMeetingListRequestedByMe = async (
  params?: req.RequestMeetingByMe
): Promise<res.RequestMeetingListByMe> => {
  const { data } = await http.get('api/board/request/me', {
    params,
  });

  return data;
};
