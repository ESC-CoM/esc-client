import { patchAllowOrRejectRequest } from 'src/api/board';

import { useCoreMutation } from '../core';

export const usePatchAllowRequest = () => {
  return useCoreMutation(
    (requestId: number) => patchAllowOrRejectRequest(requestId, 'ALLOWED'),
    {
      onSuccess: () => {
        // TODO: 내가 등록한 미팅 신청자 목록 연동하면 query invalidation 필요
      },
    }
  );
};

export const usePatchRejectRequest = () => {
  return useCoreMutation(
    (requestId: number) => patchAllowOrRejectRequest(requestId, 'REJECTED'),
    {
      onSuccess: () => {
        // TODO: 내가 등록한 미팅 신청자 목록 연동하면 query invalidation 필요
      },
    }
  );
};
