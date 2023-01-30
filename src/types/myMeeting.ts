export type MyMeetingType = {
  id: number;
  kind: string;
  title: string;
  content: string;
  friends: { nickName: string; src: string }[];
  date: string;
};
