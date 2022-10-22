import { http } from 'src/api/core';

const checkEmailDuplicate = async (body: string): Promise<string> => {
  const response = await http.get(`/api/auth/duplicates/email/${body}`);
  return response.data;
};

const checkNicknameDuplicate = async (body: string): Promise<string> => {
  const response = await http.get(`/api/auth/duplicates/nickname/${body}`);
  return response.data;
};

const register = async (
  userInfo: req.UserInfo
): Promise<res.RegisterSuccess> => {
  const response = await http.post(`/api/auth/register`, userInfo);
  return response.data;
};

const sendAuthNum = async (phone: string): Promise<res.PhoneSuccess> => {
  const response = await http.post(`/api/sms`, phone.replace(/-/g, ''));
  return response.data;
};

const checkAuthNum = async (code: number): Promise<boolean> => {
  const response = await http.post(`/api/sms/auth`, code);
  return response.data;
};

const uploadProfileImage = async (
  body: FormData
): Promise<res.ProfileImageSuccess> => {
  const response = await http.post('api/auth/upload', body);
  return response.data;
};

const uploadStdCard = async (body: FormData): Promise<res.StdCardSuccess> => {
  const response = await http.post(
    'api/auth/student-verification/upload',
    body
  );
  return response.data;
};

export {
  checkAuthNum,
  checkEmailDuplicate,
  checkNicknameDuplicate,
  register,
  sendAuthNum,
  uploadProfileImage,
  uploadStdCard,
};
