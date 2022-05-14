export interface UserSchema {
  email: string;
  password: string;
  phoneNumber: string;
  authNumber: number;
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
  height: number;
  weight: number;
  drink: number;
}

export type ExampleWord = {
  id: number;
  name: string;
};

export type EmailPassword = Pick<
  UserSchema,
  'email' | 'isEmailDuplicated' | 'password'
>;

export type PhoneAuthType = Pick<
  UserSchema,
  'phoneNumber' | 'authNumber' | 'isPhoneDuplicated' | 'isAuthed'
>;

export type More1Type = Pick<
  MoreSchema,
  'gender' | 'year' | 'month' | 'day' | 'mbti'
>;

export type More2Type = Pick<MoreSchema, 'height' | 'weight' | 'drink'>;

// export type BirthType = Pick<MoreSchema, 'year' | 'month' | 'day'>;
