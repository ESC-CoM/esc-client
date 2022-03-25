import { MeetingProfileType } from './../types/meeting';
import React, { useMemo } from 'react';

export default function useExtractColleges(profiles: MeetingProfileType[]) {
  return useMemo(() => Array.from(new Set(profiles.map((x) => x.college))), []);
}
