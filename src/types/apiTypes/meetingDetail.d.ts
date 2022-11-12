declare namespace res {
  export type Profile = {
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
  export type ProfileFlat = {
    img: string;
    nickName: string;
    gender: string;
    birthDate: string;
    college: string;
    studentNum: string;
    height: string;
    weight: string;
    mbti: string;
    drink: number;
  };
  export type meetingDetail = {
    title: string;
    content: string;
    friends: ProfileFlat[];
  };
}
