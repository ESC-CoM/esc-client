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
  isEmailDuplicated: boolean;
};

export type PhoneAuthType = {
  phoneNumber: string;
  authNumber: number;
  isPhoneDuplicated: boolean;
  isAuthed: boolean;
};

export type More1Type = {
  gender: string;
  year: string;
  month: string;
  day: string;
  mbti: string;
};

export type More2Type = {
  height: number;
  weight: number;
  drink: number;
};
