declare namespace req {
  export type CreateChatRoom = {
    boardId: number;
    body: {
      name: string;
      participants: number[];
    };
  };
}

declare namespace res {
  export type UserInfoDto = {
    id: number;
    nickname: string;
    birth: string;
    profileImage: string;
    university: string;
    studentId: string;
    physicalInfo: {
      height: string;
      weight: string;
    };
    otherInfo: {
      gender: res.GENDERType;
      mbti: res.MBTIType;
      amountOfAlchol: number;
    };
  };

  export type CreateChatRoom = {
    status: string;
    message: string;
    data: {
      id: string;
      name: string;
      participants: UserInfoDto[];
    };
  };
}
