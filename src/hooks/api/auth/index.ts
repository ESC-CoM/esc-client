import { useRouter } from 'next/router';
import { authRefresh, getUserValidationId, postLoginInfo } from 'src/api/auth';
import { isAxiosError } from 'src/api/core';
import { queryKey } from 'src/constants/queryKey';
import { setAccessToken, setRefreshToken } from 'src/utils/auth';
import { toastError, toastSuccess } from 'src/utils/toaster';

import { useCoreMutation, useCoreQuery } from '../core';

export const useLogin = () => {
  const router = useRouter();
  return useCoreMutation(postLoginInfo, {
    onSuccess: (data) => {
      const {
        message,
        data: { accessToken, refreshToken },
      } = data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      toastSuccess({ message });
      router.push('/home');
    },
    onError: (error) => {
      if (isAxiosError<res.Error>(error) && !!error.response) {
        const { message } = error.response.data;
        toastError({ message });
      }
    },
  });
};

export const useRefresh = () => {
  return useCoreMutation(authRefresh, {
    onSuccess: (data) => {
      const { status, data: accessToken } = data;
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

export const useGetUserValidationId = () => {
  return useCoreQuery(queryKey.userValidationId, getUserValidationId);
};
