import { getMeetingDetail, getMeetingList } from 'src/api/home';
import { queryKey } from 'src/constants/queryKey';

import { useCoreInfiniteQuery, useCoreQuery } from '../core';

export const useMeetingItemListQuery = (params?: req.Home) => {
  return useCoreInfiniteQuery(
    queryKey.meetingItemList,
    () => getMeetingList(params),
    {
      getNextPageParam: ({ page, last }) => {
        return last ? undefined : page + 1;
      },
    }
  );
};

export const useMeetingItemDetailQuery = (id: number) => {
  return useCoreQuery(queryKey.meetingItemDetailFunc(id), () =>
    getMeetingDetail(id)
  );
};
