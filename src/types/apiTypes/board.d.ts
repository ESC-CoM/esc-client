type Gender = 'men' | 'women';

declare namespace req {
  export type BoardListRegisteredByMe = {
    page?: number;
    size?: number;
    sort?: string[];
    headCount?: number;
    gender?: Gender;
    university?: string;
    meetingStatus?: 'PENDING' | 'ALLOWED' | 'REJECTED';
  };
}

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
      participants: string[];
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
