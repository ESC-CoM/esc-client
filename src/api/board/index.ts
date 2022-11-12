import { http } from '../core';

export const patchAllowOrRejectRequest = async (
  requestId: number,
  body: req.AllowOrRejectRequest
): Promise<res.AllowOrRejectRequest> => {
  const response = await http.patch(`/board/request/${requestId}`, body);
  return response.data;
};
