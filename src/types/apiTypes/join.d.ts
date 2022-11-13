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
  export type PhoneSuccess = {
    requestId: string;
    requestTime: string;
    statusCode: string;
    statusName: string;
  };
  export type MBTIType =
    | '없음'
    | 'ENFP'
    | 'ENFJ'
    | 'ENTP'
    | 'ENTJ'
    | 'ESFP'
    | 'ESFJ'
    | 'ESTP'
    | 'ESTJ'
    | 'INFP'
    | 'INFJ'
    | 'INTP'
    | 'INTJ'
    | 'ISFP'
    | 'ISFJ'
    | 'ISTP'
    | 'ISTJ';
  export type GENDERType = 'men' | 'women';

  export type ProfileImageSuccess = {
    status: string;
    message: string;
    data: string;
  };
  export type ProfileImageError = {
    message: string;
    status: number;
    errors: string[];
    code: string;
  };
  export type RegisterSuccess = {
    status: string;
    message: string;
    data: number;
  };
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
