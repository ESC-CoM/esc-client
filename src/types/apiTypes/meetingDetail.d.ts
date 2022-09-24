declare namespace res {
  export type Profile = {
    img: string;
    mannerScore?: number;
    nickName: string;
    gender: string;
    birthDate: string;
    college: string;
    department?: string;
    studentNum: string;
    height: string;
    weight: string;
    mbti: string;
    hobbies?: string[];
    drink: number;
  };
  export type meetingDetail = {
    title: string;
    content: string;
    friends: Profile[];
  };
}
