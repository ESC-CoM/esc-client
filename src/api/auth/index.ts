import { http } from '../core';

export const postLoginInfo = async (
  body: req.Auth
): Promise<res.AuthSuccess> => {
  const response = await http.post('api/auth/login', body);
  return response.data;
};

export const authRefresh = async (
  body: req.Refresh
): Promise<res.RefreshSuccess> => {
  console.log(body);
  const response = await http.post('api/auth/refresh', body);
  return response.data;
};
