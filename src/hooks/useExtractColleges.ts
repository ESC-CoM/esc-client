import { MeetingProfileType, MeetingType } from './../types/meeting';
import React, { useMemo } from 'react';

export default function useExtractColleges(
  profiles: MeetingProfileType[],
  meeting: MeetingType
) {
  return useMemo(
    () => Array.from(new Set(profiles.map((x) => x.college))),
    [meeting]
  );
}
