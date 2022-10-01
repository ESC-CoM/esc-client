import { getExample } from 'src/api/example';
import { queryKey } from 'src/constants/queryKey';

import { useCoreQuery } from '../core';

export const useExample = () => {
  return useCoreQuery(queryKey.example, () => getExample());
};
