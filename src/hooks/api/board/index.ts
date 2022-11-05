import { getRequestListForMeetingRegisteredByMe } from 'src/api/board';
import { queryKey } from 'src/constants/queryKey';

import { useCoreInfiniteQuery } from '../core';

export const useGetRequestListForMeetingRegisteredByMe = ({
  boardId,
  params,
}: req.RequestListForMeetingRegisteredByMe) =>
  useCoreInfiniteQuery(
    queryKey.requestListForMeetingRegisteredByMeFunc(boardId),
    ({ pageParam = params.page }) =>
      getRequestListForMeetingRegisteredByMe({
        boardId,
        params: { ...params, page: pageParam },
      }),
    {
      getNextPageParam: (response) => {
        if ('status' in response) return;
        response.page + 1;
      },
      enabled: boardId > -1,
    }
  );
