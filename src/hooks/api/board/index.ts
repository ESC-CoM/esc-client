import { deleteRequestByMe } from 'src/api/board';
import { toastError, toastSuccess } from 'src/utils/toaster';

import { useCoreMutation } from '../core';

export const useDeleteRequestByMe = () => {
  return useCoreMutation((id: number) => deleteRequestByMe(id), {
    onSuccess: (res) => {
      const { message } = res;
      toastSuccess({ message });
      // TODO: 내가 신청한 미팅 조회 API 연동한 PR 머지되면 query invalidation 설정하기.
    },
    onError: () => {
      toastError({ message: '신청 취소를 실패했습니다.' });
    },
  });
};
