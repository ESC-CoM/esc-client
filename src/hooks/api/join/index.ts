import { isAxiosError } from 'src/api/core';
import {
  checkEmailDuplicate,
  checkNicknameDuplicate,
  register,
  uploadProfileImage,
  uploadStdCard,
} from 'src/api/join';
import { queryKey } from 'src/constants/queryKey';
import { toastError, toastSuccess } from 'src/utils/toaster';

import { useCoreMutation, useCoreQuery } from '../core';

export const useEmailDuplicateQuery = (email: string) => {
  return useCoreQuery(
    queryKey.checkEmailDuplicateFunc(email),
    () => checkEmailDuplicate(email),
    {
      enabled: !!email,
    }
  );
};

export const useNicknameDuplicateQuery = (nickname: string) => {
  return useCoreQuery(
    queryKey.checkNicknameDuplicateFunc(nickname),
    () => checkNicknameDuplicate(nickname),
    {
      enabled: !!nickname,
    }
  );
};

export const useRegister = () => {
  return useCoreMutation(register, {
    onSuccess: (data) => {
      const { message } = data;
      toastSuccess({ message });
    },
    onError: (error) => {
      if (isAxiosError<res.AuthError>(error) && !!error.response) {
        const { message } = error.response.data;
        toastError({ message });
      }
    },
  });
};

export const useUploadStdCard = () => {
  return useCoreMutation(uploadStdCard, {
    onSuccess: (data) => {
      const { message } = data;
      toastSuccess({ message });
    },
    onError: () => {
      const message = '이미지 업로드에 실패했습니다.\n다시 시도해주세요.';
      toastError({ message });
    },
  });
};

export const useUploadProfileImage = () => {
  return useCoreMutation(uploadProfileImage, {
    onSuccess: (data) => {
      const { message } = data;
      toastSuccess({ message });
    },
    onError: () => {
      const message = '이미지 업로드에 실패했습니다.\n다시 시도해주세요.';
      toastError({ message });
    },
  });
};
