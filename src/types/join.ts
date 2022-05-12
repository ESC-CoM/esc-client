export interface UserSchema {
  email: string;
  password: string;
  phoneNumber: string;
  authNumber: number;
  gender: string;
  year: string;
  month: string;
  day: string;
  isEmailDuplicated: boolean;
  isPhoneDuplicated: boolean;
  isAuthed: boolean;
}

export interface TermSchema {
  [index: string]: boolean;
  personalAgree: boolean;
  acceptAgree: boolean;
}

export interface MoreSchema {
  gender: string;
  year: string;
  month: string;
  day: string;
  mbti: string;
  //   height: number;
  //   weight: number;
  //   drink: number;
}

export type ExampleWord = {
  id: number;
  name: string;
};

export type PhoneAuthType = {
  phoneNumber: string;
  authNumber: number;
  isPhoneDuplicated: boolean;
  isAuthed: boolean;
};
