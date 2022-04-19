export type MeetingProfileType = {
  email: string;
  college: string;
  url: string;
};

export type MeetingType = {
  kind: string;
  gender: string;
  profiles: MeetingProfileType[];
};
