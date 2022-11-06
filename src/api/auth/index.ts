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
  const response = await http.post('api/auth/refresh', body);
  return response.data;
};

export const getUserValidationId = async (): Promise<res.ValidateSuccess> => {
  const response = await http.get('api/auth/validate');
  return response.data;
};
