import { getInfiniteMeeting, getMeetingList } from 'src/api/home';
import { queryKey } from 'src/constants/queryKey';

import { useCoreInfiniteQuery } from '../core';

export const useMeetingItemListQuery = (requestParams: req.Home) => {
  return useCoreInfiniteQuery(
    queryKey.meetingItemListFunc(requestParams),
    getInfiniteMeeting(requestParams, getMeetingList),
    {
      getNextPageParam: ({ pagination: { pageNumber, last } }) => {
        return last ? undefined : pageNumber + 1;
      },
    }
  );
};
