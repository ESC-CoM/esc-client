import { getMeetingListRegisteredByMe } from 'src/api/board';
import { queryKey } from 'src/constants/queryKey';

import { useCoreQuery } from '../core';

export const useGetMeetingListRegisteredByMeQuery = () => {
  return useCoreQuery(
    queryKey.meetingListRegisteredByMe,
    getMeetingListRegisteredByMe
  );
};
