import { http } from '../core';

export const getRequestListForMeetingRegisteredByMe = async ({
  boardId,
  params,
}: req.RequestListForMeetingRegisteredByMe): Promise<
  res.RequestListForMeetingRegisteredByMeSuccess | res.Error
> => {
  const { data } = await http.get(`/api/board/${boardId}/request`, { params });
  return data;
};
