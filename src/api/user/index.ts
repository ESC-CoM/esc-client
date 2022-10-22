import { http } from '../core';

export const getUserDetailInformation = async (
  id: req.UserInfoDetail
): Promise<res.UserInfoDetailSuccess> => {
  const response = await http.get(`api/userInfo/detail/${id}`);
  return response.data;
};
