import { useLocation } from 'react-router-dom';

function useSearch(target: string) {
  return new URLSearchParams(useLocation().search).get(target);
}

export default useSearch;
