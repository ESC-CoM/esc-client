declare namespace req {
  export type UserInfoDetail = number;
}

declare namespace res {
  export type UserInfoDetailSuccess = {
    id: number;
    email: string;
    userInfo: {
      nickname: string;
      phone: string;
      birth: string;
      profileImage: string;
      schoolInfo: {
        university: string;
        major: string;
        studentId: string;
      };
      physicalInfo: {
        height: number;
        weight: number;
      };
      otherInfo: {
        gender: 'men' | 'women';
        mbti: string;
        amountOfAlchol: number;
      };
      mannerScore: number;
      studentIdAuthenticationKey: string;
      agree: boolean;
    };
  };
}
