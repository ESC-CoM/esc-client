import { http } from '../core';

export const getRequestListForMeetingRegisteredByMe = async ({
  boardId,
  params,
}: req.RequestListForMeetingRegisteredByMe): Promise<
  res.RequestListForMeetingRegisteredByMe | res.Error
> => {
  const { data } = await http.get(`/api/board/${boardId}/request`, { params });
  return data;
};

export const getMeetingListRequestedByMe = async (
  params?: req.RequestMeetingByMe
): Promise<res.RequestMeetingListByMe> => {
  const { data } = await http.get('api/board/request/me', {
    params,
  });
  return data;
};
