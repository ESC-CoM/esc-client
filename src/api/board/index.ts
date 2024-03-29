import { http } from '../core';

export const getMeetingListRegisteredByMe = async (
  params?: req.BoardListRegisteredByMe
): Promise<res.BoardListRegisteredByMe> => {
  const { data } = await http.get('/api/board/me', {
    params,
  });
  return data;
};

export const patchAllowOrRejectRequest = async (
  requestId: number,
  body: req.AllowOrRejectRequest
): Promise<res.Success<null>> => {
  const response = await http.patch(`/board/request/${requestId}`, body);
  return response.data;
};

export const deleteRequestByMe = async (
  id: number
): Promise<res.Success<null>> => {
  const response = await http.delete(`/api/board/request/${id}`);
  return response.data;
};

export const getRequestListForMeetingRegisteredByMe = async ({
  boardId,
  params,
}: req.RequestListForMeetingRegisteredByMe): Promise<res.RequestListForMeetingRegisteredByMe> => {
  const { data } = await http.get(`/api/board/${boardId}/request`, { params });
  return data;
};

export const getMeetingListRequestedByMe = async (
  params?: req.RequestMeetingByMe
): Promise<res.RequestMeetingListByMe> => {
  const { data } = await http.get('/api/board/request/me', {
    params,
  });
  return data;
};
