export type Profile = {
  img: string;
  mannerScore?: number;
  nickName: string;
  gender: string;
  birthDate: string;
  college: string;
  department?: string;
  studentNum: string;
  height: string;
  weight: string;
  mbti: string;
  hobbies?: string;
  drink: number;
};

export type BasicInfoType = Pick<
  Profile,
  'img' | 'nickName' | 'gender' | 'college' | 'department' | 'studentNum'
>;

export type MoreInfoType = Pick<
  Profile,
  'birthDate' | 'height' | 'weight' | 'mbti' | 'drink'
>;

export type ProfileImg = {
  alt: string;
  src: string;
};
