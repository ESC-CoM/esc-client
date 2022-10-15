declare namespace req {
  export type UserInfo = {
    email: string;
    password: string;
    phone: string;
    nickname: string;
    gender: string;
    birth: string;
    isAgree: boolean;
    height: number;
    weight: number;
    mbti: string;
    amountOfAlchol: number;
    profileImage: string;
    studentIdAuthenticationKey: string; // uuid
  };
}

declare namespace res {
  export type StdCardSuccess = {
    status: string;
    message: string;
    data: { uuid: string; image: string };
  };
  export type StdCardError = {
    message: string;
    status: number;
    errors: string[];
    code: string;
  };
}
