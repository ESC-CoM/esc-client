import { createChatRoom } from 'src/api/chat';
import { isAxiosError } from 'src/api/core';
import { toastError, toastSuccess } from 'src/utils/toaster';

import { useCoreMutation } from '../core';

export const useCreateChatRoom = () => {
  return useCoreMutation(createChatRoom, {
    onSuccess: (data) => {
      const message =
        '미팅 신청을 수락했습니다. 채팅방에서 자유롭게 대화해보세요!';
      toastSuccess({ message });
    },
    onError: (error) => {
      if (isAxiosError<res.AuthError>(error) && !!error.response) {
        const message = '미팅 신청 오류입니다.\n다시 시도해주세요.';
        toastError({ message });
      }
    },
  });
};
