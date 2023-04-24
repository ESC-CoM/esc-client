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
    authCode: string; // TODO: 임시로 지정, 추후에 백엔드에서 수정하면 제거할 것
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

  export type ProfileImageSuccess = res.Success<string>;
  export type RegisterSuccess = res.Success<number>;
  export type StdCardSuccess = res.Success<{ uuid: string; image: string }>;
}
