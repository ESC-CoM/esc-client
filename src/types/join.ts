import MBTI_LIST from 'src/constants/MBTI';

export interface TermSchema {
  [index: string]: boolean;
  personalAgree: boolean;
  acceptAgree: boolean;
}

export type ExampleWord = {
  id: number;
  name: string;
};

export type EmailPasswordType = {
  email: string;
  password: string;
  isDuplicationChecked: boolean;
};

export type PhoneAuthType = {
  phoneNumber: string;
  authNumber: number;
  isReceivedAuthNum: boolean;
  isAuthed: boolean;
};

export type MBTIType = typeof MBTI_LIST[number];

export type More1Type = {
  nickName: string;
  isDuplicationChecked: boolean;
  gender: string;
  year: string;
  mbti: MBTIType;
};

export type More2Type = {
  height: number;
  weight: number;
  drink: number;
};

export type TermType = {
  isAgree: boolean;
};

export type ProfileImgType = {
  profileImage: string;
};

export type StdCardType = {
  studentIdAuthenticationKey: string;
};
