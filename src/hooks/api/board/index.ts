import { patchAllowOrRejectRequest } from 'src/api/board';
import { toastSuccess } from 'src/utils/toaster';

import { useCoreMutation } from '../core';

export const usePatchAllowRequest = () => {
  return useCoreMutation(
    (requestId: number) => patchAllowOrRejectRequest(requestId, 'ALLOWED'),
    {
      onSuccess: (response) => {
        // TODO: 내가 등록한 미팅 신청자 목록 연동하면 query invalidation 필요
        const { message } = response;
        toastSuccess({ message });
      },
    }
  );
};

export const usePatchRejectRequest = () => {
  return useCoreMutation(
    (requestId: number) => patchAllowOrRejectRequest(requestId, 'REJECTED'),
    {
      onSuccess: (response) => {
        // TODO: 내가 등록한 미팅 신청자 목록 연동하면 query invalidation 필요
        const { message } = response;
        toastSuccess({ message });
      },
    }
  );
};
