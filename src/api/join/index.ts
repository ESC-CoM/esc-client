import { http } from 'src/api/core';

const checkEmailDuplicate = async (email: string): Promise<string> => {
  const response = await http.get(`/api/auth/duplicates/email/${email}`);
  return response.data;
};

const checkNicknameDuplicate = async (nickname: string): Promise<string> => {
  const response = await http.get(`/api/auth/duplicates/nickname/${nickname}`);
  return response.data;
};

const register = async (userInfo: req.UserInfo): Promise<number> => {
  const response = await http.post(`/api/auth/register`, userInfo);
  return response.data;
};

const uploadStdCard = async (body: FormData): Promise<res.StdCardSuccess> => {
  const response = await http.post(
    'api/auth/student-verification/upload',
    body
  );
  return response.data;
};

export { checkEmailDuplicate, checkNicknameDuplicate, register, uploadStdCard };
