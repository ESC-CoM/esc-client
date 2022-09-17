import { useMemo } from 'react';

import { MeetingProfileType } from './../types/meeting';

export default function useExtractColleges(profiles: MeetingProfileType[]) {
  return useMemo(() => {
    const collegeLen = Array.from(
      new Set(profiles.map((x) => x.college))
    ).length;
    if (collegeLen === 1) return profiles[0].college;
    return `${profiles[0].college} 외 ${collegeLen - 1}`;
  }, []);
}
