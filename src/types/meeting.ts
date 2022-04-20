export type MeetingProfileType = {
  email: string;
  college: string;
  url: string;
};

export type MeetingType = {
  title: string;
  gender: string;
  profiles: MeetingProfileType[];
};
