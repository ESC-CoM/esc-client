import {
  getInfiniteMeeting,
  getMeetingDetail,
  getMeetingList,
} from 'src/api/home';
import { queryKey } from 'src/constants/queryKey';

import { useCoreInfiniteQuery, useCoreQuery } from '../core';

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

export const useMeetingItemDetailQuery = (id: number) => {
  return useCoreQuery(queryKey.meetingItemDetailFunc(id), () =>
    getMeetingDetail(id)
  );
};
