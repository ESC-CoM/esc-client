import { useRouter } from 'next/router';
import { useCallback } from 'react';
import getUrlFullName from 'src/utils/getUrlFullName';

function useQueryRouter(target: string) {
  const router = useRouter();
  const pathname = router.pathname;

  return useCallback(
    (value: string) => {
      router.push(getUrlFullName(target, value, pathname));
    },
    [target, pathname, router]
  );
}

export default useQueryRouter;
