import { useSearchParams } from 'next/navigation';

function useSearch(target: string) {
  const searchParams = useSearchParams();
  return searchParams.get(target);
}

export default useSearch;
