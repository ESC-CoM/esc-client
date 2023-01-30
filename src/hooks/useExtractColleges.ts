import { useMemo } from 'react';

export default function useExtractColleges(profiles: string[]) {
  return useMemo(() => {
    const collegeLen = Array.from(new Set(profiles)).length;
    if (collegeLen === 1) return profiles[0];
    return `${profiles[0]} 외 ${collegeLen - 1}`;
  }, []);
}
