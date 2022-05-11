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

export type Profile = {
  img: string;
  mannerScore: number;
  name?: string;
  gender: string;
  birthDate: string;
  college: string;
  department?: string;
  studentNum: number;
  height: number;
  weight: number;
  mbti: string;
  hobbies: string;
  drink: number;
};
