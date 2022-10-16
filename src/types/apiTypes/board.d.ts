type Gender = 'men' | 'women';

declare namespace res {
  export type BoardListRegisteredByMe = {
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    size: number;
    content: {
      id: number;
      title: string;
      content: string;
      headCount: number;
      gender: Gender;
      meetingStatus: 'PENDING' | 'ALLOWED' | 'REJECTED';
      owner: {
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
            gender: Gender;
            mbti: string;
            amountOfAlchol: number;
          };
          mannerScore: number;
          studentIdAuthenticationKey: string;
          agree: boolean;
        };
      };
      createdAt: string;
      university: string;
    }[];
    pageable: {
      offset: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      unpaged: boolean;
    };
    first: boolean;
    last: boolean;
    numberOfElements: number;
    empty: boolean;
  };
}
