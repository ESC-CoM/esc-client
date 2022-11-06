import { getUserDetailInformation } from 'src/api/user';
import { queryKey } from 'src/constants/queryKey';

import { useCoreQuery } from '../core';

export const useGetUserDetailInformation = (id: number) => {
  return useCoreQuery(
    queryKey.detailUserInformationFunc(id),
    () => getUserDetailInformation(id),
    {
      enabled: !!id,
    }
  );
};
