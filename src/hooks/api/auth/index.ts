import { authRefresh, postLoginInfo } from 'src/api/auth';
import { isAxiosError } from 'src/api/core';
import { setAccessToken, setRefreshToken } from 'src/utils/auth';

import { useCoreMutation } from '../core';

export const useLogin = () => {
  return useCoreMutation(postLoginInfo, {
    onSuccess: (data) => {
      const {
        message,
        data: { accessToken, refreshToken },
      } = data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      console.log(message); // TODO: 토스트 메시지
    },
    onError: (error) => {
      if (isAxiosError<res.AuthError>(error) && error.response) {
        const { message, status } = error.response.data;
        console.log(message, status); // TODO: 토스트 메시지
      }
    },
  });
};

export const useRefresh = () => {
  return useCoreMutation(authRefresh, {
    onSuccess: (data) => {
      const {
        status,
        data: { accessToken },
      } = data;
      setAccessToken(accessToken);
      console.log(status);
    },
    onError: (error) => {
      // TODO: 상태코드
      // const { status } = error;
      // console.log(status);
      // if (status == 400) {
      //   console.log(error.message); // 토스트 메시지 보내기
      // }
    },
  });
};
