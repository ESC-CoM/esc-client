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
  studentNum: string;
  height: number;
  weight: number;
  mbti: string;
  hobbies?: string;
  drink: number;
};

export type FriendType = {
  src: string;
  name: string;
};

export const MeetingTitle = {
  register: '소개글을 작성해주세요.',
  apply: '함께 하고 싶다는 의사를 어필해주세요.',
} as const;
