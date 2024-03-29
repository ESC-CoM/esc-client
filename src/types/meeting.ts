export type MeetingType = {
  id: number;
  title: string;
  gender: string;
  profiles: string[];
  college: string[];
  headCount: number;
};

export type FriendType = {
  src: string;
  name: string;
};

export const MeetingTitle = {
  register: '소개글을 작성해주세요.',
  apply: '함께 하고 싶다는 의사를 어필해주세요.',
} as const;
