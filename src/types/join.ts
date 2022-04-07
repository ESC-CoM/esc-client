export interface UserSchema {
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: number;
  authNumber: number;
  gender: string;
  year: string;
  month: string;
  day: string;
}

export interface TermSchema {
  [index: string]: boolean;
  personalAgree: boolean;
  acceptAgree: boolean;
}

export interface MoreSchema {
  height: number;
  weight: number;
  mbti: string;
  drink: number;
  hobbies: string[];
}
