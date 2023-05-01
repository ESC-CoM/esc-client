import { useRouter } from 'next/router';
import { useCallback } from 'react';

function useQueryRouter(target: string) {
  const router = useRouter();

  return useCallback(
    (value: string) => {
      router.push({ query: { target: value } });
    },
    [target, router]
  );
}

export default useQueryRouter;
