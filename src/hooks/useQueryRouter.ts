import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getUrlFullName from 'src/utils/getUrlFullName';

function useQueryRouter(target: string) {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (value: string) => {
      navigate(getUrlFullName(target, value, location));
    },
    [target, location, navigate]
  );
}

export default useQueryRouter;
